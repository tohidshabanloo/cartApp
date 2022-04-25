import React, { useState } from "react";
import { Divider, Layout, Space } from "antd";
import "./Main.css";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer";
import TotalPrice from "../TotalPrice/TotalPrice";
import EditForm from "../EditForm/EditForm";

const { Content, Sider } = Layout;
const Main = () => {
  const [formData, setFormData] = useState([]);
  return (
    <Layout className={`layout-container`}>
      <Sider width={400} className={`side-container`}>
        <Panel setFormData={setFormData} />
      </Sider>
      <Content>
        <ListContainer data={formData} setFormData={setFormData} />
        <Divider />
        <TotalPrice data={formData} />
      </Content>
    </Layout>
  );
};

export default Main;
