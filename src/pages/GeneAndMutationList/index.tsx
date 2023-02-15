import React from 'react';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Form  } from 'antd';
import { AutoComplete, Input } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: string;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['CHP2-UT08VIET-FFPE-S-69', 'CHP2-UT09THANG-FFPE-S-70', 'HCC1395_FD', 'HCC1395_FD1', 'HCC1395_FD1'];
const containers = ['F317I', 'L248V', 'F359C', 'Q252H	', 'G250E'];
for (let i = 0; i < 10; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'Resistance',
    containers: containers[Math.floor(Math.random() * creators.length)],
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'BIẾN ĐỔI',
    dataIndex: 'containers',
  },
  {
    title: 'ONCOGENIC',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: 'MUTATION EFFECT',
    dataIndex: 'creator',
  },
  {
    title: 'DẪN CHỨNG',
    width: 120,
    valueType: 'option',
    render: () => [
      <a key="link">Chi tiết</a>,
    ],
  },
];


const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
    </div>
  ),
});

const options = [
  {
    label: 'Gene name',
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)]
  }
];

export default () => {
  return (
    <>
      <Form.Item name="note" label="Tìm kiếm theo Gene: " rules={[{ required: true }]}>
        <AutoComplete
        popupClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{ width: 510 }}
        options={options}
        >
          <Input.Search size="middle" placeholder="input here" />
        </AutoComplete>
      </Form.Item>
    
      <ProTable<TableListItem>
        columns={columns}
        request={(params, sorter, filter) => {
        console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        toolbar={{
          title: 'Danh sách gene đột biến',
          settings: [],
        }}
        rowKey="key"
        search={false}
      />
    </>
  );
};