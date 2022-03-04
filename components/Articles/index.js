import React from "react";
import Item from './Item'
const Articles = ({articles}) => {
  return (
    <div className="grap-3 md:grap-6 grid grid-cols-1 p-2 sm:grid-cols-2 md:p-6 lg:grid-cols-3">
      {
        articles?.map(item => (
          <Item key = {item._id} item = {item} />
        ))
      }
    </div>
  );
};

export default Articles;
