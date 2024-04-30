import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const ContactForm = () => {
  const FORMSPARK_FORM_ID = "DXGfC3vR5";

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({
      name,
      email,
      tel,
      url,
      message,
    });
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="bg-gray_light pt-12">
      <form id="contactForm" className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full pb-12 px-4 lg:px-0">
          <div className="flex flex-col gap-1 lg:gap-0 justify-between">
            <label
              className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase"
              htmlFor="name"
            >
              név
            </label>
            <input
              className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label
              className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase"
              htmlFor="tel"
            >
              telefon
            </label>
            <input
              className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
              type="tel"
              id="tel"
              name="tel"
              required
              placeholder="+36"
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-form">
            <div className="sr-only" aria-hidden>
              <label
                className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase"
                htmlFor="url"
              >
                Website url
              </label>
              <input
                className="w-full md:w-input h-input basic-text border-solid border-gray border rounded-3xl p-4"
                type="text"
                id="url"
                name="url"
                placeholder="https://"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <label
              className="pl-4 text-gray_strong text-xs font-light tracking-extra uppercase"
              htmlFor="message"
            >
              üzenet
            </label>
            <textarea
              className="w-full md:w-textarea h-textarea basic-text border-solid border-gray border rounded-3xl resize-none p-4"
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              placeholder="üzenet"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>

        {submitted && (
          <div className="max-w-screen-sm mx-auto px-4 mb-6">
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green_light text-center"
              role="alert"
            >
              <span className="font-bold">Az üzenetet elküdtük!</span> Hamarosan
              jelentkezünk a megadott elérhetőségeken!
            </div>
          </div>
        )}

        <div className="flex justify-center items-center w-full h-22 bg-orange">
          <button
            className="button h-9 submit"
            type="submit"
            disabled={submitting}
          >
            üzenet küldése
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
