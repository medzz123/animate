import React, { FunctionComponent } from 'react';
import ReactSelect from 'react-select';
import { useTheme } from 'styled-components';

import { tokens } from '../../theme/tokens';
import { SelectProps } from './Select.models';
import { SelectContainer } from './Select.styles';

const Select: FunctionComponent<SelectProps> = (props) => {
  const { selected = null, onChange, options = [] } = props;
  const theme = useTheme();

  return (
    <SelectContainer>
      <ReactSelect
        open={true}
        theme={(selectTheme) => ({
          ...selectTheme,
          borderRadius: 0,
          colors: {
            primary: theme.button,
            primary25: `${theme.button}${tokens.alpha[50]}`,
          },
        })}
        defaultValue={selected}
        onChange={onChange}
        options={options}
      />
    </SelectContainer>
  );
};

export default Select;
