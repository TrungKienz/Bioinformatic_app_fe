import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useState } from 'react';
import { server } from '@/pages/Api';

const PatientsList = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const fetchData = async (params: any, sort: any, filter: any) => {
    const response = await fetch(server);
    const data = await response.json();
    return {
      data: data.filter((row: { gene_name: string }) =>
        row.gene_name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    };
  };

  const columns: ProColumns[] = [
    {
      title: 'Căn cước công dân',
      dataIndex: 'gene_name',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.gene_name).toLowerCase().includes(String(value).toLowerCase());
      },
      render: (_, record) => {
        const gene_name = record.gene_name;
        return (
          <a
            href={`https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=n&in=t&ln=${gene_name}&sn=liver&src=tissue&wgs=off`}
            target='_blank'
          >
            {gene_name}
          </a>
        );
      },
    },
    {
      title: 'Giới tính',
      dataIndex: 'samples_tested',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'Năm sinh',
      dataIndex: '',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'Tuổi phát hiện bệnh',
      dataIndex: '',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'Vị trí ung thư',
      dataIndex: '',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'Tỉnh',
      dataIndex: '',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'Huyện/Thành phố',
      dataIndex: '',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'Năm tử vong',
      dataIndex: '',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'Thời gian sống',
      dataIndex: '',
      hideInSearch: true,
      align: 'center',
    },
  ];


  return (
    <ProTable
      columns={columns}
      request={fetchData}
      toolbar={{
        title: 'Gen không đột biến',
        search: {
          onSearch: (value) => setSearchTerm(value),
          onChange: (e) => setSearchTerm(e.target.value),
        },
        settings: [],
      }}
      rowKey="key"
      search={false}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default PatientsList;
