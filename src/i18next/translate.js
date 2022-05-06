import store from '../redux/store';
import { userPreferenceActions } from '../redux/userPreferenceSlice';
import i18n from './index';

export const translate = (key, values) => i18n.t(key, values);

export const changeLocale = locale => {
  i18n.changeLanguage(locale);

  // Update Redux store
  store.dispatch(userPreferenceActions.changeLocale(locale));
};
