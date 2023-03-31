import "./App.css";
import React, { useState } from "react";
import { useRecommendations } from "@algolia/recommend-react";
import recommend from "@algolia/recommend";
import ProductTile from "./components/ProductTile";
import CompareTable from "./components/Table";
import items from "./PresetItems";

const recommendClient = recommend(
  "94IA10ZQ15",
  "81c06064842fb5879c0e4526377f44b1"
);
const indexName = "ecommerce";

function App() {
  const [item, changeItem] = useState(items[0]);

  const handleChangeItem = (event) => {
    event.preventDefault();

    changeItem(items[Math.floor(Math.random() * items.length)]);
  };

  const { recommendations } = useRecommendations({
    model: "related-products",
    recommendClient,
    indexName,
    objectIDs: [item.objectID],
    maxRecommendations: 3,
  });

  return (
    <div>
      <div className="product-tile-wrapper">
        <ProductTile
          name={item.objectName}
          price={item.objectPrice}
          image={item.objectImg}
          categories={item.objectCat}
          description={item.objectDescr}
          rating={item.objectRating}
          shipping={item.objectFreeShipping}
        />
      </div>
      <div className="button-wrapper">
        <button onClick={handleChangeItem} className="button">
          Change item
        </button>
      </div>

      <div>
        <CompareTable recommendations={recommendations} />
      </div>
    </div>
  );
}

export default App;
