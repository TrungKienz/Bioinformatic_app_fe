import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { AutoComplete, Button, Form, Input, Tag } from 'antd';
import { useEffect, useState } from 'react';

const NormalGenes = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [autoCompleteValue, setAutoCompleteValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/drugs-information');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      Object.values(item).some(
        (value) => value && value.toString().toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
    setFilteredData(filteredData);
  };

  const handleID = (id: String) => {
    console.log(id);
  }

  const columns: ProColumns[] = [
    {
      title: 'LOẠI UNG THƯ (MAIN TYPE)',
      dataIndex: 'cancer_main_type',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'LOẠI UNG THƯ (SUB TYPE)',
      dataIndex: 'cancer_sub_type',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'GEN',
      dataIndex: 'gene',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'ĐỘT BIẾN',
      dataIndex: 'alteration',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'LEVEL',
      dataIndex: 'level',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: 'THUỐC ĐIỀU TRỊ',
      dataIndex: 'drug',
      hideInSearch: true,
      key: 'drug',
      align: 'center',
      render: (drug: any) => (
        <>
          {drug.map((drug: any) => (
            <Tag key={drug}>{drug}</Tag>
          ))}
        </>
      ),
    },
    {
      title: 'DẪN CHỨNG',
      dataIndex: 'articles',
      hideInSearch: true,
      align: 'center',
      render: ( articles: any,data) => (
          <Link key="showDetail" style={{textDecoration: 'underline'}}  to={`/drug/${data._id}`}>{articles.length}</Link>
      ),
    },
  ];

  const uniqueGeneOptions = [...new Set(data.map((item) => item.gene))].map((gene) => {
    const item = data.find((d) => d.gene === gene);
    return {
      value: `${item.gene}`,
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{item.gene}</span>
        </div>
      ),
    };
  });

  const uniqueDrugOptions = [...new Set(data.map((item) => item.drug))].map((drug) => {
    const item = data.find((d) => d.drug === drug);
    return {
      value: `${item.drug}`,
      label: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{item.drug}</span>
        </div>
      ),
    };
  });

  const handleAutoCompleteSelect = (value: any) => {
    setSearchText(value);
    setAutoCompleteValue(value);
    handleSearch(value);
  };

  const handleAutoCompleteSearch = (value: any) => {
    setAutoCompleteValue(value);
  };

  return (
    <>
      <Form.Item name="note" label="Tìm kiếm theo Gene: " rules={[{ required: true }]}>
        <AutoComplete
          options={uniqueGeneOptions}
          value={autoCompleteValue}
          onSelect={handleAutoCompleteSelect}
          onSearch={handleAutoCompleteSearch}
          style={{ width: 200 }}
        >
          <Input allowClear placeholder="Search" />
        </AutoComplete>

        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form.Item>

      <ProTable
        columns={columns}
        dataSource={filteredData.length?filteredData:data}
        toolbar={{
          title: 'Thông tin thuốc',
          settings: [],
        }}
        rowKey="key"
        search={false}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
};

export default NormalGenes;
