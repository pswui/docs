import { useReducer } from "react";

function reduce<T>(state: T, action: (state: T) => void) {
  const mutableState: T = { ...state };
  action(mutableState);
  return mutableState;
}

export default function useMutable<T>(initialData: T) {
  const [state, dispatch] = useReducer(reduce<T>, initialData);
  return [state, dispatch] as const;
}
