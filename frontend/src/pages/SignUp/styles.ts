import styled from 'styled-components';

export const Field = styled.fieldset`
    width: 100%;
    border: unset;
    margin-bottom: 30px;

    &:last-of-type {
        margin-bottom: 54px;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    max-width: 100%;
    width: 320px;

    img {
        margin-bottom: 37px;
        cursor: pointer;
        transition: opacity 0.4s;

        &:hover {
            opacity: 0.6;
        }
    }

    h1 {
        font-weight: bold;
        font-size: 1.8rem;
        line-height: 2.5rem;
        text-align: left;
        width: 100%;
        color: ${({ theme }) => theme.colors.white};
    }

    h3 {
        font-size: 1.4rem;
        line-height: 2rem;
        color: ${({ theme }) => theme.colors.white};
        margin-top: 35px;
        width: 100%;
        margin-bottom: 35px;
    }

    form {
        width: 100%;
    }
`;
