import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    error?: string;
}

const FillInput: React.FC<Props> = ({
    className,
    name,
    label,
    id,
    type,
    ...rest
}) => {
    id = id || name;

    return (
        <Container htmlFor={id} className={className}>
            <p>{label}</p>
            <input type={type} id={id} name={name} {...rest} />
        </Container>
    );
};

export default FillInput;
