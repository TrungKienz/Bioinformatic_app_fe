import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useState } from 'react';

const lungCancerPage = '/cancer/lung-cancer';
const liverCancerPage = '/cancer/liver-cancer';
const breastCancerPage = '/cancer/breast-cancer';
const thyroidCancerPage = '/cancer/thyroid-cancer';
const colorectalCancerPage = '/cancer/colorectal-cancer';

const MutanGene = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async (params: any, sort: any, filter: any) => {
    let URL = '';

    if (location.pathname === lungCancerPage) {
      URL = 'http://localhost:3000/mutation-lung-gene';
    } else if (location.pathname === liverCancerPage) {
      URL = 'http://localhost:3000/mutation-liver-gene';
    } else if (location.pathname === breastCancerPage) {
      URL = 'http://localhost:3000/mutation-breast-gene';
    } else if (location.pathname === thyroidCancerPage) {
      URL = 'http://localhost:3000/mutation-thyroid-gene';
    } else if (location.pathname === colorectalCancerPage) {
      URL = 'http://localhost:3000/mutation-colorectal-gene';
    } else {
      URL = '';
    }
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
          >
            {gene_name}
          </a>
        );
      },
    },
    {
      title: 'TRƯỜNG HỢP MANG ĐỘT BIẾN',
      dataIndex: 'mutated_samples',
      sorter: (a, b) => a.mutatedSamples - b.mutatedSamples,
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'TỔNG SỐ MẪU',
      dataIndex: 'samples_tested',
      sorter: (a, b) => a.samplesTested - b.samplesTested,
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'TỶ LỆ TRƯỜNG HỢP MANG ĐỘT BIẾN',
      render: (_, row) => ((row.mutated_samples / row.samples_tested) * 100).toFixed(2) + '%',
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

export default MutanGene;
