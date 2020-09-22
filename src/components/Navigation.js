import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Navigation
