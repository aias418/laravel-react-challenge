import {all, call, put, takeLatest} from 'redux-saga/effects'
import actions from '../Reservation/actions';
import {postRequest, getCustomRequest, getRequest, deleteRequest} from '../../config/axiosClient'


function* getReservations() {
  try {
    const response = yield call(() => getRequest('reservations'));
    yield put({type: actions.GET_RESERVATIONS_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: actions.GET_RESERVATIONS_FAILURE});
  }
}


export default function* reservationSaga() {
  yield all([takeLatest(actions.GET_RESERVATIONS, getReservations)]);
}
