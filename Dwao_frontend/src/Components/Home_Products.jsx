import React from 'react';

const Home_Products = () =>
{
    return(
        <section id="services" className="section-padding">
            <h2 className="section-title wow flipInX" data-wow-delay="0.4s">Latest Products</h2>
            <div className="container">
            <div className="row">
                
                <div className="col-md-6 col-lg-4 col-xs-12 pb-5">
                <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
                    <a href="/Products">
                    <div className="icon">
                    <img src="./assets/img/gallery/img-1.jpg" style={{width:'100%'}}/>
                    </div>
                    <div className="services-content">
                    <h3><a href="#">Indian</a></h3>
                    <p className="product_tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                    </div></a>
                </div>
                </div>
                
                <div className="col-md-6 col-lg-4 col-xs-12 pb-5">
                <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
                <a href="/Products">
                    <div className="icon">
                    <img src="./assets/img/gallery/img-2.jpg" style={{width:'100%'}}/>
                    </div>
                    <div className="services-content">
                    <h3><a href="#">Chinese</a></h3>
                    <p className="product_tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                    </div></a>
                </div>
                </div>
                
                <div className="col-md-6 col-lg-4 col-xs-12 pb-5">
                <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                <a href="/Products">
                    <div className="icon">
                    <img src="./assets/img/gallery/img-3.jpg" style={{width:'100%'}}/>
                    </div>
                    <div className="services-content">
                    <h3><a href="#">Continental</a></h3>
                    <p className="product_tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                    </div></a>
                </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xs-12 pb-5">
                <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                <a href="/Products">
                    <div className="icon">
                    <img src="./assets/img/gallery/img-3.jpg" style={{width:'100%'}}/>
                    </div>
                    <div className="services-content">
                    <h3><a href="#">Japanese</a></h3>
                    <p className="product_tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                    </div></a>
                </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xs-12 pb-5">
                <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                <a href="/Products">
                    <div className="icon">
                    <img src="./assets/img/gallery/img-1.jpg" style={{width:'100%'}}/>
                    </div>
                    <div className="services-content">
                    <h3><a href="#">Chinese</a></h3>
                    <p className="product_tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                    </div></a>
                </div>
                </div>
                
                <div className="col-md-6 col-lg-4 col-xs-12 pb-5">
                <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
                <a href="/Products">
                    <div className="icon">
                    <img src="./assets/img/gallery/img-2.jpg" style={{width:'100%'}}/>
                    </div>
                    <div className="services-content">
                    <h3><a href="#">Continental</a></h3>
                    <p className="product_tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                    </div></a>
                </div>
                </div>
            </div>
            </div>
   </section>
    )
}
export default Home_Products;