import React, { useState } from "react";


const ItemCard = ({ name, image, info, price }) => {
  const [numberOfBottles, setNumberOfBottles] = useState(10); // Default minimum 10 bottles
  const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status

  const handleAddToCart = () => {
    alert(`Added ${numberOfBottles} bottles of ${name} to cart`);
    // Implement your add to cart functionality here
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite state
    if (!isFavorite) {
      alert(`Added ${name} to favorites`);
    } else {
      alert(`Removed ${name} from favorites`);
    }
  };

  const handleIncrement = () => {
    setNumberOfBottles(prevCount => prevCount + 5);
  };

  const handleDecrement = () => {
    if (numberOfBottles > 10) { // Ensure minimum 10 bottles
      setNumberOfBottles(prevCount => prevCount - 5);
    }
  };

  return (
    <div className="responsive">
      <div className={`favoriteButton ${isFavorite ? "active" : ""}`} onClick={toggleFavorite}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke={isFavorite ? "red" : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <div className="gallery">
        <img src={image} alt="item_image" />
        <h2>{name}</h2>
        <p>{info}</p>
        <p>Price: ${price}</p>
        <div className="buttons">
          <div className="quantity">
            
          <button className="decrement" onClick={handleDecrement}>-</button>
            <input
              id="numberOfBottles"
              type="text"
              value={numberOfBottles}
              readOnly
            />
            
            <button className="increment" onClick={handleIncrement}>+</button>
          </div>
          <button onClick={handleAddToCart} className="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
