import React, { FC } from 'react';
import { Container } from '../Container';
import { Header } from '../Header';
import { Theme } from '../Theme';
import { Body } from '../Body';
import { Messages } from '../Messages/index';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Body content={children} />
        <Theme />
      </Container>
    </>
  );
};
