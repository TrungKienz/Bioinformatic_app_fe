const LUNG: any = {
  typeHealthRecord: 'UNG THƯ GAN',

  generalInfo: [
    {
      name: 'II> TIỀN SỬ',
      key: 'medicalHistory',
      listQuestions: [
        [
          [
            {
              listChoice: ['Uống rượu'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              type: 'text',
              unit: 'ml/ngày',
            },
            {
              question: '',
              type: 'text',
              unit: 'năm',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Xơ gan'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              type: 'date',
              prefix: 'Năm được chẩn đoán:',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Viêm gan B'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              type: 'date',
              prefix: 'Năm chẩn đoán:',
            },
            {
              type: 'text',
              prefix: 'Định lượng HCV RNA (nếu có):',
            },
            {
              question: '',
              type: 'text',
              prefix: 'Điều trị thuốc:',
            },
            {
              type: 'text',
              prefix: 'Tình trạng hiện tại:',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Viêm gan C'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              type: 'text',
              prefix: 'Năm chẩn đoán:',
            },
            {
              type: 'text',
              prefix: 'Định lượng HCV RNA (nếu có):',
            },
            {
              type: 'text',
              prefix: 'Điều trị thuốc:',
            },
            {
              type: 'text',
              prefix: 'Tình trạng hiện tại:',
            },
          ],
        ],
        [
          [
            {
              question: 'Các bệnh khác (nếu có, ghi rõ):',
              type: 'none',
            },
          ],
          [
            {
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Tiếp xúc với độc tố hoặc hoá chất'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              prefix: 'Năm tiếp xúc:',
              type: 'date',
              answer: '',
            },
            {
              prefix: 'Loại hoá chất:',
              type: 'text',
              answer: '',
            },
            {
              prefix: 'Thời gian tiếp xúc:',
              type: 'date',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: [
                'Tiểu sử gia đình (xét người thân trong gia đình ít nhất 3 thế hệ) nhiễm viên gan (VGB, VGC) và ung thư biểu mô tế bào gan',
              ],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Quan hệ với bệnh nhân:',
              type: 'text',
              answer: '',
            },

            {
              question: 'Các bệnh:',
              listChoice: ['VGB', 'VGC', 'Ung thư biểu mô tế bàn gan'],
              type: 'checkbox',
              answer: [false, false, false],
            },
            // {
            //   question: '',
            //   unit: 'Vẽ sơ đồ phả hệ (ít nhất 3 thế hệ)',
            //   type: 'text',
            //   answer: '',
            // },
          ],
        ],
      ],
    },
    {
      name: 'III> BỆNH SỬ (*từ khi phát hiện bệnh đến ngày bắt đầu theo dõi BN)',
      key: 'diseaseHistory',
      listQuestions: [
        [
          [
            {
              question: 'Năm chẩn đoán bệnh lần đầu (VD: 2019)',
              type: 'date',
            },
          ],
        ],
        [
          [
            {
              question: 'Năm phát hiện di căn ngoài gan (nếu có)(VD: 2019)',
              type: 'date',
            },
          ],
        ],

        [
          [
            {
              question: 'Gầy sút cân \n(so với cân nặng trung bình trước khi phát hiện bệnh)',
              type: 'none',
              answer: '',
            },
          ],
          [
            {
              type: 'text',
              answer: '',
              unit: 'kg',
            },
          ],
        ],
        [
          [
            {
              question: 'Phương pháp điều trị đã sử dụng',
              type: 'none',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Phẫu thuật'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              type: 'date',
              answer: '',
              prefix: 'Năm:',
            },
            {
              question: '',
              prefix: 'Số phân thuỷ đã cắt:',
              type: 'text',
              answer: '',
            },
            {
              question: '',
              prefix: 'Thể tích gan còn lại (ước tính):',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Ghép gan'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Năm:',
              type: 'date',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Ghép gan'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Số lần:',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Đốt sống cao tần (RF)'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Số lần:',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Đốt vi sóng'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Số lần:',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Tiêm cồn'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Số lần:',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Nút mạch'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Số lần:',
              type: 'text',
              answer: '',
            },
            {
              question: 'Hóa chất nút mạch:',
              listChoice: ['Không', 'Có'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Xạ trị chọn lọc ĐM gan (bằng Y-90)'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Số lần:',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Truyền hoá chất qua động mạch gan (Cisplatin với 5FU liều thấp)'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Số lần:',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Xạ trị chiếu ngoài'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Liều xạ',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Điều trị đích và điều trị miễn dịch'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Thuốc',
              listChoice: [
                'Sorafenib',
                'Lenvantinib',
                'Regorafenib',
                'Pembrolizumab',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hoá trị'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Phác đồ',
              listChoice: ['Phác đồ PIAF', 'Phác đồ GEMOX', 'Phác đồ FOLFOX4', 'Khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
          [
            {
              question: 'Số chu kì',
              type: 'none',
            },
            {
              question: '',
              unit: 'chu kì',
              type: 'text',
              answer: '',
            },
            {
              question: '',
              unit: 'chu kì',
              type: 'text',
              answer: '',
            },
            {
              question: '',
              unit: 'chu kì',
              type: 'text',
              answer: '',
            },
            {
              question: '',
              unit: 'chu kì',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Điều trị khác (nếu có, ghi rõ)'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              unit: '',
              type: 'text',
            },
          ],
        ],
      ],
    },

    {
      name: 'IV> KHÁM LÂM SÀNG (*ngay trước điều trị hoá chất)',
      listQuestions: [
        [
          [
            {
              question: 'Cân nặng',
              type: 'none',
            },
          ],
          [
            {
              unit: 'kg',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Chiều cao',
              type: 'none',
            },
          ],
          [
            {
              unit: 'cm',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Triệu chứng lâm sàng',
              type: 'title',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Đau hạ sườn phải (thang VAS: 0-10 điểm)'],
              type: 'checkbox',
              answer: '',
            },
          ],
          [
            {
              question: '',
              unit: '/10',
              type: 'text',
              answer: [false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Gan to'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              prefix: 'Dưới bờ sườn',
              unit: 'cm',
              type: 'text',
              answer: '',
            },
            {
              question: 'Mật độ',
              listChoice: ['Mềm', 'Chắc'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Vàng da'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              quesion: '',
              unit: '',
              type: 'none',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Tuần hoàn bàng hệ'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              prefix: 'Loại:',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Cổ chướng'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Mức độ',
              listChoice: ['Ít/Không', 'Vừa', 'Nhiều'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Phù vị trí khác (chân, tràn dịch màng phổi, màng tim, mặt,...)'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              quesion: '',
              unit: '',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Lách to'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              quesion: '',
              prefix: 'Độ',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Đầy bụng, rối loạn tiêu hoá'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              quesion: '',
              unit: '',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Chán ăn'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              quesion: '',
              unit: '',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Mệt mỏi'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              quesion: '',
              unit: '',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Đánh giá toàn trạng (PS) theo ECOG: (trước điều trị hoá chất)',
              listChoice: [
                'PS 0: Hoạt động bình thường.',
                'PS 1: Bị hạn chế hoạt động nặng, nhưng đi lại được và làm được việc nhẹ. ',
                'PS 2: Đi lại được nhưng không làm được các việc, hoàn toàn chăm sóc được bản thân, phải nghỉ ngơi dưới 50% thời gian thức.',
                'PS 3: Chỉ chăm sóc bản thân tối thiểu, phải nghỉ trên 50% thời gian.',
                'PS 4: Mất khả năng chăm sóc bản thân và hoàn toàn nằm nghỉ tại giường hoặc ghế.',
              ],
              type: 'radio',
            },
          ],
        ],
      ],
    },

    {
      name: 'V>CẬN LÂM SÀNG (TRƯỚC ĐIỀU TRỊ HOÁ CHẤT)',
      listQuestions: [
        [
          [
            {
              question: 'Xét nghiệm máu',
              type: 'title',
            },
          ],
        ],

        [
          [
            {
              question: 'Hồng cầu(RBC)',
              type: 'none',
            },
          ],
          [
            {
              unit: 'T/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Hb',
              type: 'none',
            },
          ],
          [
            {
              unit: 'g/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Bạch cầu(WBC)',
              type: 'none',
            },
          ],
          [
            {
              unit: 'G/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Bạch cầu đa nhân trung tính',
              type: 'none',
            },
          ],
          [
            {
              unit: 'G/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Tiểu cầu',
              type: 'none',
            },
          ],
          [
            {
              unit: 'G/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'PT%',
              type: 'none',
            },
          ],
          [
            {
              unit: '%',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'INR',
              type: 'none',
            },
          ],
          [
            {
              unit: 'none',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'APTT b/c',
              type: 'none',
            },
          ],
          [
            {
              unit: 'none',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Bilirubin toàn phần',
              type: 'none',
            },
          ],
          [
            {
              unit: 'μmol/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Bilirubin trực tiếp',
              type: 'none',
            },
          ],
          [
            {
              unit: 'μmol/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Albumin',
              type: 'none',
            },
          ],
          [
            {
              unit: 'g/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'ALT',
              type: 'none',
            },
          ],
          [
            {
              unit: 'UI/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'AST',
              type: 'none',
            },
          ],
          [
            {
              unit: 'UI/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Ure',
              type: 'none',
            },
          ],
          [
            {
              unit: 'mmol/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Creatinine',
              type: 'none',
            },
          ],
          [
            {
              unit: 'mmol/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Miễn dịch',
              type: 'none',
            },
          ],
          [
            {
              question: 'HBsAg',
              listChoice: ['Âm tính', 'Dương tính'],
              type: 'radio',
            },
            {
              question: 'Anti-HCV',
              listChoice: ['Âm tính', 'Dương tính'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              question: 'Maker ung thư',
              type: 'none',
            },
          ],
          [
            {
              prefix: 'AFP:',
              type: 'text',
            },
            {
              prefix: 'AFP-L3:',
              type: 'text',
            },
            {
              prefix: 'PIVKA II (DCP)',
              type: 'text',
            },
            {
              prefix: 'Marker khác (nếu có):',
              type: 'text',
            },
          ],
        ],
        [[{ question: 'Tải lượng virus (nếu có):', type: 'none' }], [{ type: 'text' }]],
        [
          [
            {
              question: 'Đánh giá Child Pugh (5-15 điểm)',
              type: 'none',
            },
          ],
          [
            {
              type: 'text',
              unit: 'điểm',
            },
          ],
        ],
        [
          [
            {
              question: 'Nội soi dạ dày TQ:',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Không', 'Độ 1', 'Độ 2', 'Độ 3'],
              type: 'radio',
              question: 'Giãn tĩnh mạch TQ (theo Hội Nội soi Nhật Bản)',
            },
          ],
          [
            {
              listChoice: ['Không', 'Độ 1', 'Độ 2', 'Độ 3'],
              type: 'radio',
              question: 'Giãn tĩnh mạch phình vị',
            },
          ],
        ],
        [
          [
            {
              question:
                'Kết quả chẩn đoán hình ảnh (ưu tiên kết quả cận lâm sàng có giá trị lớn nhất)',
              type: 'none',
            },
            {
              question: 'Loại kết quả hình ảnh:',
              type: 'radio',
              listChoice: ['Siêu âm', 'CT/Cắt lớp vi tính', 'MRI/Cộng hưởng từ'],
            },
            {
              prefix: 'Tổng số khối u gan:',
              type: 'text',
            },
            {
              type: 'table',
              header: ['Khối thứ', 'vị trí', 'Kích thước'],
              body: [
                [
                  {
                    type: 'text',
                  },
                  {
                    type: 'text',
                  },
                  {
                    type: 'text',
                  },
                ],
                [
                  {
                    type: 'text',
                  },
                  {
                    type: 'text',
                  },
                  {
                    type: 'text',
                  },
                ],
                [
                  {
                    type: 'text',
                  },
                  {
                    type: 'text',
                  },
                  {
                    type: 'text',
                  },
                ],
              ],
            },
            {
              question: 'Huyết khối TM chủ',
              listChoice: ['Không', 'Có'],
              horizontal: true,
              type: 'radio',
            },
            {
              question: 'Xâm lấn TM chủ/ TM trên gan',
              listChoice: ['Không', 'Có'],
              type: 'radio',
              horizontal: true,
              answer: [false, false],
            },
            {
              question: 'Cơ quan có di căn',
              listChoice: ['Không', 'Phổi', 'Xương', 'Hạch', 'Não', 'Khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Kết quả sinh thiết (nếu có):',
              type: 'textarea',
            },
          ],
        ],
        [
          [
            {
              question: 'Kết quả chẩn đoán lâm sàng trước điều trị hoá chất',
              type: 'title',
            },
          ],
        ],
        [
          [
            {
              question: 'Giai đoạn HCC theo phân loại Barcelona',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Rất Sớm (0)', 'Sớm (A)', 'Tiến triển (B)', 'Muộn (C)', 'Cuối (D)'],
              type: 'radio',
            },
          ],
        ],
      ],
    },
    {
      name: 'VI> PHƯƠNG PHÁP ĐIỀU TRỊ (*tính từ ngày bắt đầu theo dõi)',
      listQuestions: [
        [
          [
            {
              question: 'Phương pháp điều trị',
              type: 'title',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Phẫu thuật'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
              prefix: 'Số phân thùy cắt:',
            },
            {
              type: 'text',
              prefix: 'Thể tích gan còn lại (ước tính):',
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              answer: [false],
              listChoice: ['Ghép gan'],
            },
          ],
          [
            {
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Đốt sóng cao tần(RF)'],
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
              prefix: 'Số lần:',
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Đốt vi sóng (MWA)'],
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
              prefix: 'Số lần:',
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Tiêm cồn'],
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
              prefix: 'Số lần:',
            },
            {
              type: 'radio',
              question: 'Hóa chất nút mạch',
              listChoice: ['Không', 'Có'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Tiêm cồn'],
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
              prefix: 'Số lần:',
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Xạ trị chọn lọc ĐM gan (bằng Y-90)'],
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
              prefix: 'Số lần:',
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Truyền hoá chất qua động mạch gan (Cisplatin với 5FU liều thấp)'],
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
              prefix: 'Liều xạ:',
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Phác đồ hoá chất sử dụng'],
              answer: [false],
            },
          ],
          [
            {
              type: 'checkbox',
              listChoice: ['Phác đồ PIAF', 'Phác đồ GEMOX', 'Phác đồ FOLFOX 4', 'Khác (ghi rõ):'],
              answer: [false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Thuốc kháng virus viêm gan (nếu có)'],
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              type: 'checkbox',
              listChoice: ['Điều trị khác (nếu có, ghi rõ)'],
              answer: [false],
            },
          ],
          [
            {
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Điều trị đích và điều trị miễn dịch',
              listChoice: [
                'Sorafenib',
                'Lenvatinib',
                'Regorafenib',
                'Cabozantinib',
                'Pembrolizumab',
                'Atezolizmab',
                'Bevacizumab',
                'Nivolumab',
                'Ramucirumab',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false, false, false, false],
            },
          ],
        ],
      ],
    },
  ],

  clinicalSymptoms: {
    header: [
      'Thời gian sau sử dụng hóa chất',
      'PS*(1-5)',
      'Cân nặng',
      'Mức độ mệt mỏi',
      'Mức độ chán ăn/ nôn/ buồn nôn',
      'Mức độ đau bụng',
      'Mức độ đi ngoài ra nhầy máu',
    ],
    listQuestions: [
      [
        { question: 'Sau 3 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
      ],
      [
        { question: 'Sau 6 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
      ],
      [
        { question: 'Sau 9 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
      ],
      [
        { question: 'Sau 12 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
      ],
      [
        { question: 'Sau 15 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
      ],
      [
        { question: 'Sau 18 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
      ],
      [
        { question: 'Sau 21 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
      ],
      [
        { question: 'Sau 24 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [1, 2, 3],
          answer: '',
        },
      ],
    ],
  },
  responeToTreatment: [
    [
      {
        question: 'Sau 3 tháng',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
    [
      {
        question: 'Sau 6 tháng',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
    [
      {
        question: 'Sau 9 tháng',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
    [
      {
        question: 'Sau 12 tháng',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
    [
      {
        question: 'Sau 15 tháng',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
    [
      {
        question: 'Sau 18 tháng',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
    [
      {
        question: 'Sau 21 tháng',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
    [
      {
        question: 'Sau 24 tháng',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
  ],
  genTest: {
    header: ["Gen",
      "Trình tự tham chiếu",
      "Biến thể",
      "Vị trí trên nhiễm sắc thể",
      "Kiểu gen",
      "Kiểu di truyền",],
    body: [
      [{
        type: 'text',
        answer: ''
      },
      {
        type: 'text',
        answer: ''
      },
      {
        type: 'text',
        answer: ''
      },
      {
        type: 'text',
        answer: ''
      },
      {
        type: 'text',
        answer: ''
      },
      {
        type: 'text',
        answer: ''
      },]
    ],

  },
  genTestResponseTreatment: {
    header: [
      "Gen",
      "Trình tự tham chiếu",
      "Biến thể",
      "Vị trí trên nhiễm sắc thể",
      "Nhạy cảm/Kháng thuốc đích",
      "Thuốc đích ảnh hưởng",
    ],
    body: [
      [{
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },]
    ],
  },


  assessmentResponseTreatment: {
    listQuestions: [
      {
        question: 'Tử vong trong 05 năm theo dõi(kể từ ngày bắt đầu theo dõi)',
        type: 'radio',
        listChoice: ['Không', 'Có'],
        answer: '',
        horizontal: true,
      },
      {
        question: 'Thời gian tử vong ',
        type: 'date',
      },
      {
        question: 'Nguyên nhân (ghi rõ)',
        type: 'text',

        answer: '',
      },
    ],
  },
  otherInfo: {
    responseToTreatmentRECIST: [
      [
        {
          question: ' Sau 1 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 3 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 6 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 1 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 9 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 12 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 18 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 24 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 30 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: ' Sau 36 tháng',
          type: 'none',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
    ],
  }
};
export default LUNG;
