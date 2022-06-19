import React from "react";

import "./Category.scss";

function Category({ category }) {

    const { id, title, imageUrl } = category;

    return (
        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            
            <div className="category-body">
                <h4>{title}</h4>
                <p>Shop Now</p>
            </div>
        </div>
    );
}


export default Category;