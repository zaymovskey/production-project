import { createSelector } from '@reduxjs/toolkit';
import { type CounterScheme } from 'sfasdf/Counter';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterScheme) => counter.value
);
