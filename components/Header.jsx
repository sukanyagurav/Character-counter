'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until theme is available

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
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 bg-gray-200 dark:bg-[#2b2b37] rounded-md"
      >
        <Image
          src={`/images/icon-${theme == 'dark' ? 'sun' : 'moon'}.svg`}
          width="22"
          height="22"
          priority
          unoptimized
        />
      </button>
    </header>
  );
};

export default Header;
