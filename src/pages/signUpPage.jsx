import { Link } from "react-router-dom";
import Form from "../components/form/form";
import Input from "../components/form/input/input";
import InputButton from "../components/form/inputButton/inputButton";
import Logo from "../components/logo/logo";

export default function SignUpPage(){
    return (
        <>
            <Logo/>
            <Form>
                <Input type="text" placeholder="Nome"/>
                <Input type="email" placeholder="E-mail"/>
                <Input type="password" placeholder="Senha"/>
                <Input type="password" placeholder="Confirme a senha"/>
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