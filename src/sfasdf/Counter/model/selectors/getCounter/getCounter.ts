import { type CounterScheme } from 'sfasdf/Counter';
import { type StateScheme } from 'app/providers/StoreProvider';

export const getCounter = (state: StateScheme): CounterScheme => state.counter;
