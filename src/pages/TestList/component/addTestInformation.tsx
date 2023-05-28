import { server } from '@/pages/Api';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, message } from 'antd';
import { useState } from 'react';
import CRUDService from '@/services/CRUDService';


const searchUrl = `${server}/test-case/add`;

const AddTestCase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Thêm thông tin thành công !!!',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Xảy ra lỗi khi thêm thông tin !!!',
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      await CRUDService.saveService(searchUrl,values);
      success();
    } catch (error) {
      console.error(error);
      warning();
    }
    handleCancel();
  };

  return (
    <>
        {contextHolder}

      <Button key="key" type="primary" onClick={showModal}>
        <PlusOutlined />
        Thêm xét nghiệm mới
      </Button>
      
      <Modal
        title="Thêm thông tin xét nghiệm"
        open={isModalOpen}
        onOk={handleFinish}
        onCancel={handleCancel}
        
      >
        <Form form={form}>
          <Form.Item name="patientID" label="Mã bệnh nhân:">
            <Input allowClear placeholder="Nhập mã bệnh nhân" required={true}/>
          </Form.Item>
          <Form.Item name="patientName" label="Tên bệnh nhân:">
            <Input allowClear placeholder="Nhập tên bệnh nhân" required={true}/>
          </Form.Item>
          <Form.Item name="testName" label="Mẫu bệnh phẩm:">
            <Input allowClear placeholder="Nhập mẫu bệnh phẩm"/>
          </Form.Item>
        </Form>
      </Modal> 
     
    </>
  );
};

export default AddTestCase;
