import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';

/**
 * For each individual card, components are extracted for reusable styles
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        Tìm hiểu thêm {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '30px',
              color: token.colorTextHeading,
            }}
          >
            MỘT CÔNG CỤ HỖ TRỢ CHẨN ĐOÁN VÀ ĐIỀU TRỊ UNG THƯ
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            Chẩn đoán dựa trên giải trình tự thế hệ tiếp theo (NGS) cho phép bác sĩ lâm sàng xác
            định giả lập các sự kiện gây ra bởi các tác nhân cụ thể trong các khối u riêng lẻ. Việc
            xác định đúng các tác nhân gây bệnh có thể cho phép bác sĩ lâm sàng dự đoán tốt hơn các
            phản ứng điều trị và cải thiện đáng kể việc chăm sóc bệnh nhân
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="http://localhost:8000/drug/find-drug"
              title="Tìm kiếm"
              desc="Tìm kiếm, tra cứu các thông tin về thuốc, các loại bệnh ung thư, gen và đột biến liên quan"
            />
            <InfoCard
              index={2}
              title="Lưu trữ"
              href=""
              desc="Lưu trữ kết quả xét nghiệm của bệnh nhân"
            />
            <InfoCard
              index={3}
              title="Trình bày"
              href=""
              desc="Trình bày và hiển thị kết quả xét nghiệm dưới dạng bảng"
            />
            <InfoCard
              index={4}
              title="Hỗ trợ điều trị"
              href=""
              desc="Hỗ trợ bác sỹ tạo đơn thuốc với bộ dữ liệu đã được kiểm chứng"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
