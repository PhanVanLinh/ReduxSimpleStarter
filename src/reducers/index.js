import { combineReducers } from 'redux';
import BookProducer from './reducer_books'

const rootReducer = combineReducers({
  books : BookProducer
});

export default rootReducer;
