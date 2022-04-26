import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useFormState } from 'react-hook-form';
import TextFieldStyled from './TextFieldStyled';

const TextFieldController = React.forwardRef((props, ref) => {
  const formState = useFormState();
  const { name, label, placeholder, color, required, fullWidth, type, autoFocus, variant } = props;
  return (
    <Controller
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextFieldStyled
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          helperText={formState.errors && formState.errors[name]?.message}
          label={label}
          placeholder={placeholder}
          color={color}
          required={required}
          fullWidth={fullWidth}
          type={type}
          autoFocus={autoFocus}
          variant={variant}
        />
      )}
    />
  );
});

TextFieldController.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  variant: PropTypes.string,
};

TextFieldController.defaultProps = {
  name: null,
  placeholder: null,
  color: 'primary',
  required: false,
  fullWidth: false,
  type: 'text',
  autoFocus: false,
  variant: 'subtitle1',
};

export default TextFieldController;
