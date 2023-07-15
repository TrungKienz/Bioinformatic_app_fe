import AddAccount from '@/components/UserManager/AddAccount';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Modal, Space } from 'antd';
import { useEffect, useState } from 'react';


const { confirm } = Modal;
export default () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<any[]>([]);
  
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/get-all-user`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      // Handle the error here
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const handleDelete = (id: String, runID: String) => {
    confirm({
      title: `Bạn muốn xóa user :${runID} này?`,
      icon: <ExclamationCircleOutlined />,
      cancelText: 'Hủy',
      okText: 'Xóa',
      okType: 'danger',
      onOk() {
        fetch(``, {
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
      key: 'UserID',
      title: 'Mã tài khoản',
      dataIndex: '_id',
    },
    {
      key: 'username',
      title: 'Tài khoản',
      dataIndex: 'email',
      align: 'left',
      filteredValue: [searchTerm],
      onFilter: (value, record) => {
        return String(record.patientName).toLowerCase().includes(String(value).toLowerCase());
      },
    },
    // {
    //     key: 'password',
    //     title: 'Mật khẩu',
    //     dataIndex: 'password',
    // },
    {
        key: 'access',
        title: 'Quyền truy cập',
        dataIndex: 'access',
    },
    {
        key: 'name',
        title: 'Tên người dùng',
        dataIndex: 'name',
        align: 'left',
        filteredValue: [searchTerm],
        onFilter: (value, record) => {
          return String(record.patientName).toLowerCase().includes(String(value).toLowerCase());
        },
    },
    {
      key: 'created_date',
      title: 'Ngày tạo tài khoản',
      dataIndex: 'createAt',
    },
    {
        key: 'modified_date',
        title: 'Ngày cập nhật tài khoản',
        dataIndex: 'updateAt',
    },
    {
      key: 'option',
      title: 'Tùy chọn',
      width: 200,
      valueType: 'option',
      align: 'left',
      render: (text, data) => (
        <>
            <Space size="large">
                <Button type="primary" >
                Sửa
              </Button>
              <Button type="primary" danger onClick={() => handleDelete(data.id, data.patientID)}>
                Xóa
              </Button>
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
        title: 'Danh sách người dùng',
        search: {
          placeholder: 'Nhập thông tin tên người dùng',
          onSearch: (value) => setSearchTerm(value),
          onChange: (e) => setSearchTerm(e.target.value),
          style: { width: '350px' },
        },
        actions: [<AddAccount/>],
        settings: [],
      }}
      showSorterTooltip={false}
      rowKey="key"
      search={false}
      pagination={{ pageSize: 10 }}
    />
  );
};

