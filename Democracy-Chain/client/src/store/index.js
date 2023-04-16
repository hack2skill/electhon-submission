import { createGlobalState } from "react-hooks-global-state";
const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  currentUser: null,
  contract: null,
});

export { getGlobalState, useGlobalState, setGlobalState };
