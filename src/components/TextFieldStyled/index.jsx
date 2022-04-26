import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  Typography,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  field: {
    padding: theme.spacing(1.5),
  },
}));

function TextFieldStyled(props) {
  const classes = useStyles();

  const {
    id,
    name,
    onChange,
    value,
    helperText,
    label,
    placeholder,
    color,
    required,
    fullWidth,
    type,
    autoFocus,
    variant,
  } = props;
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <FormControl fullWidth={fullWidth}>
      <Typography variant={variant} component="p" fontWeight="bold">
        {label}
      </Typography>
      {type !== 'password' ? (
        <TextField
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          //   value={value}
          error={Boolean(helperText)}
          helperText={helperText}
          color={color}
          required={required}
          inputProps={{ className: classes.field }}
          placeholder={placeholder}
          autoComplete={type === 'email' ? 'email' : 'off'}
          autoFocus={autoFocus}
        />
      ) : (
        <>
          <OutlinedInput
            id={id}
            name={name}
            type={isShowPassword ? 'text' : 'password'}
            onChange={onChange}
            // value={value}
            color={color}
            required={required}
            error={Boolean(helperText)}
            inputProps={{ className: classes.field }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                  {isShowPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                </IconButton>
              </InputAdornment>
            }
          />
          {helperText && <FormHelperText error>{helperText}</FormHelperText>}
        </>
      )}
    </FormControl>
  );
}

TextFieldStyled.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  variant: PropTypes.string,
};

TextFieldStyled.defaultProps = {
  id: null,
  name: null,
  onChange: null,
  value: null,
  helperText: null,
  placeholder: null,
  color: 'primary',
  required: false,
  fullWidth: false,
  type: 'text',
  autoFocus: false,
  variant: 'subtitle1',
};

export default TextFieldStyled;
