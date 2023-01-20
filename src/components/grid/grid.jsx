import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

import Row from "./row/row";
import { StyledGrid, StyledModalSpan, StyledRowTotal, StyledSpan } from "./styled";

export default function Grid() {
    const {userData} = useContext(UserContext);

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }

        const promisse = axios.get(`${process.env.REACT_APP_API_URL}/entries`, config);
        promisse.then((res) => {
            setEntries(res.data);
        });
        promisse.catch(() => {
            alert("Desculpe, houve um erro ao tentar carregar as entradas");
        });
    }, []);
    
    const total = 1645.71;
    
    return (
        <>
            <StyledGrid>
                {entries.length > 0? entries.map((e) => {
                    return <Row date={e.date} description={e.description} value={e.value} type={e.type} />
                }) : <StyledModalSpan>Não há registros de<br/>entrada ou saída</StyledModalSpan>}
            </StyledGrid>
            <StyledRowTotal>
                {entries.length > 0 ? <StyledSpan bolder={true}>SALDO</StyledSpan> : null}
                {entries.length > 0 ? <StyledSpan>{total}</StyledSpan> : null}
            </StyledRowTotal>
        </>
    );
}