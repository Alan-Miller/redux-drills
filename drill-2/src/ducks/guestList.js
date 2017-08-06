/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  initialState
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const heroes = ['Wonder Woman', 'Batgirl', 'Supergirl']
const smurfs = ['Papa Smurf', 'Smurfette', 'Gargamel', 'Azrael']

const initialState = {
  guests: smurfs
}

// export function initialState(str) {
//   let list = str === 'heroes' ? heroes : smurfs
//   return {guests: list}
// }




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Action types
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';
const EDIT_GUEST = 'EDIT_GUEST';



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Action creators
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}
export function removeGuest(index) {
  return {
    type: REMOVE_GUEST,
    payload: index
  }
}
export function editGuest(index, guest) {
  return {
    type: EDIT_GUEST,
    payload: {
      index: index,
      guest: guest
    }
  }
}



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Reducer
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {guests: [...state.guests, action.payload]})
    case REMOVE_GUEST:
      return Object.assign({}, state, {guests: state.guests.filter((c, i) => i !== action.payload)})
    case EDIT_GUEST:
      let newList = state.guests.slice();
      newList.splice(action.payload.index, 1, action.payload.guest)
      return Object.assign({}, state, {guests: newList})
    default:
      return state;
  }
}
