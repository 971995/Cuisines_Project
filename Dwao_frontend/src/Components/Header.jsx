import React from 'react';
const Header = () => {
    console.log(window.location.pathname);
    return(
        <>
        <header id="header-wrap">
     
                <nav className="navbar navbar-expand-sm fixed-top scrolling-navbar indigo" style={{boxShadow: '0 5px 13px #DCDCDC'}}>
                <div className="container">
                    
                    <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                        <span className="icon-menu"></span>
                    </button>
                    <a href="/" className="navbar-brand"><img src="./assets/img/logo.jpg" alt="" style={{maxWidth:'108px'}}/></a>
                    </div>
                    
                    <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                        <li className="nav-item">
                        <a className="nav-link home_link" href="/">
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contact">
                        { window.location.pathname == '/Account' ? null : 
                        <div className="header-button wow fadeInUp" data-wow-delay="1s">
                            <a href="/Login" className="btn btn-common">Login</a>
                        </div>
                        }
                        </a>
                        </li>
                    </ul>
                    
                </div>

                </nav>
    

    
   </header>
    </>
    )
}
export default Header;