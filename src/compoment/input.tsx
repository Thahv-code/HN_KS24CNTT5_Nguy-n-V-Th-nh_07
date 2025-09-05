import React from "react";
import { Button, Form, Input } from "antd";

const Inputform: React.FC = () => (
  <Form
    name="wrap"
    labelCol={{ flex: "110px" }}
    labelAlign="left"
    labelWrap
    wrapperCol={{ flex: 1 }}
    colon={false}
    style={{ maxWidth: 600 }}
  >
    <Form.Item
      label="Tiêu đề"
      name="Tiêu đề"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Nội dung"
      name="Nội dung"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>


    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default Inputform;
