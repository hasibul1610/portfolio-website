import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;