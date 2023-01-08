import axios from 'axios';
import { createEffect, createStore } from 'effector';
import { instance } from './api';

interface IMessages {
  [x: string]: any;
  id: number;
  name: string;
  email: string;
}

export const $messages = createStore<IMessages[]>([]);
export const $error = createStore<string>('');

export const fetchMessagesFx = createEffect(async (category: string) => {
  const resp = await axios.post('http://localhost:5000/api/todos', { category1: category });
  return resp.data;
});

$messages.on(fetchMessagesFx.doneData, (_, response) => response);

$error.on(fetchMessagesFx.fail, (_, { error }) => error.message).reset(fetchMessagesFx);
