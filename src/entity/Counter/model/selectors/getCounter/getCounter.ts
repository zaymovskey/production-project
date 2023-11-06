import { type ICounterScheme } from 'entity/Counter';
import { type IStateScheme } from 'app/providers/StoreProvider';

export const getCounter = (state: IStateScheme): ICounterScheme => state.counter;
