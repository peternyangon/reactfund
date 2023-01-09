import React from "react";
import ReactDom from "react-dom/client";

const author = "Collen Hoover"
const title = "Verity"
const image = "https://images-na.ssl-images-amazon.com/images/I/41ZLnc34EiL._AC_UL600_SR600,400_.jpg"

function BookList() {
  return (
    <section>
      <Books />
    </section>
  );
}

const Books = () => {
  return (
    <article>
      <img src={image}
        alt="" />
      <h1>{author}</h1>
      <h2>{title}</h2>
    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);



export default BookList;

