import './nav.scss';
import NavItem from './NavItem.jsx';
import OrgSwitch from './OrgSwitch.jsx';
import SearchBar from './SearchBar.jsx';
import React from 'react';

function NavBar({ layout = 'side', activeColor = '#4361ee', profile = false, navList, logo, orgName, width = '180px', minimizedWidth = '40px' }) {
    const [isMinimized, setIsMinimized] = React.useState(false);
    const handleToggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };
    return (
        <div className={`nav-parent ${isMinimized ? 'minimized' : ''} ${layout === 'top' ? 'top-nav' : ''}`}
            style={{
                '--nav-width': width,
                '--nav-minimized-width': minimizedWidth
            }}>
            <OrgSwitch 
                isMinimized={layout === 'side' && isMinimized} 
                layout={layout}
                logo={logo}
                orgName={orgName}
                onToggleMinimize={handleToggleMinimize}
            />
            {layout !== 'top' && <SearchBar />}
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
                    <SearchBar />
                    {profile && <div className="profile-avatar">JD</div>}
                </div>
            )}
        </div>
    );
}
export default NavBar;