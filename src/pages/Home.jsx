import Footer from "../component/Footer";
import Header from "../component/Header";
import Main from "../component/Main";
import Garasi from "../component/Garasi";
import Product from "../component/Product";
import About from "../component/About";
import Search from "../component/Search";
import Work from "../component/Work";

const HomePage = () => {
    return (
        <>
            <Header />
            <Main />
            <Search />
            <Garasi />
            <Product />
            <About />
            <Work />
            <Footer />
        </>
    );
};

export default HomePage;