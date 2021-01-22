import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import '../css/Login_form.css';
import users from '../User_data/User'
import axios from 'axios'



const Login_Form = () =>{
    const [email_value, setEmailValue] = useState(null)
    const [passwordValue, setPasswordValue] = useState(null)

   const history = useHistory()



    const emailChange = (e) =>{
        setEmailValue(e.target.value)
    }

    const passwordChange = (e) =>{
        setPasswordValue(e.target.value)
    }
    

    const submitForm = (e) => {
        e.preventDefault()
        axios({
            method : "post",
            url : "http://localhost:8080/signIn",
            data : {
                Email : email_value,
                Password : passwordValue
            }
        }).then((res) => {
          alert(res.data.message)
          localStorage.setItem("userId", res.data.user._id)
          history.push("/Account")
        })
            
        

    }



    return(
            <>
                <div className="container back_img" style={{marginTop:'150px'}}>
                    <div className="card card-container">
                        <h5>Login to your account  </h5>
                       
                        <img id="profile-img" className="profile-img-card" src="./assets/img/gallery/img-1.jpg" />
                        <p id="profile-name" className="profile-name-card"></p>
                        <form className="form-signin">
                            <span id="reauth-email" className="reauth-email"></span>
                            <input type="email" id="inputEmail" className="form-control" onChange = { (e) => emailChange(e)} placeholder="Email address" required autofocus/>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange = { (e) => passwordChange(e)} />
                            <div id="remember" className="checkbox">
                                <label>
                                    <input type="checkbox" value="remember-me"/> Remember me
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick = {(e) => submitForm(e)}>Sign in</button>
                        </form>
                        <a href="#" className="forgot-password">
                            Register Here
                        </a>
                    </div>
                </div>
            </>
    )
}
export default Login_Form;