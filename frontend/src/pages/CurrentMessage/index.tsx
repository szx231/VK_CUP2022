import { Layout } from '../../components/Layout/Layout';
import { Message } from '../../components/Message';

const CurrentMessage = () => {
  return <Layout children={<Message />} />;
};

export default CurrentMessage;
