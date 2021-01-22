import React from 'react';

const Home_Banner = () => 
{
    return(
        <div id="hero-area" className="hero-area-bg">
            <div className="overlay"></div>
                <div className="container">
                     <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <div className="contents">
                                <img src="./assets/img/food_banner.jpg" style={{width:'100%'}} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Home_Banner;