import React, { FC } from 'react';
import { Wrapp } from './styled';
import { SideBar } from '../SideBar/index';
import { Messages } from '../Messages/index';

interface IBody {
  content: React.ReactNode;
}

export const Body: FC<IBody> = ({ content }) => {
  return (
    <Wrapp>
      <SideBar />
      {content}
    </Wrapp>
  );
};
