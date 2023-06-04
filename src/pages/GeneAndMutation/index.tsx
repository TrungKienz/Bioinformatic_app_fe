import { PageContainer } from '@ant-design/pro-components';
import { Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import NoFoundPage from '../404';
import GeneAndMutation from './geneAndMutation';
import Article from './Articale';

const items: MenuProps['items'] = [
  {
    label: 'Danh sách gene đột biến',
    key: 'mutationGene',
  },
  {
    label: 'Bài báo liên quan',
    key: 'article',
  },
];

const CancerInformation: React.FC = () => {
  const [current, setCurrent] = useState('mutationGene');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  if (current === 'mutationGene') {
    return (
      <PageContainer>
        <Menu
          style={{}}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <GeneAndMutation />
      </PageContainer>
    );
  } else if (current === 'article') {
    return (
      <PageContainer>
        <Menu
          style={{}}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Article />
      </PageContainer>
    );
  } else {
    return <NoFoundPage />;
  }
};

export default CancerInformation;
