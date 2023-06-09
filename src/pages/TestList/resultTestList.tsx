import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Space, Tag } from 'antd';
import { useState } from 'react';
import { server } from '../Api';

const data = [
  {
    Gene: 'SMAD4',
    'RS-ID': '1910183166',
    Nucleotide: 'NM_005359.6:c.1241del',
    Protein: 'NP_005350.1:p.Leu414Ter',
    VariationType: 'Deletion+nonsense',
    VariantLength: '1',
    Position: '51067118',
    DrugResponse: 'Pathogenic',
    VariantRate: '24.44%',
    ReadDepth: '45',
  },
  {
    Gene: 'APC',
    'RS-ID': '41115',
    Nucleotide: 'NM_001354906.2:c.3630G>A',
    Protein: 'NP_001341835.1:p.Thr1210=',
    VariationType: 'single_nucleotide_variant+synonymous_variant',
    VariantLength: '1',
    Position: '112840073',
    DrugResponse: 'Benign',
    VariantRate: '100.0%',
    ReadDepth: '64',
  },
  {
    Gene: 'APC',
    'RS-ID': '587783031',
    Nucleotide: 'NM_001354906.2:c.3817del',
    Protein: 'NP_001341835.1:p.Thr1273LeufsTer9',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '112840254',
    DrugResponse: 'Pathogenic',
    VariantRate: '60.0%',
    ReadDepth: '5',
  },
  {
    Gene: 'CSF1R',
    'RS-ID': '2066934',
    Nucleotide: 'NM_005211.4:c.*36A>C',
    Protein: 'not_found',
    VariationType: 'single_nucleotide_variant+non-coding_transcript_variant',
    VariantLength: '1',
    Position: '150054033',
    DrugResponse: 'Benign',
    VariantRate: '20.53%',
    ReadDepth: '151',
  },
  {
    Gene: 'CSF1R',
    'RS-ID': '2066933',
    Nucleotide: 'NM_005211.4:c.*35C>T',
    Protein: 'not_found',
    VariationType: 'single_nucleotide_variant+non-coding_transcript_variant',
    VariantLength: '1',
    Position: '150054034',
    DrugResponse: 'Benign',
    VariantRate: '20.53%',
    ReadDepth: '151',
  },
  {
    Gene: 'FLT3',
    'RS-ID': 'rs2491231',
    Nucleotide: 'NM_004119.3:c.1310-3T>C',
    Protein: 'not_found',
    VariationType: 'single_nucleotide_variant+intron_variant',
    VariantLength: '1',
    Position: '28036046',
    DrugResponse: 'Benign',
    VariantRate: '77.14%',
    ReadDepth: '315',
  },
  {
    Gene: 'RB1',
    'RS-ID': 'notfound',
    Nucleotide: 'NM_000321.3:c.983del',
    Protein: 'NP_000312.2:p.Asn328IlefsTer4',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '48367532',
    DrugResponse: 'Pathogenic',
    VariantRate: '18.52%',
    ReadDepth: '27',
  },
  {
    Gene: 'VHL',
    'RS-ID': '869025653',
    Nucleotide: 'NM_198156.3:c.341-3170del',
    Protein: 'NP_000542.1:p.Phe148LeufsTer11',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '10146612',
    DrugResponse: 'Pathogenic',
    VariantRate: '57.45%',
    ReadDepth: '282',
  },
  {
    Gene: 'VHL',
    'RS-ID': '1553619952',
    Nucleotide: 'NM_198156.3:c.341-3237del',
    Protein: 'NP_000542.1:p.Asp126ValfsTer33',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '10146549',
    DrugResponse: 'Pathogenic',
    VariantRate: '13.89%',
    ReadDepth: '72',
  },
  {
    Gene: 'FGFR3',
    'RS-ID': '7688609',
    Nucleotide: 'NM_022965.4:c.1617G>A',
    Protein: 'NP_075254.1:p.Thr539=',
    VariationType: 'single_nucleotide_variant+non-coding_transcript_variant',
    VariantLength: '1',
    Position: '1806167',
    DrugResponse: 'Benign',
    VariantRate: '100.0%',
    ReadDepth: '883',
  },
  {
    Gene: 'PDGFRA',
    'RS-ID': '1873778',
    Nucleotide: 'NM_006206.6:c.1701A>G',
    Protein: 'NP_006197.1:p.Pro567=',
    VariationType: 'single_nucleotide_variant+synonymous_variant',
    VariantLength: '1',
    Position: '54274888',
    DrugResponse: 'Benign',
    VariantRate: '100.0%',
    ReadDepth: '45',
  },
  {
    Gene: 'STK11',
    'RS-ID': '534445875',
    Nucleotide: 'NM_000455.5:c.597+21del',
    Protein: 'not_found',
    VariationType: 'Deletion+intron_variant',
    VariantLength: '1',
    Position: '1220519',
    DrugResponse: 'Benign/Likely_benign',
    VariantRate: '38.6%',
    ReadDepth: '386',
  },
  {
    Gene: 'TP53',
    'RS-ID': '1330865474',
    Nucleotide: 'NM_001276761.3:c.644T>G',
    Protein: 'NP_001263690.1:p.Ile215Ser',
    VariationType: 'single_nucleotide_variant+missense_variant',
    VariantLength: '1',
    Position: '7674202',
    DrugResponse: 'Uncertain_significance',
    VariantRate: '26.43%',
    ReadDepth: '140',
  },
  {
    Gene: 'TP53',
    'RS-ID': '876660726',
    Nucleotide: 'NM_001276761.3:c.785del',
    Protein: 'NP_001263690.1:p.Pro262GlnfsTer44',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '7673717',
    DrugResponse: 'Pathogenic',
    VariantRate: '11.27%',
    ReadDepth: '71',
  },
  {
    Gene: 'TP53',
    'RS-ID': '730882019',
    Nucleotide: 'NM_001276761.3:c.338del',
    Protein: 'NP_001263690.1:p.Pro113ArgfsTer18',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '7675156',
    DrugResponse: 'Pathogenic',
    VariantRate: '13.36%',
    ReadDepth: '217',
  },
  {
    Gene: 'TP53',
    'RS-ID': '1567556123',
    Nucleotide: 'NM_001276761.3:c.160del',
    Protein: 'NP_001263690.1:p.Leu54CysfsTer30',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '7676091',
    DrugResponse: 'Pathogenic',
    VariantRate: '23.71%',
    ReadDepth: '97',
  },
  {
    Gene: 'TP53',
    'RS-ID': '1042522',
    Nucleotide: 'NM_001276761.3:c.98C>G',
    Protein: 'NP_001263690.1:p.Pro33Arg',
    VariationType: 'single_nucleotide_variant+missense_variant',
    VariantLength: '1',
    Position: '7676154',
    DrugResponse: 'Benign',
    VariantRate: '82.71%',
    ReadDepth: '133',
  },
  {
    Gene: 'STK11',
    'RS-ID': '121913321',
    Nucleotide: 'NM_000455.5:c.842del',
    Protein: 'NP_000446.1:p.Pro281ArgfsTer6',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '1221314',
    DrugResponse: 'Pathogenic',
    VariantRate: '18.45%',
    ReadDepth: '645',
  },
  {
    Gene: 'KDR',
    'RS-ID': '1870377',
    Nucleotide: 'NM_002253.4:c.1416A>T',
    Protein: 'NP_002244.1:p.Gln472His',
    VariationType: 'single_nucleotide_variant+missense_variant',
    VariantLength: '1',
    Position: '55106807',
    DrugResponse: 'not_provided',
    VariantRate: '100.0%',
    ReadDepth: '19',
  },
  {
    Gene: 'ATM',
    'RS-ID': '1057517300',
    Nucleotide: 'NM_001351834.2:c.1856del',
    Protein: 'NP_001338763.1:p.Asn619ThrfsTer6',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '108252865',
    DrugResponse: 'Likely_pathogenic',
    VariantRate: '21.77%',
    ReadDepth: '124',
  },
  {
    Gene: 'ATM',
    'RS-ID': '2086682689',
    Nucleotide: 'NM_001351834.2:c.8101del',
    Protein: 'NP_001338763.1:p.Ile2701Ter',
    VariationType: 'Deletion+nonsense',
    VariantLength: '1',
    Position: '108335054',
    DrugResponse: 'Pathogenic',
    VariantRate: '75.89%',
    ReadDepth: '141',
  },
  {
    Gene: 'ATM',
    'RS-ID': 'notfound',
    Nucleotide: 'NM_001351834.2:c.9131del',
    Protein: 'NP_001338763.1:p.Asn3044IlefsTer31',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '108365463',
    DrugResponse: 'Pathogenic',
    VariantRate: '22.22%',
    ReadDepth: '54',
  },
  {
    Gene: 'TP53',
    'RS-ID': '1064793279',
    Nucleotide: 'NM_001276761.3:c.137del',
    Protein: 'NP_001263690.1:p.Pro46LeufsTer38',
    VariationType: 'Deletion+frameshift_variant',
    VariantLength: '1',
    Position: '7676114',
    DrugResponse: 'Pathogenic',
    VariantRate: '13.79%',
    ReadDepth: '116',
  },
];

