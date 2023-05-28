import { SaveOutlined } from '@ant-design/icons';
import { history, useNavigate } from '@umijs/max';
import { Affix, Button, Tooltip } from 'antd';

export default ({ handleSubmit, link }) => {
  const navigate = useNavigate();
  return (
    <Affix style={{ right: '30px', position: 'absolute' }} offsetBottom={50}>
      <Tooltip title={'Save'} color="#1890ff">
        <Button
          size="large"
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => {
            handleSubmit();
            navigate(`/${link.replace('record', 'cancer')}/health-record`);
          }}
        ></Button>
      </Tooltip>
    </Affix>
  );
};
