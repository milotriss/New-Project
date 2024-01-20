import React from "react";
import "./about.css";

const About = (): JSX.Element => {
  return (
    <section id="about" className="homeAbout">
      <h1>About Us</h1>
      <div className="aboutDesc">
        <div className="img">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Banners%2F940896.jpg?alt=media&token=3a006f73-2db8-4b4e-b84f-6a61a2934d73"
            alt=""
          />
        </div>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            assumenda deleniti similique quia qui at numquam consequatur
            provident reprehenderit? Animi, officiis dolorum exercitationem
            labore corporis ea provident quisquam nisi aperiam.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            assumenda deleniti similique quia qui at numquam consequatur
            provident reprehenderit? Animi, officiis dolorum exercitationem
            labore corporis ea provident quisquam nisi aperiam.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            assumenda deleniti similique quia qui at numquam consequatur
            provident reprehenderit? Animi, officiis dolorum exercitationem
            labore corporis ea provident quisquam nisi aperiam.
          </li>
        </ul>
      </div>
      <div className="aboutInfo">
        <p>
          999 <span>Information</span>
        </p>
        <p>
          999 <span>Information</span>
        </p>
        <p>
          999 <span>Information</span>
        </p>
        <p>
          999 <span>Information</span>
        </p>
      </div>
    </section>
  );
};

export default About;
