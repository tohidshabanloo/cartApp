import React, { useState } from "react";
import "./Panel.css";
import { Slider, Form, Input, InputNumber, Button } from "antd";
import { calcFinalPrice } from "../../modules/calcFinalPrice";
import { v4 as uuidv4 } from "uuid";

const Panel = ({ setFormData }) => {
  const [price, setPrice] = useState(0);
  const [disc, setDisc] = useState(0);
  const [count, setCount] = useState(0);
  const finishHandler = (values) => {
    setFormData((prev) => [...prev, { ...values, id: uuidv4() }]);
  };

  return (
    <>
      <Form onFinish={finishHandler}>
        <Form.Item
          className="name"
          label="نام محصول"
          labelAlign={"left"}
          labelCol={{ span: 24 }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "نام محصول را وارد کنید" }]}
          >
            <Input size={"large"} placeholder="نام محصول را وارد کنید" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="قیمت" labelAlign={"left"} labelCol={{ span: 24 }}>
          <Form.Item
            name="price"
            rules={[{ required: true, message: "قیمت را وارد کنید" }]}
          >
            <InputNumber
              onChange={(value) => setPrice(value)}
              size={"large"}
              style={{ width: "100%" }}
              controls={false}
              min={0}
              placeholder="enter your product name"
            />
          </Form.Item>
          <Form.Item
            label="تعداد محصول"
            labelAlign={"left"}
            labelCol={{ span: 24 }}
          ></Form.Item>
          <Form.Item
            name="count"
            rules={[{ required: true, message: "تعداد را وارد کنید" }]}
          >
            <InputNumber
              onChange={(value) => setCount(value)}
              size={"large"}
              style={{ width: "100%" }}
              controls={false}
              min={0}
              placeholder="tedado benevis"
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="discount"
          name={"discount"}
          labelAlign={"left"}
          labelCol={{ span: 24 }}
        >
          <Slider
            tipFormatter={(value) => `${value}%`}
            onChange={(value) => setDisc(value)}
            min={0}
            max={100}
            defaultValue={0}
          />
        </Form.Item>
        <Form.Item>
          <span>Final Price :</span>
          <span
            style={{ padding: "0 5px", fontWeight: "bold", fontSize: "24px" }}
          >
            {/* {price - (price * disc) / 100} $ */}
            {calcFinalPrice(price, disc, count)}
          </span>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType={"submit"}
            shape={"round"}
            type="primary"
            block
            style={{ marginTop: "30px", height: "50px" }}
            size={"large"}
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Panel;
