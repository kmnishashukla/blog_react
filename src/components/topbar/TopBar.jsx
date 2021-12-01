import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import Login from "../../pages/login/Login";

export default function TopBar() {
    const user = false;
    return (
        <>
            <div className="top">
              <div className="topLeft">
              <i className="topIcon fab fa-facebook-square"></i>
              <i className="topIcon fab fa-twitter"></i>
              <i className="topIcon fab fa-pinterest-square"></i>
              <i className="topIcon fab fa-instagram"></i>topIcon 
              </div>
              <div className="topCenter">
                  <ul className="topList">
                      <li className="topListItem">
                          <Link to="/" className="link">HOME</Link>
                      </li>
                      <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                      <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                      <li className="topListItem"><Link to="/" className="link">WRITE</Link></li>
                      <li className="topListItem">{user && "LOGOUT"}</li>
                  </ul>

              </div>
              <div className="topRight">
              {
                  user ? (
                    <img className ="topImg" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50Name" alt=""/>
                  ) : (
                    <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                    </li> 
                    <li className="topListItem">
                    <Link  to="/register" className="link">REGISTER</Link>
                    </li> 
                    
                    
                    </ul>
                  )
              }
              
              <i className="topSearchIcon fas fa-search"></i>
              </div>
            

            </div>
        </>
    )
}