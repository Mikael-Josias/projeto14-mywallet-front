import { useState } from "react";
import { Link } from "react-router-dom";

import Form from "../components/form/form";
import Input from "../components/form/input/input";
import InputButton from "../components/form/inputButton/inputButton";
import Logo from "../components/logo/logo";

export default function SignUpPage(){

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    return (
        <>
            <Logo/>
            <Form submitFunction={null}>
                <Input type="text" placeholder="Nome" onChange={e => setUserData({...userData, name: e.target.value})} pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$"/>
                <Input type="email" placeholder="E-mail" onChange={e => setUserData({...userData, email: e.target.value})} pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"/>
                <Input type="password" placeholder="Senha" onChange={e => setUserData({...userData, password: e.target.value})} pattern={userData.confirmPassword}/>
                <Input type="password" placeholder="Confirme a senha" onChange={e => setUserData({...userData, confirmPassword: e.target.value})} pattern={userData.password}/>
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