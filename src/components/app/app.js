import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../../assets/styles/globalStyle";
import "../../assets/styles/fonts.css";
import SignInPage from "../../pages/signInPage";
import { AppContainer } from "./styled";

export default function App(){
    return (
        <AppContainer>
            <GlobalStyle/>
            
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<SignInPage/>} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    );
}