import { Link } from 'react-router-dom';

import { darken, lighten } from 'polished';
import styled from 'styled-components';

interface ButtonProps {
    to?: string;
}

export const StyledButton = styled.button.attrs((props: ButtonProps) => ({
    as: props.to ? Link : 'button',
}))<ButtonProps>`
    background: transparent;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    font-size: 1.4rem;
    height: 60px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
        background: ${({ theme }) => darken(0.5, theme.colors.primary)};
    }

    &:active {
        background: ${({ theme }) => lighten(0.08, theme.colors.primary)};
    }
`;
