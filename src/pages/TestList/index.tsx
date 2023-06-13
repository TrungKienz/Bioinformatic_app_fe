import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Space, Spin, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { server } from '../Api';
import { testCaseEp } from '../EndPoint';
import AddTestCase from './component/addTestInformation';
import UploadTestCase from './component/uploadTestCase';
import { Link } from '@umijs/max';

const { confirm } = Modal;
export default () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [totalPages, setTotalPages] = useState(1);
  const [IDTestData, setIDTestData] = useState([]);
  const [resultStatus, setResultStatus] = useState([]);
  
  // const handleID = (id: string) => {
  //   SetId(id);
  // }
  
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


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${testCaseEp}/detail/${IDArray}`);
  //       if (!response.ok) {
  //         throw new Error('Error fetching data');
  //       }
  //       const data = await response.json();
  //       const IDTest = data.IDTest;
  //       setIDTestData(IDTest);
  //       console.log(IDTest);
  //     } catch (error) {
  //       console.log(error);
  //       // Handle the error here
  //     }
  //   };

  //   fetchData();
  // }, []);

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
      // render: (testName) => (
      //   <>
      //     {testName?.split(',').map((item: any, index: any) => (
      //       <li>{item.trim()}</li>
      //     ))}
      //   </>
      // ),
    },
    {
      key: 'option',
      title: 'Tùy chọn',
      width: 200,
      valueType: 'option',
      align: 'left',
      render: (text, data) => (
        <>
          {/* <Space size={'large'}>
            <Link key="showDetail" style={{ textDecoration: 'underline' }} to={`/tests/${data.id}`}>
              Chi tiết
            </Link>
            <a
              key="delete"
              style={{ color: 'red', textDecoration: 'underline' }}
              onClick={() => handleDelete(data.id, data.runID)}
            >
              Xóa
            </a>
          </Space> */}
          <Space size={'large'}>
            <UploadTestCase patientID={data.patientID} />
            <Button type="primary" danger onClick={() => handleDelete(data.id, data.patientID)}>
              Xóa
            </Button>
          </Space>
        </>
      ),
    },
    {
      key: 'status',
      title: 'Trạng thái',
      dataIndex: '',
      align: 'center',
      render: (text, data) => (
        <>
          <Space size={'large'}>
            {Array.from(IDTestData).includes(data.patientID) ? (
              <Tag color="success">
                <Link
                  key="showDetail"
                  // style={{ textDecoration: 'underline' }}
                  to={`/tests/detail/${data.patientID}`}
                >
                  Chi tiết
                </Link>
              </Tag>
            ) : (resultStatus.includes(data.patientID))? 
            (
              <Tag color='processing'>
                Đang xử lý  ...
              </Tag>
            )
            : (
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
        actions: [<AddTestCase/>],
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
