import { useState } from "react";
import "../css/login.css"
import { Link } from "react-router-dom";
import api from "../api/axios";
const Login = () => {

    const [loginFormData, setLoginFormdata] = useState({
        username: "",
        password: ""
    });

    function handleLoginFormDataChange(e) {
        const { name, value } = e.target;        
        setLoginFormdata(prevState => ({...prevState, [name]: value}))
    }
	
    return (
        <div className="container">
		<div className="wrapper">
			<div className="title">
				<span>Login Form</span>
			</div>
			<form >
				<div className="row">
					<i className="fas fa-user"></i> <input type="text" name="username"
						placeholder="User Name" required />
				</div>
				<div className="row">
					<i className="fas fa-lock"></i> <input type="password" name="password"
						placeholder="Password" required />
				</div>
				<div className="pass">
					<a href="#">Forgot password?</a>
				</div>
				<div className="row button">
					<input type="submit" value="Login" />
				</div>
				<div className="signup-link">
					Not a member? <Link to="/register">Signup now</Link>
				</div>
			</form>
		</div>
	</div>
    )
};

export default Login;