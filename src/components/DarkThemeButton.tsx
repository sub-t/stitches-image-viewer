import React from 'react';
import { Button } from '@/components/Button';
import { darkTheme } from 'stitches.config';

export const DarkThemeButton = () => {
  const [theme, setTheme] = React.useState('theme-default');

  React.useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Button
      css={{ position: 'fixed', zIndex: 999, right: '$3', top: '$3' }}
      onClick={() =>
        setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')
      }
    >
      Toggle theme
    </Button>
  );
};
