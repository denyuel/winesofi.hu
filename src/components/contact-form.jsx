import React from 'react';

const ContactForm = () => {
  return (
    <div className='bg-gray_light flex'>
      <form id="contactForm" className="w-full" action="https://submit-form.com/DXGfC3vR5" method="POST">
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full py-12 px-4 lg:px-0">
          <div className="flex flex-col gap-1 lg:gap-0 justify-between">
            <label className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase" htmlFor="name">név</label>
            <input className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
              type="text" id="name" name="name" required />
            <label className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase" htmlFor="email">email</label>
            <input className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
              type="email" id="email" name="email" required />
            <label className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase" htmlFor="tel">telefon</label>
            <input className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
              type="tel" id="tel" name="tel" required placeholder='+36' />
          </div>
          <div className="flex flex-col gap-form">
            <label className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase" htmlFor="message">üzenet</label>
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
  );
};

export default ContactForm;
