import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Upload, UploadProps } from 'antd';
import { useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = [
  'CHP2-UT08VIET-FFPE-S-69',
  'CHP2-UT09THANG-FFPE-S-70',
  'HCC1395_FD',
  'HCC1395_FD1',
  'HCC1395_FD1',
];

for (let i = 0; i < 10; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'Benh nhan',
    containers: i,
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'Mã xét nghiệm',
    dataIndex: 'containers',
    sorter: (a, b) => a.containers - b.containers,
    render: (_) => <a>{_}</a>,
  },
  {
    title: 'Tên bệnh nhân',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: 'Mẫu bệnh phẩm',
    dataIndex: 'creator',
  },
  {
    title: 'Chi tiết',
    width: 120,
    valueType: 'option',
    render: () => [<a key="link">Chi tiết</a>],
  },
];

const props: UploadProps = {
  name: 'file',
  action: 'http://localhost:8000/test',
  accept: '.json,.txt',
  headers: {
    authorization: 'authorization-text',
  },
  beforeUpload(file) {
    console.log({ file });
    return false;
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        title: 'Danh sách xét nghiệm',
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        actions: [
          <Button key="key" type="primary" onClick={showModal}>
            <PlusOutlined />
            Thêm xét nghiệm mới
          </Button>,
          <Modal
            title="Thêm thông tin xét nghiệm"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Upload {...props}>
              <Button key="key" icon={<UploadOutlined />}>
                Chọn file
              </Button>
            </Upload>
          </Modal>,
        ],
        settings: [],
      }}
      rowKey="key"
      search={false}
    />
  );
};
