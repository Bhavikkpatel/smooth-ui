import './nav.scss';
import NavItem from './NavItem.jsx';
import OrgSwitch from './OrgSwitch.jsx';
import React from 'react';

function NavBar({ layout = 'side', activeColor = '#4361ee', profile = false, navList }) {
    const [isMinimized, setIsMinimized] = React.useState(false);
    const handleToggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };
    return (
        <div className={`nav-parent ${isMinimized ? 'minimized' : ''} ${layout === 'top' ? 'top-nav' : ''}`}>
            <OrgSwitch isMinimized={layout === 'side' && isMinimized} onToggleMinimize={handleToggleMinimize} layout={layout} />
            <div className="nav-items">
                {navList.map((item, index) => (
                    <NavItem
                        key={index}
                        text={item.text}
                        icon={item.icon}
                        link={item.link}
                        activeColor={activeColor}
                    />
                ))}
            </div>
            {layout === 'top' && (
                <div className="nav-actions">
                    {profile && <div className="profile-avatar">JD</div>}
                </div>
            )}
        </div>
    );
}

export default NavBar;
