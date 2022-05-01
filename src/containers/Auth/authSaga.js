// import { toast } from 'react-toastify';
import { get } from 'lodash';
import { all, put, takeEvery, takeLeading } from 'redux-saga/effects';
import history from '../../history';
import { login } from '../../services/authService';
import { axiosHandler } from '../../services/httpClient';
import ResponseStatusType from '../../services/ResponseStatus';
import { getToken, removeToken, setToken } from '../../utils/Token';
import { authActions } from './authSlice';

function* handleLogin(action) {
  try {
    const { email, password, isRemember, from } = action.payload;
    if (isRemember) {
      // TODO: handle data when user click remember me
    }
    console.log('payload', action.payload);
    const authResponse = yield axiosHandler(() => login(email, password));
    // login success
    if ((authResponse.status === ResponseStatusType.OK || authResponse.status === '') && authResponse.data.length > 0) {
      setToken('fake_token');
      // distpatch action
      yield put(authActions.loginSuccess({ email, password, fullname: authResponse.data[0].fullname }));

      // Send them back to the page they tried to visit when they were redirected to the login page.
      history.push(get(from, 'pathname', '/dashboard'));
      // toast.success("Login success!")
    } else {
      console.log('loi');

      // distpatch action
      yield put(authActions.loginFailure());
      // toast.error("Login failed")
    }
  } catch (error) {
    console.log('Error: ', error);
    yield put(authActions.loginFailure());
  }
}

function* handleLogout() {
  yield removeToken();
  // toast.success("Logout success!")
}

// function* watchLoginFlow() {
//     while (true) {
//         const isLoggedIn = Boolean(getToken());

//         if (!isLoggedIn) {
//             const action = yield take(authActions.login.type);
//             yield fork(handleLogin, action);
//         }

//         yield take(authActions.logout.type);
//         yield call(handleLogout);
//     }
// }

function* watchLogin() {
  const isLoggedIn = Boolean(getToken());

  if (!isLoggedIn) {
    yield takeLeading(authActions.login.type, handleLogin);
  }
}

function* watchLogOut() {
  yield takeEvery(authActions.logout.type, handleLogout);
}

export default function* authSaga() {
  // yield fork(watchLoginFlow);
  yield all([watchLogin(), watchLogOut()]);
}
