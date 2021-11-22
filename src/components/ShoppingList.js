import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCateoryChange(event){
    setSelectedCategory(event.target.value);

  }//end of handleCategoryChange function

  const itemsToDisplay = items.filter(item =>{
    if (selectedCategory === "All") {return true}
    else {return item.category === selectedCategory}
  })//end of itemsToDisplay constant and filter method


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCateoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}// end of ShoppingList Function

export default ShoppingList;
