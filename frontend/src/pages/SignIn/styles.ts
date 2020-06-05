import styled from 'styled-components';

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

    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        > label {
            margin-bottom: 15px;
        }

        button {
            margin-top: 5px;
        }
    }

    img {
        margin-bottom: 37px;
        cursor: pointer;
        transition: opacity 0.4s;

        &:hover {
            opacity: 0.6;
        }
    }

    > a {
        margin-top: 15px;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
        line-height: 1.6rem;
        display: flex;
        align-items: center;
        text-align: center;
        transition: opacity 0.4s;

        &:hover {
            opacity: 0.6;
        }
    }

    > a:nth-of-type(2) {
        text-decoration: underline;
        line-height: 2.2rem;
        margin-top: 30px;
        font-family: 'Nunito sans', sans-serif;
    }

    > p {
        font-size: 1.4rem;
        margin-top: 60px;
        line-height: 2rem;
        display: flex;
        align-items: center;
        text-align: center;
        color: ${({ theme }) => theme.colors.textGrey};
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 15px;

        img {
            margin: 9px 7.5px 0;
        }
    }
`;
