import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  field: {
    padding: theme.spacing(1.5),
  },
}));

function TextFieldStyled(props) {
  const classes = useStyles();

  const { onChange, value, helperText, label, placeholder, color, required, fullWidth, type, autoFocus, variant } =
    props;
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
          type={type}
          onChange={onChange}
          value={value}
          error={Boolean(helperText)}
          helperText={helperText}
          color={color}
          required={required}
          placeholder={placeholder}
          inputProps={{ className: classes.field }}
          autoComplete={type === 'email' ? 'email' : 'off'}
          autoFocus={autoFocus}
        />
      ) : (
        <>
          <OutlinedInput
            type={isShowPassword ? 'text' : 'password'}
            onChange={onChange}
            value={value}
            error={Boolean(helperText)}
            color={color}
            required={required}
            placeholder={placeholder}
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
  onChange: null,
  value: '',
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
