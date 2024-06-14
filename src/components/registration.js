import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="title">
                    <span>Login Form</span>
                </div>
                <form >
                    <div className="row">
                        <i className="fas fa-user"></i> <input type="email" name="email"
                            placeholder="User Email" required />
                    </div>
                    <div className="row">
                        <i className="fas fa-user"></i> <input type="text" name="username"
                            placeholder="User Name" required />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i> <input type="password" name="password"
                            placeholder="Password" required />
                    </div>
                    <div className="pass">
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="row button">
                        <input type="submit" value="Register" />
                    </div>
                    <div class="signup-link">
                        Alreay have an account? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Signup;