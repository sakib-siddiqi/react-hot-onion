import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import AllProducts from "./Pages/Home/Components/Products/AllProducts";
import ProductsDetails from "./Pages/Home/Components/Products/ProductsDetails";
import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path="/products" component={AllProducts} />
          <Route path="/products/:searchProduct" component={ProductsDetails} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
