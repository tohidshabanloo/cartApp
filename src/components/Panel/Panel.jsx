import React, {useState} from "react";
import {Slider, Form, Input, InputNumber, Col, Button, Space} from "antd";

const Panel = ({setFormData}) => {

    const [price,setPrice] = useState(0)
    const [disc,setDisc] = useState(0)
    const finishHandler = (values) =>{
        setFormData((prev)=>[...prev,values])
    }
    return (
        <>
            <Form onFinish={finishHandler}>
                <Form.Item label="name" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="name" rules={[{required: true, message: "Name is Required"}]}>
                        <Input size={"large"} placeholder="enter your product name"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="price" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="price" rules={[{required: true, message: "Price is Required"}]} >
                        <InputNumber onChange={value => setPrice(value)} size={"large"} style={{width: "100%"}} controls={false} min={0} placeholder="enter your product name"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="discount" name={"discount"} labelAlign={"left"} labelCol={{span: 24}}>
                    <Slider tipFormatter={(value)=>`${value}%`} onChange={value => setDisc(value)} min={0} max={100} defaultValue={0}/>
                </Form.Item>
                <Form.Item>
                    <span>Final Price :</span>
                    <span style={{padding: "0 5px", fontWeight: "bold", fontSize: "24px"}}>
                        {price - (price*disc/100)} $
                    </span>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={"submit"} shape={"round"} type="primary" block style={{marginTop: "30px", height: "50px"}} size={"large"}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Panel
