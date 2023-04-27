import { PageContainer } from '@ant-design/pro-components';
import { Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import NoFoundPage from '../../404';
import PatientsList from './components/patientsList';
import Statistical from './components/statistical';
import StatisticalLayout from './statisticalLayout';

const items: MenuProps['items'] = [
  {
    label: 'Thống kê ',
    key: 'statistical',
  },
  {
    label: 'Danh sách bệnh nhân',
    key: 'patientsList',
  },
];

const VietnameseCancer: React.FC = () => {
  const [current, setCurrent] = useState('statistical');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  if (current === 'statistical') {
    return (
      <PageContainer>
        <Menu
          style={{}}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <StatisticalLayout/>
      </PageContainer>
    );
  } else if (current === 'patientsList') {
    return (
      <PageContainer>
        <Menu
          style={{}}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <PatientsList/>
      </PageContainer>
    );
  } else {
    return <NoFoundPage />;
  }
};

export default VietnameseCancer;
