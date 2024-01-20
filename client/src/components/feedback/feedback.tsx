import React from "react";
import "./feedback.css";
import { Link } from "react-router-dom";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";

const Feedback = (): JSX.Element => {
  const customIcons: Record<number, React.ReactNode> = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  return (
    <section id="feedback" className="feedBack">
      <h1>Feed Back</h1>
      <div className="cardsFeedBack">
        <div className="cardFeedBack">
          <div className="cardFeedBackTop">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Nodata%2Fanh-meo-che-anh-meo-bua-17-09-00-01-36.jpg?alt=media&token=c5334804-ad6e-4b60-aabc-79f1337f3e7c"
              alt=""
            />
            <div className="cardFeedBackName">
              <p>Tran Nhu Phuc</p>
              <span>Date</span>
            </div>
            <SmileOutlined className="iconFeedBack" />
          </div>
          <p className="reviewText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            mollitia provident eos molestiae exercitationem, tenetur optio eaque
            modi? Eum consequuntur vel nobis obcaecati vitae aspernatur
            distinctio, maxime laudantium aliquid officiis.
          </p>
        </div>
        <div className="cardFeedBack">
          <div className="cardFeedBackTop">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Nodata%2Fanh-meo-che-anh-meo-bua-17-09-00-01-36.jpg?alt=media&token=c5334804-ad6e-4b60-aabc-79f1337f3e7c"
              alt=""
            />
            <div className="cardFeedBackName">
              <p>Tran Nhu Phuc</p>
              <span>Date</span>
            </div>
            <SmileOutlined className="iconFeedBack" />
          </div>
          <p className="reviewText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            mollitia provident eos molestiae exercitationem, tenetur optio eaque
            modi? Eum consequuntur vel nobis obcaecati vitae aspernatur
            distinctio, maxime laudantium aliquid officiis.
          </p>
        </div>
        <div className="cardFeedBack">
          <div className="cardFeedBackTop">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Nodata%2Fanh-meo-che-anh-meo-bua-17-09-00-01-36.jpg?alt=media&token=c5334804-ad6e-4b60-aabc-79f1337f3e7c"
              alt=""
            />
            <div className="cardFeedBackName">
              <p>Tran Nhu Phuc</p>
              <span>Date</span>
            </div>
            <SmileOutlined className="iconFeedBack" />
          </div>
          <p className="reviewText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            mollitia provident eos molestiae exercitationem, tenetur optio eaque
            modi? Eum consequuntur vel nobis obcaecati vitae aspernatur
            distinctio, maxime laudantium aliquid officiis.
          </p>
        </div>
        <div className="cardFeedBack">
          <div className="cardFeedBackTop">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Nodata%2Fanh-meo-che-anh-meo-bua-17-09-00-01-36.jpg?alt=media&token=c5334804-ad6e-4b60-aabc-79f1337f3e7c"
              alt=""
            />
            <div className="cardFeedBackName">
              <p>Tran Nhu Phuc</p>
              <span>Date</span>
            </div>
            <SmileOutlined className="iconFeedBack" />
          </div>
          <p className="reviewText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            mollitia provident eos molestiae exercitationem, tenetur optio eaque
            modi? Eum consequuntur vel nobis obcaecati vitae aspernatur
            distinctio, maxime laudantium aliquid officiis.
          </p>
        </div>
      </div>
      <Link to={"/feedback"}>More Feed back</Link>
      <div className="reviewGroup">
        <div className="addFeedBack">
          <h2>Write a review</h2>
          <Rate
            className="iconReview"
            defaultValue={3}
            character={({ index = 0 }) => customIcons[index + 1]}
          />
          <textarea name="" id=""></textarea>
          <button>Submit Review</button>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/Banners%2F1019888.jpg?alt=media&token=3d2f3508-b7a1-4466-8be0-522b9b4d2939"
          alt=""
        />
      </div>
    </section>
  );
};

export default Feedback;
