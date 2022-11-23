import React from "react"
import myImage from '../images/React-icon.svg.png'


export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img src={myImage} alt="react-logo" className="react-logo" />
        <h3 className="react-h3">ReactFacts</h3>
        <h4 className="react-course">React Course - Project 1</h4>
        </nav>
    )
}