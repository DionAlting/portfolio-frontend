import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import userReducer from "./user/reducer";
import reserveReducer from "./reserve/reducer";
import jukeboxReducer from "./jukebox/reducer";
import studyAssocReducer from "./studyAssoc/reducer";
import eventReducer from "./event/reducer";
import backOfficeReducer from "./backoffice/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  reserve: reserveReducer,
  jukebox: jukeboxReducer,
  studyAssoc: studyAssocReducer,
  events: eventReducer,
  backOffice: backOfficeReducer,
});

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(rootReducer, enhancer);

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
