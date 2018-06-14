import { combineReducers } from 'redux';
import BookProducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books : BookProducer,
  activeBook: ActiveBook
});

export default rootReducer;