const { confirm } = Modal;
export default () => {
  const [searchTerm, setSearchTerm] = useState('');
  //   const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [totalPages, setTotalPages] = useState(1);

  //   const urlData = `${testCaseEp}?page=${pagination.current}&limit=${pagination.pageSize}`
  //   useEffect(() => {
  //     fetch(urlData)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const testCase = data.testCaseModels.map((obj: any) => ({
  //           id: obj._id,
  //           patientID: obj.patientID,
  //           patientName: obj.patientName,
  //           testName: obj.testName,
  //         }));
  //         console.log(testCase);
  //         setData(testCase);
  //         setTotalPages(data.totalPages);
  //       });
  //   }, [pagination.current, pagination.pageSize]);

  const handleTableChange = (pagination: any) => {
    setPagination(pagination);
  };

  const columns: ProColumns[] = [
    {
      key: 'RS-ID',
      title: 'Mã xét nghiệm',
      dataIndex: 'RS-ID',
    },
    {
      key: 'Gene',
      title: 'Gene',
      dataIndex: 'Gene',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.Gene).toLowerCase().includes(String(value).toLowerCase());
      },
    },
    {
      key: 'Nucleotide',
      title: 'Nucleotide',
      dataIndex: 'Nucleotide',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.Nucleotide).toLowerCase().includes(String(value).toLowerCase());
      },
    },
    {
      key: 'Protein',
      title: 'Protein',
      dataIndex: 'Protein',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.Protein).toLowerCase().includes(String(value).toLowerCase());
      },
    },
    {
      key: 'VariationType',
      title: 'Variation Type',
      dataIndex: 'VariationType',

      render: (VariationType) => (
        <>
          {VariationType?.split('+').map((item: any, index: any) => (
            <Tag color="#108ee9">{item.trim()}</Tag>
          ))}
        </>
      ),
    },
    {
      key: 'Position',
      title: 'Position',
      dataIndex: 'Position',
    },
    {
      key: 'DrugResponse',
      title: 'Drug Response',
      dataIndex: 'DrugResponse',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.DrugResponse).toLowerCase().includes(String(value).toLowerCase());
      },
    },
    {
      key: 'VariantRate',
      title: 'Variant Rate',
      dataIndex: 'VariantRate',
    },
    {
      key: 'ReadDepth',
      title: 'Read Depth',
      dataIndex: 'ReadDepth',
    },
  ];

  return (
    <ProTable
      columns={columns}
      dataSource={data}
      toolbar={{
        title: 'Danh sách xét nghiệm',
        search: {
          placeholder: 'Nhập thông tin',
          onSearch: (value) => setSearchTerm(value),
          onChange: (e) => setSearchTerm(e.target.value),
          style: { width: '350px' },
        },
        // actions: [<AddTestCase />],
        settings: [],
      }}
      showSorterTooltip={false}
      rowKey="key"
      search={false}
      pagination={{ total: totalPages, pageSize: 10 }}
      onChange={handleTableChange}
    />
  );
};
