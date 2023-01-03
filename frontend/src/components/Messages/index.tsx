import { useEffect, useState } from 'react';
import { Wrapp, Table, Tbody } from './styled';
import { MessageCard } from './MessageCard';

export const Messages = ({ children }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/todos/1')
      .then((response) => response.json())
      .then((json) => setState(json));
  }, []);

  console.log(state);

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
