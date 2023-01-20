import styled from "styled-components";

export const StyledRow = styled.div`
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;

    & div{
        display: flex;
    }
`;

export const StyledDataText = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.colored? props.colored : "black"};
    margin: 0 3px;
`;