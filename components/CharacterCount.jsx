'use client';
import Result from './Result';
import UserInput from './UserInput';
import useCharacterCount from '@/hooks/useCharacterCount';

const CharacterCount = () => {
  const {
    text,
    setText,
    isExcludeSpaces,
    setIsExcludeSpaces,
    result,
    charaterLimit,
    setCharacterLimit,
    characterLength,
    setCharacterLength,
  } = useCharacterCount({
    userText: '',
    excludeSpaces: false,
    isCharacterLimit: false,
    charLength: 0,
  });

  return (
    <div>
      <UserInput
        text={text}
        setText={setText}
        isExcludeSpaces={isExcludeSpaces}
        setExcludeSpaces={setIsExcludeSpaces}
        isCharacterLimit={charaterLimit}
        setCharacterLimit={setCharacterLimit}
        characterLength={characterLength}
        setCharacterLength={setCharacterLength}
      />
      <Result result={result} isExcludeSpaces={isExcludeSpaces} />
      
    </div>
  );
};

export default CharacterCount;
