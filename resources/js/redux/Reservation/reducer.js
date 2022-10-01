import actions from '../Reservation/actions';

const initialState = {
  loader: false,
  reservations: [],
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_RESERVATIONS:
      return {...state, loader: true}
    case actions.GET_RESERVATIONS_SUCCESS:
      return {
        ...state,
        loader:false,
        reservations: action.payload.data,
      }
    default:
      return state
  }
}

export default Reducer;
