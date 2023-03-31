import { ExclamationCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Space, Upload, UploadFile, UploadProps } from 'antd';
import { SetStateAction, useEffect, useState } from 'react';
import { Link } from 'umi';
import { server } from '../Api';
import { testCaseEp, addTestCaseEp } from '../EndPoint';

const { confirm } = Modal;

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [ totalPages, setTotalPages ] = useState(1);
  const [fileList, setFileList] = useState<Array<UploadFile<any>>>([]);

  const props = {
    name: 'file',
    accept: '.json',
      action: addTestCaseEp,
    headers: {
      authorization: 'Bearer my-token',
    },
    beforeUpload(file) {
      const reader = new FileReader();

      reader.onload = e => {
          console.log(e.target?.result);
      };
      reader.readAsText(file);
      return false;
    },
    fileList,
    
    onChange(info: { file: any; fileList: SetStateAction<UploadFile<any>[]>; }) {
      console.log(info.file, info.fileList);
      setFileList(info.fileList);
    },
  };
    

  useEffect(() => {
    fetch(`${testCaseEp}?page=${pagination.current}&limit=${pagination.pageSize}`)
      .then(response => response.json())
      .then(data => {
        const testCase = data.testCaseModels.map((obj: any) => ({
          id: obj._id,
          runID: obj.run.id,
          name: obj.patients,
          samples: obj.sams,
        }));
        setData(testCase);
        setTotalPages(data.totalPages);
      });
  }, [pagination.current, pagination.pageSize]);

  const handleTableChange = (pagination: any) => {
    setPagination(pagination);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (fileList.length === 0) {
      message.error('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    fileList.forEach(file => {
      console.log('Appending file:', file);
      formData.append('file', file.originFileObj as File);
    });

    fetch(`${server}/test-case/add`, {
      method: 'POST',
      headers: {
        authorization: 'Bearer my-token',
      },
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        message.success('File uploaded successfully');
        setFileList([]);
      } else {
        message.error('File upload failed');
      }
    })
    .catch(error => {
      console.error('Error uploading file:', error);
      message.error('Error uploading file');
    });
    console.log(formData)
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
        fetch(`${server}/test-case/delete/${id}`, {
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
            <Link key="showDetail" style={{textDecoration: 'underline'}} to={`/tests/${data.id}`}>Chi tiết</Link>
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
      pagination={{total: totalPages, pageSize: 10}}
      onChange={handleTableChange}
    />
  );
};
