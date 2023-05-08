import NoFoundPage from '@/pages/404';
import { PageContainer } from '@ant-design/pro-components';
import {
  Breadcrumb,
  Button,
  Divider,
  Form,
  Layout,
  Menu,
  MenuProps,
  Radio,
  RadioChangeEvent,
  theme,
  Typography,
} from 'antd';
import { Footer } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { PieChart } from './charts/pieChart';
import ScatterChart from './charts/scatterChart';
import { StatisticalChart } from './charts/statisticalChart';
import {
  dataCasePrevalentBothSexes,
  dataCasePrevalentFemale,
  dataCasePrevalentMale,
  dataDeathCaseBothSexes,
  dataDeathCaseFemales,
  dataDeathCaseMales,
  dataNewCaseBothSexes,
  dataNewCaseFemales,
  dataNewCaseMales,
} from './data/dataNewCase';
import TreeMap from './maps/treeMap';
import './style.css';

const { Title } = Typography;
const { Header, Content, Sider } = Layout;
const items: MenuProps['items'] = [
  {
    label: 'Comparison',
    key: 'comparison',
    icon: '',
    children: [
      {
        label: 'Comparison',
        type: 'group',
        children: [
          {
            label: 'Multi Bars',
            key: 'multi-bars',
          },
          {
            label: 'Table',
            key: 'table',
          },
          {
            label: 'Dual Bars',
            key: 'dual-bars',
          },
          {
            label: 'Scatter Plot',
            key: 'scatter-plot',
          },
        ],
      },
    ],
  },
  {
    label: 'Proportions',
    key: 'proportions',
    icon: '',
    children: [
      {
        label: 'Proportions',
        type: 'group',
        children: [
          {
            label: 'Pie Charts',
            key: 'pie-charts',
          },
          {
            label: 'Circle Packing',
            key: 'circle-packing',
          },
        ],
      },
    ],
  },
  {
    label: 'Geography',
    key: 'geography',
    icon: '',
    children: [
      {
        label: 'Geography',
        type: 'group',
        children: [
          {
            label: 'Map By Indicators',
            key: 'map-by-indicators',
          },
          {
            label: 'Map By Most Common Site',
            key: 'map-by-most-common-site',
          },
          {
            label: 'Map By Cancer Site Ranking',
            key: 'map-by-cancer-site-ranking',
          },
          {
            label: 'Globe',
            key: 'globe',
          },
        ],
      },
    ],
  },
  {
    label: 'Hierarchy',
    key: 'hierarchy',
    icon: '',
    children: [
      {
        label: 'Hierarchy',
        type: 'group',
        children: [
          {
            label: 'Tree Map',
            key: 'tree-map',
          },
          {
            label: 'Bubble Chart',
            key: 'bubble-chart',
          },
          {
            label: 'Sunbrust',
            key: 'sunbrust',
          },
        ],
      },
    ],
  },
];

const itemsMenuInside: MenuProps['items'] = [
  {
    label: 'Biểu đồ',
    key: 'graphic',
  },
  {
    label: 'Bảng',
    key: 'table',
  },
];

