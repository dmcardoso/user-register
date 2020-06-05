import styled from 'styled-components';

export const LineLabel = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    label {
        font-size: 1.4rem;
        font-weight: bold;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > div:not(${LineLabel}) {
        display: flex;
        flex-wrap: wrap;
    }
`;
