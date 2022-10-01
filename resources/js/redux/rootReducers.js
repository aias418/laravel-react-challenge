import { combineReducers } from 'redux';
import authenticateReducer from './Authenticate/reducer';
import reservationReducer from './Reservation/reducer';

//Include all the reducer to combine and provide to configure store.
export default combineReducers({
  authenticateReducer: authenticateReducer,
  reservationReducer: reservationReducer,
});
