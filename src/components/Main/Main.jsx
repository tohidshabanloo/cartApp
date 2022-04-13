import React from "react";
import "./Main.css";
import { Table, Tag } from "antd";
import UserInput from "../UserInput/UserInput";

const Main = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Discount",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Final Price",
      dataIndex: "final",
      key: "final",
    },
  ];

  const data = [
    {
      key: "name",
      name: "John Brown",
      price: "32 $",
      address: "New York No. 1 Lake Park",
      tags: ["developer"],
      final: "32 $",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool"],
    },
  ];

  return (
    <div className="main">
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
      <div className="userInput">
        <UserInput />
      </div>
    </div>
  );
};

export default Main;
