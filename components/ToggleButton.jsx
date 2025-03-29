'use client';

import { useTheme } from 'next-themes';

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 bg-gray-200 dark:bg-[#2b2b37] rounded-md"
    >
     <img src={`/images/icon-${theme == 'dark' ? 'sun' : 'moon'}.svg`} /> 
    </button>
  );
};

export default ToggleButton;
