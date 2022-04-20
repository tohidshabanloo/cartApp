import React, { useState } from "react";
import { Divider, Layout, Space } from "antd";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer";
import TotalPrice from "../TotalPrice/TotalPrice";

const { Content, Sider } = Layout;
const Main = () => {
  const [formData, setFormData] = useState([]);
  return (
    <Layout className={`layout-container`}>
      <Sider width={500} className={`side-container`}>
        <Panel setFormData={setFormData} />
      </Sider>

<<<<<<< HEAD
      <Content>
        <ListContainer data={formData} />
        <Divider />
        <TotalPrice data={formData} />
      </Content>
    </Layout>
  );
};

export default Main;



// git status
// git add .
// git commit -m "taghir"
// git push origin master
=======
export default Main


// nemidonam
>>>>>>> 79c1c03da00aaf01881ab5acbcd287b451154e4f
