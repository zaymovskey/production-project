import { type DeepPartial } from '@reduxjs/toolkit';
import { type IStateScheme } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<IStateScheme> = {
      counter: { value: 10 }
    };
    expect(getCounter(state as IStateScheme)).toEqual({ value: 10 });
  });
});
