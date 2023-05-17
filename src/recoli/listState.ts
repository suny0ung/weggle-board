import { atom } from 'recoil';

export type listType = {
  id: string;
  pageId: number;
  title: string;
  content: string;
  date: string;
  clickItemId: number;
};

export type limitType = {
  limitNumber: number;
};

export type offsetType = {
  offsetNumber: number;
};

export const listState = atom<listType[]>({
  key: 'listState',
  default: [],
});

export const limit = atom<number>({
  key: 'limit',
  default: 5,
});

export const offset = atom<number>({
  key: 'offset',
  default: 0,
});
