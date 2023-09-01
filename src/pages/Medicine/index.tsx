import CRUDService from '@/services/CRUDService';
import { currentPage as crPage } from '@/shared/CurrentPage';
import { Button, Cascader, Col, Descriptions, Form, Input, List, Row, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { drugsInformationEp } from '../EndPoint';
import { server } from '../Api';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  {
    value: 'asia',
    label: 'Châu Á',
  },
  {
    value: 'world',
    label: 'Quốc tế',
  },
];

const DrugInformation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataDrug, setDataDrug] = useState<any[]>([]);
  const [dataFilter, setDataFilter] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const getDrugInfo = async () => {
    try {
      const data = await CRUDService.getAllService(
        `${server}/medicine?page=${currentPage}&limit=5`,
      );
      setDataDrug(data.medicineModels);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDrugInfo();
  }, [currentPage]);

  const handleSearch = async (values: any) => {
    try {
      const data = await CRUDService.searchService(
        `${drugsInformationEp}/search-drug?limit=5`,
        values,
      );
      setDataFilter(data.dataDrug);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTableChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderData = dataFilter.length > 0 ? dataFilter : dataDrug;

  const renderDrugItems = renderData.map((item: any) => {
    const id = item['_id'];
    const geneName = item['geneName'];
    const mutation = item['mutation'];
    const medicine = item['medicine'];
    const valence = item['valence'];
    const responseMedication = item['responseMedication'];
    const therapyRank = item['therapyRank'];
    const priority = item['priority'];
    const drugLicensing = item['drugLicensing'];
    const references = item['references'];
    const note = item['note'];

    const pmidSplitArray = references.split(':');
    const href =
    references && pmidSplitArray[0] === 'PMID'
        ? `https://pubmed.ncbi.nlm.nih.gov/${pmidSplitArray[1]}`
        : `https://clinicaltrials.gov/ct2/show/${pmidSplitArray[1]}`
    return (
      <List.Item key={id}>
        <List.Item.Meta
          title={<Tag color="blue">{geneName}</Tag>}
          // description={description}
        />
        <Descriptions>
          <Descriptions.Item label="Tên gene">{geneName}</Descriptions.Item>
          <Descriptions.Item label="Đột biến">{mutation}</Descriptions.Item>
          <Descriptions.Item label="Thuốc đích">{medicine}</Descriptions.Item>
          <Descriptions.Item label="Hóa trị">{valence}</Descriptions.Item>
          <Descriptions.Item label="Đáp ứng thuốc">{responseMedication}</Descriptions.Item>
          <Descriptions.Item label="Therapy rank">{therapyRank}</Descriptions.Item>
          <Descriptions.Item label="Thứ tự ưu tiên (Nếu 1 đột biến có nhiều thuốc đáp ứng)">{priority}</Descriptions.Item>
          <Descriptions.Item label="Tình trạng cấp phép thuốc">{drugLicensing}</Descriptions.Item>
          <Descriptions.Item label="Lưu ý">{note}</Descriptions.Item>
          <Descriptions.Item label="Tài liệu tham khảo">
            <Tag color="#108ee9">
              <a target="_blank" rel="noopener noreferrer" href={href}>
                Xem
              </a>
            </Tag>
          </Descriptions.Item>
        </Descriptions>
      </List.Item>
    );
  });

  return (
    <>
      <div>
        <h1>Thuốc điều trị đích</h1>
      </div>
      <Form onFinish={handleSearch}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="region" label="Phân loại" initialValue={'asia'}>
              <Cascader options={options} expandTrigger="hover" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="geneName">
              <Input placeholder="Nhập tên gene" allowClear />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: handleTableChange,
          total: totalPages,
          pageSize: 5,
          hideOnSinglePage: true,
        }}
        dataSource={renderDrugItems}
        renderItem={(item) => item}
      />
    </>
  );
};

export default DrugInformation;

