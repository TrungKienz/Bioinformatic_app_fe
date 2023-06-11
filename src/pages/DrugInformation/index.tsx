import axios from 'axios';
import { Descriptions, Input, List, Tag } from 'antd';
import * as breast_asia from './data/breast_asia.json';
import * as hepatocellular_carinom_asia from './data/hepatocellular_carinom_asia.json';
import * as large_intestine_asia from './data/large_intestine_asia.json';
import * as lung_asia from './data/lung_asia.json';
import * as thyroid_asia from './data/thyroid_asia.json';
import { useEffect, useState } from 'react';

const lungCancerPage = '/lung-cancer/drug';
const liverCancerPage = '/liver-cancer/drug';
const breastCancerPage = '/breast-cancer/drug';
const thyroidCancerPage = '/thyroid-cancer/drug';
const colorectalCancerPage = '/colorectal-cancer/drug';

interface DrugInfo {
  'Gene name': string;
  'Genomic Position': string;
  'CDS Mutation': string;
  'AA Mutation': string;
  Disease: string;
  therapy_rank: number;
  'Response to Drug': string;
  Therapies: string;
  Description: string;
  'rs value': string | number;
  pmid: string;
}
let drugInfor: DrugInfo[] = [];

const DrugInformation = () => {
  const [searchText, setSearchText] = useState('');
  const [data1, setData] = useState([]);

  const handleSearch = (value: any) => {
    setSearchText(value);
  };

  switch (location.pathname) {
    case lungCancerPage:
      drugInfor = lung_asia;
      break;
    case liverCancerPage:
      drugInfor = breast_asia;
      break;
    case breastCancerPage:
      drugInfor = thyroid_asia;
      break;
    case thyroidCancerPage:
      drugInfor = large_intestine_asia;
      break;
    case colorectalCancerPage:
      drugInfor = hepatocellular_carinom_asia;
      break;
    default:
      drugInfor = [];
      break;
  }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('./data/lung_asia.json');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  //   console.log(response);
  // };
  // const filteredData = data1.filter((item) =>
  //   Object.values(item).some((value) =>
  //     String(value).toLowerCase().includes(searchText.toLowerCase()),
  //   ),
  // );
  const drugInforConverted = Object.values(drugInfor);
  const data = Array.from({ length: drugInforConverted.length }).map((_, i) => {
    const pmid = drugInforConverted[i].pmid;
    const geneName = drugInforConverted[i]['Gene name'];
    const geneLocation = drugInforConverted[i]['Genomic Position'];
    const nucleotitMutation = drugInforConverted[i]['CDS Mutation'];
    const axitaminMutation = drugInforConverted[i]['AA Mutation'];
    const rsValue = drugInforConverted[i]['rs value'];
    const drugName = drugInforConverted[i]['Therapies'];
    const drugResponce = drugInforConverted[i]['Response to Drug'];
    const drugClassification = drugInforConverted[i]['therapy_rank'];
    const diseaseName = drugInforConverted[i]['Disease'];
    const description = drugInforConverted[i]['Description'];
    const href =
      pmid && pmid.replace(/[^a-zA-Z]/g, '') === 'PubMed'
        ? `https://pubmed.ncbi.nlm.nih.gov/${pmid.replace(/\D/g, '')}`
        : '';
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
              <Descriptions.Item label="Đáp ứng thuốc">{item.drugResponce}</Descriptions.Item>
              <Descriptions.Item label="Phân loại thuốc">
                {item.classificationName}
              </Descriptions.Item>
              <Descriptions.Item label="Bệnh">{item.diseaseName}</Descriptions.Item>
              <Descriptions.Item label="Tài liệu tham khảo">
                <Tag color="#108ee9">
                  <a target="_blank" href={item.href}>
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
