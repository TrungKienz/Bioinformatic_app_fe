import { Form, Input, InputNumber } from 'antd';

const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
};

const validateMessages = {
    required: '${label} cần nhập đủ!',
    types: {
      number: '${label} phải là một số!',
    },
    number: {
      range: '${label} phải nằm trong khoảng từ ${min} đến ${max}',
    },
};

const onFinish = (values: any) => {
    console.log(values);
};



const AddInformation = () => {

    return (
        <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600, padding:40 }}
        validateMessages={validateMessages}
        >
            <Form.Item name={['ID', 'ID']} label="Số chứng minh thư" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['sex', 'sex']} label="Giới tính" rules={[{ type: 'string' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['year', 'year']} label="Năm sinh" >
                <InputNumber />
            </Form.Item>
            <Form.Item name={['age', 'age']} label="Tuổi phát hiện bệnh" rules={[{ type: 'number', min: 0, max: 150 }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['location', 'location']} label="Vị trí ung thư" rules={[{ type: 'string' }]}>
                <Input/>
            </Form.Item>
            <Form.Item name={['province', 'province']} label="Tỉnh" rules={[{ type: 'string' }]}>
                <Input/>
            </Form.Item>
            <Form.Item name={['district', 'district']} label="Huyện/TP" rules={[{ type: 'string' }]}>
                <Input/>
            </Form.Item>
            <Form.Item name={['deadYear', 'deadYear']} label="Năm tử vong" >
                <InputNumber/>
            </Form.Item>
        </Form>
    )
};
  
  export default AddInformation;