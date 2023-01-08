import { createEvent, createStore } from 'effector';

export const $currentCategory = createStore('Входящие');
export const currentCategoryChange = createEvent<string>();
$currentCategory.on(currentCategoryChange, (_, el: string) => el);

export const $currentCategoryIndex = createStore(0);
export const currentCategoryIndexChange = createEvent<number>();
$currentCategoryIndex.on(currentCategoryIndexChange, (_, index: number) => index);
