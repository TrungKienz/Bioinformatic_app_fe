import React, { useState } from 'react';
import { Button, Cascader, Divider, Form, MenuProps, Radio, Slider, Switch } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './style.css'
import { Typography } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { PageContainer } from '@ant-design/pro-components';
import PieChart from './charts/pieChart';
import ScatterChart from './charts/scatterChart';
import NoFoundPage from '@/pages/404';
import StatisticalChart from './charts/statisticalChart';
import TreeMap from './maps/treeMap';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Inc.', 'Mort.', 'Prev.'];
const defaultCheckedList = ['Inc.'];

const { Title } = Typography;

const { Header, Content, Sider } = Layout;

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

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
            key:'multi-bars',
          },
          {
            label: 'Table',
            key:'table',
          },
          {
            label: 'Dual Bars',
            key:'dual-bars',
          },
          {
            label: 'Scatter Plot',
            key:'scatter-plot',
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
            key:'pie-charts',
          },
          {
            label: 'Circle Packing',
            key:'circle-packing',
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
        label:'Geography',
        type: 'group',
        children: [
          {
            label: 'Map By Indicators',
            key:'map-by-indicators',
          },
          {
            label: 'Map By Most Common Site',
            key:'map-by-most-common-site',
          },
          {
            label: 'Map By Cancer Site Ranking',
            key:'map-by-cancer-site-ranking',
          },
          {
            label: 'Globe',
            key:'globe',
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
            key:'tree-map',
          },
          {
            label: 'Bubble Chart',
            key:'bubble-chart',
          },
          {
            label: 'Sunbrust',
            key:'sunbrust',
          },
        ],
      },
    ],
  },
];


const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const dropdownRender = (menus: React.ReactNode) => (
  <div>
    {menus}
    <Divider style={{ margin: 0 }} />
    <div style={{ padding: 8 }}>The footer is not very short.</div>
  </div>
);
const VietNameseCancer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [current, setCurrent] = useState('multi-bars');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onChangeSwitch = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 10, background: colorBgContainer, position: 'fixed' }}>
        <div style={{height: 30, width:30, padding: 5, position:'absolute'}}>
          {/* <img style={{height: '90%', width: '90%', position:'relative' ,top: 0}} src="/Logo.jpg" alt="" /> */}
        </div>
      </Header>
      <Layout>
        <Sider style={{ background: '#383838', color: "#fff" }} collapsible={false} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu style={{ background: '#383838', color: "#fff" }} defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick} selectedKeys={[current]}></Menu>
        </Sider>
        <Sider className="sider-medium" style={{ background: '#fff', color: "#fff", minWidth: 300, overflow: 'auto', height: '100%'}} collapsible={false} collapsed={false}>
          <div style={{ overflow: 'auto', height: '870px' }}>
          <Form>
            <Form.Item name="compare" valuePropName="checked">
              <div className='sider-component'>
                <Title level={5}>Compare</Title>
                <Radio.Group>
                    <Radio value="population">Population</Radio>
                    <Radio value="cancer_sites">Cancer sites</Radio>
                </Radio.Group>
              </div>
            </Form.Item>
            <Divider/>
            <Form.Item name="indicators" valuePropName="checked">
              <div className='sider-component'>
                <Title level={5}>Indicator</Title>
                <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
              </div>
            </Form.Item>
            <Divider/>
            <Form.Item valuePropName="checked">
              <div className='sider-component'>
                <Title level={5}>Sex</Title>
                <Radio.Group>
                    <Radio value="Both">Both</Radio>
                    <Radio value="Males">males</Radio>
                    <Radio value="Females">Females</Radio>
                </Radio.Group>
              </div>
            </Form.Item>
            <Divider/>
            <Form.Item name="age-group">
              <div className='sider-component'>
                <Title level={5}>Age group</Title>
                <Slider range={{ draggableTrack: true }} defaultValue={[0, 85]}/>
                <Cascader options={options} placeholder="Please select" />
                <Cascader options={options} placeholder="Please select" />

              </div>
            </Form.Item>
            <Divider/>
            <Form.Item name="indicators" valuePropName="checked">
              <div className='sider-component'>
                <Title level={5}>Indicator</Title>
                <Radio.Group>
                    <Radio value="population">Number</Radio>
                    <Radio value="cancer_sites">ASR (World)</Radio>
                    <Radio value="crude_rate">Crude rate</Radio>
                    <Radio value="cum_risk">Cum.risk</Radio>
                </Radio.Group>
              </div>
            </Form.Item>
            <Divider/>
            <Form.Item name="indicators" valuePropName="checked">
              <div style={{display: 'inline'}} className='sider-component'>
                <Title level={5}>Population</Title>
                <Button type='primary'>Choose a population: VietNam</Button>
              </div>
            </Form.Item>
            <Divider/>
            <Form.Item name="indicators" valuePropName="checked">
              <div className='sider-component'>
                <Title style={{display: 'inline'}} level={5}>Group Colon, Rectum, Anus</Title>
                <Switch style={{display: 'inline'}} defaultChecked onChange={onChangeSwitch} />
              </div>
            </Form.Item>
            <Divider/>
            <Form.Item name="indicators" valuePropName="checked">
              <div className='sider-component'>
                <Title style={{display: 'inline'}} level={5}>Include NMSC</Title>
                <Switch style={{display: 'inline'}} defaultChecked onChange={onChangeSwitch} />
              </div>
            </Form.Item>
            <Divider/>
            <Form.Item name="indicators" valuePropName="checked">
              <div className='sider-component'>
                <Title style={{display: 'inline'}} level={5}>Include NMSC in other cancers</Title>
                <Switch style={{display: 'inline'}} defaultChecked onChange={onChangeSwitch} />
              </div>
            </Form.Item>
            <Divider/>
            <Form.Item name="indicators" valuePropName="checked">
              <div className='sider-component'>
                <Title style={{display: 'inline'}} level={5}>More options</Title>
                <Switch style={{display: 'inline'}} defaultChecked onChange={onChangeSwitch} />
                <div style={{padding: 10}}>
                  <Button type='primary'>Re-initialize all values</Button>
                </div>
              </div>
            </Form.Item>

          </Form>
          </div>
        </Sider>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Chart</Breadcrumb.Item>
            <Breadcrumb.Item>{current}</Breadcrumb.Item>
          </Breadcrumb>
          <PageContainer>
            {current === 'multi-bars' ? <StatisticalChart/>
            : current === 'pie-charts' ? <PieChart/> 
            : current === 'scatter-plot'? <ScatterChart/> 
            : current === 'tree-map' ? <TreeMap/>
            :<NoFoundPage/>}
          </PageContainer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default VietNameseCancer;