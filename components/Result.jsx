import React from 'react';
import Density from './Density';

const Result = ({ result, isExcludeSpaces }) => {
  return (
    <section className='text-black '>
      <h3 className="sr-only">results</h3>
      <div className="flex flex-1 md:items-center p-2 results gap-8 flex-col md:flex-row ">
        <div className="p-8 flex-1 bg-purple rounded-xl shadow-card bg-[url('/images/pattern-character-count.svg')] bg-no-repeat bg-right  totalCharacters">
          <span className="text-5xl font-semibold">
            {`${result.totalCharacters}`.padStart(2, '0')}
          </span>
          <span className="mt-2">
            Total Characters {isExcludeSpaces && '(no space)'}{' '}
          </span>
        </div>
        <div className="p-8 flex-1 bg-yellow rounded-xl shadow-card  wordCount bg-[url('/images/pattern-word-count.svg')] bg-no-repeat bg-right">
          <span className="text-5xl font-semibold">
            {`${result.wordCount}`.padStart(2, '0')}
          </span>
          <span className="mt-2">Word Count</span>
        </div>
        <div className="p-8 flex-1 bg-red rounded-xl shadow-card bg-[url('/images/pattern-sentence-count.svg')] bg-no-repeat bg-right  sentenceCount">
          <span className="text-5xl font-semibold">
            {`${result.sentenceCount}`.padStart(2, '0')}
          </span>
          <span className="mt-2"> Sentence Count</span>
        </div>
      </div>
      <div className='dark:text-gray-300 '>
      <h2 className="text-2xl font-semibold mt-4 ">Letter Density</h2>
      {(result.characters && Object.keys(result.characters).length === 0) ? (
        <p className='pt-4 pb-8'>No characters found. Start typing to see letter density</p>
      ) : (
        <Density
          result={result.characters}
          totalCharacters={result.excludingSpacesLength}
          
        />
      )}
      </div>
     
    </section>
  );
};

export default Result;
