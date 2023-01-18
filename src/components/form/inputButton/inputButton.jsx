import { ButtonContainer, StyledInputButton } from "./styled";

export default function InputButton(data) {
    return (
        <ButtonContainer>
            <StyledInputButton type="submit" {...data}/>
        </ButtonContainer>
    );
}