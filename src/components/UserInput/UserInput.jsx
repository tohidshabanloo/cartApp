import React from "react";
import { Slider } from "antd";

const UserInput = () => {
  function formatter(value) {
    return `${value}%`;
  }

  return (
    <div>
      <input placeholder="Item" />
      <Slider tipFormatter={formatter} className="slider" />
    </div>
  );
};

export default UserInput;
