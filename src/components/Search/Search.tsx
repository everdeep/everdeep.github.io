import React from "react";

import "./Search.scss";

interface SearchProps {
    onChange: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({onChange}) => {
    return (
        <div className="search">
            <div className="ui icon input">
                <input type="text" placeholder="Search..." onChange={(e) => onChange(e.target.value)}/>
                <i className="search icon"></i>
            </div>
        </div>
    );
};

export default Search;