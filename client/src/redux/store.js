import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { resulteReducer } from './Resulte_reducer';
import questionsReducer from './Question_reducer';

// Call reducer
const rootReducer = combineReducers({
    questions: questionsReducer,
    result: resulteReducer
});
// create store with reducer

export default configureStore({ reducer: rootReducer })