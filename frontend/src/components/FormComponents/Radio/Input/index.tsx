import React from 'react';

import { RadioOption } from '../index';
import { Container } from './styles';

interface InputRadioProps extends RadioOption {
    handleChange(option: RadioOption): void | Promise<void>;
    checked: boolean;
    name: string;
    option: RadioOption;
    className?: string;
}

const Input: React.FC<InputRadioProps> = ({
    checked,
    name,
    label,
    handleChange,
    option,
    className,
}) => {
    return (
        <Container checked={checked} className={className}>
            {label && <p>{label}</p>}
            <input
                type="radio"
                aria-checked={checked}
                name={name}
                onChange={() => handleChange(option)}
            />
        </Container>
    );
};

export default Input;
