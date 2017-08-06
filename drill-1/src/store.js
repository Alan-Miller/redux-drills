import { createStore } from 'redux';
import guestReducer from './ducks/guestList';

export default createStore(guestReducer);
