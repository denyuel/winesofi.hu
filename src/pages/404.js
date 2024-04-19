import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <div>
        <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
        <div className='container mx-auto px-4'>
          <h1 className='title text-4xl my-8'>Nem található az oldal, amit keresel.</h1>
          <div className='h-px w-10 opacity-20 bg-button_black mr-auto my-4'></div>
          <div className="prose max-w-none bold-text my-8">
            Kérlek, ellenőrizd a beírt URL-t, vagy térj vissza a <Link to="/">főoldalra</Link>.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Not found</title>
