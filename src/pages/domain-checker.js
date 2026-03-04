import React, { useState } from 'react';
import { Seo } from '../components/seo';
import Layout from '../components/layout';

export default function DomainChecker() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkDomain = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    const trimmed = domain.trim().toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '');

    if (!/^[a-z0-9][a-z0-9-]*(\.[a-z]{2,})+$/.test(trimmed)) {
      setError('Kérjük, adjon meg egy érvényes domain nevet (pl. pelda.hu).');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://rdap.org/domain/${trimmed}`);
      if (response.status === 404) {
        setResult({ available: true, domain: trimmed });
      } else if (response.ok) {
        setResult({ available: false, domain: trimmed });
      } else {
        setError('Unexpected response. Please try again.');
      }
    } catch {
      setError('Unable to check domain availability. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div>
        <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
        <div className='flex flex-col'>
          <div className='container mx-auto flex flex-col items-center gap-2 px-4 py-12'>
            <h1 className='text-3xl md:text-4xl title'>Domain elérhetőség ellenőrzés</h1>
            <div className="border-t-2 border-gray w-10 my-4"></div>
            <p className='bold-text text-center mb-8'>
              Ellenőrizd, hogy a kívánt domain szabad-e. Add meg a domain nevet, és megnézzük az elérhetőségét.
            </p>
            <form onSubmit={checkDomain} className='flex flex-col sm:flex-row gap-4 w-full max-w-xl'>
              <input
                className='flex-1 h-input basic-text border-solid border-gray border rounded-3xl p-4'
                type='text'
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder='pl. pelda.hu'
                required
              />
              <button
                className='button h-input whitespace-nowrap'
                type='submit'
                disabled={loading}
              >
                {loading ? 'Ellenőrzés...' : 'Ellenőrzés'}
              </button>
            </form>

            {result && (
              <div
                className={`mt-8 p-4 rounded-lg text-center text-sm font-bold ${
                  result.available
                    ? 'bg-green_light text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
                role='alert'
              >
                {result.available
                  ? `✓ A(z) "${result.domain}" domain szabad!`
                  : `✗ A(z) "${result.domain}" domain foglalt.`}
              </div>
            )}

            {error && (
              <div
                className='mt-8 p-4 rounded-lg text-center text-sm font-bold bg-yellow-100 text-yellow-800'
                role='alert'
              >
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => (
  <Seo
    title='Domain elérhetőség ellenőrzés'
    description='Ellenőrizd, hogy a kívánt domain szabad-e.'
    pathname='/domain-checker'
  />
);
