import React from "react";
import { Link } from "react-router-dom"
import InputBox from "../../components/InputBox/InputBox";
import StyledButton from "../../components/styledbutton/StyledButton";
// import './LoginPage.light.css'
import './LoginPage.dark.css'
function LoginPage() {
    return (
        <div className="login-container">
            <div className="login">
                <div className="login-heading">
                    <h3>Login</h3>
                </div>
                <div className="login-content">

                    <form action="/login" method="post">
                        <InputBox type={"email"} name={"email"} placeholder="Enter your Email ID" />
                        <InputBox type={"password"} name={"password"} placeholder="Enter your Password" />
                        <StyledButton>Submit</StyledButton>
                        <span>Don't have an account? <Link className="link" to='/signup'>Sign Up</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;