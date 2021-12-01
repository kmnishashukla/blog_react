import React from "react";
import "./header.css";

export default function Header() {
    return (
        
        <div className="header">
          <div className="headerTitles">
              <span className="headerTitlesSm">React &  Node</span>
              <span className="headerTitlesLg">Blog</span>
          </div>
          <img className="headerImg"
              src="https://image.shutterstock.com/image-photo/st-andrews-scotland-united-kingdom-600w-1804576861.jpg"
              alt=""
          />
        </div>
       
    )
}