import React from "react";
import "./modalEvent.css";
import { DatePicker, Space } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const ModalEvent = (): JSX.Element => {
  const range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });

  const disabledRangeTime: RangePickerProps["disabledTime"] = (_, type) => {
    if (type === "start") {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  };
  return (
    <section className="modalEventOverlay">
      <div className="modalEvent">
        <h1>Booking Event</h1>
        <form>
          <select name="" id="">
            <option value="">--Choose Events--</option>
            <option value="">Wedding</option>
            <option value="">Birthday</option>
            <option value="">Camping</option>
            <option value="">Anniversary</option>
            <option value="">Tet holiday</option>
            <option value="">Tea break</option>
            <option value="">Mid autumn</option>
          </select>
          <Space direction="vertical" size={12}>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
            />
          </Space>

          <div>
            <input placeholder=" " name="email" type="email" />
            <label htmlFor="">Email</label>
          </div>
          <div>
            <input placeholder=" " name="password" type="password" />
            <label htmlFor="">Password</label>
          </div>
          <button>Create</button>
        </form>
      </div>
    </section>
  );
};

export default ModalEvent;