const VietNameseCancer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [current, setCurrent] = useState('multi-bars');
  const [valueIndicator, setValueIndicator] = useState('Inc');
  const [valueSex, setValueSex] = useState('Both');
  const [valueMenu, setValueMenu] = useState('graphic');

  const onChangeIndicator = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValueIndicator(e.target.value);
  };

  const onChangeSex = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValueSex(e.target.value);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const onClickMenuInside: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setValueMenu(e.key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let data: { Cancer: string; Cases: number }[] = [];
  valueIndicator === 'Inc' && valueSex === 'Both'
    ? (data = dataNewCaseBothSexes)
    : valueIndicator === 'Inc' && valueSex === 'Males'
    ? (data = dataNewCaseMales)
    : valueIndicator === 'Inc' && valueSex === 'Females'
    ? (data = dataNewCaseFemales)
    : valueIndicator === 'Mort' && valueSex === 'Both'
    ? (data = dataDeathCaseBothSexes)
    : valueIndicator === 'Mort' && valueSex === 'Males'
    ? (data = dataDeathCaseMales)
    : valueIndicator === 'Mort' && valueSex === 'Females'
    ? (data = dataDeathCaseFemales)
    : valueIndicator === 'Prev' && valueSex === 'Both'
    ? (data = dataCasePrevalentBothSexes)
    : valueIndicator === 'Prev' && valueSex === 'Males'
    ? (data = dataCasePrevalentMale)
    : valueIndicator === 'Prev' && valueSex === 'Females'
    ? (data = dataCasePrevalentFemale)
    : (data = []);

  return (
    <Layout style={{ minHeight: '100vh', margin: 0, height: '100%', overflow: 'hidden' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', height: '80px' }}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
      </Header>
      <Layout>
        <Sider
          style={{ background: '#383838', color: '#fff' }}
          collapsible={false}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            style={{ background: '#383838', color: '#fff', paddingTop: '20px' }}
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
            onClick={onClick}
            selectedKeys={[current]}
          ></Menu>
        </Sider>
        <Sider
          className="sider-medium"
          style={{ background: '#fff', color: '#fff' }}
          collapsible={false}
          collapsed={false}
        >
          <div>
            <Form>
              <Form.Item name="compare" valuePropName="checked">
                <div className="sider-component">
                  <Title level={5}>Compare</Title>
                  <Radio.Group defaultValue={'cancer_sites'}>
                    <Radio value="population">Population</Radio>
                    <Radio value="cancer_sites">Cancer sites</Radio>
                  </Radio.Group>
                </div>
              </Form.Item>
              <Divider />
              <Form.Item name="indicators" valuePropName="checked">
                <div className="sider-component">
                  <Title level={5}>Indicator</Title>
                  <Radio.Group
                    onChange={onChangeIndicator}
                    value={valueIndicator}
                    defaultValue={'Inc'}
                  >
                    <Radio value="Inc">Inc.</Radio>
                    <Radio value="Mort">Mort.</Radio>
                    <Radio value="Prev">Prev.</Radio>
                  </Radio.Group>
                </div>
              </Form.Item>
              <Divider />
              <Form.Item name="sex" valuePropName="checked">
                <div className="sider-component">
                  <Title level={5}>Indicator</Title>
                  <Radio.Group onChange={onChangeSex} value={valueSex} defaultValue={'Both'}>
                    <Radio value="Both">Both</Radio>
                    <Radio value="Males">Males</Radio>
                    <Radio value="Females">Females</Radio>
                  </Radio.Group>
                </div>
              </Form.Item>
              <Divider />
              <Form.Item name="indicators" valuePropName="checked">
                <div style={{ display: 'inline' }} className="sider-component">
                  <Title level={5}>Population</Title>
                  <Button type="primary">Choose a population: VietNam</Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Sider>
        <Content style={{ margin: '0 16px', height: '100%', overflow: 'auto' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Chart</Breadcrumb.Item>
            <Breadcrumb.Item>{current}</Breadcrumb.Item>
          </Breadcrumb>
          <Menu
            style={{}}
            onClick={onClickMenuInside}
            selectedKeys={[current]}
            mode="horizontal"
            items={itemsMenuInside}
          />
          <h2 className="chart-title">
            Estimated age-standardized incidence and mortality rates (World) in 2020, both sexes,
            all ages (excl. NMSC){' '}
          </h2>
          {valueMenu === 'graphic' ? (
            <PageContainer>
              {current === 'multi-bars' ? (
                StatisticalChart(data)
              ) : current === 'pie-charts' ? (
                PieChart(data)
              ) : current === 'scatter-plot' ? (
                <ScatterChart />
              ) : current === 'tree-map' ? (
                <TreeMap />
              ) : (
                <NoFoundPage />
              )}
            </PageContainer>
          ) : (
            <NoFoundPage />
          )}

          <Footer style={{ textAlign: 'center' }}>
            Đại học Bách Khoa Hà Nội và đại học Y Hà Nội
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default VietNameseCancer;
