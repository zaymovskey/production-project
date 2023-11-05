import { type CounterScheme } from 'entity/Counter';
import { type StateScheme } from 'app/providers/StoreProvider';

export const getCounter = (state: StateScheme): CounterScheme => state.counter;
