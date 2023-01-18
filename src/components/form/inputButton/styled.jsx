import styled from "styled-components";

export const ButtonContainer = styled.div`
    position: relative;
    margin-bottom: 10px;
    height: 55px;
    width: 325px;

    &::placeholder, &::-moz-placeholder, &::-webkit-input-placeholder{
        opacity: 1;
    }

    &:focus{
        outline: none;
        border-color: purple;
        box-shadow: 0 0 3px white;
    }
`;

export const StyledInputButton = styled.input`
    font-size: 20px;
    font-weight: 700;
    
    color: white;
    background-color: #A328D6;
    
    border: none;
    border-radius: 5px;
    
    height: 100%;
    width: 100%;

    cursor: pointer;
    transition: box-shadow 1s;

    &:hover{
        border-color: purple;
        box-shadow: 0 0 2px white;
    }
`;