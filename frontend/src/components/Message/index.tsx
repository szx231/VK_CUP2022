import { useStore, useState } from 'effector-react';
import { useEffect } from 'react';
import { ReactComponent as ImportantImage } from '../../assets/important.svg';
import { $messages, $error, fetchMessages } from '../../store/FetchData';
import {
  Wrapp,
  Container,
  Title,
  TitleText,
  FlagWrapper,
  FlagText,
  FlagImage,
  Card,
  Person,
  DateAndNameWrapp,
  AddresseesInfoWrapp,
  Dot,
  Avatar,
  TextContainer,
  Name,
  MessageDate,
  Important,
  Addressees,
  AttachedPictures,
  Picture,
  AttachedFiles,
  AttachedFilesCount,
  AttachedFilesDownload,
  AttachedFilesDownloadSize,
  MessageDescription,
} from './styled';

const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export const Message = ({
  titleText,
  flagText,
  isRead,
  avatar,
  name,
  // MessageDate,
  important,
  addressees,
  messageDescription,
  attachedFilesCount,
  pictures,
  filesSize,
}) => {
  const messageSentToday = (date) => {
    const currentDay = Date.now();
    const messageDate = Date.parse(date);
    const millisecondInDay = 24 * 60 * 60 * 1000;
    if (currentDay - messageDate > millisecondInDay) {
      const messageSentDay = new Date(messageDate).getDate();
      const messageSentMonth = new Date(messageDate).getMonth();
      const messageSentYear = new Date(messageDate).getFullYear();
      return `${messageSentDay} ${month[messageSentMonth]} ${messageSentYear}`;
    }
    const messageSentHours = new Date(date).getHours();
    const messageSentMinutes = new Date(date).getMinutes();
    return `Сегодня, ${messageSentHours}: ${messageSentMinutes}`;
  };

  const messages = useStore($messages);
  const error = useStore($error);
  const isLoading = useStore(fetchMessages.pending);

  useEffect(() => {
    fetchMessages();
  }, []);

  const adressees = (data) => {
    const startString = 'Кому: Вы, ';
    const countUserShow = 3;
    const more = `ещё ${data.length - 3} получателей`;
    if (data.length > countUserShow) {
      const users = data
        .filter((_, index) => index < countUserShow)
        .map((el) => {
          return ` ${el.name} ${el.surname}`;
        });
      return `${startString} ${users} ${more}`;
    }
    const users = data.map((el) => ` ${el.name} ${el.surname}`);
    return startString + users;
  };

  const getFiles = (data) => {
    return Object.values(data).map((el) => {
      return <Picture image={el} />;
    });
  };

  const filesCount = (data) => {
    const dataLength = Object.entries(data).length;
    if (dataLength === 1) return `${dataLength} файл`;
    if (dataLength < 5) return `${dataLength} файла`;
    return `${dataLength} файлов`;
  };

  return (
    <Wrapp>
      <Container>
        <Title>
          <TitleText>{messages[36].title}</TitleText>
          <FlagWrapper>
            <FlagText>{flagText}</FlagText>
            <FlagImage />
          </FlagWrapper>
        </Title>
        <Card>
          <Person>
            <Dot messageIsRead={false} />
            <Avatar image={messages[36].author.avatar} />
            <AddresseesInfoWrapp>
              <TextContainer>
                <Name>{`${messages[36].author.name} ${messages[36].author.surname}`}</Name>
                <MessageDate>{messageSentToday(messages[36].date)}</MessageDate>
                <Important>{messages[36].important && <ImportantImage />}</Important>
              </TextContainer>
              <Addressees>{adressees(messages[36].to)}</Addressees>
            </AddresseesInfoWrapp>
          </Person>
          {messages[36].doc && (
            <>
              <AttachedPictures>{getFiles(messages[36].doc)}</AttachedPictures>
              <AttachedFiles>
                <AttachedFilesCount>{filesCount(messages[36].doc)}</AttachedFilesCount>
                <AttachedFilesDownload>Скачать</AttachedFilesDownload>
                {/* <AttachedFilesDownloadSize>{filesSize}</AttachedFilesDownloadSize> */}
              </AttachedFiles>
            </>
          )}
          <MessageDescription>{messages[36].text}</MessageDescription>
        </Card>
      </Container>
    </Wrapp>
  );
};
