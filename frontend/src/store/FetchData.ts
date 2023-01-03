import axios from 'axios';
import { createEffect, createStore } from 'effector';

interface IMessages {
  id: number;
  name: string;
  email: string;
}

export const $messages = createStore<IMessages[]>([]);
export const $error = createStore<string>('');

export const fetchMessages = createEffect(() => axios.get<IMessages[]>(`http://localhost:5000/api/todos/1`));

$messages.on(fetchMessages.doneData, (_, response) => response.data);

$error.on(fetchMessages.fail, (_, { error }) => error.message).reset(fetchMessages);
