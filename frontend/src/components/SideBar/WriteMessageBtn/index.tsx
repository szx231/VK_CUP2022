import { useStore } from 'effector-react';
import { $theme } from '../../../store/Theme';
import { Button } from './styled';

export const WriteMessageBtn = () => {
  const currentTheme = useStore($theme);
  const text = 'Написать письмо';

  return <Button theme={currentTheme}>{text}</Button>;
};
