import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

import Row from "./row/row";
import { StyledGrid, StyledModalSpan, StyledRowTotal, StyledSpan } from "./styled";

export default function Grid() {
    const {userData} = useContext(UserContext);

    const [entries, setEntries] = useState([]);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }

        const promisse = axios.get(`${process.env.REACT_APP_API_URL}/entries`, config);
        promisse.then((res) => {
            let total = 0;
            res.data.forEach((e) => {
                if (e.type === "incoming") total += e.price;
                if (e.type === "outgoing") total -= e.price;
            });
            setTotalValue(total);
            setEntries(res.data);
        });
        promisse.catch(() => {
            alert("Desculpe, houve um erro ao tentar carregar as entradas");
        });
    }, []);

    return (
        <>
            <StyledGrid>
                {entries.length > 0? entries.map((e) => {
                    return <Row date={e.date} description={e.description} value={e.price.toFixed(2)} type={e.type} />
                }) : <StyledModalSpan>Não há registros de<br/>entrada ou saída</StyledModalSpan>}
            </StyledGrid>
            <StyledRowTotal>
                {entries.length > 0 ? <StyledSpan bolder={true} colored="black">SALDO</StyledSpan> : null}
                {entries.length > 0 ? <StyledSpan colored={totalValue > 0 ? "#03AC00" : "#C70000"}>{totalValue >= 0 ? totalValue.toFixed(2) : (totalValue * -1).toFixed(2)}</StyledSpan> : null}
            </StyledRowTotal>
        </>
    );
}