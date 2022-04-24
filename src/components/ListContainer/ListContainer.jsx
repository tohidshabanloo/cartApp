import React from "react";
import { List, Row, Col, Typography, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import "./ListContainer.css";

import { calcFinalPrice } from "../../modules/calcFinalPrice";

const { Title, Text } = Typography;

const ListContainer = ({ data, setFormData }) => {
  const removeTodo = (id) => {
    const updatedTodos = data.filter((item) => item.id !== id);
    setFormData(updatedTodos);
  };
  
  return (
    <List
      className={`list-container`}
      bordered
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        { data.map((item, i) => (
        <List.Item className={`list-items`}>
          <Row gutter={16}>
            <Col span={6}>
              <Text type={"secondary"}>Name:</Text>
              <Title level={5}>{item?.name}</Title>
            </Col>
            <Col span={4}>
              <Text type={"secondary"}>Price:</Text>
              <Title level={5}>{item?.price}$</Title>
            </Col>
            <Col span={3}>
              <Text type={"secondary"}>Count:</Text>
              <Title level={5}>x {item?.count} </Title>
            </Col>
            <Col span={4}>
              <Text type={"secondary"}>Discount:</Text>
              <Tag color={"#108ee9"} className={`tag`}>
                {item?.discount}%
              </Tag>
            </Col>
            <Col span={4}>
              <Text type={"secondary"}>Final Price:</Text>
              <Title className={"final-price"} level={5}>
                {/* {item?.price - (item?.price * item?.discount) / 100} $ */}
                {calcFinalPrice(item?.price, item?.discount, item?.count)}
              </Title>
            </Col>
            <Col span={3}>
              <Text type={"secondary"}>Action:</Text>
              <Tag className="action">
                <DeleteOutlined className="delete" onClick={removeTodo} />
                <EditOutlined className="edit" />
              </Tag>
            </Col>
          </Row>
        </List.Item>
        ))}
      )}
    />
  );
};

export default ListContainer;
