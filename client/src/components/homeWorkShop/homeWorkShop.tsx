import React from "react";
import "./homeWorkShop.css";
import { Carousel } from "antd";

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';

dayjs.extend(customParseFormat);
const HomeWorkShop = (): JSX.Element => {

  const { RangePicker } = DatePicker;

  const range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });


  return (
    <section id="workshop" className="homeWorkShop">
      <h1>Work Shop</h1>
      <div className="homeWorkShopGroup">
        <div className="homeWorkShopContent">
          <Carousel
            className="homeWorkShopSlide"
            autoplay={true}
            autoplaySpeed={3000}
            effect="fade"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/workShop%2F35be9051591e3b33b082cd7c95403cd8.jpg?alt=media&token=4da4a560-e5c9-4618-acb6-0f758f2e834b"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/workShop%2F405130611_662273329410845_7594004778822442649_n.jpg?alt=media&token=57b8370f-aa93-49b4-8603-85a345e2010b"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/workShop%2F53d9fc8a18ee0c74e292f2c2f91c9a9d.jpg?alt=media&token=a30f1143-a675-4963-a83f-c5c5adcad272"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/workShop%2F6967cf863688eddc929c4119057da4fb.jpg?alt=media&token=3b2f1b7b-074c-46c1-96fa-fd6983051747"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/workShop%2Fda77f16620e5a7f6230539d9003e0e6e.jpg?alt=media&token=3d5485ae-714a-45a3-8f69-daf981ab408d"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/learn-firebase-bd824.appspot.com/o/workShop%2Fe2537ee14caf25414ddcf78e80513456.jpeg?alt=media&token=ff5be88d-9db7-46b8-bf6b-d507c3c622c5"
              alt=""
            />
          </Carousel>
        </div>
        <form className="bookWorkShop" action="">
          <h2>Booking Workshop</h2>
          <Space className="homeWorkShopDatePicker" direction="vertical" size={12}>
            <DatePicker
            inputReadOnly={false}
            disabled={false}
              className="homeWorkShopDatePickerItem"
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
            />
          </Space>
          <div className="bookWorkShopItems">
            <input placeholder=" " type="text" id="name" />
            <label className="bookWorkShopLabel" htmlFor="name">Full Name</label>
          </div>
          <div className="bookWorkShopItems">
            <input placeholder=" " type="email" id="email" />
            <label className="bookWorkShopLabel" htmlFor="email">Email</label>
          </div>
          <div className="bookWorkShopItems">
            <input placeholder=" " type="text" id="phone" />
            <label className="bookWorkShopLabel" htmlFor="name">Phone</label>
          </div>
          <button>Booking Work Shop</button>
        </form>
      </div>
    </section>
  );
};

export default HomeWorkShop;
