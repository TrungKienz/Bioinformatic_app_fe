import { SaveOutlined, EditOutlined } from '@ant-design/icons';
import { Affix, Button, Tooltip } from 'antd';
import { history, } from '@umijs/max';

export default ({ handleSubmit }) => {
    return <Affix style={{ right: '30px', position: 'absolute' }} offsetBottom={50}>
        <Tooltip title={"Save"} color="#1890ff">
            <Button size="large" type="primary" icon={<SaveOutlined />} onClick={() => {
                handleSubmit();
                history.push('/health-record?reload=true')
            }}></Button>


        </Tooltip>
    </Affix>
}