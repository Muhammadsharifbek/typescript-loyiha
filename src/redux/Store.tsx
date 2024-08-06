import { createStore } from "redux";

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
export default store;
