import { PageContainer } from '@ant-design/pro-components';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';

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

  return (
    <PageContainer>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <h1>This is top gene page</h1>
    </PageContainer>
  );
};

export default CancerInformation;
