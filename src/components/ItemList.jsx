import React from "react";
import Item from "./Item";

export default function ItemList({ peliculass }) {
  return (
    <div>
      {peliculass.map((elem) => {
        return <Item elem={elem} />;
      })}
    </div>
  );
}
