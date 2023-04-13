import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";



const middleware = compose(applyMiddleware(thunk));
const store = createStore(rootReducer, middleware);
export { store };