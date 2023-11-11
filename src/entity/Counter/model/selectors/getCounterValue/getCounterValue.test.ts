import { type DeepPartial } from '@reduxjs/toolkit';
import { type IStateScheme } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  test('', () => {
    const state: DeepPartial<IStateScheme> = {
      counter: { value: 10 }
    };
    expect(getCounterValue(state as IStateScheme)).toEqual(10);
  });
});