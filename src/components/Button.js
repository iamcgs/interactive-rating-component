// import React, { useState } from 'react';

function Button({ ratingNumber, setSelectedRating }) {
  return (
    <>
      <button
        key={ratingNumber}
        value={ratingNumber}
        onClick={() => setSelectedRating(ratingNumber)}
        className="bg-darkBlueCardBg text-mediumGreyRatingBg pb-1 h-10 w-10 rounded-full hover:bg-orangeBtn focus:bg-mediumGreyRatingBg focus:text-whiteClr hover:text-whiteClr transition-all duration-150 "
      >
        {ratingNumber}
      </button>
    </>
  );
}

export default Button;
