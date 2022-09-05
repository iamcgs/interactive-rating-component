import React from 'react';
import thankYouImg from '../images/illustration-thank-you.svg';

function ThankYou({ selectedRating }) {
  return (
    <>
      <div className="mx-auto py-3">
        <img src={thankYouImg} alt="" />
      </div>
      <span className="mx-auto text-sm bg-darkBlueCardBg px-4 pb-2 pt-1 rounded-full text-orangeBtn font-semibold tracking-wide">
        You selected {selectedRating} out of 5
      </span>
      <h2 className="mx-auto text-2xl font-semibold text-whiteClr">
        Thank You!
      </h2>
      <p className="mx-auto text-lightGreyText text-center text-xs">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </>
  );
}

export default ThankYou;
