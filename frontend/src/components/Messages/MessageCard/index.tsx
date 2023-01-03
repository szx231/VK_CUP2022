import { useEffect, useState } from 'react';
import { ReactComponent as ImportantImage } from '../../../assets/important.svg';
import { ReactComponent as BookMarkImage } from '../../../assets/bookmark.svg';
import { ReactComponent as AttachImage } from '../../../assets/attach.svg';
import { ReactComponent as CheckArrow } from '../../../assets/checkBoxArrow.svg';
import { messageCategory } from '../../../helpers/MessageCategoryImage';

import {
  Tr,
  DotMessageStatus,
  Dot,
  ImportantWrapp,
  BookmarkWrapp,
  BorderWrapper,
  ImageWrapp,
  Image,
  Name,
  Text,
  Title,
  Description,
  Category,
  Attach,
  MessageDate,
  AvatarSkeleton,
  FirstLetterNicname,
} from './styled';

const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export const MessageCard = ({
  image,
  name,
  title,
  description,
  category,
  attach,
  serverMessageDate,
  read,
  messageIsImportant,
  messageIsBookMark,
  ind,
  element,
}) => {
  const [markMessages, setMarkMessages] = useState([]);

  const messageSentToday = (date) => {
    const currentDay = Date.now();
    const messageDate = Date.parse(date);
    const millisecondInDay = 24 * 60 * 60 * 1000;
    if (currentDay - messageDate > millisecondInDay) {
      const messageSentDay = new Date(messageDate).getDate();
      const messageSentMonth = new Date(messageDate).getMonth();
      return `${messageSentDay} ${month[messageSentMonth]}`;
    }
    const messageSentHours = new Date(date).getHours();
    const messageSentMinutes = new Date(date).getMinutes();
    return `${messageSentHours}: ${messageSentMinutes}`;
  };

  const userNameFirstLetter = (name) => {
    return name[0].toLowerCase();
  };

  const messageIsMark = (el, ind) => {
    el.read = false;
    setMarkMessages((prev) => {
      if (prev.includes(ind)) {
        return prev.filter((el) => el !== ind);
      }
      return [...prev, ind];
    });
  };

  return (
    <Tr messageIsRead={read} isChecked={markMessages.includes(ind)}>
      <DotMessageStatus>
        <Dot messageIsRead={read} />
      </DotMessageStatus>
      {image ? (
        <ImageWrapp>
          <Image onClick={() => messageIsMark(element, ind)} isChecked={markMessages.includes(ind)} image={image} />
        </ImageWrapp>
      ) : (
        <AvatarSkeleton>
          <FirstLetterNicname
            onClick={() => messageIsMark(element, ind)}
            isChecked={markMessages.includes(ind)}
            image={image}
          >
            {userNameFirstLetter(name)}
          </FirstLetterNicname>
        </AvatarSkeleton>
      )}
      <Name messageIsRead={read}>{name}</Name>
      <ImportantWrapp>{messageIsImportant && <ImportantImage />}</ImportantWrapp>
      <BookmarkWrapp>{messageIsBookMark && <BookMarkImage />}</BookmarkWrapp>
      <Text>
        <Title messageIsRead={read}>{title}</Title>
        <Description>{description}</Description>
      </Text>
      <Category>{messageCategory(category)}</Category>
      <Attach>{attach && <AttachImage />}</Attach>
      <MessageDate>{messageSentToday(serverMessageDate)}</MessageDate>
    </Tr>
  );
};
