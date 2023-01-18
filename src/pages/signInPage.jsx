import { Link } from "react-router-dom";
import Form from "../components/form/form";
import Input from "../components/form/input/input";
import InputButton from "../components/form/inputButton/inputButton";
import Logo from "../components/logo/logo";

export default function SignInPage(){
    return (
        <>
            <Logo/>
            <Form>
                <Input type="email" placeholder="E-mail" required/>
                <Input type="password" placeholder="Senha" required/>
                <InputButton value="Entrar"/>
            </Form>
            <Link to={"/signup"} style={{
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