import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Hust',
          title: 'Lab Bioinformatics, BK.AI, SoICT, Trường ĐHBKHN',
          href: 'https://hust.edu.vn/',
          blankTarget: true,
        },
        {
          key: 'Hmu',
          title: 'và Trường ĐHY Hà Nội',
          href: 'https://hmu.edu.vn/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
