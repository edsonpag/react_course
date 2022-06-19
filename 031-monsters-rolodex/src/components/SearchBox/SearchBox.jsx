import React from "react";


import "./SearchBox.css";

class SearchBox extends React.Component {

    render() {

        return (
            <input 
            type="search" 
            placeholder={this.props.placeholder}
            className={this.props.className}
            onChange={this.props.onSearchChange} 
        />
        );
    }
}

export default SearchBox;