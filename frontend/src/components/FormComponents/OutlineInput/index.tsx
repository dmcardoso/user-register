import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    error?: string;
}

const OutlineInput: React.FC<Props> = ({
    className,
    name,
    label,
    error,
    id,
    type,
    ...rest
}) => {
    id = id || name;
    return (
        <Container className={className} hasError={!!error}>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} {...rest} />
            {!!error && <span>{error}</span>}
        </Container>
    );
};

export default OutlineInput;
