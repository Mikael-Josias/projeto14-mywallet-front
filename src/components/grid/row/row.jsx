import { StyledDataText, StyledRow } from "./styled";

export default function Row({date, description, value, type}) {
    return (
        <StyledRow>
            <div>
                <StyledDataText colored="#C6C6C6">{date}</StyledDataText>
                <StyledDataText>{description}</StyledDataText>
            </div>
            <StyledDataText colored={type === "entrie"? "#03AC00" : "#C70000"}>{value}</StyledDataText>
        </StyledRow>
    );
}