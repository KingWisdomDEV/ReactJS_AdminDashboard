// /* eslint-disable import/no-cycle */
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { all, put, takeEvery, takeLeading } from 'redux-saga/effects';
import history from '../../history';
// import { translate } from '../../i18next/translate';
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
    const authResponse = yield axiosHandler(() => login(email, password));
    // login success
    if ((authResponse.status === ResponseStatusType.OK || authResponse.status === '') && authResponse.data.length > 0) {
      setToken('fake_token');
      // distpatch action
      yield put(authActions.loginSuccess({ email, password, fullname: authResponse.data[0].fullname }));

      // Send them back to the page they tried to visit when they were redirected to the login page.
      history.push(get(from, 'pathname', '/dashboard'));
      // toast.success(translate('messages.success.login', { email }));
      // toast.success(`Hi ${email}, nice to meet you!`);
    } else {
      // distpatch action
      yield put(authActions.loginFailure());
      // toast.error(translate('messages.error.login'));
      // toast.error('Email or password incorrect');
    }
  } catch (error) {
    // console.log('Error: ', error);
    yield put(authActions.loginFailure());
    // toast.error(translate('messages.error.service'));
  }
}

function* handleLogout() {
  yield removeToken();
  history.push('/login');
  // toast.success(translate('messages.success.logout'));
}

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
