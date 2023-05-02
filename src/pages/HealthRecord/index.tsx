import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Form, Input, Select, message, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined, FileAddOutlined } from '@ant-design/icons';
import { ModalForm, PageContainer, ProFormSelect } from '@ant-design/pro-components';
import { history, useModel, useParams, useRequest } from '@umijs/max';
import HealthRecordService from '@/services/healthRecord';
interface DataType {
    id: string;
    name: string;
    dob: string;
    typeHealthRecord: string;
    healthRecordId: string;

}
const handleCreateHealthRecord = (typeRecord, id = 0) => {
    switch (typeRecord) {
        case 'UNG THƯ TRỰC TRÀNG':
            history.push(`/health-record/conlorectal-cancer/${id}`);
            break;
        case 'UNG THƯ PHỔI':
            history.push(`/health-record/lung-cancer/${id}`);
            break;
        case 'UNG THƯ GAN':
            history.push(`/health-record/liver-cancer/${id}`);
            break;
        case 'UNG THƯ K GIÁP':
            history.push(`/health-record/thyroid-cancer/${id}`);
            break;
        case 'UNG THƯ VÚ':
            history.push(`/health-record/breast-cancer/${id}`);
            break;
        default:
            break;
    }
    return
}
const handleDeleteHealthRecord = async (id: number) => {
    await HealthRecordService.deleteHealthRecord(id);
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Mã bệnh án',
        dataIndex: 'healthRecordId',
        key: 'healthRecordId',
    },
    {
        title: 'Họ tên',
        dataIndex: 'fullname',
        key: 'name',
    },
    {
        title: 'Năm sinh',
        dataIndex: 'dob',
        key: 'dob',
    },
    {
        title: 'Loại bệnh án',
        key: 'typeHealthRecord',
        dataIndex: 'typeHealthRecord',
        render: (_, { typeHealthRecord }) => {
            let color = '';
            switch (typeHealthRecord) {
                case 'UNG THƯ PHỔI':
                    color = '#08979c'
                    break;
                case 'UNG THƯ VÚ':
                    color = '#9254de';
                    break;
                case 'UNG THƯ TRỰC TRÀNG':
                    color = '#f759ab';
                    break;
                case 'UNG THƯ GAN':
                    color = '#ffa940';
                    break;
                case 'UNG THƯ K GIÁP':
                    color = '#237804';
                    break;
            }

            return (
                <Tag color={color} key={typeHealthRecord}>
                    {typeHealthRecord.toUpperCase()}
                </Tag>
            );
        }
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type="primary" icon={<EditOutlined />} onClick={() => handleCreateHealthRecord(record.typeHealthRecord, record.id)} />
                <Popconfirm
                    title="Xóa bệnh án"
                    description="Bạn có chắc muốn xóa bệnh án này?"
                    onConfirm={() => handleDeleteHealthRecord(record.id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button danger icon={<DeleteOutlined />} />
                </Popconfirm>

            </Space>
        ),
    },
];



const typeHealthRecord = [
    {
        label: 'Ung thư vú',
        value: 'UNG THƯ VÚ'
    },
    {
        label: 'Ung thư gan',
        value: 'UNG THƯ GAN',
    },
    {
        label: 'Ung thư phổi',
        value: 'UNG THƯ PHỔI',
    },
    {
        label: 'Ung thư trực tràng',
        value: 'UNG THƯ TRỰC TRÀNG',
    },
    {
        label: 'Ung thư K giáp',
        value: 'UNG THƯ K GIÁP'
    },
    {
        label: 'Tất cả',
        value: 'ALL'
    }
]
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16, },
};

export default () => {


    const [post, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [queryUrl, setQueryUrl] = useState('')
    const handleGetAll = async () => {
        let records = (await HealthRecordService.getAll())?.data || [];
        console.log(records);

        setData(records)
        setLoading(false)
    }
    useEffect(() => {
        handleGetAll()
    }, [queryUrl])
    // if (history.location.search === '?reload=true') handleGetAll()
    // console.log('[health record param]', history)

    const handleSearch = async (values) => {
        console.log('[handle search]', values)
        const data = (await HealthRecordService.search(values))?.data
        setData(data)
    }

    return <PageContainer >
        <Form {...layout} layout='inline' onFinish={handleSearch}>
            <Form.Item label='Mã bệnh án' name='healthRecordId'>
                <Input placeholder='Hãy nhập mã bệnh án'></Input>
            </Form.Item>
            <Form.Item label='Loại bệnh án' name='typeHealthRecord' rules={[{ required: true, message: 'Hãy chọn loại bệnh án!' }]}>
                <Select
                    style={{ width: '170px' }}
                    options={typeHealthRecord}
                    placeholder='Hãy chọn loại bệnh án'
                />
            </Form.Item>
            <Form.Item >
                <Button htmlType='submit'>Tìm kiếm</Button>
            </Form.Item>
        </Form>
        <ModalForm
            width={'400px'}
            title="Chọn loại bệnh án"
            trigger={<Button icon={<FileAddOutlined />} style={{ margin: '20px 0' }}>Thêm bệnh án</Button>}

            onFinish={(values) => {
                return handleCreateHealthRecord(values.typeHealthRecord)
            }}
        >
            <ProFormSelect
                options={typeHealthRecord}
                name="typeHealthRecord"
            />
        </ModalForm>
        <Table loading={loading} columns={columns} dataSource={post} />
    </PageContainer>
};

