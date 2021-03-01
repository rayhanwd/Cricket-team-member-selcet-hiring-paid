import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
            <h2>Bangladesh Cricket Team</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Ranking</a></li>
                    <li><a href="">Record</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;