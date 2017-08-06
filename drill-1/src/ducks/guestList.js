const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';
const EDIT_GUEST = 'EDIT_GUEST';

const initialState = {
  guests: ['Pumpkin King', 'Glitterbot', 'Headless Horse']
};

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i) {
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}

export function editGuest(guest, i) {
  return {
    type: EDIT_GUEST,
    payload: {
      guest: guest,
      index: i
    }
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {guests: [...state.guests, action.payload]});
    case REMOVE_GUEST:
      return Object.assign({}, state, {guests: state.guests.filter((guest, i) => i !== action.payload)});
    case EDIT_GUEST:
      // console.log('reducer\'s EDIT_GUEST payloads: ', action.payload.guest, action.payload.index);
      // return Object.assign({}, state, {guests: [...state.guests, action.payload.guest]});
      state.guests.splice(action.payload.index, 1, action.payload.guest)
      return Object.assign({}, state, {guests: state.guests});
    default:
      return state;
    }
}
