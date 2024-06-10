import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noOfStars = 7 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentId) {
    setRating(getCurrentId);
  }
  function handleMouseEnter(getCurrentId) {
    setHover(getCurrentId);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  function handleRefreshRating() {
    setRating(0);
    setHover(0);
  }

  return (
    <div>
      <h1>STAR RATING</h1>
      <div className="star">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              size={60}
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          );
        })}
        <div>
          <button onClick={() => handleRefreshRating()}>Refresh Rating</button>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
