import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const books = [{
  author: "BARACK OBAMA",
  title: "A PROMISED LAND",
  image: "https://m.media-amazon.com/images/I/41nzI1lhIVL._SX327_BO1,204,203,200_.jpg",
  id: 1,

}, {
  author: "MICHELLE OBAMA",
  title: "THE LIGHT WE CARRY",
  image: "https://m.media-amazon.com/images/I/41HcM1yzHcL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  id: 2,

}]


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (<Books title={book.title} author={book.author} image={book.image} key={book.id} />)
      })}

    </section>
  );
}

const Books = ({ image, author, title }) => {
  //const { image, author, title } = props;//both of the methods work exactly the same
  //const {image, author, title } = props.book;
  return (
    <article className="book">
      <img src={image}
        alt="" width={250} />
      <h1>{author}</h1>
      <h2>{title}</h2>



    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);

// const names = ['john', 'peter', 'susan'];
// const newNames = names.map((name) => {
//   console.log(name)
//   return (<h1>{name}</h1>)
// })
// console.log(newNames);
// function BookList() {
//   return (
//     <section className="booklist">
//       {newNames}

//       {/* <Books author={firstBook.author} title={firstBook.title} image={firstBook.image} />
//       <Books author={secondBook.author} title={secondBook.title} image={secondBook.image}>
//         <p>Lorem ipsum dolor sit amet
//           consectetur adipisicing elit. Molestiae asperiores ipsa, sed hic
//           eius porro tenetur amet quam eligendi saepe!</p>
//       </Books> */}
//     </section>
//   );
// }

// const firstBook = {
//   author: "BARACK OBAMA",
//   title: "A PROMISED LAND",
//   image: "https://m.media-amazon.com/images/I/41nzI1lhIVL._SX327_BO1,204,203,200_.jpg"

// }

// const secondBook = {
//   author: "MICHELLE OBAMA",
//   title: "THE LIGHT WE CARRY",
//   image: "https://m.media-amazon.com/images/I/41HcM1yzHcL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"

// }







export default BookList;

