import { StyledForm } from "./styled";

export default function Form(props) {
    return (
        <StyledForm>
            {props.children}
        </StyledForm>
    );
}