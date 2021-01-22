import React from 'react';
import Header from '../Components/Header';
import Home_Banner from '../Components/Home_Banner';
import Account_Products from '../Components/Account_Products';
import Footer from '../Components/Footer';

const Account = () =>
{
    return(
            <>
                <Header />
                <Home_Banner />
                <Account_Products />
                <Footer />
            </>
    )
}
export default Account;