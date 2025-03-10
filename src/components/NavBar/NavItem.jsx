import React from 'react';
import './nav.scss';
import { Link, useLocation } from 'react-router-dom';

function NavItem({ text, icon, link, activeColor }) {
    const location = useLocation();
    const isActive = location.pathname === link;
    return (
        <div className="nav-item" style={isActive ? { '--active-color': activeColor, '--active-bg-color': '#ffffff' } : undefined}>
            <Link to={link} className={`nav-link ${isActive ? 'active' : ''}`}>
                <span className="nav-icon">{icon}</span>
                <span className="nav-text">{text}</span>
            </Link>
        </div>
    );
}

export default NavItem;