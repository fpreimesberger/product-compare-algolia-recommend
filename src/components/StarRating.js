import React from "react";
import "./Table.css";

const StarRating = (props) => {
  return (
    <span className="hit-em hit-rating">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 16 16"
      >
        <path
          fill="#e2a400"
          fillRule="evenodd"
          d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
        />
      </svg>{" "}
      {props.rating}
    </span>
  );
};

export default StarRating;
