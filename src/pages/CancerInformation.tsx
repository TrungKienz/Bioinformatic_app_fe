import { Column } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';

const items: MenuProps['items'] = [
  {
    label: 'Top 20 gene',
    key: 'topGene',
  },
  {
    label: 'Gen đột biến',
    key: 'mutatedGenes',
  },
  {
    label: 'Gen không đột biến',
    key: 'normalGenes',
  },
];

const CancerInformation: React.FC = () => {
  const [current, setCurrent] = useState('topGene');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('http://localhost:3000/lung-cancer-information/lung_informations.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    xField: 'name',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    columnStyle: {
      radius: [5, 5, 0, 0],
    },
  };

  if (current === 'topGene') {
    return (
      <PageContainer>
        <Menu
          style={{}}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Column {...config} />
      </PageContainer>
    );
  } else if (current === 'mutatedGenes') {
    return (
      <PageContainer>
        <Menu
          style={{}}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <h1>mutatedGenes page</h1>
      </PageContainer>
    );
  } else if (current === 'normalGenes') {
    return (
      <PageContainer>
        <Menu
          style={{}}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <h1>normalGenes page</h1>
      </PageContainer>
    );
  } else {
    return <h1>Error</h1>;
  }
};

export default CancerInformation;
