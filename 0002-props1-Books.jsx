import React from "react";

function Books({ bookName, bookAuthor, bookPrice }) {
  return (
    <div>
      <div>
        <div>Name: {bookName}</div>
        <div>Author: {bookAuthor}</div>
        <div>Price: {bookPrice}</div>
      </div>
    </div>
  );
}

export default Books;
