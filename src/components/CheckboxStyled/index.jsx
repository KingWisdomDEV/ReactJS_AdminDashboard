import * as React from 'react';
import PropTypes from 'prop-types';

import { FormControl, FormControlLabel, Checkbox } from '@mui/material';

function CheckboxStyled(props) {
  const { id, size, color, name, onChange, value, label, defaultChecked, variant } = props;

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            size={size}
            color={color}
            name={name}
            onChange={onChange}
            value={value}
            defaultChecked={defaultChecked}
          />
        }
        label={label}
        componentsProps={{ typography: { variant } }}
      />
    </FormControl>
  );
}

CheckboxStyled.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  label: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  variant: PropTypes.string,
};

CheckboxStyled.defaultProps = {
  id: null,
  size: 'medium',
  color: 'primary',
  name: null,
  onChange: null,
  value: false,
  defaultChecked: false,
  variant: 'subtitle2',
};

export default CheckboxStyled;
