import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, logout}) => {
    return (
        <header style={{ padding: "10px 20px", backgroundColor: "#cf5c36", color: "#d3d5d7" }}>
            <nav>
                <Link to="/" style={{ marginRight: "15px", color: "#d3d5d7", textDecoration: "none" }}>Home</Link>
                <Link to="/cart" style={{ marginRight: "15px", color: "#d3d5d7", textDecoration: "none" }}>Cart</Link>
                <Link to="/account" style={{ marginRight: "15px", color: "#d3d5d7", textDecoration: "none" }}>Account</Link>
                <Link to="/comments" style={{ marginRight: "15px", color: "#d3d5d7", textDecoration: "none" }}>Comments</Link>
                {user ? (
                    <span>
                        Welcome, {user.name} <button onClick={logout} style={{ marginLeft: "15px", cursor: "pointer"}}>Logout</button>
                    </span>
                ) : (
                    <Link to="/login" style={{ color: "#d3d5d7", textDecoration: "none" }}>Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;