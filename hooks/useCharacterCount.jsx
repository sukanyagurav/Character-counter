import React, { useEffect, useState } from 'react';

const useCharacterCount = ({
  userText,
  excludeSpaces,
  charLength,
  isCharacterLimit,
}) => {
  const [text, setText] = useState(userText);
  const [isExcludeSpaces, setIsExcludeSpaces] = useState(excludeSpaces);
  const [charaterLimit, setCharacterLimit] = useState(isCharacterLimit);
  const [characterLength, setCharacterLength] = useState(charLength);
  let [result, setResult] = useState({
    totalCharacters: 0,
    wordCount: 0,
    sentenceCount: 0,
    characters: {},
  });

  useEffect(() => {
    let processedText = text || '';
    let totalCharacters = isExcludeSpaces
      ? processedText.replace(/\s/g, '').length
      : processedText.length;
    let wordCount = processedText.trim()
      ? processedText.trim().split(/\s+/).length
      : 0;
    let sentenceCount = processedText
      .split(/[.!?]+/)
      .filter((sentence) => sentence.length > 0).length;
    const characters = {};
    for (let character of processedText.toUpperCase().split('')) {
      if (/[a-zA-Z0-9]/.test(character)) {
        characters[character] = (characters[character] || 0) + 1;
      }
    }
    const excludingSpacesLength = processedText.replace(/\s/g, '').length
    setResult({ totalCharacters, wordCount, sentenceCount, characters,excludingSpacesLength });
  }, [text, isExcludeSpaces, charaterLimit]);
  return {
    text,
    setText,
    isExcludeSpaces,
    setIsExcludeSpaces,
    charaterLimit,
    setCharacterLimit,
    characterLength,
    setCharacterLength,
    result,
    
  };
};

export default useCharacterCount;
