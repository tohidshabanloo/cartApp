import React, { useState } from "react";
import { Divider, Layout, Modal } from "antd";
import "./Main.css";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer";
import TotalPrice from "../TotalPrice/TotalPrice";
import EditForm from "../EditForm/EditForm";

const { Content, Sider } = Layout;

const Main = () => {
  const [formData, setFormData] = useState(() => {
    const local = localStorage.getItem("cart");
    return local ? JSON.parse(local) : [];
  });
  const [editData, setEditData] = useState();

  const finishEditHandler = (values) => {
    let temp = formData.filter((item) => item.id !== editData.id);
    temp = [
      ...temp,
      {
        ...values,
        id: editData.id,
      },
    ];
    setEditData(null);
    setFormData(temp);
    localStorage.setItem("cart", JSON.stringify(temp));
    Modal.destroyAll();
  };

  return (
    <Layout className={`layout-container`}>
      <Sider width={400} className={`side-container`}>
        <Panel setFormData={setFormData} formData={formData} />
      </Sider>
      <Content>
        <ListContainer
          data={formData}
          setData={setFormData}
          setEditData={setEditData}
        />
        <Divider />
        <TotalPrice data={formData} />
      </Content>
      <Modal
        destroyOnClose={true}
        title={"Edit Products"}
        visible={editData}
        onCancel={() => setEditData(null)}
        footer={null}
      >
        <EditForm editData={editData} finishHandler={finishEditHandler} />
      </Modal>
    </Layout>
  );
};

export default Main;
