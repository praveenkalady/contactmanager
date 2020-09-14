import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header mb-3">
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark ">
                <div className="container">
                    <Link to="/">
                    <h1 className="navbar-brand">Contact Manager</h1>
                    </Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-trigger">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-trigger">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add" className="nav-link">Add Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
