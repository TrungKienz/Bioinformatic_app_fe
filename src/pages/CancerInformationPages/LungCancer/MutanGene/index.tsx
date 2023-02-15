import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import React, { useState } from 'react';

const MutanGene = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async (params: any, sort: any, filter: any) => {
    const response = await fetch('http://localhost:3000/mutation-lung-gene');
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
      title: 'TRƯỜNG HỢP MANG ĐỘT BIẾN',
      dataIndex: 'mutatedSamples',
      sorter: (a, b) => a.mutatedSamples - b.mutatedSamples,
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'TỔNG SỐ MẪU',
      dataIndex: 'samplesTested',
      sorter: (a, b) => a.samplesTested - b.samplesTested,
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'TỶ LỆ TRƯỜNG HỢP MANG ĐỘT BIẾN',
      render: (_, row) => ((row.mutatedSamples / row.samplesTested)*100).toFixed(2)+'%',
      hideInSearch: true,
      align: 'center',
    },
  ];

  return (
    <ProTable
      columns={columns}
      request={fetchData}
      toolbar={{
        title: 'Gen đột biến',
        search: {
            onSearch: value => setSearchTerm(value),
            onChange: e => setSearchTerm(e.target.value),
        },
        
        settings: [],
      }}
      rowKey="key"
      search = {false}
      pagination={{ pageSize: 10 }}
    />
    
  );
};

export default MutanGene;
