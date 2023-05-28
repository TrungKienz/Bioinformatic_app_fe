import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Modal, Upload, UploadFile } from 'antd';
import { useState } from 'react';
import { addTestCaseEp } from '../../EndPoint';

type UploadTestCaseProps = {
  patientID: string;
};

const UploadTestCase: React.FC<UploadTestCaseProps> = ({ patientID }) => {
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = async () => {
    if (fileList.length === 0) {
      message.error('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('patientID', patientID);
    fileList.forEach((file) => {
      formData.append('file', file.originFileObj as File);
    });

    try {
      const response = await fetch(addTestCaseEp, {
        method: 'POST',
        headers: {
          authorization: 'Bearer my-token',
        },
        body: formData,
      });

      if (response.ok) {
        message.success('File uploaded successfully');
        setFileList([]);
      } else {
        message.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      message.error('Error uploading file');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChange = (info: { file: UploadFile<any>; fileList: UploadFile<any>[] }) => {
    setFileList(info.fileList);
  };


  return (
    <>
      <Button key="key" type="primary" onClick={showModal}>
        <PlusOutlined />
        Thêm mẫu bệnh phẩm
      </Button>

      <Modal
        title="Thêm mẫu bệnh phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Upload
          name="file"
          accept=".json, .csv, .gz, .tar, .tgz"
          action={"null"}
          headers={{
            authorization: 'Bearer my-token',
          }}
          fileList={fileList}
          onChange={handleChange}
        >
          <Button key="key" icon={<UploadOutlined />}>
            Chọn file
          </Button>
        </Upload>
      </Modal>
    </>
  );
};

export default UploadTestCase;
