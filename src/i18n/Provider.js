import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from '../constants';
import messages from './messages';

function Provider({ children, locale, defaultLocale }) {
  return (
    <IntlProvider
      textComponent={React.Fragment}
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  locale: PropTypes.oneOf(Object.values(LOCALES)),
  defaultLocale: PropTypes.oneOf(Object.values(LOCALES)),
};

Provider.defaultProps = {
  locale: LOCALES.ENGLISH,
  defaultLocale: LOCALES.ENGLISH,
};

export default Provider;
