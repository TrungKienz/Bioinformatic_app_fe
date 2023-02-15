import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
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
