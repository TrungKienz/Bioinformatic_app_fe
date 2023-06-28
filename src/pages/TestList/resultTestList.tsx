import { Button, Descriptions, Divider, List, message, Modal, Space, Tag } from 'antd';
import { useEffect, useState } from 'react';
import CRUDService from '@/services/CRUDService';
import { testCaseEp, drugsInformationEp } from '../EndPoint';

const { confirm } = Modal;

const ResultTest = () => {
  const [data, setData] = useState([]);
  const [dataPatient, setDataPatient] = useState([]);

  const currentLocation = location.pathname;
  const id = currentLocation.replace('/tests/detail/', '');

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${testCaseEp}/detail/${id}`);
      const data = await response.json();
      const testCase = data.map((obj: any) => ({
        RS_ID: obj.RS_ID,
        Gene: obj.Gene,
        IDTest: obj.IDTest,
        Nucleotide: obj.Nucleotide,
        Protein: obj.Protein,
        VariationType: obj.VariationType,
        Position: obj.Position,
        DrugResponse: obj.DrugResponse,
        VariantRate: obj.VariantRate,
        ReadDepth: obj.ReadDepth,
      }));
      setData(testCase);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  fetchData();
}, []);

useEffect(() => {
  const fetchTestData = async () => {
    try {
      const response = await fetch(`${testCaseEp}/find/${id}`);
      const data = await response.json();
      setDataPatient(data)
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  fetchTestData();
}, []);

  const extractAndSendData = async (item: any) => {
    const dataCancerInfor = {
      gene: item.Gene,
      protein: item.Protein,
      condition: 'lung',
    };
  
    try {
      const data = await CRUDService.searchService(`${drugsInformationEp}/prediction/evidence`, dataCancerInfor);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const dataList = Array.from({ length: data.length }).map((_, i) => {
    const RS_ID = data[i]['RS_ID'] === 'undefined' ? '-': data[i]['RS_ID'];
    const Gene = data[i]['Gene'];
    const Nucleotide = data[i]['Nucleotide'];
    const Protein = data[i]['Protein'];
    const VariationType = data[i]['VariationType'];
    const Position = data[i]['Position'];
    const DrugResponse = data[i]['DrugResponse'];
    const VariantRate = data[i]['VariantRate'];
    const ReadDepth = data[i]['ReadDepth'];
    return {
      RS_ID,
      Gene,
      Nucleotide,
      Protein,
      VariationType,
      DrugResponse,
      Position,
      VariantRate,
      ReadDepth,
    };
  });



  return (
    <>
     <div>
      {dataPatient.length > 0 && (
        <Descriptions title="Thông tin chi tiết giải trình tự" size="middle">
          <Descriptions.Item label="Mã xét nghiệm">
            {dataPatient[0]['patientID']}
          </Descriptions.Item>
          <Descriptions.Item label="Tên bệnh nhân">
            {dataPatient[0]['patientName']}
          </Descriptions.Item>
          <Descriptions.Item label="Mẫu mô">
            {dataPatient[0]['testName']}
          </Descriptions.Item>
          <Descriptions.Item label="Mãu bệnh phẩm">
            {dataPatient[0]['primaryTissue']}
          </Descriptions.Item>
          <Descriptions.Item label="Thông tin thuốc điều trị">
            <Button type="primary">Thông tin chi tiết</Button>
          </Descriptions.Item>
        </Descriptions>
      )}
    </div>

      {/* <Input.Search
        placeholder="Search"
        allowClear
        onSearch={handleSearch}
        style={{ width: 400 }}
      /> */}
      
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5,
          hideOnSinglePage: true,
        }}
        dataSource={dataList}
        renderItem={(item) => (
          <List.Item key={item.RS_ID}>
            <List.Item.Meta
              title={<Tag color="blue">{item.Gene}</Tag>}
            />
            <Descriptions>
              <Descriptions.Item label="Tên gene">{item.Gene}</Descriptions.Item>
              <Descriptions.Item label="Nucleotide">{item.Nucleotide}</Descriptions.Item>
              <Descriptions.Item label="Protein">{item.Protein}</Descriptions.Item>
              <Descriptions.Item label="Loại đột biến">{item.VariationType}</Descriptions.Item>
              <Descriptions.Item label="Giá trị RS">{item.RS_ID}</Descriptions.Item>
              <Descriptions.Item label="Vị trí">{item.Position}</Descriptions.Item>
              {/* <Descriptions.Item label="Đáp ứng thuốc">{item.DrugResponse}</Descriptions.Item> */}
              <Descriptions.Item label="Variant Rate">{item.VariantRate}</Descriptions.Item>
              <Descriptions.Item label="Read Depth">{item.ReadDepth}</Descriptions.Item>
              {/* <Descriptions.Item label="Thông tin thuốc điều trị"><Button type="primary" onClick={() => extractAndSendData(item)}>Chi tiết</Button></Descriptions.Item> */}
            </Descriptions>
          </List.Item>
        )}
      />
    </>
  );
};

export default ResultTest;