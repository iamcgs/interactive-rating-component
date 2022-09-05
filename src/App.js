import starIcon from './images/icon-star.svg';
import Button from './components/Button';
import ThankYou from './components/ThankYou';
import { useState } from 'react';

function App() {
  const [onSubmit, setOnSubmit] = useState(false);
  const [selectedRating, setSelectedRating] = useState('');

  const ratingArray = [1, 2, 3, 4, 5];

  const handleSubmit = () => {
    setOnSubmit(true);
  };

  return (
    <>
      {!onSubmit && (
        <div className="card-container flex flex-col justify-center gap-4 items-start bg-darkBlueCarBg p-6 rounded-xl w-80 drop-shadow-1xl">
          <div className="bg-darkBlueCardBg px-3 pt-2 pb-3 rounded-full">
            <img src={starIcon} alt="" />
          </div>
          <h2 className="font-Overpass text-whiteClr text-2xl font-bold ">
            How did we do?
          </h2>
          <p className="text-mediumGreyRatingBg text-sm ">
            Please let us know how we did it with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex items-center justify-between w-full my-2">
            {ratingArray.map((rating) => {
              return (
                <Button
                  ratingNumber={rating}
                  setSelectedRating={setSelectedRating}
                  key={rating}
                />
              );
            })}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-whiteClr font-bold bg-orangeBtn p-2 rounded-3xl uppercase tracking-widest w-full hover:text-orangeBtn hover:bg-whiteClr mb-1 transition-all duration-150"
          >
            Submit
          </button>
        </div>
      )}
      {onSubmit && (
        <div className="card-container flex flex-col justify-center gap-4 items-start bg-darkBlueCarBg p-6 rounded-xl w-80 drop-shadow-1xl">
          <ThankYou selectedRating={selectedRating} />
        </div>
      )}
    </>
  );
}

export default App;
