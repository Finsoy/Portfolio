import React from 'react';
import './Footers.scss'

const Footer = () => (
    <footer className="footer bg-dark">
        <div className="footer-container">
            <a
                className="github"
                href="https://github.com/Finsoy"
                target="_blank"
                rel="noopener noreferrer"
            >github</a
            >
            <div className="year">
                2021
            </div>
            <a
                className="rss"
                href="https://rs.school/js/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="rss-year">21</span>
            </a>
        </div>
    </footer>
);

export default Footer;
