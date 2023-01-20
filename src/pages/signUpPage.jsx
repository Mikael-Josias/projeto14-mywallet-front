import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "../components/form/form";
import Input from "../components/form/input/input";
import InputButton from "../components/form/inputButton/inputButton";
import Logo from "../components/logo/logo";

export default function SignUpPage(){
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    function registerNewUser(form){
        form.preventDefault();

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}/signup`, userData);
        promisse.then((res) => alert(res.data));
        promisse.catch((err) => console.log(err));

        navigate("/");
    }

    return (
        <>
            <Logo/>
            <Form submitFunction={registerNewUser}>
                <Input type="text" placeholder="Nome" onChange={e => setUserData({...userData, name: e.target.value})} required pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$"/>
                <Input type="email" placeholder="E-mail" onChange={e => setUserData({...userData, email: e.target.value})} required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"/>
                <Input type="password" placeholder="Senha" onChange={e => setUserData({...userData, password: e.target.value})} required/>
                <Input type="password" placeholder="Confirme a senha" required pattern={userData.password}/>
                <InputButton value="Cadastrar"/>
            </Form>
            <Link to="/" style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "white",
                textDecoration: "none",
                marginTop: "35px"
            }}>
                Já tem uma conta? Entre agora!
            </Link>
        </>
    );
} 