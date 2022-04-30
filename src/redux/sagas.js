import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { counterActions } from '../containers/Counter/counterSlice';
import { axiosHandler } from '../services/httpClient';
import { getUserList, login } from '../services/authService';

const getUser = params =>
  new Promise((resolve, reject) => {
    axios
      .get('https://my-json-server.typicode.com/KingWisdomDEV/fakeApi/users/', params)
      .then(response => {
        // handle success
        console.log('fetch success', response.data);
        resolve(response);
      })
      .catch(error => {
        // handle error
        console.log('error', error);
        reject();
      });
  });

const getUsers = () =>
  axios.request({
    method: 'GET',
    url: 'https://my-json-server.typicode.com/KingWisdomDEV/fakeApi/users',
  });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    // const user = yield call(getUser, { params: { id: 1 } });
    // const users = yield call(getUsers);
    // console.log(user);
    // console.log(users);

    // Using axiosHandler to call service
    const users = yield axiosHandler(() => getUserList());
    const user = yield axiosHandler(() => login('admin', 'admin'));
    console.log(user);
    console.log(users);

    // yield put(counterActions.incrementByAmount(user));
  } catch (e) {
    console.log('eer', e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  //   yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
  yield takeEvery(counterActions.increment.type, fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
// }

export default mySaga;
