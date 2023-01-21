import Footer from "../components/footer/footer";
import Grid from "../components/grid/grid";
import Header from "../components/header/header";

export default function HomePage(props) {
    return (
        <>
            <Header/>
            <Grid/>
            <Footer {...props} />
        </>
    );
}