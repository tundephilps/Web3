import React from 'react'
import Navbar from './components/Navbar';
import { useState } from "react";
import HeroSection from './components/HeroSection';
//import PageSection from './components/PageSection';
import Products from './components/Products';
import DevApi from './components/DevApi';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App () {

    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        
           <div>
           <section>
             <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
             <HeroSection  isMenuShown={isMenuShown} />
             </section>
             <Products />
             <DevApi />
             <Customers />
            <Contact />
            <Footer />
           </div>
    );
}


export default App;