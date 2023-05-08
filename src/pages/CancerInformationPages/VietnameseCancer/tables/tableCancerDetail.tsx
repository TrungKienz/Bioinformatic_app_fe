import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useState } from 'react';
import { dataNewCaseBothSexes } from '../data/dataNewCase';

export const tableCancerDetail = (data: any) => {
  const columns: ProColumns[] = [
    {
      title: 'Ung thư',
      dataIndex: 'Cancer',
      hideInSearch: true,
    },
    {
      title: 'Số trường hợp',
      dataIndex: 'Cases',
      sorter: (a, b) => a.samples_tested - b.samples_tested,
      hideInSearch: true,
      align: 'left',
    },
  ];

  return (
    <ProTable
      columns={columns}
      dataSource={data}
      toolbar={{
        title: 'Bảng thống kê chi tiết',
        settings: [],
      }}
      rowKey="key"
      search={false}
      dateFormatter="string"
    />
  );
};
