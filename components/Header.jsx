'use client'
import Image from 'next/image';
import ToggleButton from './ToggleButton';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="max-w-[1200px] mx-auto p-8 px-4 w-full flex justify-between items-center gap-4">
      {theme == 'dark' ? (
        <Image
          src="./images/logo-dark-theme.svg"
          alt="Character Count logo"
          width="240"
          height="240"
        />
      ) : (
        <Image
          src="./images/logo-light-theme.svg"
          alt="Character Count logo"
          width="240"
          height="240"
        />
      )}
      <ToggleButton />
    </header>
  );
};

export default Header;
