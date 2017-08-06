import { createStore } from 'redux';
import guestReducer from './ducks/guestList.js';

const store = createStore(guestReducer);
console.log('Store state:', store.getState());
export default store;
