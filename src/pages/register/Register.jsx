import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
            <label>Username</label>
               <input type="text" className= "registerInput" placeholder="Enter your username..."/>
               <label>Email</label>
               <input type="text" className= "registerInput" placeholder="Enter your Email..."/>
               <label >Password</label>
               <input type="password" placeholder="Enter your password..."/>
               <button className="registerButton">register</button>
            </form>
            <button className="registerLoginButton">
            <Link className="link" to="/login"> Login</Link>
            </button>
        </div>
    )
}
