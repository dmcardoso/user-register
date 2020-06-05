import styled from 'styled-components';

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

    span {
        margin-top: 2px;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.error};
    }
`;
