import { darken } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerRadioProps {
    checked: boolean;
}

export const Container = styled.label<ContainerRadioProps>`
    padding: 6px 15px;
    background: transparent;
    cursor: pointer;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 0 15px 0 0;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textWhite};

    ${(props) =>
        !props.checked &&
        css`
            &:hover {
                background: ${({ theme }) => darken(0.5, theme.colors.primary)};
            }
        `}

    ${(props) =>
        props.checked &&
        css`
            border: 1px solid ${({ theme }) => theme.colors.secondary};
            background: ${({ theme }) => theme.colors.primary};
        `}

    p {
        font-size: 1.4rem;
        flex: 1;
        font-weight: bold;
    }

    input {
        display: none;
    }
`;
