import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
        return (
                <header className="header">
                        <div className="container">
                                <div className="content">
                                        <Link to="/home" className="logo">Home</Link>

                                        <div className="btn-group">
                                                <button>Cart</button>
                                                <button>Like</button>
                                        </div>
                                </div>
                        </div>
                </header>
        )
}

export default Header;
