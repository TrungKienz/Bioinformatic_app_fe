import { useModel } from '@umijs/max';
import { Form, Input, Radio } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 8 },
    md: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: { span: 8 },
    sm: { span: 12 },
    md: {
      span: 12,
    },
  },
};
export default ({ form }) => {
  // const [generalInfoForm] = Form.useForm();
  const { isView } = useModel('viewPage');
  return (
    <Form {...formItemLayout} form={form} labelAlign="left" disabled={isView}>
      <Form.Item name="healthRecordId" label="Mã bệnh án">
        <Input disabled={isView}></Input>
      </Form.Item>
      <Form.Item name="fullname" label="Họ và tên">
        <Input></Input>
      </Form.Item>
      <Form.Item name="dob" label="Năm sinh">
        <Input type="date"></Input>
      </Form.Item>
      <Form.Item name="sex" label="Giới tính">
        <Radio.Group>
          <Radio value="male">Nam</Radio>
          <Radio value="female">Nữ</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="job" label="Nghề nghiệp">
        <Input></Input>
      </Form.Item>
      <Form.Item name="address" label="Địa chỉ(Huyện - Tỉnh TP)">
        <Input></Input>
      </Form.Item>
      <Form.Item name="phone" label="SĐT liên lạc">
        <Input></Input>
      </Form.Item>
    </Form>
  );
};
