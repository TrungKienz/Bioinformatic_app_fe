import React, { useState } from 'react';
import { Layout, Menu, MenuProps, theme } from 'antd';
import PieChart from './charts/pieChart';
import StatisticalChart from './charts/statisticalChart';

const { Content, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'statisticalChart',
    icon: '',
    label: 'statiscal',
  },
  {
    key: 'pieChart',
    icon: '',
    label: 'pie',
  },
];

const StatisticalLayout = () => {
  const [current, setCurrent] = useState('statiscal');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (e: any) => {
    setCurrent(e.key);
  }

  return (
    <Layout>
      <Content>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={150}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['2']}
              defaultOpenKeys={['pieChart']}
              style={{ height: '100%' }}
              items={items}
              onClick={handleMenuClick}
            />
          </Sider>
            <div style={{height:'80vh', width:'160vh', padding:'20px'}} >
              <h1>Thống kê các loại ung thư theo giới tại Việt Nam</h1>
              {/* {current === 'statiscal' && <StatisticalChart/>} */}
              {current === 'pieChart' && <PieChart/>}
            </div>
        </Layout>
      </Content>
    </Layout>
  );
};

export default StatisticalLayout;