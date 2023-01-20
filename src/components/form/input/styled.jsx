import styled from "styled-components";

export const StyledInput = styled.input`
    font-size: 20px;
    border: none;
    border-radius: 5px;    font-size: 20px;
    border: none;
    border-radius: 5px;
    padding-left: 15px;
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
    padding-left: 15px;
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

    &:invalid{
        border: 2px solid red;
        box-shadow: 0 0 3px red;
    }
`;