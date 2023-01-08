import { useEffect, useState } from 'react';
import { Wrapp, Table, Tbody } from './styled';
import { MessageCard } from './MessageCard';
import { $messages, fetchMessagesFx } from '../../store/FetchData';
import { useStore } from 'effector-react';
import { $currentCategory } from '../../store/CurrentCategory';

import { useSearchParams, Link } from 'react-router-dom';

export const Messages = ({ children }) => {
  const state = useStore($messages);
  const currentCategory = useStore($currentCategory);

  useEffect(() => {
    fetchMessagesFx(currentCategory);
  }, []);

  return (
    <Wrapp>
      <Table>
        <Tbody>
          {state.map((el, index) => {
            return (
              <MessageCard
                image={el.author.avatar && el.author.avatar}
                name={`${el.author.name} ${el.author.surname}`}
                title={el.title}
                description={el.text}
                read={el.read}
                category={el.flag && el.flag}
                ind={index}
                // attach={undefined}
                serverMessageDate={el.date}
                attach={el.doc}
                messageIsImportant={el.important}
                messageIsBookMark={el.bookmark}
                element={el}
              />
            );
          })}
        </Tbody>
      </Table>
    </Wrapp>
  );
};
