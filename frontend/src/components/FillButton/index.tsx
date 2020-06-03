import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string;
}

const FillButton: React.FC<Props> = ({ children, to, className, ...rest }) => {
    return (
        <StyledButton to={to} type="button" className={className} {...rest}>
            {children}
        </StyledButton>
    );
};

export default FillButton;
