import { Descriptions, List, Tag } from 'antd';

const DrugInformation = (data: Array<any>) => {
  const dataResult = data.map((item: any) => {
    const pmid = item['pmid'];
    const geneName = item['Gene name'];
    const geneLocation = item['Genomic Position'];
    const nucleotideMutation = item['CDS Mutation'];
    const aminoAcidMutation = item['AA Mutation'];
    const rsValue = item['rs valuesource_db'] || 'Không có';
    const drugName = item['Therapies'];
    const drugResponse = item['Response to Drug'];
    const drugClassification = item['therapy_rank'];
    const diseaseName = item['Disease'];
    const description = item['Description'];

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

    return (
      <List.Item key={pmid}>
        <List.Item.Meta title={<Tag color="blue">{geneName}</Tag>} description={description} />
        <Descriptions>
          <Descriptions.Item label="Tên gene">{geneName}</Descriptions.Item>
          <Descriptions.Item label="Vị trí gene">{geneLocation}</Descriptions.Item>
          <Descriptions.Item label="Đột biến nucleotide">{nucleotideMutation}</Descriptions.Item>
          <Descriptions.Item label="Đột biến axit amin">{aminoAcidMutation}</Descriptions.Item>
          <Descriptions.Item label="Giá trị RS">{rsValue}</Descriptions.Item>
          <Descriptions.Item label="Thuốc đích">{drugName}</Descriptions.Item>
          <Descriptions.Item label="Phân loại thuốc">{classificationName}</Descriptions.Item>
          <Descriptions.Item label="Bệnh">{diseaseName}</Descriptions.Item>
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
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5,
          hideOnSinglePage: true,
        }}
        dataSource={dataResult}
        renderItem={(item) => item}
      />
    </>
  );
};

export default DrugInformation;
