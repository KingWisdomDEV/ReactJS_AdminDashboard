import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';

function CheckboxStyled(props) {
  const { size, color, onChange, value, label, defaultChecked, variant } = props;

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox size={size} color={color} onChange={onChange} value={value} defaultChecked={defaultChecked} />
        }
        label={label}
        componentsProps={{ typography: { variant } }}
      />
    </FormControl>
  );
}

CheckboxStyled.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  label: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  variant: PropTypes.string,
};

CheckboxStyled.defaultProps = {
  size: 'medium',
  color: 'primary',
  onChange: null,
  value: false,
  defaultChecked: false,
  variant: 'subtitle2',
};

export default CheckboxStyled;
