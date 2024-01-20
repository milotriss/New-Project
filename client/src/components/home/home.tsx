import React from "react";
import "./home.css";
import About from "../about/about";
import Bestseller from "../bestseller/bestseller";
import HomeEvents from "../homeEvents/homeEvents";
import HomeWorkShop from "../homeWorkShop/homeWorkShop";
import Feedback from "../feedback/feedback";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Catalog from "../catalog/catalog";
import ModalEvent from "../modalEvent/modalEvent";

const Home = (): JSX.Element => {
  return (
    <main className="home">
      <section className="homeBannerHead">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/avatar%2F413943234_344755101774420_5308783516475075332_n.jpg?alt=media&token=8a59a6d9-84b9-49ec-ae5b-27000fc55b96"
          alt=""
        />
        <h4>Sweet and tasty</h4>
        <h1>A taste of the good life</h1>
        <button>Shop Now</button>
      </section>
      <About />
      <Bestseller />
      <Catalog/>
      <section className="paymentDelivery">
        <h1>Payment & Delivery</h1>
        <div className="contentPaymentDelivery">
          <div className="imgPaymentDelivery">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Banners%2Fchoco-cake-food.jpg?alt=media&token=b6139b6e-c7d2-4551-aedd-80288bff7655"
              alt=""
            />
          </div>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ut iusto quam, cumque pariatur, quia esse ipsum provident laborum,
              facilis aliquid magnam inventore eveniet nesciunt velit quisquam
              veritatis non. Neque?
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ut iusto quam,
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ut iusto quam,
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ut iusto quam, cumque pariatur, quia esse ipsum provident laborum,
              facilis aliquid magnam inventore eveniet nesciunt velit quisquam
              veritatis non. Neque?
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              ut iusto quam, cumque pariatur, quia esse ipsum provident laborum,
              facilis aliquid magnam inventore eveniet nesciunt velit quisquam
              veritatis non. Neque?
            </li>
          </ul>
        </div>
      </section>
      <HomeEvents/>
      <ModalEvent/>
      <HomeWorkShop/>
      <Feedback />
      <section id="contact" className="homeContact">
        <h1>Contact</h1>
        <div className="contactGroup">
          <div className="iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6473893503407!2d108.21331841174185!3d16.08377748453359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183f0e816fd3%3A0xc7ee5aebb92fdb72!2zODcgTWFpIEFtLCBUaHXhuq1uIFBoxrDhu5tjLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1704615932190!5m2!1svi!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ul className="contactInfo">
            <li className="contactInfoItem">
              <GoClock className="iconContact" />
              <div className="contactText">
                <p>Mon - Sun</p>
                <p>from 9:00 to 21:00</p>
              </div>
            </li>
            <li className="contactInfoItem">
              <IoLocationOutline className="iconContact" />
              <div className="contactText">
                <p>Da Nang city.</p>
                <p>87 Mai Am</p>
              </div>
            </li>
            <li className="contactInfoItem">
              <IoMailOutline className="iconContact" />
              <div className="contactText">
                <p>huongbakery@gmail.com</p>
                <p>huongcake@gmail.com</p>
              </div>
            </li>
            <li className="contactInfoItem">
              <BsTelephone className="iconContact" />
              <div className="contactText">
                <p>+84.999.999.999</p>
                <p>+84.090.909.090</p>
              </div>
            </li>
          </ul>
        </div>
      </section> 
    </main>
  );
};

export default Home;
