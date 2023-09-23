import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutProduct from "./components/AboutProduct";
 import Store from "./components/Store";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import ScrollUp from "./components/ScrollUp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Landing/>
        <AboutProduct/>
        <Store />
        <Contact/>
      </Container>
      <Footer/>
      <ScrollUp/>

    </ShoppingCartProvider>
  );
};

export default App;
