import React, { useState, createContext } from 'react';

// Create a context to hold the search term and filtering function
const SearchContext = createContext()

const SearchProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (term) => {
        // console.log(term);
        setSearchTerm(term);
    };
    return (
        <SearchContext.Provider value={{ searchTerm, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchProvider, SearchContext };