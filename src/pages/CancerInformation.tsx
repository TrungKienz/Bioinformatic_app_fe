import { FieldRender, PageContainer } from '@ant-design/pro-components';
import { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import NormalGene from './CancerInformationPages/LungCancer/NormalGene';
import MutanGene from './CancerInformationPages/LungCancer/MutanGene';
import TopGene from './CancerInformationPages/LungCancer/TopGene';
import NoFoundPage from './404';

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
        <TopGene />
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
        <MutanGene/>
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
       <NormalGene/>
      </PageContainer>
    );
  } else {
    return <NoFoundPage/>;
  }
};

export default CancerInformation;
