import React, { useState } from "react";
import { Link } from "react-router-dom"
import InputBox from "../../components/InputBox/InputBox";
import StyledButton from "../../components/styledbutton/StyledButton";
// import './SignupPage.light.css'
import './SignupPage.dark.css'
function SignupPage() {
        return (
            <div className="signup-container">
                <div className="signup">
                    <div className="signup-heading">
                        <h3>Create an account</h3>
                    </div>
                    <div className="signup-content">

                        <form action="/signup" method="post">
                            <InputBox type={"text"} name={"username"} placeholder="Enter your Name" />
                            <InputBox type={"email"} name={"email"} placeholder="Enter your Email ID" />
                            <InputBox type={"password"} name={"password"} placeholder="Enter your Password" />
                            <InputBox type={"password"} name={"confirm_password"} placeholder="Confirm your Password" />
                            <StyledButton>Submit</StyledButton>
                            <span>Already have an account? <Link className="link" to='/login'>Login</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    export default SignupPage;