export type StateType = string | number | object | Array<any>;
export type Key = string;

export type SetStateFn<T> = (state: T) => T;

export type StateRequirements<U> = Array<U, SetStateFn<U>>;

declare function useLocalStorage(
  state: StateType,
  key: Key
): StateRequirements<StateType>;
