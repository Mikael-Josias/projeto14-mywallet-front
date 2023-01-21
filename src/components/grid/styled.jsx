import styled from "styled-components";

export const StyledGrid = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: white;
    border-radius: 5px 5px 0 0;

    padding: 0 10px;
    padding-top: 12px;
    margin: 0px auto;
    height: calc(100vh - 260px);
    width: 325px;

    overflow-y: scroll;
`;

export const StyledRowTotal = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 5px 5px;
    padding: 12px 10px;
    height: 40px;
    width: 325px;
    z-index: 1;
`;

export const StyledSpan = styled.span`
    font-size: 17px;
    font-weight: ${props => props.bolder? "700" : "400"};
    color: ${props => props.colored? props.colored : "black"}
`;

export const StyledModalSpan = styled.span`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    height: calc(100% - 20px);
    width: calc(100% - 12px);
`;