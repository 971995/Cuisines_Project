import React from 'react';
import Header from '../Components/Header';
import Home_Products from '../Components/Home_Products';
import Footer from '../Components/Footer';
import Home_Banner from '../Components/Home_Banner';
 
const Home = () =>
{
    return(
        <>
            <Header />
            <Home_Banner />
            <Home_Products />
            <Footer />
        </>
    )
}
export default Home;