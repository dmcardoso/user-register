import React from 'react';
import { Props, OptionTypeBase } from 'react-select';
import { AsyncProps } from 'react-select/async';
import { CreatableProps } from 'react-select/creatable';

import SelectComponent from './SelectComponent';
import { Container } from './styles';

interface ReactSelectAsyncProps
    extends Props,
        AsyncProps<OptionTypeBase | OptionTypeBase[]> {
    name: string;
    id?: string;
    label?: string;
}

interface ReactSelectCreatableProps
    extends Props,
        CreatableProps<OptionTypeBase | OptionTypeBase[]> {
    name: string;
    id?: string;
    label?: string;
}

interface ReactSelectDefaultProps extends Props {
    name: string;
    id?: string;
    label?: string;
}

export type SelectProps =
    | ReactSelectDefaultProps
    | ReactSelectAsyncProps
    | ReactSelectCreatableProps;

const Select: React.FC<SelectProps> = ({ label, name, error, id, ...rest }) => {
    id = id ?? name;

    return (
        <Container hasError={!!error}>
            <label htmlFor={id}>{label}</label>
            <SelectComponent id={id} name={name} {...rest} error={error} />
            {!!error && <span>{error}</span>}
        </Container>
    );
};

export default Select;
