import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 0;

    margin: 0 auto;
    height: 80px;
    width: 325px;
`;

export const StyledTitle = styled.h1`
    font-size: 26px;
    font-weight: 700;
    color: white;
`;

export const StyledExitIcon = styled.button`
    background-color: transparent;
    border: none;
    height: 25px;
    width: 25px;
    cursor: pointer
`;