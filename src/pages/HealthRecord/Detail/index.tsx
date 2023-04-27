import { PageContainer } from '@ant-design/pro-components';
import { Form, Input, Radio, Row, Col, Space, Affix, Button, Tooltip } from 'antd';
import CustomInput from '../CustomInput';
import './detail.css';
import LUNG from './Lung.ts';
import { useState, useEffect } from 'react';
import { getHealthRecord } from '@/services/healthRecord';
import { SaveOutlined } from '@ant-design/icons';
const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 8 },
    md: {
      span: 6
    }
  },
  wrapperCol: {
    xs: { span: 8 },
    sm: { span: 12 },
    md: {
      span: 12
    }
  },
};


export default () => {
  const [generalInfoForm] = Form.useForm();
  const [genTestForm] = Form.useForm();
  const [bottom, setBottom] = useState(10);

  const showForm = () => {
    console.log(genTestForm.getFieldsValue());
  };
  const [data, SetData] = useState();

  // useEffect(async () => {
  //   await getHealthRecord()
  // }, [])

  return (
    <PageContainer header={{
      title: 'BỆNH ÁN UNG THƯ PHỔI K'
    }}>
      <h3>PHẦN 1: THÔNG TIN CHUNG</h3>
      <p style={{ color: 'red' }}>(*Chứa toàn bộ thông tin bệnh nhân từ khi phát hiện bệnh đến ngày bắt đầu theo dõi)</p>
      <h4>I{'>'} HÀNH CHÍNH</h4>
      <Form {...formItemLayout} form={generalInfoForm} labelAlign="left">
        <Form.Item name="fullname" label="Họ và tên">
          <Input></Input>
        </Form.Item>
        <Form.Item name="bod" label="Năm sinh">
          <Input type="date"></Input>
        </Form.Item>
        <Form.Item label="Giới tính">
          <Radio.Group>
            <Radio value="male">Nam</Radio>
            <Radio value="female">Nữ</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="job" label="Nghề nghiệp">
          <Input></Input>
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ(Huyện - Tỉnh TP)">
          <Input></Input>
        </Form.Item>
        <Form.Item name="phone" label="SĐT liên lạc">
          <Input></Input>
        </Form.Item>
      </Form>
      {LUNG.generalInfo.map((category, categoryId) => {
        return (
          <div key={categoryId}>
            {category.name.includes('IV> KHÁM LÂM SÀNG') && <h3>PHẦN 2:THEO DÕI BỆNH NHÂN</h3>}
            <h4 className="category-title">{category.name}</h4>
            <table>
              <thead></thead>
              <tbody>
                {category.listQuestions.map((item, index) => {
                  return (
                    <tr key={index}>
                      {/* <td style={{ width: "10px" }}>{index}</td> */}
                      {item.map((listQuestion, listId) => {
                        return (
                          <td colspan={
                            item.length === 1
                              ? '100%'
                              : item.length === 2 && listId === 1
                                ? '2'
                                : '1'
                          } key={listId}>
                            {listQuestion.map((ques, quesId) => {
                              if (ques?.question && ques.type !== 'title' && ques.type !== 'none') {
                                return <Row key={quesId} >
                                  <Col span={24} style={{ minHeight: '48px' }} className='cell'>{ques.question}</Col>
                                  <Col span={18} > <CustomInput
                                    className='cell'
                                    quesId={quesId}
                                    ques={ques}
                                    index={index}
                                    categoryId={categoryId}
                                    listId={listId}
                                    LUNG={LUNG}

                                    templateInfo={
                                      LUNG.generalInfo[categoryId].listQuestions[index][listId][
                                      quesId
                                      ]
                                    }
                                  /></Col>

                                </Row>
                              }
                              return (
                                <>
                                  <div key={quesId} style={{ minHeight: "48px" }}
                                    className={ques?.unit === 'bao/ngày' || ques?.unit === 'năm' ? 'cell half-width' : 'cell full-width'}
                                  >
                                    <div className='full-width'><CustomInput

                                      quesId={quesId}
                                      ques={ques}
                                      index={index}
                                      categoryId={categoryId}
                                      listId={listId}

                                      LUNG={LUNG}
                                      templateInfo={
                                        LUNG.generalInfo[categoryId].listQuestions[index][listId][
                                        quesId
                                        ]
                                      }
                                    /></div>
                                  </div>
                                  {ques?.unit === 'bao/ngày' && ' x '}
                                </>

                              );
                            })}{' '}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
      <h4>VII{'>'} ĐÁNH GIÁ ĐÁP ỨNG ĐIỀU TRỊ </h4>
      <div>
        38. Triệu chứng lâm sàng sau điều trị thuốc đích: Mức độ: 0. Không 1. Ít 2. Vừa 3. Nhiều
        <table>
          <thead>
            <tr>
              <th>Thời gian sau sử dụng hóa chất</th>
              <th>PS*(1-5)</th>
              <th>Cân nặng</th>
              <th>Mức độ mệt mỏi</th>
              <th>Mức độ ho</th>
              <th>Mức độ đau ngực</th>
              <th>Mức độ khó thở</th>
            </tr>
          </thead>
          <tbody>
            {LUNG.clinicalSymptoms.map((res, resId) => {
              return (
                <tr key={resId}>
                  {res.map((ques, quesId) => {
                    return (
                      <td key={quesId}>
                        <CustomInput quesId={quesId} ques={ques} LUNG={LUNG} templateInfo={ques} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        *Với PS là thang đánh giá toàn trạng (PS) theo ECOG
        <p>• PS 0: Hoạt động bình thường.</p>
        <p>• PS 1: Bị hạn chế hoạt động nặng, nhưng đi lại được và làm được việc nhẹ.</p>
        <p>
          • PS 2: Đi lại được nhưng không làm được các việc, hoàn toàn chăm sóc được bản thân, phải
          nghỉ ngơi dưới 50% thời gian thức.
        </p>
        <p>• PS 3: Chỉ chăm sóc bản thân tối thiểu, phải nghỉ trên 50% thời gian.</p>
        <p>• PS 4: Mất khả năng chăm sóc bản thân và hoàn toàn nằm nghỉ tại giường hoặc ghế.</p>
        <p>• PS 5: Bệnh nhân tử vong.</p>
        39. Tỷ lệ đáp ứng sau điều trị đích:
        <table>
          <thead>
            <tr>
              <th rowSpan={2}> Thời gian sau sử dụng hóa chất</th>
              <th rowSpan={2}>Kích thước khối u (mm)</th>
              <th rowSpan={2}>Tỷ lệ đáp ứng (%)</th>
              <th colSpan={4}>Đánh giá đáp ứng</th>
            </tr>
            <tr>
              <td>SD</td>
              <td>PR</td>
              <td>CR</td>
              <td>PD</td>
            </tr>
          </thead>
          <tbody>
            {LUNG.responeToTreatment.map((res, resId) => {
              return (
                <tr key={resId}>
                  {res.map((ques, quesId) => {
                    return (
                      <td key={quesId}>
                        <CustomInput quesId={quesId} ques={ques} LUNG={LUNG} templateInfo={ques} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>
          SD: stable deasease; PR: Partial respone; CR: Complete respone; PD: Progression deasease
        </p>
        40.CEA
        <table>
          <thead>
            <tr>
              <th> Thời gian sau sử dụng đích</th>
              <th>Nồng độ CEA (ng/ml)</th>
            </tr>
          </thead>
          <tbody>
            {LUNG.CEA.map((res, resId) => {
              return (
                <tr key={resId}>
                  {res.map((ques, quesId) => {
                    return (
                      <td key={quesId}>
                        <CustomInput quesId={quesId} ques={ques} LUNG={LUNG} templateInfo={ques} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {LUNG.assessmentResponseTreatment.listQuestions.map((ques, quesId) => {
          return (
            <Row key={quesId} gutter={[16, 40]} style={{ marginTop: '8px' }}>
              <Col span={8}> {ques?.question}</Col>
              <Col span={16}><CustomInput quesId={quesId} ques={ques} LUNG={LUNG} templateInfo={ques} /></Col>
            </Row>
          );
        })}
      </div>
      <h4>VIII{'>'} THÔNG TIN XÉT NGHIỆM DI TRUYỀN</h4>
      <Form {...formItemLayout} labelAlign="left" form={genTestForm}>
        <Form.Item name="testCode" label="Mã xét nghiệm">
          <Input></Input>
        </Form.Item>
        <Form.Item name="cancerType" label="Loại ung thư">
          <Input></Input>
        </Form.Item>
        <Form.Item name="dateSample" label="Ngày lấy mẫu">
          <Input type="date"></Input>
        </Form.Item>
        <Form.Item name="typeSample" label="Loại mẫu bệnh phẩm">
          <Radio.Group>
            <Radio value="Mẫu mô tươi.">Mẫu mô tươi.</Radio>
            <Radio value="Mẫu mô đúc nến.">Mẫu mô đúc nến.</Radio>
            <Radio value="Mẫu máu ngoại vi">Mẫu máu ngoại vi</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="statusSample" label="Tình trạng mẫu khi tiếp nhận">
          <Radio.Group>
            <Radio value="Đạt">Đạt</Radio>
            <Radio value="Không đạt">Không đạt</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="preserveMethodSample" label="Phương pháp bảo quản mẫu">
          <Radio.Group>

            <Space direction="vertical">

              <Radio value="Bảo quản nhiệt độ thường">Bảo quản nhiệt độ thường</Radio>
              <Radio value="Bảo quản 4 độ C">Bảo quản 4 độ C</Radio>
            </Space>
            <Space direction="vertical">

              <Radio value="Bảo quản -20 độ C">Bảo quản -20 độ C</Radio>
              <Radio value="Bảo quản -80 độ C">Bảo quản -80 độ C</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="conditionalSample" label="Điều kiện vận chuyển mẫu">
          <Radio.Group>
            <Radio value="Nhiệt độ thường">Nhiệt độ thường</Radio>
            <Radio value="Ice bag">Ice bag</Radio>
            <Radio value="Dry ice">Dry ice</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="sourceSample" label="Nguồn lấy mẫu">
          <Radio.Group>
            <Radio value="Mô tổn thương chính">Mô tổn thương chính</Radio>
            <Radio value="Mô tổn thương di căn">Mô tổn thương di căn</Radio>
            <Radio value="Khác">Khác</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="concentrateDNA" label="Nồng độ DNA thu được">
          <Input></Input>
        </Form.Item>
        <Form.Item name="purityDNA" label="Độ tinh sạch của DNA sau tách chiết">
          <Radio.Group>
            <Radio value="Đạt">Đạt</Radio>
            <Radio value="Không đạt">Không đạt</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>

      44. Loại đột biến gen( Đánh dấu X)
      <table>
        <thead>
          <th colSpan={2}>Loại đột biến</th>
          <th>Có xuất hiện</th>
          <th>Tần suất</th>
        </thead>
        <tbody>
          {
            LUNG.genMutation.map((res, resId) => {
              if (resId === 0) {
                return <tr key={resId}>
                  <td rowSpan={7}>EGFR</td>
                  {res.map((ques, quesId) => {
                    return (
                      <td key={quesId}>
                        <CustomInput quesId={quesId} ques={ques} LUNG={LUNG} templateInfo={ques} />
                      </td>
                    );
                  })}
                </tr>


              }

              return <tr key={resId}>
                {res.map((ques, quesId) => {
                  if (resId >= 7 && quesId === 0)
                    return <td colSpan={2} key={quesId}>
                      <CustomInput quesId={quesId} ques={ques} LUNG={LUNG} templateInfo={ques} />
                    </td>
                  return (
                    <td key={quesId}>
                      <CustomInput quesId={quesId} ques={ques} LUNG={LUNG} templateInfo={ques} />
                    </td>
                  );
                })}
              </tr>

            })
          }
        </tbody>
      </table>
      <Affix style={{ right: '30px', position: 'absolute' }} offsetBottom={50}>
        <Tooltip title="Save" color='#1890ff' >
          <Button size='large' type="primary" icon={<SaveOutlined />}  ></Button>

        </Tooltip>
      </Affix>
    </PageContainer >









  );
};
