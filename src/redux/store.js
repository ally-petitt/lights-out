import { createStore } from "redux";
import makeMoveReducer from "./reducers";

export default createStore(makeMoveReducer)