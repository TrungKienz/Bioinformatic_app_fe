import { server } from "@/pages/Api";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, message, Modal, Upload, UploadFile } from "antd";
import { SetStateAction, useState } from "react";
import { addTestCaseEp } from '../../EndPoint';

const UploadTestCase = () => {
    const [fileList, setFileList] = useState<Array<UploadFile<any>>>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
        <>
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
        </>
        
        
    );
}

export default UploadTestCase;