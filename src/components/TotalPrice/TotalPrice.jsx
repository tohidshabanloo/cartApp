import React from "react";
import { Card } from "antd";
import "./TotalPrice.css";

const TotalPrice = ({ data }) => {
  const totalPayment = data.reduce(
    (total, item) =>
      total + item.count * (+item.price - (+item.price * item.discount) / 100),
    0
  );
  const totalPrice = data.reduce(
    (total, item) => total + item.count * item.price,
    0
  );
  const totalDiscount = totalPayment
    ? Math.floor(100 - (+totalPayment * 100) / +totalPrice)
    : 0;

  return (
    <Card className={`summery-container`}>
      <Card.Grid className="total-price">
        <span>قیمت کل</span>
        <h3>{totalPrice} تومان</h3>
      </Card.Grid>
      <Card.Grid className="total-discount">
        <span>مجموع تخفیف</span>
        <h3>{totalDiscount}%</h3>
      </Card.Grid>
      <Card.Grid className={`total-payment`}>
        <span>هزینه نهایی :</span>
        <h3>{totalPayment} تومان </h3>
      </Card.Grid>
    </Card>
  );
};

export default TotalPrice;
