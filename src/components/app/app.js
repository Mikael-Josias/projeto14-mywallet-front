import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../../assets/styles/globalStyle";
import "../../assets/styles/fonts.css";
import SignInPage from "../../pages/signInPage";
import { AppContainer } from "./styled";
import SignUpPage from "../../pages/signUpPage";
import HomePage from "../../pages/homePage";
import UserProvider from "../../context/userContext";
import NewEntriePage from "../../pages/newEntriePage";
import { useState } from "react";

export default function App(){
    const [entrieType, setEntrieType] = useState("");

    return (
        <UserProvider>
            <AppContainer>
                <GlobalStyle/>
                
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<SignInPage/>} />
                        <Route exact path="/cadastro" element={<SignUpPage/>} />
                        <Route exact path="/home" element={<HomePage setEntrie={setEntrieType}/>} />
                        <Route exact path="/nova-entrada" element={<NewEntriePage entrie={entrieType}/>} />
                        <Route exact path="/nova-saida" element={<NewEntriePage entrie={entrieType}/>} />
                    </Routes>
                </BrowserRouter>
            </AppContainer>
        </UserProvider>
    );
}