import React from "react";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";
const Store = () => {
  return (
    <>
      <h1 style={{textAlign:"center",paddingTop:"100px",paddingBottom:"30px"}} id="features">Features </h1>

      <div>
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
