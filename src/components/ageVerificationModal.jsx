import React from 'react';
import Cookies from 'js-cookie';

const AgeVerificationModal = () => {
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
    <div className='fixed flex justify-center items-center top-0 left-0 z-50 bg-white bg-opacity-70 w-screen h-screen'>
      <div className='m-6 w-full mx-auto max-w-screen-sm sm:top-14 bg-white shadow-xl rounded-md border-slate-400 p-8 text-center'>
        <h1 className='text-lg pb-6 font-bold'>ELMÚLT MÁR 18 ÉVES?</h1>
        <p className='pb-8'>
          A honlap megtekintéséhez legalább 18 évesnek kell lennie.
        </p>

        <div className="flex justify-center items-center w-full">
          <button
            className="button h-9"
            onClick={() => handleSubmit()}
          >
            Igen, belépek
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
