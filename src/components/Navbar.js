import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [sidebar, setSidebar]= useState(false);
  return(
    <div className="Container">
        <div className="portfolio-name">
        <p>Aditi Ganvir</p>
        </div>
        <div className="sidebar">
        <button onClick={()=>{
            setSidebar(!sidebar)
        }}><i className={`fa-solid ${sidebar? "fa-xmark" : "fa-bars"}`}></i></button></div>
        <div className={sidebar? "container1" : "display-none"}>
        <div className="nav-components">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                
            </ul>

        </div>
        <div className="connect-components">
            <div className="icons">
        <a href="https://github.com/aditiganvir28"><i class="fa-brands fa-github"></i></a>
        
        <a href="https://www.linkedin.com/in/aditi-ganvir-216336232/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpmwSjjlNSnPRTbdbcSCSBjbdkNgkqWRFrrcbSgdqjmjbdhCCcSffjcLfHZgwXZlnZGV"><i class="fa-solid fa-envelope"></i></a>
        </div>
        {/* <div className="connect">
            <button>Let's Connect</button>
        </div> */}
        </div>
        </div>
        
    </div>

  )
}