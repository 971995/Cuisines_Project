import React from 'react';

const Product_Description = () =>
{
    return(
            <>
                <section id="about" className="section-padding" style={{marginTop:'120px',marginBottom:'35px'}}>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
                            <img className="img-fluid" src="./assets/img/gallery/img-1.jpg" alt=""/>
                            </div>
                        </div> 
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
                            <h3>Chinese</h3>
                            <h5>Creamy Spaghetti Chicken Charcuterie</h5>
                            <p>We use smoked chicken sausages to toss up a creamy spaghetti-meal
                                 that is smoky, delicious and a comforting tribute to the art of
                                  charcuterie. Serves 1.</p>
                            </div>
                            <a href="#" class="btn btn-common"><i class="icon-paper-clip"></i>Add To Cart</a>
                        </div>   
                        </div>
                    </div>
                </section>
            </>
    )
}
export default Product_Description;