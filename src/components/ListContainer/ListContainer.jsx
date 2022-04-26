import React from "react";
import { List, Row, Col, Typography, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import "./ListContainer.css";

import { calcFinalPrice } from "../../modules/calcFinalPrice";

const { Title, Text } = Typography;

const ListContainer = ({ data, setData, setEditData }) => {
  const editHandler = (item) => {
    setEditData(item);
  };
  const deleteHandler = (id) => {
    let finalData = data.filter((item) => item.id !== id);
    setData(finalData);
  };
  return (
    <List
      className={`list-container`}
      bordered
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item className={`list-items`}>
          <Row gutter={16}>
            <Col span={6}>
              <Text type={"secondary"}>نام محصول:</Text>
              <Title level={5}>{item?.name}</Title>
            </Col>
            <Col span={4}>
              <Text type={"secondary"}>قیمت:</Text>
              <Title level={5}>{item?.price}$</Title>
            </Col>
            <Col span={3}>
              <Text type={"secondary"}>تعداد:</Text>
              <Title level={5}>x {item?.count} </Title>
            </Col>
            <Col span={4}>
              <Text type={"secondary"}>تخفیف:</Text>
              <Tag color={"#108ee9"} className={`tag`}>
                {item?.discount}%
              </Tag>
            </Col>
            <Col span={4}>
              <Text type={"secondary"}>قیمت نهایی:</Text>
              <Title className={"final-price"} level={5}>
                {/* {item?.price - (item?.price * item?.discount) / 100} $ */}
                {calcFinalPrice(item?.price, item?.discount, item?.count)} تومان
              </Title>
            </Col>
            <Col span={3}>
              <Text type={"secondary"}>تغییرات:</Text>
              <Tag className="action">
                <DeleteOutlined
                  className="delete"
                  onClick={() => deleteHandler(item?.id)}
                />
                <EditOutlined
                  className="edit"
                  onClick={() => editHandler(item)}
                />
              </Tag>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default ListContainer;
