import React from 'react';
import Cookies from 'js-cookie';
import { useLanguage } from "../context/LanguageContext";


const AgeVerificationModal = () => {
  const {language } = useLanguage();
  const [displayModal, setDisplayModal] = React.useState(false);

  function handleSubmit() {
      Cookies.set('ageVerification', true, { expires: 365 });
      document.body.style.overflow = 'scroll';
      setDisplayModal(false);
  }

  React.useEffect(() => {
    const ageVerification = Cookies.get('ageVerification');
    if (!ageVerification) {
      setDisplayModal(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  if (!displayModal) return null;

  return (
    <div className='fixed flex justify-center items-center top-0 left-0 z-50 bg-blue bg-opacity-60 w-screen h-screen'>
      <div className='m-6 w-full mx-auto max-w-screen-sm sm:top-14 bg-white shadow-xl rounded-md border-slate-400 p-8 text-center'>
        <div className='text-lg pb-6 font-bold'>
          {language === 'hu' ? 'ELMÚLT MÁR 18 ÉVES?' : 'ARE YOU OVER 18?'}
        </div>
        <p className='pb-8'>
          {language === 'hu'
            ? 'A honlap megtekintéséhez legalább 18 évesnek kell lennie.'
            : 'You must be at least 18 years old to view this website.'}
        </p>

        <div className="flex justify-center items-center w-full">
          <button
            className="button h-9"
            onClick={handleSubmit}
          >
            {language === 'hu' ? 'Igen, belépek' : 'Yes, enter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
