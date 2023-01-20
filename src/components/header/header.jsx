import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import exitIcon from "../../assets/imgs/exitIcon.svg";
import { UserContext } from "../../context/userContext";
import { StyledExitIcon, StyledHeader, StyledTitle } from "./styled";

export default function Header({title}) {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);

    function exitSession() {
        setUserData({name: "", token: ""});
        navigate("/");
    }

    return (
        <StyledHeader>
            <StyledTitle>{title? title : `Olá, ${userData.name}`}</StyledTitle>
            {title? null : <StyledExitIcon onClick={exitSession}>
                <img src={exitIcon} alt="porta de saída" />
            </StyledExitIcon>}
        </StyledHeader>
    );
}