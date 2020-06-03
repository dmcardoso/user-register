import styled from 'styled-components';

export const Container = styled.label`
    padding: 8px 10px;
    background: ${({ theme }) => theme.colors.grey};
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 20px;
    cursor: pointer;
    width: 100%;
    height: 70px;

    p {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.4rem;
        line-height: 1.9rem;
        font-weight: bold;
        margin-bottom: 6px;
    }

    input {
        background: transparent;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.4rem;
        line-height: 2rem;
        height: 26px;
        border: unset;

        &::placeholder {
            color: ${({ theme }) => theme.colors.placeholder};
        }
    }
`;
