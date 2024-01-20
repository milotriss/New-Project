import React from "react";
import "./catalog.css";
import { Link } from "react-router-dom";
const Catalog = (): JSX.Element => {
  return (
    <section className="catalog">
      <h1>Catalog</h1>
      <div className="catalogGroup">
        <figure className="catalogItems">
          <img src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FBread%2FBread%20%26%20Olives.jpeg?alt=media&token=fb0516da-44fd-48ef-a1e5-74fa296162dc" alt="" />
          <figcaption>
            <p>Bread</p>
          </figcaption>
        </figure>
        <figure className="catalogItems">
          <img src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FBurger%26Pizza%2Fseafoodpizza.jpeg?alt=media&token=6b06e042-8462-41e4-b66c-a68fe4931f42" alt="" />
          <figcaption>
            <p>Burger & Pizza</p>
          </figcaption>
        </figure>
        <figure className="catalogItems">
          <img src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FCake%26Deserts%2FSnack%20Cakes.jpeg?alt=media&token=17163ca8-7c7f-473b-a9eb-0665af62d964" alt="" />
          <figcaption>
            <p>Cake & Desert</p>
          </figcaption>
        </figure>
        <figure className="catalogItems">
          <img src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FCookie%26Biscuit%2FPaleo%20Coconut%20Peppermint%20Patties%20-%20Delight%20Fuel.jpeg?alt=media&token=fc9c8e4d-bc82-4352-aac4-d1f1ac2ab5df" alt="" />
          <figcaption>
            <p>Cookie & Biscuit</p>
          </figcaption>
        </figure>
        <figure className="catalogItems">
          <img src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FDonut%2FCoconut%20Donuts.jpeg?alt=media&token=903d78a1-0270-4995-b0f4-15e839605147" alt="" />
          <figcaption>
            <p>Donut</p>
          </figcaption>
        </figure>
        <figure className="catalogItems">
          <img src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Products%2FPie%26Tart%2FCoconut%20Pudding%20Tarts%20with%20Raw%20Chocolate%20Macaroon%20Crust%20%5Bvegan%2C%20gf%5D.jpeg?alt=media&token=dad51514-2526-4fbf-b6e5-0a01c8eb587e" alt="" />
          <figcaption>
            <p>Pie & Tart</p>
          </figcaption>
        </figure>
      </div>
      <Link to={"/shop"}>Shop Now</Link>
    </section>
  );
};

export default Catalog;
