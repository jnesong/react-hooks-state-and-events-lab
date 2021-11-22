import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

function handleOnClick(){
  setInCart(inCart => !inCart)
}

// const className = inCart ? "in-cart" : ""

function className (){
  if (inCart){return "in-cart"}
  else {return ""}
}

function otherThing (){
  if (inCart){return "remove"}
  else {return "add"}
}


  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={otherThing} onClick={handleOnClick}>
          {inCart ? "Remove From": "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
