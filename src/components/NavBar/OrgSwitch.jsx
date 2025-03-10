import React from 'react';
import './nav.scss';
import { AiOutlineMenu } from 'react-icons/ai';

function OrgSwitch({ isMinimized, onToggleMinimize, layout }) {
    return (
        <div className="org-switch">
            <div className="org-info">
                {!isMinimized && <div className="org-logo">Smooth UI</div>}
                {layout !== 'top' && (
                    <button className="menu-button" onClick={onToggleMinimize}>
                        <span className="menu-icon"><AiOutlineMenu size={16} /></span>
                    </button>
                )}
            </div>
        </div>
    );
}

export default OrgSwitch;