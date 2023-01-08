import { Button, Arrow, Text } from './styled';

export const BtnBack = () => {
  const buttonText = 'Вернуться';

  return (
    <Button>
      <Arrow />
      <Text>{buttonText}</Text>
    </Button>
  );
};
