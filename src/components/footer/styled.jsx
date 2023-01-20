import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    padding: 15px 0;
    margin: 0 auto;
    height: auto;
    width: 325px;
`;

export const StyledButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    text-align: start;
    font-size: 17px;
    font-weight: 700;
    color: white;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;

    padding: 10px;
    height: 110px;
    width: calc(50% - 7px);
    cursor: pointer;
`;