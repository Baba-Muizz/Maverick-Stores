import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from 'react-bootstrap'
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import HomeProducts from "./pages/HomeProducts";
import ProductScreen from "./pages/ProductScreen";
import CartPage from "./pages/CartPage";
import CarouselContainer from "./components/CarouselContainer";
import Advert from "./components/Advert";
import PartnerCarousel from "./components/PartnerCarousel";
import LogIn from "./components/user/LogIn";
import NotFound from "./pages/NotFound";
import ProductCategory from "./pages/Product-Category/ProductCategory";
import Register from "./components/user/Register";
import WishList from "./pages/WishList/WishList";
import Page from "react-page-loading";



const App = () => {
  return (
    <Router>
      <Page loader={"bubble-spin"} color={"#2cccff"} size={9}>
        <Header />
        <main>
          <Route path="/" component={CarouselContainer} exact />
          {/* <Container>
        </Container> */}
          <Switch>
            <Route path="/Product-Category" component={ProductCategory} exact />
            <Route path="/" component={HomeProducts} exact />
            <Route path="/product/:id" exact component={ProductScreen} />
            <Route path="/login" component={LogIn} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/wishlist" component={WishList} exact />
            <Route component={NotFound} />
          </Switch>
          <Route path="/" component={Advert} exact />
          <Route path="/" component={PartnerCarousel} exact />
        </main>
        <Footer />
      </Page>
    </Router>
  );
};

export default App;
