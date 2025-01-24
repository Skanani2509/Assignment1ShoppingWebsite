import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, logout}) => {
    return (
        <header>
            <nav>
            <Link to="/" style={{ marginRight: "15px", color: "#fff", textDecoration: "none" }}>Home</Link>
            <Link to="/cart" style={{ marginRight: "15px", color: "#fff", textDecoration: "none" }}>Cart</Link>
            <Link to="/cart" style={{ marginRight: "15px", color: "#fff", textDecoration: "none" }}>Cart</Link>
            <Link to="/account" style={{ marginRight: "15px", color: "#fff", textDecoration: "none" }}>Account</Link>
            <Link to="/comments" style={{ marginRight: "15px", color: "#fff", textDecoration: "none" }}>Comments</Link>
            {user ? (
                <span>
                    Welcome, {user.name} <button onClick={logout} style={{ marginLeft: "15px", cursor: "pointer"}}>Logout</button>
                </span>
            ) : (
                <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
            )}
            </nav>
        </header>
    );
};

export default Header;