import React, { useCallback } from 'react';

import Input from './Input';
import { Container, LineLabel } from './styles';

export interface RadioOption {
    label?: string;
    value: string | number | boolean;
    payload?: object;
}

export interface BaseRadioProps {
    name: string;
    label?: string;
    selectedValue?: string | number | boolean;
    onChange(selected: RadioOption): void | Promise<void>;
    options: RadioOption[];
}

const Radio: React.FC<BaseRadioProps> = ({
    label,
    name,
    selectedValue = null,
    options,
    onChange,
}) => {
    const handleChange = useCallback(
        (option: RadioOption) => {
            onChange(option);
        },
        [onChange]
    );

    return (
        <Container>
            <LineLabel>{label && <label>{label}</label>}</LineLabel>
            <div>
                {options.map((option) => (
                    <Input
                        key={`${option.value}`}
                        handleChange={handleChange}
                        name={name}
                        checked={option.value === selectedValue}
                        {...option}
                        option={option}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Radio;
