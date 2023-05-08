import { server } from '@/pages/Api';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';

const lungCancerPage = '/cancer/lung-cancer';
const liverCancerPage = '/cancer/liver-cancer';
const breastCancerPage = '/cancer/breast-cancer';
const thyroidCancerPage = '/cancer/thyroid-cancer';
const colorectalCancerPage = '/cancer/colorectal-cancer';

const NormalGenes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [totalPages, setTotalPages] = useState(1);

  let URL = '';

  if (location.pathname === lungCancerPage) {
    URL = `${server}/normal-lung-gene`;
  } else if (location.pathname === liverCancerPage) {
    URL = `${server}/normal-liver-gene`;
  } else if (location.pathname === breastCancerPage) {
    URL = `${server}/normal-breast-gene`;
  } else if (location.pathname === thyroidCancerPage) {
    URL = `${server}/normal-thyroid-gene`;
  } else if (location.pathname === colorectalCancerPage) {
    URL = `${server}/normal-colorectal-gene`;
  } else {
    URL = '';
  }

  useEffect(() => {
    fetch(`${URL}?page=${pagination.current}&limit=${pagination.pageSize}`)
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(data.totalPages);
        if (location.pathname === lungCancerPage) {
          setData(data.normalLungGeneModels);
        } else if (location.pathname === liverCancerPage) {
          setData(data.normalLiverGeneModels);
        } else if (location.pathname === breastCancerPage) {
          setData(data.normalBreastGeneModels);
        } else if (location.pathname === thyroidCancerPage) {
          setData(data.normalThyroidGeneModels);
        } else if (location.pathname === colorectalCancerPage) {
          setData(data.normalColorectalGeneModels);
        }
      });
  }, [pagination.current, pagination.pageSize]);

  const handleTableChange = (pagination: any) => {
    setPagination(pagination);
  };
  console.log(data);
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
            target="_blank"
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
      dataSource={data}
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
      dateFormatter="string"
      pagination={{ total: totalPages, pageSize: 10 }}
      onChange={handleTableChange}
    />
  );
};

export default NormalGenes;
