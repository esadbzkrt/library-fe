import React from "react";

function BookCard(props) {
  return (
    <div className="w-80 h-100% border-2 justify-around flex mx-auto mt-6 rounded-md">
        <div className="flex flex-col justify-center">
            1
        </div>      
      <div className="mt-1 mb-1">
        <div className="text-md"> {props.name} </div>
        <div className="text-md">{props.author}</div>
      </div>
      <div className="mt-1 mb-1" >
        <div>{props.category}</div>
        <div>{props.publisher}</div>
      </div>
    </div>
  );
}

export default BookCard;
