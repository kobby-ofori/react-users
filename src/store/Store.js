import { legacy_createStore as createStore } from "redux";
import usersReducer from "../reducers/usersReducer";

// Create the store
const store = createStore(usersReducer);

export default store;
