import styled, { css } from 'styled-components';

interface ContainerProps {
    hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 1.8rem;
        margin-bottom: 5px;
    }

    input {
        border: unset;
        border-bottom: 1px solid rgba(230, 238, 244, 0.5);
        color: ${({ theme }) => theme.colors.white};
        padding-bottom: 3px;
        font-size: 1.4rem;
        line-height: 2rem;
        background: transparent;

        &::placeholder {
            opacity: 0.5;
        }

        ${({ hasError, theme }) =>
            hasError
                ? css`
                      border-color: ${theme.colors.error};
                  `
                : css`
                      border-color: rgba(230, 238, 244, 0.5);
                  `}
    }

    span {
        margin-top: 2px;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.error};
    }
`;
