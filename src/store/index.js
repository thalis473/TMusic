import { createStore } from 'redux';
import rootReducer from './reduce';

const store = createStore(rootReducer);

export default store;