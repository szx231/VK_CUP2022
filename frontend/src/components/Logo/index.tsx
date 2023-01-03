import { useStore } from 'effector-react';
import { ReactComponent as LogoImg } from '../../assets/logoImage.svg';
import { ReactComponent as LogoTextDark } from '../../assets/logoTextDark.svg';
import { ReactComponent as LogoTextLight } from '../../assets/logoTextLight.svg';
import { $theme } from '../../store/Theme';
import { Wrapp } from './styled';

export const Logo = () => {
  const currentTheme = useStore($theme);

  return (
    <Wrapp>
      <LogoImg />
      {currentTheme === 'светлая' ? <LogoTextLight /> : <LogoTextDark />}
    </Wrapp>
  );
};
