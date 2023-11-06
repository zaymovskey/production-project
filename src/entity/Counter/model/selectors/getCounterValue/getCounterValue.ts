import { createSelector } from '@reduxjs/toolkit';
import { type ICounterScheme } from 'entity/Counter';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: ICounterScheme) => counter.value
);
