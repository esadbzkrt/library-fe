import React from "react";

function BookCard(props) {
  return (
    <div className="w-80 h-100% border-2 justify-around hover:border-black flex mx-auto mt-6 rounded-md">
      <div className="mt-1 mb-1">
        <div className="text-md"> Name: {props.name} </div>
        <div className="text-md"> Author: {props.author}</div>
      </div>
      <div className="mt-1 mb-1">
        <div>Category: {props.category}</div>
        <div>Publisher: {props.publisher}</div>
      </div>
    </div>
  );
}

export default BookCard;
