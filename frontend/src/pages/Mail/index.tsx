import styles from './Mail.module.scss';
import { Layout } from '../../components/Layout/Layout';
import { Container } from '../../components/Container';
import { useEffect } from 'react';
import { Messages } from '../../components/Messages';
import { Message } from '../../components/Message';

export const Mail = () => {
  return <Layout children={<Message />} />;
};
