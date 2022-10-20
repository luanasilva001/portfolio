import React from 'react';
import Header from '../Head/Header';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
// import Footer from "./Component/Footer"

import "./App.css"
import Footer from '../Footer';

const App = () => {
    return (
        <>
            <Header />
            < Home />
            <Portfolio />
            <Resume />
            <Contact /> 
            <Footer />

        </>
    )
};

export default App;