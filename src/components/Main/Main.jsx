import React, {useState} from "react"
import {Layout,Space} from "antd";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer"

const {Content,Sider} = Layout
const Main = () =>{
    const [formData,setFormData] = useState([])
    return(
        <Layout className={`layout-container`}>
                <Sider width={500} className={`side-container`} >
                    <Panel setFormData={setFormData}/>
                </Sider>
                <Content>
                    <ListContainer data={formData}/>
                </Content>
        </Layout>
    )
}

export default Main
