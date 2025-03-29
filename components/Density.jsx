'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Density = ({ result, totalCharacters }) => {
  const [showMore, setShowMore] = useState(false);

  const sortedResults = Object.entries(result).sort((a, b) => b[1] - a[1]);

  const displayResults = showMore ? sortedResults : sortedResults.slice(0, 5);
  return (
    <div
      className={`py-4 flex gap-4 flex-col overflow-hidden transition-all duration-500 ease-in-out ${
        showMore ? 'max-h-[1000px]' : 'max-h-[300px]'
      }`}
    >
      {displayResults.map(([character, value]) => {
        const percentage =
          totalCharacters > 0 ? (value / totalCharacters) * 100 : 0;

        return (
          <div
            key={character}
            className="grid grid-cols-[20px_1fr_100px] gap-4 items-center "
          >
            <span>{character} </span>
            <div className={'w-full  bg-gray-100 h-4 rounded-full relative'}>
              <div
                style={{ width: `${percentage}%` }}
                className={`absolute top-0 left-0 h-4 rounded-full  bg-[#D29EFA] z-10 `}
              ></div>
            </div>
            <span>
              {value} (<span>{`${percentage.toFixed(2)}%`}</span>)
            </span>
          </div>
        );
      })}

      {sortedResults.length > 5 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 my-4"
        >
          {showMore ? 'See Less' : 'See More'}
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`transition-all duration-300 ${
              showMore ? 'rotate-180' : ''
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default Density;
