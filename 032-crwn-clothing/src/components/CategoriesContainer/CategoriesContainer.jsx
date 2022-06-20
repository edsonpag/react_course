import React from "react";

import Category from "../Category/Category";

import "./CategoriesContainer.scss";

function CategoriesContainer({ categories }) {

  return (
      <div className="categories-container">
          {categories.map((category) => {
              return (
                  <Category key={category.id} category={category} />
              );
          })}
      </div>
  );
}

export default CategoriesContainer;