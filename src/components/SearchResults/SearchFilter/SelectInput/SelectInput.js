import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './styles';
import { useTheme } from '@material-ui/styles';

const renderOptions = (options) =>
  options.map((option) => {
    return (
      <option key={option.text} value={option.value}>
        {option.text}
      </option>
    );
  });

const SelectInput = ({ state, name, handleChange, options, defaultValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        disableUnderline
        value={state}
        onChange={handleChange}
        name={name}
        className={classes.selectInput}
        style={{
          color:
            state === '' || !state ? 'inherit' : theme.palette.secondary.main,
        }}
        inputProps={{ 'aria-label': name }}
      >
        <option value="">{defaultValue}</option>
        {renderOptions(options)}
      </NativeSelect>
    </FormControl>
  );
};

export default SelectInput;
