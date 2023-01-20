import { StyledForm } from "./styled";

export default function Form({submitFunction, children}) {
    return (
        <StyledForm onSubmit={submitFunction}>
            {children}
        </StyledForm>
    );
}