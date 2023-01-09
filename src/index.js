import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "BARACK OBAMA",
  title: "A PROMISED LAND",
  image: "https://m.media-amazon.com/images/I/41nzI1lhIVL._SX327_BO1,204,203,200_.jpg"

}

const secondBook = {
  author: "MICHELLE OBAMA",
  title: "THE LIGHT WE CARRY",
  image: "https://m.media-amazon.com/images/I/41HcM1yzHcL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"

}

function BookList() {
  return (
    <section className="booklist">
      <Books author={firstBook.author} title={firstBook.title} image={firstBook.image} />
      <Books author={secondBook.author} title={secondBook.title} image={secondBook.image}>
        <p>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestiae asperiores ipsa, sed hic
          eius porro tenetur amet quam eligendi saepe!</p>
      </Books>
    </section>
  );
}

const Books = ({ image, author, title, children }) => {
  //const { image, author, title } = props;//both of the methods work exactly the same
  return (
    <article className="book">
      <img src={image}
        alt="" width={250} />
      <h1>{author}</h1>
      <h2>{title}</h2>
      {children}


    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);



export default BookList;

