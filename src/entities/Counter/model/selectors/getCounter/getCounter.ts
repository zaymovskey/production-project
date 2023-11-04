import { type StateScheme } from 'app/providers/StoreProvider';
import { type CounterScheme } from 'entities/Counter';

export const getCounter = (state: StateScheme): CounterScheme => state.counter;
