import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {UserContext} from "../context/userContext";
import Form from "../components/form/form";
import Input from "../components/form/input/input";
import InputButton from "../components/form/inputButton/inputButton";
import Logo from "../components/logo/logo";

export default function SignInPage(){
    const navigate = useNavigate();

    const { setUserData } = useContext(UserContext);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    async function logIn(form){
        form.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/signin`, loginData);
            console.log(response.data);
            setUserData(response.data);
            navigate("/home");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <Logo/>
            <Form submitFunction={logIn}>
                <Input type="email" placeholder="E-mail" required onChange={(e) => setLoginData({...loginData, email: e.target.value})} value={loginData.email}/>
                <Input type="password" placeholder="Senha" required onChange={(e) => setLoginData({...loginData, password: e.target.value})} value={loginData.password}/>
                <InputButton value="Entrar"/>
            </Form>
            <Link to={"/cadastro"} style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "white",
                textDecoration: "none",
                marginTop: "35px"
                }}>
                Primeira vez? Cadastre-se!
            </Link>
        </>
    );
}