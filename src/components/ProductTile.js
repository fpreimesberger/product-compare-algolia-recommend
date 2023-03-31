import React from "react";
import "./ProductTile.css";

const ProductTile = (props) => {
  return (
    <article className="hit">
      <header className="hit-image-container">
        <img src={props.image} alt={props.name} className="hit-image" />
      </header>

      <div className="hit-info-container">
        <p className="hit-category">{props.categories[0]}</p>
        <h1>{props.name}</h1>
        <p className="hit-description">{props.description}</p>

        <footer>
          <p>
            <span className="hit-em">$</span> <strong>{props.price}</strong>{" "}
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
            <span className="hit-shipping">
              {props.shipping ? "Free shipping" : ""}
            </span>
          </p>
        </footer>
      </div>
    </article>
  );
};

export default ProductTile;
