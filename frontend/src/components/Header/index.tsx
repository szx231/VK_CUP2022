import { useStore } from 'effector-react';
import { Logo } from '../Logo';
import { Head } from './styled';
import { $theme } from '../../store/Theme';
import { useEffect } from 'react';

export const Header = () => {
  const currentTheme = useStore($theme);

  useEffect(() => {
    console.log(currentTheme, 'tut');
  }, [currentTheme]);

  return (
    <Head theme={currentTheme}>
      <Logo />
    </Head>
  );
};
