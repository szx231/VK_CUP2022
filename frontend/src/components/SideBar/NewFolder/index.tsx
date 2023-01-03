import { useStore } from 'effector-react';
import { $theme } from '../../../store/Theme';
import { Wrapp, Text } from './styled';
import { ReactComponent as Plus } from '../../../assets/Shape.svg';

export const NewFolder = () => {
  const text = 'Новая папка';
  const currentTheme = useStore($theme);
  const color = `var(--newFolder-color)`;

  return (
    <Wrapp theme={currentTheme}>
      <Plus fill={color} />
      <Text>{text}</Text>
    </Wrapp>
  );
};
