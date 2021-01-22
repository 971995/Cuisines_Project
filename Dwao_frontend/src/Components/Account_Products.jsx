import React from 'react';
import axios from 'axios';




const Account_Products = () =>
{
    const [radio_value, setRadioValue] = React.useState(null)
    const radio_change = (e) =>{
        //console.log(e.currentTarget.value)
        setRadioValue(e.currentTarget.value)
    }

    const userId = localStorage.getItem("userId")
    console.log(userId)


    const submit_radio = () =>
    {
        axios({
            method : "post",
            url : "http://localhost:8080/cuisine",
            data : {
                userId : userId,
                cuisine : radio_value
            }
        }).then((res) => {
            alert(res.data.message)
        })
    }
    
    return(
            <>
                <section id="services" className="section-padding">
                    <div className="container">
                    <div className="row">
                        
                        <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
                            <div className="icon">
                            <img src="./assets/img/gallery/img-1.jpg" style={{width:'100%'}}/>
                            </div>
                            <div className="services-content">
                            <h3><input type="radio" name="cusine" value="Indian" onChange={(e) => {radio_change(e)}} ></input><a href="#" class="radio_account">Indian</a></h3>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
                            <div className="icon">
                            <img src="./assets/img/gallery/img-2.jpg" style={{width:'100%'}}/>
                            </div>
                            <div className="services-content">
                            <h3><input type="radio" name="cusine" value="Continental" onChange={(e) => {radio_change(e)}}></input><a href="#" class="radio_account">Continental</a></h3>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                            <div className="icon">
                            <img src="./assets/img/gallery/img-3.jpg" style={{width:'100%'}}/>
                            </div>
                            <div className="services-content">
                            <h3><input type="radio" name="cusine" value="Punjabi" onChange={(e) => {radio_change(e)}}></input><a href="#" class="radio_account">Punjabi</a></h3>
                            
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                            <div className="icon">
                            <img src="./assets/img/gallery/img-3.jpg" style={{width:'100%'}}/>
                            </div>
                            <div className="services-content">
                            <h3><input type="radio" name="cusine" value="Japanese" onChange={(e) => {radio_change(e)}}></input><a href="#" class="radio_account">Japanese</a></h3>                           
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                        <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                            <div className="icon">
                            <img src="./assets/img/gallery/img-1.jpg" style={{width:'100%'}}/>
                            </div>
                            <div className="services-content">
                            <h3><input type="radio" name="cusine" value="Chinese" onChange={(e) => {radio_change(e)}}></input><a href="#" class="radio_account">Chinese</a></h3>                           
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-3 col-xs-12 pb-5">
                        <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
                            <div className="icon">
                            <img src="./assets/img/gallery/img-2.jpg" style={{width:'100%'}}/>
                            </div>
                            <div className="services-content">
                            <h3><input type="radio" name="cusine" value="African" onChange={(e) => {radio_change(e)}}></input><a href="#" class="radio_account">African</a></h3>                            
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row" style={{marginBottom:'35px'}}>
                        <div className="col-lg-12 text-center">
                        <button  class="btn btn-common" onClick ={submit_radio}> Submit</button>
                        </div>
                    </div>
                    </div>
        </section>
            </>
    )
}
export default Account_Products;