import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {



    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;