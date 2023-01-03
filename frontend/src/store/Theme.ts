import { createEvent, createStore } from 'effector';

export const $theme = createStore('светлая');
export const themeChange = createEvent<string>();
$theme.on(themeChange, (el) => (el === 'светлая' ? 'тёмная' : 'светлая'));
