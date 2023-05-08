let LUNG: any = {
  typeHealthRecord: 'UNG THƯ PHỔI',

  generalInfo: [
    {
      name: 'II> TIỀN SỬ',
      key: 'medicalHistory',
      listQuestions: [
        [
          [
            {
              listChoice: ['Hút thuốc lá chủ động', 'Hút thuốc lá bị động'],
              type: 'checkbox',
              answer: [false, false],
            },
          ],
          [
            {
              question: '',
              type: 'text',
              unit: 'bao/ngày',
              answer: '',
            },
            {
              question: '',
              type: 'text',
              unit: 'năm',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hút thuốc lào'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              type: 'text',
              answer: '',
              unit: 'Điếu/ngày',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Các bệnh lý của phổi'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'COPD',
                'Viêm phổi',
                'Hen phế quản',
                'Giãn phế quản',
                'Tràn dịch/Tràn khí màng phổi',
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
              listChoice: ['Các bệnh khác ngoài phổi(nếu có, ghi rõ)'],
              type: 'checkbox',
              answer: [false],
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
              listChoice: ['Tiếp xúc với độc tố hoặc hóa chất'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: ['Amiant', 'Radon', 'Bụi phóng xạ', 'Silic', 'Khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: [
                'Tiền sử gia đình (xét người thân trong gia đình ít nhất 3 thế hệ) mắc ung thư phổi (K BM dạng biểu bì, K BM TB nhỏ, K BM tuyến, K BM TB lớn',
              ],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Quan hệ với bệnh nhân:',
              type: 'text',
              unit: '',
              answer: '',
            },
            {
              listChoice: [
                'Biểu mô vảy',
                'Biểu mô tuyến',
                'Biểu mô tế bào lớn',
                'Biểu mô tuyến-vảy',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false],
            },
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
              question: 'Năm chẩn đoán bệnh lần đầu (Nếu có)',
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
              question: 'Lý do vào viện',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Ho', 'Ho ra máu', 'Đau ngực', 'Khó thở'],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Thời gian diễn biến bệnh',
              type: 'none',
              answer: '',
            },
          ],
          [
            {
              type: 'text',
              answer: '',
              unit: 'ngày',
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
              question: 'Triệu chứng toàn thân và triệu chứng cơ năng',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Đau ngực',
                'Ho khan',
                'Ho đờm',
                'Ho ra máu',
                'Khó thở',
                'Sốt',
                'Mệt mỏi',
              ],
              answer: [false, false, false, false, false, false, false],
              type: 'checkbox',
            },
          ],
        ],
        [
          [
            {
              question: 'Nghe phổi',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Rale ẩm', 'Rale rít', 'Không rale', 'Phổi thông khí giảm'],
              answer: [false, false, false, false],
              type: 'checkbox',
            },
          ],
        ],
        [
          [
            {
              question: 'Triệu chứng do u di căn và hội chứng cận ung thư',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Đau đầu',
                'Hạch ngoại vi (Hạch thượng đòn- hạch nách)',
                'Nốt bất thường ngoài phổi (khối, nốt dưới da..)',
                'Đau cột sống',
                'Đau xương',
                'Đau bụng',
                'Khàn tiếng',
                'Nuốt nghẹn',
                'Nấc',
                'Hội chứng chèn ép TM chủ trên',
                'Hội chứng Pancoast Tobias',
                'Hội chứng Claude-Bernard- Horner',
                'Hội chứng cận ung thư',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
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
      name: 'V>CẬN LÂM SÀNG',
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
              question: 'Ure',
              type: 'none',
            },
            {
              question: 'Creatinine',
              type: 'none',
            },
            {
              question: 'Ure',
              type: 'none',
            },
            {
              question: 'ALP',
              type: 'none',
            },
            {
              question: 'Canxi',
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
              unit: 'mmol/L',
              type: 'text',
            },
            {
              unit: 'mmol/L',
              type: 'text',
            },
            {
              unit: 'μmol/L',
              type: 'text',
            },
            {
              unit: 'U/L',
              type: 'text',
            },
            {
              unit: 'mmol/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'X-Quang phổi thường quy thẳng và nghiêng',
              type: 'none',
            },
          ],
        ],
        [
          [
            {
              question: 'Vị trí tổn thương',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Trên phải', 'Giữa phải', 'Dưới phải', 'Trên trái', 'Dưới trái'],
              type: 'checkbox',
              answer: [false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Cắt lớp vi tính lồng ngực',
              type: 'none',
            },
          ],
        ],
        [
          [
            {
              question: 'Vị trí tổn thương',
              type: 'none',
            },
          ],

          [
            {
              listChoice: ['Trên phải', 'Giữa phải', 'Dưới phải', 'Trên trái', 'Dưới trái'],
              answer: [false, false, false, false, false],
              type: 'checkbox',
            },
          ],
        ],
        [
          [
            {
              question: 'Kích thước khối u nguyên phát',
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
              question: 'Số lượng khối u tại phổi',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Một khối',
                'Nhiều khối',
                'Cùng thuỳ',
                'Khác thuỳ',
                'Cùng bên',
                'Đối bên',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Hạch trung thất',
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
              question: 'Kết quả MRI não (nếu có):',
              type: 'textarea',
            },
          ],
        ],
        [
          [
            {
              question: 'Kết quả xạ hình xương (nếu có):',
              type: 'textarea',
            },
          ],
        ],
        [
          [
            {
              question: 'Kết quả di căn cơ quan khác ngoài phổi',
              type: 'none',
            },
          ],
          [
            {
              type: 'checkbox',
              listChoice: ['Di căn thượng thận', 'Di căn gan', 'Tràn dịch đa màng', 'Di căn khác'],
              answer: [false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Loại bệnh phẩm',
              unit: '',
              type: 'textarea',
            },
            {
              question: 'Kết luận',
              unit: '',
              type: 'textarea',
            },
          ],
        ],
        [
          [
            {
              question: 'Thể mô bệnh học',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Biểu mô tuyến',
                'Biểu mô vảy',
                'Biểu mô tế bào lớn',
                'Biểu mô tuyến-vảy',
                'Khác (ghỉ rõ):',
              ],
              answer: [false, false, false, false, false],
              type: 'checkbox',
            },
          ],
        ],
        [
          [
            {
              question: 'Giai đoạn lâm sàng theo IASLC lần thứ 8',
              type: 'none',
            },
          ],
          [
            {
              question: 'T',
              unit: '',
              type: 'text',
            },
            {
              question: 'N',
              unit: '',
              type: 'text',
            },
            {
              question: 'M',
              unit: '',
              type: 'text',
            },
            {
              question: 'Giai đoạn',
              unit: '',
              type: 'text',
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
              question: 'Phương pháp điều trị(*bắt buộc)',
              type: 'title',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Điều trị nhắm trúng đích'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'thuốc sử dụng',
              type: 'none',
            },
            {
              type: 'checkbox',
              listChoice: [
                'Erlotinib',
                'Gefitinib',
                'Afatinib',
                'Osimertinib',
                'Crizotinib',
                'Ceretinib',
                'Alectinib',
              ],
              answer: [false, false, false, false, false, false, false],
            },
          ],
          [
            {
              question: 'Liều',
              type: 'none',
            },
            {
              unit: 'mg/m2',
              type: 'text',
            },
            {
              unit: 'mg/m2',
              type: 'text',
            },
            {
              unit: 'mg/m2',
              type: 'text',
            },
            {
              unit: 'mg/m2',
              type: 'text',
            },
            {
              unit: 'mg/m2',
              type: 'text',
            },
            {
              unit: 'mg/m2',
              type: 'text',
            },
            {
              unit: 'mg/m2',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Phác đồ điều trị bước 2'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Phác đồ',
              type: 'none',
            },
            {
              type: 'checkbox',
              listChoice: ['Thuốc đích', 'Hoá chất ', 'Điều trị miễn dịch', 'Khác (ghi rõ):'],
              answer: [false, false, false, false],
            },
          ],
          [
            {
              question: 'Loại thuốc',
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
          ],
        ],
        [
          [
            {
              listChoice: ['Loại thuốc'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Tác dụng phụ',
              listChoice: [
                'Nổi ban da',
                'Buồn nôn, nôn',
                'Mệt mỏi, chán ăn',
                'Tăng men gan',
                'Tiêu chảy',
                'Viêm quanh móng',
                'Rụng tóc',
                'Đau nhức mỏi cơ',
                'Khác (ghỉ rõ): ',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false, false, false],
            },
          ],
          [
            {
              question: 'Phân độ',
              type: 'none',
            },
            {
              type: 'textarea',
            },
          ],
        ],
      ],
    },
  ],
  assessmentResponseTreatment: {
    listQuestions: [
      {
        question: '41.	Thời gian sống thêm không bệnh (PFS) ',
        type: 'text',
        unit: 'tháng',
        answer: '',
      },
      {
        question: '42.	Thời gian sống thêm toàn bộ: ',
        type: 'text',

        unit: 'tháng',
        answer: '',
      },
      {
        question: 'Nguyên nhân (ghi rõ)',
        type: 'text',

        answer: '',
      },
    ],
  },
  clinicalSymptoms: {
    header: [],
    body: [
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
    ],
  ],

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
    CEA: {
      header: ['Thời gian sau sử dụng đích', 'Nồng độ CEA (ng/ml)'],
      body: [
        [
          {
            question: 'Sau 3 tháng',
            type: 'none',
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
        ],
        [
          {
            question: 'Sau 9 tháng',
            type: 'none',
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
        ],
        [
          {
            question: 'Sau 15 tháng',
            type: 'none',
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
        ],
        [
          {
            question: 'Sau 21 tháng',
            type: 'none',
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
        ],
      ],
    },
  },
};
export default LUNG;
