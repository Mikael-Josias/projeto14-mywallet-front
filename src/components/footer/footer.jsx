import { StyledFooter, StyledButton } from "./styled";

import plusIcon from "../../assets/imgs/plusIcon.svg"

export default function Footer(){
    return (
        <StyledFooter>
            <StyledButton>
                <img src={plusIcon} alt="simbolo da adição" />
                Nova<br/>entrada
            </StyledButton>
            <StyledButton>
                <img src={plusIcon} alt="simbolo da adição" />
                Nova<br/>saída
            </StyledButton>
        </StyledFooter>
    );
}