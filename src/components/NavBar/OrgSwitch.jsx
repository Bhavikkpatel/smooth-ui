import React from 'react';
import './nav.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function OrgSwitch({ isMinimized, layout, logo, orgName, onToggleMinimize }) {
    return (
        <div className="org-switch">
            <div className="org-info">
                <div className="org-logo-container">
                    <span className="logo-icon">{logo}</span>
                    {!isMinimized && <span className="org-name">{orgName}</span>}
                </div>
                {layout === 'side' && (
                    <button className="menu-button" onClick={onToggleMinimize}>
                        {isMinimized ? <AiOutlineArrowRight size={16} /> : <AiOutlineArrowLeft size={16} />}
                    </button>
                )}
                </div>
            </div>
    );
}

export default OrgSwitch;