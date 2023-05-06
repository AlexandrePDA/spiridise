import React from 'react';
import Header from '../Components/Header.js'
import Accueil from '../Components/Accueil'
import Collaborations from '../Components/Collaborations'
import Techniques from '../Components/Techniques.js';
import Creations from '../Components/Creations.js';
import Presentations from "../Components/Presentations"
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Stats from '../Components/Stats'
import Faq from '../Components/Faq.js';
import Test from '../Components/Test.js';




const Home = () => {
    return (
        <div className="font-montserrat overflow-x-hidden">
            <Header/>
            <div className="2xl:hidden flex justify-center opacity-70 mx-auto mt-[-2rem]">
            <Test/>
            </div>
            <Accueil/>
            <Collaborations/> 
            <Techniques />
            <Stats />
            <Creations />
            <Presentations />
            <Contact />
            <Faq />
            
            <Footer />
        </div>
    );
};

export default Home;