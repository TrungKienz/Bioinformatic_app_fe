import { Button, Cascader, Col, Descriptions, Form, Input, List, Row, Tag } from 'antd';
import { useEffect, useState } from 'react';
import CRUDService from '@/services/CRUDService';
import { drugsInformationEp } from '../EndPoint';
import { currentPage as crPage} from '@/shared/CurrentPage';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'asia',
    label: 'Châu á',
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

  const locationPg = crPage(location.pathname);

  const isLocation = (locationPg: string) => {
    const cancerCondition= [
      { locationPage: 'lungCancerPage', typeCancer: 'lung' },
      { locationPage: 'liverCancerPage', typeCancer: 'hepatocellular_carcinoma' },
      { locationPage: 'breastCancerPage', typeCancer: 'breast' },
      { locationPage: 'thyroidCancerPage', typeCancer: 'thyroid' },
      { locationPage: 'colorectalCancerPage', typeCancer: 'large_intestine' },
    ];

    const matchedPg = cancerCondition.find(
      (locationPage) => locationPage.locationPage === locationPg
    );

    return matchedPg?.typeCancer;
  }

  const getDrugInfor = async () => {
    try {
      const data = await CRUDService.getAllService(`${drugsInformationEp}/get-drug?page=${currentPage}&limit=5&typeCancer=${isLocation(locationPg)}`);
      setDataDrug(data.dataDrug);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getDrugInfor()
  },[currentPage])

  const handleSearch = async (values: any) => {
    const data = await CRUDService.searchService(`${drugsInformationEp}/search-drug?limit=5&typeCancer=${isLocation(locationPg)}`, values);
    // setDataFilter(data.drugData);
    setTotalPages(data.totalPages);
  };
  const handleTableChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const data = Array.from({ length: dataDrug?.length }).map((_, i) => {
    const pmid = dataDrug[i]['pmid'];
    const geneName = dataDrug[i]['Gene name'];
    const geneLocation = dataDrug[i]['Genomic Position'];
    const nucleotitMutation = dataDrug[i]['CDS Mutation'];
    const axitaminMutation = dataDrug[i]['AA Mutation'];
    const rsValue = (dataDrug[i]['rs valuesource_db'] === undefined ? 'Không có':dataDrug[i]['rs valuesource_db']);
    const drugName = dataDrug[i]['Therapies'];
    const drugResponce = dataDrug[i]['Response to Drug'];
    const drugClassification = dataDrug[i]['therapy_rank'];
    const diseaseName = dataDrug[i]['Disease'];
    const description = dataDrug[i]['Description'];
    const pmidSplitArray = pmid.split(':');
    const href =
      pmid && pmidSplitArray[0] === 'PubMed'
        ? `https://pubmed.ncbi.nlm.nih.gov/${pmidSplitArray[1]}`
        : `https://clinicaltrials.gov/ct2/show/${pmidSplitArray[1]}`;
    const classificationName =
      drugClassification === 1
        ? 'Việt Nam'
        : drugClassification === 2
        ? 'Hết hạn'
        : drugClassification === 3
        ? 'FDA phê duyệt'
        : drugClassification === 4
        ? 'Tổ chức khác'
        : '';
    return {
      href,
      description,
      geneName,
      geneLocation,
      nucleotitMutation,
      axitaminMutation,
      rsValue,
      drugName,
      drugResponce,
      classificationName,
      diseaseName,
    };
  });

  return (
    <>
      <div>
        <h1>Thuốc điều trị đích</h1>
      </div>
      <Form onFinish={handleSearch}>
        <Row>
          <Col span={8}>
            <Form.Item name='region' label='Khu vực' initialValue={'asia'} >
              <Cascader
                options={options}
                expandTrigger="hover"
                style={{ width: 100}}
                
                // onChange={onChange}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='geneName' >
              <Input
                placeholder="Nhập tên gene"
                allowClear
                // onSearch={handleSearch}
                style={{ width: 300 }}
              />
            </Form.Item>
          </Col>
          <Button name="search" type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
        </Row>
      </Form>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
            handleTableChange(page);
          },
          total: totalPages,
          pageSize: 5,
          hideOnSinglePage: true,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.geneName}>
            <List.Item.Meta
              title={<Tag color="blue">{item.geneName}</Tag>}
              description={item.description}
            />
            {/* {item.content} */}
            <Descriptions>
              <Descriptions.Item label="Tên gene">{item.geneName}</Descriptions.Item>
              <Descriptions.Item label="Vị trí gene">{item.geneLocation}</Descriptions.Item>
              <Descriptions.Item label="Đột biến nucleotit">
                {item.nucleotitMutation}
              </Descriptions.Item>
              <Descriptions.Item label="Đột biến axit amin">
                {item.axitaminMutation}
              </Descriptions.Item>
              <Descriptions.Item label="Giá trị RS">{item.rsValue}</Descriptions.Item>
              <Descriptions.Item label="Thuốc đích">{item.drugName}</Descriptions.Item>
              {/* <Descriptions.Item label="Đáp ứng thuốc">{item.drugResponce}</Descriptions.Item> */}
              <Descriptions.Item label="Phân loại thuốc">
                {item.classificationName}
              </Descriptions.Item>
              <Descriptions.Item label="Bệnh">{item.diseaseName}</Descriptions.Item>
              <Descriptions.Item label="Tài liệu tham khảo">
                <Tag color="#108ee9">
                  <a target="_blank" href={item.href} >
                    Xem
                  </a>
                </Tag>
              </Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </>
  );
};

export default DrugInformation;
