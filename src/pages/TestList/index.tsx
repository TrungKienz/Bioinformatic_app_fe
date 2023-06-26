import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Space, Spin, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { server } from '../Api';
import { testCaseEp } from '../EndPoint';
import AddTestCase from './component/addTestInformation';
import UploadTestCase from './component/uploadTestCase';
import { Link, useAccess } from '@umijs/max';
import UpdateTestCase from './component/updateTestInformation';

const { confirm } = Modal;
export default () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [totalPages, setTotalPages] = useState(1);
  const [IDTestData, setIDTestData] = useState<any[]>([]);
  const [resultStatus, setResultStatus] = useState<any[]>([]);
  
  const access = useAccess();

  const urlData = `${testCaseEp}?page=${pagination.current}&limit=${pagination.pageSize}`;
  useEffect(() => {
    fetch(urlData)
      .then((response) => response.json())
      .then((data) => {
        const testCase = data.testCaseModels.map((obj: any) => ({
          id: obj._id,
          patientID: obj.patientID,
          patientName: obj.patientName,
          testName: obj.testName,
          primaryTissue: obj.primaryTissue,
        }));
        setData(testCase);
        setTotalPages(data.totalPages);
      });
  }, [pagination.current, pagination.pageSize]);

  const handleTableChange = (pagination: any) => {
    setPagination(pagination);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${testCaseEp}/detail`);
      const data = await response.json();
      setIDTestData(data);
    } catch (error) {
      console.log(error);
      // Handle the error here
    }
  };
  const addResultStatus = async () => {
    try {
      const response = await fetch(`${testCaseEp}/file-name`);
      const data = await response.json();
      setResultStatus(data);
    } catch (error) {
      console.log(error);
      // Handle the error here
    }
  };
  
  useEffect(() => {
    addResultStatus();
    fetchData();
  }, []);
  

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
      key: 'patientID',
      title: 'Mã xét nghiệm',
      dataIndex: 'patientID',
      sorter: (a, b) => a.patientID - b.patientID,
    },
    {
      key: 'patientName',
      title: 'Tên bệnh nhân',
      dataIndex: 'patientName',
      align: 'left',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.patientName).toLowerCase().includes(String(value).toLowerCase());
      },
    },
    {
      key: 'primaryTissue',
      title: 'Mẫu mô',
      dataIndex: 'primaryTissue',
      align: 'left',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.patientName).toLowerCase().includes(String(value).toLowerCase());
      },
    },
    {
      key: 'testName',
      title: 'Mẫu bệnh phẩm',
      dataIndex: 'testName',
    },
    {
      key: 'option',
      title: 'Tùy chọn',
      width: 200,
      valueType: 'option',
      align: 'left',
      render: (text, data) => (
        <>
          {(access.canAdmin || access.canDoctor) ? (
            <Space size="large">
              <UploadTestCase patientID={data.patientID} />
              <UpdateTestCase data={data}/>
              <Button type="primary" danger onClick={() => handleDelete(data.id, data.patientID)}>
                Xóa
              </Button>
            </Space>
          ):(<Button type="primary" danger >Doctor and admin zone</Button>)}
        </>
      ),
      
    },
    {
      key: 'status',
      title: 'Trạng thái',
      dataIndex: '',
      align: 'center',
      render: (text: any, data: any) => (
        <>
          <Space size={'large'}>
            {Array.from(IDTestData as any[]).includes(data.patientID) ? (
              <Tag color="success">
                <Link
                  key="showDetail"
                  to={`/tests/detail/${data.patientID}`}
                >
                  Chi tiết
                </Link>
              </Tag>
            ) : (Array.isArray(resultStatus) && resultStatus.includes(data.patientID)) ? (
              <Tag color='processing'>
                Đang xử lý  ...
              </Tag>
            ) : (
              <Tag color='warning'> Chưa có dữ liệu ...</Tag>
            )}
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
          placeholder: 'Nhập thông tin',
          onSearch: (value) => setSearchTerm(value),
          onChange: (e) => setSearchTerm(e.target.value),
          style: { width: '350px' },
        },
        actions: [((access.canAdmin || access.canDoctor)?(<AddTestCase/>):(<></>))],
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

