import React, { useState, useCallback, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsWindows } from 'react-icons/bs';
import { BsCommand } from 'react-icons/bs';

function SearchBar({ onSearch = () => {}, debounceTime = 300 }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isMac] = useState(() => navigator.platform.toLowerCase().includes('mac'));
    const searchInputRef = React.useRef(null);

    const handleSearch = useCallback((value) => {
        onSearch(value);
    }, [onSearch]);

    const debouncedSearch = useCallback(
        (() => {
            let timeoutId;
            return (value) => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => handleSearch(value), debounceTime);
            };
        })(),
        [handleSearch, debounceTime]
    );

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        debouncedSearch(value);
    };

    const handleKeyDown = (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInputRef.current?.focus();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="search-container">
            <div className="search-input-wrapper">
                <BiSearch className="search-icon" />
                <input
                    ref={searchInputRef}
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    aria-label="Search"
                />
                <span className="shortcut-hint">
                    {isMac ? <BsCommand size={12} /> : 'CTRL'} + K
                </span>
            </div>
        </div>
    );
}

export default SearchBar;