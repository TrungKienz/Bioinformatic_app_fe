import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button, Col, Form, Input, Row, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { drugsInformationEp } from '../EndPoint';
import DrugsInformationService from '@/services/drugInformation';

const NormalGenes = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [totalPages, setTotalPages] = useState(1);

  const getUrl = `${drugsInformationEp}?page=${pagination.current}&limit=${pagination.pageSize}`;
  const searchUrl = `${drugsInformationEp}/search?page=${pagination.current}&limit=${pagination.pageSize}`;

  const handleRefresh = useEffect(() => {
    fetch(getUrl)
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(data.totalPages);
        setData(data.drugInformationModels);
      });
  }, [pagination.current, pagination.pageSize]);

  const handleTableChange = (pagination: any) => {
    setPagination(pagination);
  };

  const handleSearch = async (values: any) => {
    console.log(values)
    const dataDrugInformation = await DrugsInformationService.search(searchUrl,values);
    setData(dataDrugInformation.data);
    setTotalPages(dataDrugInformation.totalPages);
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
      render: (articles: any, data) => (
        <Link key="showDetail" style={{ textDecoration: 'underline' }} to={`/drug/${data._id}`}>
          {articles.length}
        </Link>
      ),
    },
  ];

  return (
    <>
      <Form onFinish={handleSearch}>
        <Row>
          <Col span={8}>
            <Form.Item name="geneName" label="Tìm kiếm theo Gene:">
              <Input allowClear placeholder="Nhập tên gene" style={{ width: 200 }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="drugName" label="Tìm kiếm theo tên thuốc:">
              <Input allowClear placeholder="Nhập tên thuốc" style={{ width: 200 }}/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item name="cancerMainType" label="Tìm kiếm loại ung thư (Main type):">
              <Input allowClear placeholder="Nhập tên loại ung thư (Main type)" style={{ width: 200 }}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="cancerSubType" label="Tìm kiếm theo loại ung thư (Sub type):">
              <Input allowClear placeholder="Nhập loại ung thư (Sub type)" style={{ width: 200 }}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Button name="search" type="primary" htmlType='submit'>
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>

      <ProTable
        columns={columns}
        dataSource={data}
        toolbar={{
          title: 'Thông tin thuốc',
          settings: [],
        }}
        rowKey="key"
        search={false}
        dateFormatter="string"
        pagination={{ total: totalPages, pageSize: 10 }}
        onChange={handleTableChange}
      />
    </>
  );
};

export default NormalGenes;
