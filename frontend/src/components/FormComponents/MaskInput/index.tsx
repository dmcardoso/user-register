import React, { InputHTMLAttributes } from 'react';
import TextMaskInput from 'react-text-mask';

import { Container } from './styles';

export type MaskProp = Array<string | RegExp> | boolean;

export interface MaskProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
    name: string;
    mask: MaskProp | ((value: string) => MaskProp);
}

const Mask: React.FC<MaskProps> = ({
    label,
    className,
    id,
    name,
    error,
    mask,
    ...rest
}) => {
    id = id || name;

    return (
        <Container className={className} hasError={!!error}>
            {label && <label htmlFor={id}>{label}</label>}
            <TextMaskInput
                inputMode="numeric"
                mask={mask}
                id={id}
                name={name}
                guide={false}
                {...rest}
            />
            {!!error && <span>{error}</span>}
        </Container>
    );
};

export default Mask;
