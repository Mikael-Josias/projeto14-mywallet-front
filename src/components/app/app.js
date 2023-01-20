import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../../assets/styles/globalStyle";
import "../../assets/styles/fonts.css";
import SignInPage from "../../pages/signInPage";
import { AppContainer } from "./styled";
import SignUpPage from "../../pages/signUpPage";
import HomePage from "../../pages/homePage";
import UserProvider from "../../context/userContext";

export default function App(){
    return (
        <UserProvider>
            <AppContainer>
                <GlobalStyle/>
                
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<SignInPage/>} />
                        <Route exact path="/cadastro" element={<SignUpPage/>} />
                        <Route exact path="/home" element={<HomePage/>} />
                    </Routes>
                </BrowserRouter>
            </AppContainer>
        </UserProvider>
    );
}