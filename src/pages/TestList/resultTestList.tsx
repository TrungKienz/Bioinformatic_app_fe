import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Descriptions, List, message, Modal, Space, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { server } from '../Api';
import { testCaseEp } from '../EndPoint';

const { confirm } = Modal;
const ResultTest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

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
      console.log(testCase);
      setData(testCase);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  fetchData();
}, []);

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
        <h1>Thông tin chi tiết giải trình tự</h1>
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
          onChange: (page) => {
            console.log(page);
          },
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
              <Descriptions.Item label="Protein">
                {item.Protein}
              </Descriptions.Item>
              <Descriptions.Item label="Loại đột biến">
                {item.VariationType}
              </Descriptions.Item>
              <Descriptions.Item label="Giá trị RS">{item.RS_ID}</Descriptions.Item>
              <Descriptions.Item label="Vị trí">{item.Position}</Descriptions.Item>
              <Descriptions.Item label="Đáp ứng thuốc">{item.DrugResponse}</Descriptions.Item>
              <Descriptions.Item label="Variant Rate">
                {item.VariantRate}
              </Descriptions.Item>
              <Descriptions.Item label="Read Depth">{item.ReadDepth}</Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </>
  );
};

export default ResultTest;