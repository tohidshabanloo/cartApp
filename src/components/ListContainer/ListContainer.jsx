import React from "react";
import { List, Row, Col, Typography, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import "./ListContainer.css";
import { v4 as uuidv4 } from "uuid";

import { calcFinalPrice } from "../../modules/calcFinalPrice";

const { Title, Text } = Typography;

const ListContainer = ({ data, setFormData }) => {
  const deletHandler = (id) => {
    let finalData = data.filter((item) => item.id !== id);
    setFormData(finalData);
  };
  return (
    // <p>something from before</p>
    <List
      className={`list-container`}
      bordered
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
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
                <DeleteOutlined
                  className="delete"
                  onClick={() => deletHandler(item?.id)}
                />
                <EditOutlined className="edit" />
              </Tag>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default ListContainer;
