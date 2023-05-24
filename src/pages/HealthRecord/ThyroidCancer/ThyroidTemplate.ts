const THYROID: any = {
  typeHealthRecord: 'UNG THƯ K GIÁP',

  generalInfo: [
    {
      name: 'II> TIỀN SỬ',
      key: 'medical_history',
      listQuestions: [
        [
          [
            {
              question: 'Bệnh lý về tuyến giáp (trước khi được chẩn đoán ung thư tuyến giáp):',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Bướu giáp lành tính',
                'Bướu nhân độc tuyến giáp',
                'Basedow',
                'Suy giáp',
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
              question: 'Các bệnh khác (nếu có, ghi rõ)',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              unit: '',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Tiếp xúc với độc tố/hóa chất:',
              type: 'none',
            },
          ],
          [
            {
              question: 'Loại hóa chất:',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              question: 'Thời gian tiếp xúc:',
              unit: '',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Tiền sử tia xạ đầu cổ:',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Không', 'Có'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              question: 'Tiền sử gia đình (Cha, mẹ, anh chị em ruột):',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Ung thư tuyến giáp',
                'Bệnh đa bướu nội tiết',
                'Hội chứng Pendred',
                'Hội chứng Gardner',
                'Hội chứng Cowden',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false],
            },
          ],
        ],
      ],
    },
    {
      name: 'III> BỆNH SỬ (*từ khi phát hiện bệnh đến ngày bắt đầu theo dõi BN)',
      key: 'disease_history',
      listQuestions: [
        [
          [
            {
              question: 'Năm chẩn đoán bệnh lần đầu',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              unit: '',
              type: 'date',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Năm phát hiện di căn (VD: 2023):',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              unit: '',
              type: 'date',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Cơ quan di căn (nếu có)',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Vú',
                'Phổi',
                'Thận',
                'Hạch xa (hạch thượng đòn trái, …)',
                'Da',
                'Gan',
                'Lách',
                'Não',
                'Buồng trứng',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Phương pháp điều trị đã sử dụng:',
              type: 'none',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Phẫu thuật cắt tuyến giáp:'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Năm:',
              unit: '',
              type: 'date',
              answer: '',
            },

            {
              question: 'Với u giáp:',
              listChoice: ['Cắt giáp toàn bộ', 'Cắt giáp bán phần'],
              type: 'radio',
              answer: '',
            },
            {
              question: 'Với hạch cổ:',
              unit: '',
              type: '',
              answer: '',
            },
            {
              listChoice: [
                'Vét hạch cổ nhóm VI dự phòng',
                'Vét hạch cổ nhóm hạch có bằng chứng di căn',
                'Vét hạch cổ triệt căn còn khả năng phẫu thuật',
              ],
              type: 'radio',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Xạ trị I131:'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Năm:',
              unit: '',
              type: 'date',
              answer: '',
            },
            {
              question: 'Số liều',
              type: 'text',
              answer: '',
            },
            {
              question: 'Liều lần 1:',
              unit: 'mCi',
              type: 'text',
              answer: '',
            },
            {
              question: 'Liều lần 2:',
              unit: 'mCi',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Liệu pháp hormon thay thế:'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              prefix: 'Tên thuốc:',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              prefix: 'Liều lượng:',
              unit: '',
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
              prefix: 'Liều xạ:',
              unit: 'Gy',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Điều trị khác (nếu có, ghi rõ):',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              unit: '',
              type: 'textarea',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hóa chất'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'Doxorubicin',
                'Paclitaxel',
                'Docetaxel',
                'Cisplatin',
                'Carboplatin',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Thuốc điều trị đích:'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'Sorafenib (Nexavar)',
                'Lenvatinib (Lenvima)',
                'Vandetanib',
                'Cabozantinib (Cabometyx)',
                'Dabrafenib',
                'Pralsetinib',
                'Trametinib',
                'Thuốc khác (Nếu có, ghi rõ)',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false, false],
            },
            {
              question: 'Thời gian sử dụng (VD: 2 tháng):',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              question: 'Liều lượng',
              unit: 'mg/ngày',
              type: 'text',
              answer: '',
            },
          ],
        ],
      ],
    },
    {
      name: 'IV> KHÁM LÂM SÀNG (*ngay trước điều trị hoá chất)',
key:'clinical_examination',
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
              question: '',
              unit: 'kg',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Chiều cao:',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              unit: 'cm',
              type: 'text',
              answer: '',
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
              question: 'Nuốt nghẹn',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Không', 'Có'],
              type: 'radio',
              horizontal: true,
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Khàn tiếng',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Không', 'Có'],
              type: 'radio',
              horizontal: true,
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Khó thở',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Không', 'Có'],
              type: 'radio',
              horizontal: true,
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Tuyến giáp',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                '0: K có bướu giáp',
                'IA: Không nhìn thấy bướu tư thế bình thường. Sờ thấy bướu, mỗi thùy tuyến giáp to hơn 1 đốt ngón cái của BN',
                'IB: Nhìn thấy bướu giáp to khi ngửa đầu ra sau tối đa. Sờ thấy bướu',
                'II: Nhìn thấy bướu tư thế bình thường. Tuyến giáp to, nhìn thấy khi đầu ở tư thế bt và ở gần',
                'III: Bướu giáp rất lớn, nhìn thấy rõ từ xa. Bướu lớn làm biến dạng cổ',
              ],
              answer: 'radio',
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              question: 'Nhân tuyến giáp',
              type: 'none',
            },
          ],
          [
            {
              prefix: 'Số Lượng:',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              question: 'Vị trí',
              listChoice: ['Thùy trái', 'Thùy phải', 'Eo tuyến giáp'],
              answer: [false, false, false],
              type: 'checkbox',
            },
            {
              question: 'Mật độ:',
              type: 'none',
            },
            {
              question: 'Mật độ:',
              listChoice: ['Chắc', 'Mềm'],
              answer: '',
              type: 'radio',
              horizontal: true,
            },

            {
              question: 'Di động theo nhịp nuốt:',
              listChoice: ['Không', 'Có'],
              answer: '',
              type: 'radio',
              horizontal: true,
            },

            {
              question: 'Tính chất đau:',
              listChoice: ['Không', 'Có'],
              answer: '',
              type: 'radio',
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'Hạch cổ',
              type: 'none',
            },
          ],
          [
            {
              prefix: 'Số Lượng:',
              unit: '',
              type: 'text',
              answer: '',
            },

            {
              question: 'Vị trí',
              listChoice: [
                'Hạch khoang trung tâm ',
                'Hạch khoang bên trái ',
                'Hạch khoang bên phải',
              ],
              answer: [false, false, false],
              type: 'checkbox',
            },
          ],
        ],
        [
          [
            {
              question: 'Triệu chứng khác (nếu có, ghi rõ)',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              unit: '',
              type: 'text',
              answer: '',
            },
          ],
        ],
      ],
    },
    {
      name: 'V>CẬN LÂM SÀNG',
key:'subclinical',
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
            {
              question: 'Hb',
              type: 'none',
            },
            {
              question: 'Bạch cầu(WBC)',
              type: 'none',
            },
            {
              question: 'Bạch cầu đa nhân trung tính',
              type: 'none',
            },
            {
              question: 'Tiểu cầu',
              type: 'none',
            },
            {
              question: 'PT%',
              type: 'none',
            },
            {
              question: 'INR',
              type: 'none',
            },
            {
              question: 'APTT b/c',
              type: 'none',
            },
            {
              question: 'Bilirubin toàn phần',
              type: 'none',
            },
            {
              question: 'Bilirubin trực tiếp',
              type: 'none',
            },
            {
              question: 'Albumin',
              type: 'none',
            },
            {
              question: 'ALT',
              type: 'none',
            },
            {
              question: 'AST',
              type: 'none',
            },
            {
              question: 'Glucose',
              type: 'none',
            },
            {
              question: 'LDH',
              type: 'none',
            },
            {
              question: 'GGT',
              type: 'none',
            },
            {
              question: 'Ure',
              type: 'none',
            },
            {
              question: 'Creatinin',
              type: 'none',
            },
            {
              question: 'Ca2+',
              type: 'none',
            },
            {
              question: 'PTH',
              type: 'none',
            },
          ],
          [
            {
              unit: 'T/L',
              type: 'text',
            },
            {
              unit: 'g/L',
              type: 'text',
            },
            {
              unit: 'G/L',
              type: 'text',
            },
            {
              unit: 'G/L',
              type: 'text',
            },
            {
              unit: 'G/L',
              type: 'text',
            },
            {
              unit: '%',
              type: 'text',
            },
            {
              unit: 'none',
              type: 'text',
            },
            {
              unit: 'none',
              type: 'text',
            },
            {
              unit: 'μmol/L',
              type: 'text',
            },
            {
              unit: 'μmol/L',
              type: 'text',
            },
            {
              unit: 'g/L',
              type: 'text',
            },
            {
              unit: 'UI/L',
              type: 'text',
            },
            {
              unit: 'UI/L',
              type: 'text',
            },
            {
              unit: 'none',
              type: 'text',
            },
            {
              unit: 'UI/L',
              type: 'text',
            },
            {
              unit: 'UI/L',
              type: 'text',
            },
            {
              unit: 'mmol/L',
              type: 'text',
            },
            {
              unit: 'umol/L',
              type: 'text',
            },
            {
              unit: 'mmol/L',
              type: 'text',
            },
            {
              unit: 'pg/mL',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Chức năng tuyến giáp:',
              type: 'title',
            },
          ],
        ],

        [
          [
            {
              question: 'FT3',
              type: 'none',
            },
            {
              question: 'FT4',
              type: 'none',
            },
            {
              question: 'TSH',
              type: 'none',
            },
            {
              question: 'Thyroglobulin (Tg)',
              type: 'none',
            },
            {
              question: 'Calcitonin',
              type: 'none',
            },
            {
              question: 'TPO-Ab',
              type: 'none',
            },
            {
              question: 'TRAb',
              type: 'none',
            },
            {
              question: 'Anti - Tg',
              type: 'none',
            },
          ],
          [
            {
              unit: 'pmol/L',
              type: 'text',
            },
            {
              unit: 'pmol/L',
              type: 'text',
            },
            {
              unit: 'uIU/mL',
              type: 'text',
            },
            {
              unit: 'ng/mL',
              type: 'text',
            },
            {
              unit: 'pg/mL',
              type: 'text',
            },
            {
              unit: 'IU/mL',
              type: 'text',
            },
            {
              unit: 'UI/mL',
              type: 'text',
            },
            {
              unit: 'UI/mL',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Marker UT',
              type: 'none',
            },
          ],
          [
            {
              prefix: 'CEA (Antigene-carcino-embryonnaire): ',
              type: 'text',
              unit: 'ng/mL',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Siêu âm vùng cổ:',
              type: 'title',
            },
          ],
        ],

        [
          [
            {
              question: 'Tổng số nhân tuyến giáp:',
              type: 'text',
              answer: '',
            },
            {
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
                  {
                    type: 'text',
                  },
                ],
              ],
              header: ['Nhân giáp thứ', 'Vị trí', 'Kích thước', 'Phân độ TIRADS'],
            },
            {
              question: 'Hạch vùng cổ',
              type: 'title',
            },
            {
              prefix: 'Vị trí:',
              type: 'text',
              answer: '',
            },
            {
              prefix: 'Kích thước lớn nhất:',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'FNA (Chọc tế bào kim nhỏ):',
              type: 'title',
            },
            {
              question: 'Phân nhóm Bethesda',
              listChoice: [
                'I: Không đủ điều kiện chẩn đoán ',
                'II: Lành tính',
                'III: Không điển hình có ý nghĩa chưa xác định (AUS)',
                'IV: U tuyến dạng nang/Nghi ngờ u tuyến dạng nang',
                'V: Nghi ngờ ác tính',
                'VI: Ác tính',
              ],
              type: 'radio',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Xạ hình tuyến giáp:',
              type: 'textarea',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'CT/MRI:',
              type: 'textarea',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'Kết quả sinh thiết GPB:',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'UT biểu mô dạng nhú',
                'UT biểu mô dạng nang ',
                'UT tế bào Hurthle',
                'UT Tủy giáp trạng ',
                'UT biểu mô không biệt hóa',
                'Khác (Ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Phân loại TNM (Theo AJCC)',
              type: 'none',
            },
          ],
          [
            {
              prefix: 'T:',
              type: 'text',
              answer: '',
            },
            {
              prefix: 'N:',
              type: 'text',
              answer: '',
            },
            {
              prefix: 'M:',
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
                'PS 0: Hoạt động bình thường',
                'PS 1: Bị hạn chế hoạt động nặng, nhưng đi lại được và làm được việc nhẹ',
                'PS 2: Đi lại được nhưng không làm được các việc, hoàn toàn chăm sóc được bản thân, phải nghỉ ngơi dưới 50% thời gian thức',
                'PS 3: Chỉ chăm sóc bản thân tối thiểu, phải nghỉ trên 50% thời gian',
                'PS 4: Mất khả năng chăm sóc bản thân và hoàn toàn nằm nghỉ tại giường hoặc ghế',
              ],
              type: 'radio',
              answer: '',
            },
          ],
        ],
      ],
    },
    {
      name: 'VI> PHƯƠNG PHÁP ĐIỀU TRỊ (*tính từ ngày bắt đầu theo dõi)',
key:'treatments',
      listQuestions: [
        [
          [
            {
              question: 'Thuốc điều trị đích:',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Sorafenib (Nexavar)',
                'Lenvatinib (Lenvima)',
                'Vandetanib',
                'Cabozantinib (Cabometyx)',
                'Dabrafenib',
                'Pralsetinib',
                'Trametinib',
                'Thuốc khác (Nếu có, ghi rõ)',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Phương pháp điều trị kết hợp:',
              type: 'title',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Phẫu thuật cắt tuyến giáp:'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Với u giáp:',
              listChoice: ['Cắt giáp toàn bộ', 'Cắt giáp bán phần'],
              type: 'checkbox',
              answer: [false, false],
            },
            {
              question: 'Với hạch cổ:',
              listChoice: [
                'Vét hạch cổ nhóm VI dự phòng',
                'Vét hạch cổ nhóm hạch có bằng chứng di căn',
                'Vét hạch cổ triệt căn còn khả năng phẫu thuật',
              ],
              type: 'checkbox',
              answer: [false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Xạ trị I131:'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              prefix: 'Số liều:',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              prefix: 'Liều lần 1:',
              unit: 'mCi',
              type: 'text',
              answer: '',
            },
            {
              prefix: 'Liều lần 2:',
              unit: 'mCi',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Liệu pháp hormon thay thế:'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              prefix: 'Tên thuốc:',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              prefix: 'Liều lượng:',
              unit: '',
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
              prefix: 'Liều xạ:',
              unit: 'Gy',
              type: 'text',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hóa chất'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'Doxorubicin',
                'Paclitaxel',
                'Docetaxel',
                'Cisplatin',
                'Carboplatin',
                'Thuốc khác (Nếu có, ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Điều trị khác (nếu có, ghi rõ):',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              unit: '',
              type: 'text',
              answer: '',
            },
          ],
        ],
      ],
    },
  ],
  clinicalSymptoms: {
    header: [],
    body: [
      [
        { question: 'Sau 3 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'text',
        },
      ],
      [
        { question: 'Sau 4 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'text',
        },
      ],
      [
        { question: 'Sau 6 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'text',
        },
      ],
      [
        { question: 'Sau 8 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'text',
        },
      ],
      [
        { question: 'Sau 10 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'text',
        },
      ],
      [
        { question: 'Sau 12 tháng', type: 'none' },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3, 4, 5],
          answer: '',
        },
        {
          type: 'text',
          unit: 'kg',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1, 2, 3],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'select',
          listChoice: [0, 1],
          answer: '',
        },
        {
          type: 'text',
        },
      ],
    ],
  },
  responeToTreatment: [
    [
      {
        question: 'Sau 2 tháng',
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
        question: 'Sau 4 tháng',
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
        question: 'Sau 8 tháng',
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
        question: 'Sau 10 tháng',
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
  ],

  assessmentResponseTreatment: {
    name: '40.Theo dõi đáp ứng điều trị',
    listQuestions: [
      {
        question: 'Siêu âm vùng cổ:',
        type: 'text',
      },
      {
        question: 'Tổng số nhân tuyến giáp:',
        type: 'text',
      },
      {
        question: 'Hạch vùng cổ:',
        type: 'title',
      },
      {
        question: 'Tổng số hạch:',
        type: 'text',
      },
      {
        question: 'Vị trí:',
        type: 'text',
      },
      {
        question: 'Kích thước lớn nhất:',
        type: 'text',
      },
      {
        question: 'Xạ hình tuyến giáp/toàn thân: ',
        type: 'text',
      },
      {
        question: '-	CT/MRI',
        type: 'text',
      },
      {
        question: '-	PET/CT:',
        type: 'text',
      },
    ],

    postListQuestions: [
      {
        question: 'Tử vong trong 1 năm theo dõi ',
        type: 'radio',
        listChoice: ['Không', 'Có'],
        horizontal: true,
      },
      {
        question: 'Thời gian tử vong',
        type: 'date',
      },
      {
        question: 'Nguyên nhân (ghi rõ)',
        type: 'text',
        answer: '',
      },
    ],
  },

  genTest: {
    header: [
      'Gen',
      'Trình tự tham chiếu',
      'Biến thể',
      'Vị trí trên nhiễm sắc thể',
      'Kiểu gen',
      'Kiểu di truyền',
    ],
    body: [
      [
        {
          type: 'text',
          answer: '',
        },
        {
          type: 'text',
          answer: '',
        },
        {
          type: 'text',
          answer: '',
        },
        {
          type: 'text',
          answer: '',
        },
        {
          type: 'text',
          answer: '',
        },
        {
          type: 'text',
          answer: '',
        },
      ],
    ],
  },
  genTestResponseTreatment: {
    header: [
      'Gen',
      'Trình tự tham chiếu',
      'Biến thể',
      'Vị trí trên nhiễm sắc thể',
      'Nhạy cảm/Kháng thuốc đích',
      'Thuốc đích ảnh hưởng',
    ],
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
  otherInfo: {
    bloodTest: [
      [
        {
          question: 'Sau 2 tháng',
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
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: 'Sau 4 tháng',
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
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: 'Sau 8 tháng',
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
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
      [
        {
          question: 'Sau 10 tháng',
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
        {
          type: 'text',
        },
        {
          type: 'text',
        },
      ],
    ],
    thyroidTable: {
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
          {
            type: 'text',
          },
        ],
      ],
      header: ['Nhân giáp thứ', 'Vị trí', 'Kích thước', 'Phân độ TIRADS'],
    },
  },
};
export default THYROID;
