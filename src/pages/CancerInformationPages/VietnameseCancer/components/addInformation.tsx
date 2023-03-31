import React, { useState } from 'react';
import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import { server } from '@/pages/Api';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
};

const onFinish = (values: any) => {
    console.log(values);
};



const AddInformation = () => {

    return (
        <Row>
            <Col span={8}>
                <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 600, padding:40 }}
                validateMessages={validateMessages}
                >
                <Form.Item name={['user', 'name']} label="Số chứng minh thư: " rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Giới tính" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'age']} label="Năm sinh" >
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Tuổi phát hiện bệnh" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Vị trí ung thư">
                    <Input/>
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Tỉnh">
                    <Input/>
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Huyện/TP">
                    <Input/>
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Năm tử vong">
                    <InputNumber/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Col>
        </Row>
        
    )
};
  
  export default AddInformation;