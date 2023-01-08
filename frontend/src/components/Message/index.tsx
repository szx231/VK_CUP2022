import { useStore, useState } from 'effector-react';
import { useEffect } from 'react';
import { ReactComponent as ImportantImage } from '../../assets/important.svg';
import { $messages, $error, fetchMessagesFx } from '../../store/FetchData';
import { ReactComponent as RegestrationImage } from '../../assets/regestration.svg';
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
  AvatarSkeleton,
  FirstLetterNicname,
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

import { userNameFirstLetter } from '../../helpers/FirstLetterUserNickName';
import { messageCategory } from '../../helpers/MessageCategoryImage';

import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { $currentCategory } from '../../store/CurrentCategory';

const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export const Message = () => {
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

  const currentCategory = useStore($currentCategory);

  const messages = useStore($messages);
  const error = useStore($error);
  const isLoading = useStore(fetchMessagesFx.pending);

  // const [searchParams, setSearchParams] = useSearchParams({ category: currentCategory });

  // useEffect(() => {
  //   setSearchParams({ category: currentCategory });
  // }, [currentCategory]);

  const { id } = useParams();

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

  console.log(messages, '1');

  return;
  // <Wrapp>
  //   <Container>
  //     <Title>
  //       <TitleText>{messages[36].title}</TitleText>
  //       <FlagWrapper>
  //         <FlagText>{messages[41].flag}</FlagText>
  //         <FlagImage>{messageCategory(messages[41].flag)}</FlagImage>
  //       </FlagWrapper>
  //     </Title>
  //     <Card>
  //       <Person>
  //         <Dot messageIsRead={false} />
  //         {messages[36].author.avatar ? (
  //           <Avatar image={messages[36].author.avatar} />
  //         ) : (
  //           <AvatarSkeleton>
  //             <FirstLetterNicname>{userNameFirstLetter(messages[36].author.name)}</FirstLetterNicname>
  //           </AvatarSkeleton>
  //         )}
  //         <AddresseesInfoWrapp>
  //           <TextContainer>
  //             <Name>{`${messages[36].author.name} ${messages[36].author.surname}`}</Name>
  //             <MessageDate>{messageSentToday(messages[36].date)}</MessageDate>
  //             <Important>{messages[36].important && <ImportantImage />}</Important>
  //           </TextContainer>
  //           <Addressees>{adressees(messages[36].to)}</Addressees>
  //         </AddresseesInfoWrapp>
  //       </Person>
  //       {messages[36].doc && (
  //         <>
  //           <AttachedPictures>{getFiles(messages[36].doc)}</AttachedPictures>
  //           <AttachedFiles>
  //             <AttachedFilesCount>{filesCount(messages[36].doc)}</AttachedFilesCount>
  //             <AttachedFilesDownload>Скачать</AttachedFilesDownload>
  //             {/* <AttachedFilesDownloadSize>{filesSize}</AttachedFilesDownloadSize> */}
  //           </AttachedFiles>
  //         </>
  //       )}
  //       <MessageDescription>{messages[36].text}</MessageDescription>
  //     </Card>
  //   </Container>
  // </Wrapp>
};
