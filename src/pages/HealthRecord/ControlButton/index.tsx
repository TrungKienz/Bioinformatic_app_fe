import { SaveOutlined } from '@ant-design/icons';
import { history, useNavigate } from '@umijs/max';
import { Affix, FloatButton, Tooltip } from 'antd';

export default ({ handleSubmit, link }) => {
  const navigate = useNavigate();
  return (
      <Tooltip title={'Save'} color="#1890ff">
        <FloatButton
          type="primary"
          shape="square"
          icon={<SaveOutlined />}
          onClick={() => {
            handleSubmit();
            navigate(`/${link.replace('record', 'cancer')}/health-record`);
          }}
        ></FloatButton>
      </Tooltip>
  );
};
