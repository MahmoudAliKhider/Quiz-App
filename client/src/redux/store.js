import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resulteReducer from './resulteReducer';
import questionsReducer from './questionReducer';

// Call reducer
const rootReducer = combineReducers({
    questions: questionsReducer,
    result: resulteReducer
});

// create store with reducer

export default configureStore({ reducer: rootReducer })