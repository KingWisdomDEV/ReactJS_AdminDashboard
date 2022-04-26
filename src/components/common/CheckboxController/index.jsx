import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import CheckboxStyled from './CheckboxStyled';

const CheckboxController = React.forwardRef((props, ref) => {
  const { name, size, color, label, defaultChecked, variant } = props;

  return (
    <Controller
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <CheckboxStyled
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          size={size}
          color={color}
          label={label}
          defaultChecked={defaultChecked}
          variant={variant}
        />
      )}
    />
  );
});

CheckboxController.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  variant: PropTypes.string,
};

CheckboxController.defaultProps = {
  name: null,
  size: 'medium',
  color: 'primary',
  defaultChecked: false,
  variant: 'subtitle2',
};

export default CheckboxController;
