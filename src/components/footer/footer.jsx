import { StyledFooter, StyledButton } from "./styled";

import plusIcon from "../../assets/imgs/plusIcon.svg"
import { useNavigate } from "react-router-dom";
import { entrieRegisterType } from "../../utils/entriesTypes";

export default function Footer({setEntrie}){
    const navigate = useNavigate();

    function newEntrie(entrieType){
        setEntrie(entrieType);
        navigate(`/nova-${entrieType}`);
    }

    return (
        <StyledFooter>
            <StyledButton onClick={() => newEntrie(entrieRegisterType.income)}>
                <img src={plusIcon} alt="simbolo da adição" />
                Nova<br/>entrada
            </StyledButton>
            <StyledButton onClick={() => newEntrie(entrieRegisterType.outcome)}>
                <img src={plusIcon} alt="simbolo da adição" />
                Nova<br/>saída
            </StyledButton>
        </StyledFooter>
    );
}