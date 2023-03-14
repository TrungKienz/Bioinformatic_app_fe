import { ExclamationCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Space, Upload, UploadProps } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'umi';

const { confirm } = Modal;

const props: UploadProps = {
  name: 'file',
  action: 'http://localhost:3000/test-case/add/',
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
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [dataTest, setDataTest] = useState<Array<{
    runID: any;
    finishDate: any;
    totalReads: any;
    usableReads: any;
    status: any;
    totalBases: any;
    modeLength: any;
    meanLength: any;
    ISPLoadingPic: any;
    qualityPic: any;
    lengthPic: any;
  }>>([]);


  let URL = 'http://localhost:3000/test-case';
    
  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const testCase = data.map((obj: any) => ({
      id: obj._id,
      runID: obj.run.id,
      name: obj.patients,
      samples: obj.sams,
    }));
    setData(testCase);
  };
  
  useEffect(() => {
    fetchData().catch((error) => console.error(error));
  }, []);


  const fetchDataTest = async (id: String) => {
    const response = await fetch(`http://localhost:3000/test-case/find/${id}`);
    const data = await response.json();
    const testCase = [{
      runID: data.run.runId,
      finishDate: data.run.finishDate,
      totalReads: data.run.totalReads,
      usableReads: data.run.usableReads,
      status: data.run.status,
      totalBases: data.run.totalBases,
      modeLength: data.run.modeLength,
      meanLength: data.run.meanLength,
      ISPLoadingPic: data.run.ISPLoadingPic,
      qualityPic: data.run.qualityPic,
      lengthPic: data.run.lengthPic,
    }];
    setDataTest(testCase);  
    console.log(testCase);
  };
  


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleCancel();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id: String, runID: String) => {
    confirm({
      title: `Bạn muốn xóa xét nghiệm có ID:${runID} này?`,
      icon: <ExclamationCircleOutlined />,
      cancelText: 'Hủy',
      okText: 'Xóa',
      okType: 'danger',
      onOk() {
        fetch(`http://localhost:3000/test-case/delete/${id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Lỗi khi xóa');
            }
            message.success('Xóa thành công');
            setData((prevData) => prevData.filter((item) => item.id !== id));
          })
          .catch((error) => {
            message.error(error.message);
          });
      },
    });
  };

  const columns: ProColumns[] = [
    {
      key: 'runID',
      title: 'Mã xét nghiệm',
      dataIndex: 'runID',
      sorter: (a, b) => a.runID - b.runID,
    },
    {
      key: 'name',
      title: 'Tên bệnh nhân',
      dataIndex: 'name',
      align: 'left',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(String(value).toLowerCase());
      },  
      render: (name) => (
        <>
          {name.split(',').map((item: any, index: any) => (
            <li>{item.trim()}</li>
          ))}
        </>
      )  
    },
    {
      key: 'samples',
      title: 'Mẫu bệnh phẩm',
      dataIndex: 'samples',
      render: (samples) => (
        <>
          {samples.split(',').map((item: any, index: any) => (
            <li>{item.trim()}</li>
          ))}
        </>
      )
    },
    {
      key: 'option',
      title: 'Tùy chọn',
      width: 200,
      valueType: 'option',
      align: 'left',
      render: (text, data) => (
        <>
          <Space size={'large'}>
            <Link key="showDetail" style={{textDecoration: 'underline'}} to={`/tests/${data.id}`} onClick={() => fetchDataTest(data.id)}>Chi tiết</Link>
            <a key="delete" style={{color: 'red', textDecoration: 'underline'}} onClick={() => handleDelete(data.id, data.runID)}>Xóa</a>
          </Space>  
        </>
      ),
    },
  ];
  

  return (
    <ProTable
      columns={columns}
      dataSource={data}
      toolbar={{
        title: 'Danh sách xét nghiệm',
        search: {
          onSearch: (value) => setSearchTerm(value),
          onChange: (e) => setSearchTerm(e.target.value),
          style: {width: '350px'},
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
      showSorterTooltip={false}
      rowKey="key"
      search={false}
    />
  );
};
