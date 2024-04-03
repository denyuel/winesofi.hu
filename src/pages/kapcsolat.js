import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function Contact() {
  return (
    <Layout>
      <div>
        <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-2 px-4 md:px-20 xl:px-72 py-12'>
            <div className='flex flex-col items-center md:items-start gap-8 w-11/12 md:w-8/12'>
              <h1 className='text-3xl md:text-4xl title'>kapcsolat</h1>
              <div class="border-t-2 border-gray w-10"></div>
              <p className='bold-text text-center md:text-left'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies.
              </p>
            </div>
            <div className='flex justify-center md:justify-end w-11/12 md:w-4/12 -mb-20'>
              <div className='w-64 h-64 overflow-hidden z-10 rounded-full aspect-square'>
                <StaticImage className='rounded-full' src='../images/contact.jpg' alt=''/>
              </div>
            </div>
          </div>
          <div className='bg-gray_light flex'>
            <form id="contactForm" className="w-full">
              <div className="flex flex-col lg:flex-row justify-center gap-8 w-full py-12 px-4 lg:px-0">
                <div className="flex flex-col gap-1 lg:gap-0 justify-between">
                  <label className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase" for="name">név</label>
                  <input className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
                    type="text" id="name" name="name" required />
                  <label className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase" for="email">email</label>
                  <input className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
                    type="email" id="email" name="email" required />
                  <label className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase" for="tel">telefon</label>
                  <input className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
                    type="tel" id="tel" name="tel" required placeholder='+36'/>
                </div>
                <div className="flex flex-col gap-form">
                  <label className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase" for="message">üzenet</label>
                  <textarea
                    className="w-full md:w-textarea h-textarea basic-text border-solid border-gray border rounded-3xl resize-none p-4"
                    name="message" id="message" cols="30" rows="10" required placeholder='üzenet'></textarea>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-22 bg-orange">
                <button
                  className="button h-9 submit"
                  type="submit">üzenet küldése</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  </Layout>
  )
};

export const Head = () => <title>Wine&Sofi &mdash; terroir by Laposa Zsófia</title>
