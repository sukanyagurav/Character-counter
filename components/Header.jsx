'use client';
import Image from 'next/image';
import ToggleButton from './ToggleButton';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="max-w-[1200px] mx-auto p-8 px-4 w-full flex justify-between items-center gap-4">
      <Image
        src={`/images/logo-${theme === 'dark' ? 'dark' : 'light'}-theme.svg`}
        alt="Character Count logo"
        width="240"
        height="240"
        priority
        unoptimized
      />
      <ToggleButton />
    </header>
  );
};

export default Header;
