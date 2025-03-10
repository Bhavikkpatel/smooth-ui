import React from 'react';
import './nav.scss';

function NavItem({ text, icon, link, activeColor }) {
    const isActive = window.location.pathname === link;
    return (
        <div className="nav-item" style={isActive ? { '--active-color': activeColor, '--active-bg-color': '#ffffff' } : undefined}>
            <a href={link} className={`nav-link ${isActive ? 'active' : ''}`}>
                <span className="nav-icon">{icon}</span>
                <span className="nav-text">{text}</span>
            </a>
        </div>
    );
}

export default NavItem;