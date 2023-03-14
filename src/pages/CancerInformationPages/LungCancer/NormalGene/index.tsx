import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useState } from 'react';

const lungCancerPage = '/cancer/lung-cancer';
const liverCancerPage = '/cancer/liver-cancer';
const breastCancerPage = '/cancer/breast-cancer';
const thyroidCancerPage = '/cancer/thyroid-cancer';
const colorectalCancerPage = '/cancer/colorectal-cancer';

const NormalGenes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let URL = '';

  if (location.pathname === lungCancerPage) {
    URL = 'http://localhost:3000/normal-lung-gene';
  } else if (location.pathname === liverCancerPage) {
    URL = 'http://localhost:3000/normal-liver-gene';
  } else if (location.pathname === breastCancerPage) {
    URL = 'http://localhost:3000/normal-breast-gene';
  } else if (location.pathname === thyroidCancerPage) {
    URL = 'http://localhost:3000/normal-thyroid-gene';
  } else if (location.pathname === colorectalCancerPage) {
    URL = 'http://localhost:3000/normal-colorectal-gene';
  } else {
    URL = '';
  }

  const fetchData = async (params: any, sort: any, filter: any) => {
    const response = await fetch(URL);
    const data = await response.json();
    return {
      data: data.filter((row: { gene_name: string }) =>
        row.gene_name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    };
  };

  const columns: ProColumns[] = [
    {
      title: 'TÊN GEN',
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
      title: 'TỔNG SỐ MẪU',
      dataIndex: 'samples_tested',
      sorter: (a, b) => a.samples_tested - b.samples_tested,
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'TRƯỜNG HỢP MANG ĐỘT BIẾN',
      dataIndex: 'mutated_samples',
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

export default NormalGenes;
