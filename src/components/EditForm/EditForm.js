import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Slider } from "antd";

const EditForm = ({ editData, finishHandler }) => {
  const [price, setPrice] = useState(editData.price);
  const [disc, setDisc] = useState(editData.discount);
  const [count, setCount] = useState(editData?.count);

  return (
    <>
      <Form onFinish={finishHandler} preserve={false} initialValues={editData}>
        <Form.Item
          label="نام محصول"
          labelAlign={"left"}
          labelCol={{ span: 24 }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "نام محصول را وارد کنید" }]}
          >
            <Input size={"large"} placeholder="ویرایش نام محصول" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="price" labelAlign={"left"} labelCol={{ span: 24 }}>
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
              placeholder="ویرایش قیمت محصول"
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="تعداد محصول"
          labelAlign={"left"}
          labelCol={{ span: 24 }}
        >
          <Form.Item
            name="count"
            rules={[{ required: true, message: "تعداد را وارد کنید" }]}
          >
            <InputNumber
              onChange={(value) => setCount(value)}
              size={"large"}
              style={{ width: "100%" }}
              min={1}
              placeholder="ویرایش تعداد محصول"
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="درصد تخفیف"
          name={"discount"}
          labelAlign={"left"}
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "ویرایش درصد تخفیف" }]}
        >
          <Slider
            tipFormatter={(value) => `${value}%`}
            onChange={(value) => setDisc(value)}
            min={0}
            max={100}
          />
        </Form.Item>
        <Form.Item>
          <span>قیمت نهایی:</span>
          <span
            style={{ padding: "0 5px", fontWeight: "bold", fontSize: "24px" }}
          >
            {count * (price - (price * disc) / 100)} ریال
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
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditForm;
