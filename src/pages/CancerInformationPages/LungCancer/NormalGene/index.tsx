import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import React, { useState } from 'react';

const NormalGenes = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async (params: any, sort: any, filter: any) => {
    const response = await fetch('http://localhost:3000/nomal-lung-gene');
    const data = await response.json();
    return {
      data: data.filter((row: { geneName: string; }) => row.geneName.toLowerCase().includes(searchTerm.toLowerCase())),
    };
  };

  const columns: ProColumns[] = [
    {
      title: 'TÊN GEN',
      dataIndex: 'geneName',
      filteredValue:[searchTerm],
      onFilter: (value, record) => {
        return String(record.geneName).toLowerCase().includes(String(value).toLowerCase());
      },
      render: (_, record) => {
        const genName = record.geneName;
        return <a href={`https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=n&in=t&ln=${genName}&sn=liver&src=tissue&wgs=off`}>{genName}</a>
      },
    },
    {
      title: 'TỔNG SỐ MẪU',
      dataIndex: 'samplesTested',
      sorter: (a, b) => a.samplesTested - b.samplesTested,
      hideInSearch: true,
      align: 'center'
    },
    {
      title: 'TRƯỜNG HỢP MANG ĐỘT BIẾN',
      dataIndex: 'mutatedSamples',
      hideInSearch: true,
      align: 'center'
    },
  ];

  return (
    <ProTable
      columns={columns}
      request={fetchData}
      toolbar={{
        title: 'Gen không đột biến',
        search: {
            onSearch: value => setSearchTerm(value),
            onChange: e => setSearchTerm(e.target.value),
        },
        
        // actions: [
        //   <Button
        //     key="key"
        //     type="primary"
        //   >
        //     <SearchOutlined />
        //     Tìm kiếm
        //   </Button>,
        // ],
        settings: [],
      }}
      rowKey="key"
      search = {false}
      pagination={{ pageSize: 10 }}
    />
    
  );
};

export default NormalGenes;
