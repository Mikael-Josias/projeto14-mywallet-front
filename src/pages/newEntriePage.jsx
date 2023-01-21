import { useContext, useState } from "react";
import axios from "axios";

import Form from "../components/form/form";
import Input from "../components/form/input/input";
import InputButton from "../components/form/inputButton/inputButton";
import Header from "../components/header/header";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function NewEntriePage({entrie}) {
    const navigate = useNavigate();
    const {userData} = useContext(UserContext);

    const [entrieData, setEntrieData] = useState({
        value: "",
        description: "",
        type: entrie === "entrada" ? "incoming" : "outgoing",
    });

    async function saveEntrie(form) {
        form.preventDefault();

        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                }
            }

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/entries`, entrieData, config);
            alert(response.data);
            navigate("/home");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <Header title={`Nova ${entrie}`}/>
            <Form submitFunction={saveEntrie}>
                <Input type="text" placeholder="Valor" onChange={(e) => setEntrieData({...entrieData, value: e.target.value})} required pattern="^(?=.?\d)\d{0,14}(\.?\d{0,6})?$" />
                <Input type="text" placeholder="Descrição" onChange={(e) => setEntrieData({...entrieData, description: e.target.value})} required />
                <InputButton value={`Salvar ${entrie}`} />
            </Form>
        </>
    );
}