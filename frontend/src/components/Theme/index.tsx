import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { Wrapp, Text, Image } from './styled';
import { ReactComponent as ThemeLight } from '../../assets/themeLight.svg';
import { ReactComponent as ThemeDark } from '../../assets/themeDark.svg';
import { $theme, themeChange } from '../../store/Theme';

export const Theme = () => {
  const currentTheme = useStore($theme);
  const themeText = `Тема: ${currentTheme}`;

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <Wrapp onClick={themeChange}>
      <Image>{currentTheme === 'светлая' ? <ThemeLight /> : <ThemeDark />}</Image>
      <Text theme>{themeText}</Text>
    </Wrapp>
  );
};
