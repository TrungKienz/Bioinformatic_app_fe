import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { AutoComplete, Button, Col, Form, Input, Row, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { drugsInformationEp } from '../EndPoint';

const NormalGenes = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [autoCompleteValue, setAutoCompleteValue] = useState('');
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [ totalPages, setTotalPages ] = useState(1);


  useEffect(() => {
    fetch(`${drugsInformationEp}?page=${pagination.current}&limit=${pagination.pageSize}`)
      .then(response => response.json())
      .then(data => {
        setTotalPages(data.totalPages);
        setData(data.drugInformationModels);
      });
  }, [pagination.current, pagination.pageSize]);

  const handleTableChange = (pagination: any) => {
    setPagination(pagination);
  };

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      Object.values(item).some(
        (value) => value && value.toString().toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
    setFilteredData(filteredData);
  };

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

  // const uniqueGeneOptions = [...new Set(data.map((item) => item.gene))].map((gene) => {
  //   const item = data.find((d) => d.gene === gene);
  //   return {
  //     value: `${item.gene}`,
  //     label: (
  //       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //         <span>{item.gene}</span>
  //       </div>
  //     ),
  //   };
  // });

  // const uniqueDrugOptions = [...new Set(data.flatMap((item) => item.drug))].map((drug) => {
  //   return {
  //     value: drug,
  //     label: (
  //       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //         <span>{drug}</span>
  //       </div>
  //     ),
  //   };
  // });

  // const handleAutoCompleteSelect = (value: any) => {
  //   setSearchText(value);
  //   setAutoCompleteValue(value);
  //   handleSearch(value);
  // };

  // const handleAutoCompleteSearch = (value: any) => {
  //   setAutoCompleteValue(value);
  // };

  return (
    <>
      <Row>
        <Col span={8}>
          <Form.Item name="note" label="Tìm kiếm theo Gene:" >
            <AutoComplete
              // options={uniqueGeneOptions}
              value={autoCompleteValue}
              // onSelect={handleAutoCompleteSelect}
              // onSearch={handleAutoCompleteSearch}
              style={{ width: 400 }}
            >
              <Input allowClear placeholder="Search" />
            </AutoComplete>
          </Form.Item>
        </Col> 
        <Col span={8}>
          <Form.Item name="note" label="Tìm kiếm theo tên thuốc:">
            <AutoComplete
              // options={uniqueDrugOptions}
              value={autoCompleteValue}
              // onSelect={handleAutoCompleteSelect}
              // onSearch={handleAutoCompleteSearch}
              style={{ width: 400 }}
            >
              <Input allowClear placeholder="Search" />
            </AutoComplete>
          </Form.Item>
        </Col> 
        <Col span={8}>
            <Button type="primary" onClick={handleSearch}>
              Search
            </Button> 
        </Col>
      </Row>

      <ProTable
        columns={columns}
        dataSource={filteredData.length?filteredData:data}
        toolbar={{
          title: 'Thông tin thuốc',
          settings: [],
        }}
        rowKey="key"
        search={false}
        dateFormatter="string"
        pagination={{total: totalPages, pageSize: 10}}
        onChange={handleTableChange}
      />
    </>
  );
};

export default NormalGenes;
