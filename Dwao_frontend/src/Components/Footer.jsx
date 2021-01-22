import React from 'react';

const Footer = () =>
{
    return(
        <footer className="footer-area section-padding">
            <div className="container">
                <div className="row">
                <div className="col-md-12" style={{padding:'35px 15px'}}>
                    <div className="footer-text wow fadeInDown" data-wow-delay="0.3s">
                    <p>Transactions on this site are not real.<br/>
                            Forked from <a href="">GitHub</a><br/>
                            File bugs and feedback under <a href="">Feedback and Issues</a></p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;