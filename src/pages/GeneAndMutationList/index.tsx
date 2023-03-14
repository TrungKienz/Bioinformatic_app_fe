import { placeOrder } from '@/services/swagger/store';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button, message, Modal, Space, Tag, Upload, UploadProps } from 'antd';
import { useEffect, useState } from 'react';


export default () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  let URL = 'http://localhost:3000/mutation';


  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const mutation = data.map((obj: any) => ({
      id: obj._id,
      gene_name: obj.variant.gene.hugoSymbol,
      alteration_name: obj.variant.name,
      oncogenic: obj.oncogenic,
      mutation_effect: obj.mutationEffect,
      articles: obj.variant.gene.geneAliases,
    }));
    setData(mutation);
  };

  console.log(data);

  useEffect(() => {
    fetchData().catch((error) => console.error(error));
  }, []);

  const columns: ProColumns[] = [
    {
      key: 'geneName',
      title: 'Gene',
      dataIndex: 'gene_name',
      align: 'left',
      filteredValue: [searchTerm], 
      onFilter: (value, record) => {
        return String(record.gene_name).toLowerCase().includes(String(value).toLowerCase());
      }, 
      width: '20%',
    },
    {
      key: 'alterationName',
      title: 'Đột biến',
      dataIndex: 'alteration_name',
      align: 'left',
      width: '20%',
    },
    {
      key: 'oncogenic',
      title: 'Oncogenic',
      dataIndex: 'oncogenic',
      width: '20%',
    },
    {
      key: 'mutationEffect',
      title: 'Mutation Effect',
      dataIndex: 'mutation_effect',
      width: '20%',
    },
    {
      title: 'DẪN CHỨNG',
      dataIndex: 'articles',
      hideInSearch: true,
      align: 'center',
      render: (articles: any) => (
        <Link key="showDetail" style={{textDecoration: 'underline'}} to={'/'}>{articles.length}</Link>
      ),
      width: '20%',
    },
  ];
  

  return (
    <ProTable
      columns={columns}
      dataSource={data}
      toolbar={{
        title: 'Danh sách gen đột biến',
        search: {
          onSearch: (value) => setSearchTerm(value),
          onChange: (e) => setSearchTerm(e.target.value),
          style: {width: '350px'},
          placeholder: 'Nhập tên gene',
          
        },
        settings: [],
      }}
      rowKey="key"
      search={false}
      pagination={{ pageSize: 10 }}
    />
  );
};
