import React from "react";
import "./bestseller.css";
import { Link } from "react-router-dom";

const Bestseller = (): JSX.Element => {
  return (
    <section id="catalog" className="bestseller">
      <h1>Bestseller</h1>
      <div className="bestProducts">
        <figure>
          <img className="imgBest"
            src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FCake%26Deserts%2FOreo%20cake%20%E5%A5%A5%E5%88%A9%E5%A5%A5%E8%9B%8B%E7%B3%95.jpeg?alt=media&token=c267654a-c664-400d-bb4d-e4ab1a28b47c"
            alt=""
          />
          <figcaption className="bestTitle">
            <span>Name</span>
            <p>Price</p>
          </figcaption>
        </figure>
        <figure>
          <img className="imgBest"
            src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FBurger%26Pizza%2F817277540b7b72ae8d4f9dff53b849ef.jpg?alt=media&token=ca045b88-aeb8-4a6b-a783-92c5076c8dd9"
            alt=""
          />
          <figcaption className="bestTitle">
            <span>Name</span>
            <p>Price</p>
          </figcaption>
        </figure>
        <figure>
          <img className="imgBest"
            src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FBread%2FRezept%20von%20Nima%20Hemmat-Azad_%20Croissant%20_%20Kochbu%CC%88cher%20%26%20ihre%20besten%20Rezepte.jpeg?alt=media&token=42b9b6ed-61dc-41b4-8177-2760653c99f0"
            alt=""
          />
          <figcaption className="bestTitle">
            <span>Name</span>
            <p>Price</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Bestseller;
