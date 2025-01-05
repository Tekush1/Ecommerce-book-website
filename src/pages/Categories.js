import React from "react";
import "./Categories.css";
  
  const Categories = () => {
    const categories = [
      { label: "Academic" },
      { label: "Engineering" },
      { label: "Medical" },
      { label: "Commerce & Accounting" },
      { label: "Fictional" },
      { label: "Romance" },
      { label: "Historical Fiction" },
      { label: "Thriller & Mystery" },
      { label: "Hobbies & Interests" },
      { label: "Cookbooks" },
      { label: "Art & Design" },
      { label: "Sports" },
      { label: "Non Fictional" },
      { label: "Self-Help" },
      { label: "Travel" },
      { label: "Philosophy & Psychology" },
      { label: "Others" },
      { label: "Second-Hand Books" },
      { label: "Best Sellers" },
      { label: "New Arrivals" },
    ];
  
    return (
      <div className="categories-container">
        <div className="categories-title">Categories</div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-box">
              {category.label}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
export default Categories;
