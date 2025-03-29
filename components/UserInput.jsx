'use client';
const UserInput = ({
  text,
  setText,
  isExcludeSpaces,
  setExcludeSpaces,
  isCharacterLimit,
  setCharacterLimit,
  characterLength,
  setCharacterLength,
}) => {
  const handleChange = (e) => {
    let newText = e.target.value;
    if (isCharacterLimit && newText.length > characterLength) {
      newText = newText.substring(0, characterLength);
    }
    setText(newText);
  };
  return (
    <div className="p-4 relative">
      <textarea
        type="text"
        placeholder="Start typing here...(or paste your text)"
        value={text}
        onChange={handleChange}
        className={`border border-gray-300 text-xl dark:bg-gray-100 dark:border-purple  rounded-xl w-full p-6 outline-none bg-[#F2F2F7] mt-2  h-[200px] mb-8 ${
          (text.length == characterLength &&
          text &&
          isCharacterLimit) ? 
          '!border-red shadow-3xl focus:border-red' :'focus:shadow-2xl'
        } `}
      />
      {(text.length == characterLength && text && isCharacterLimit) && (
        <p className="text-red-500 absolute bottom-12 flex items-center gap-2 text-sm">
          <img
            src="/images/icon-info.svg"
            alt=""
          />
          Limit reached! Your text exceeds {characterLength} characters.
        </p>
      )}
      <div className="flex gap-4 flex-col md:flex-row md:items-center inputs ">
        <div>
          <input
            type="checkbox"
            id="exclude_space"
            checked={isExcludeSpaces}
            onChange={(e) => setExcludeSpaces(e.target.checked)}
          />
          <label htmlFor="exclude_space">Exclude Spaces</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="character_limit"
            checked={isCharacterLimit}
            onChange={(e) => {
              setCharacterLength(0);
              setCharacterLimit(e.target.checked);
            }}
          />
          <label
            htmlFor="character_limit"
            className="pl-4"
          >
            Set Character Limit
          </label>
          <input
            type="number"
            value={characterLength}
            onChange={(e) => {
              if (e.target.value >= 0) {
                {
                  setText((prev) => prev.substring(0, Number(e.target.value)));
                  setCharacterLength(Number(e.target.value));
                }
              }
            }}
            className={`w-14 p-1 ml-4 h-6 text-center  rounded-md border-1 ${
              isCharacterLimit ? 'visible' : 'hidden'
            }`}
            min={0}
          />
        </div>
        <p className="md:text-right md:ml-auto">
          Approx. reading time: {text ? '< 1 minutes' : '0 minutes'}
        </p>
      </div>
    </div>
  );
};

export default UserInput;
