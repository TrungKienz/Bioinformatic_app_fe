const LUNG: any = {
  generalInfo: [
    {
      name: 'II> TIỀN SỬ',
      key: 'medicalHistory',
      listQuestions: [
        [
          [
            {
              listChoice: ['Nguy cơ dinh dưỡng bất thường'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'Ăn ít chất xơ <20g/ngày (tương đương <400g rau/ngày)',
                'Ăn nhiều thịt đỏ (thịt bò, thịt lợn, …) >300g/tuần',
                'Ăn nhiều đồ ăn dầu mỡ, chiên rán, thực phẩm chế biến sẵn',
              ],
              type: 'checkbox',
              answer: [false, false, false],
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
              listChoice: [' Nguy cơ lối sống'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'Thuốc lá: ………..bao / ngày   x    …….. năm',
                'Rượu bia: ……….ml / ngày     x    …….. năm',
              ],
              type: 'checkbox',
              answer: [false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Nguy cơ bệnh lý tiền ung thư'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'Polyp đại - trực tràng',
                'Viêm loét đại trực tràng chảy máu ',
                'Bệnh Crohn',
                'Khác (ghi rõ): …',
              ],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Nguy cơ bệnh lý gia đình di truyền (cha mẹ, anh chị em ruột mắc các hội chứng di truyền và ung thư đại trực tràng)'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'Ung thư đại trực tràng', 
                'Bệnh đa polyp đại - trực tràng gia đình', 
                'HC ung thư đại -- trực tràng di truyền không polyp (HC Lynch)', 
                'HC Peutz-Jeghers', 
                'HC Gardner', 
                'HC Turcot', 
                'HC Polyp Juvenile', 
                'Khác (ghi rõ):'
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Sử dụng ít nhất 1 trong 2 phương pháp sàng lọc ung thư đại - trực tràng sau'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: [
                'Xét nghiệm máu ẩn trong phân', 
                'Nội soi đại trực tràng', 
                'Loại khác (ghi rõ): ...',
              ],
              type: 'checkbox',
              answer: [false, false, false],
            },
          ],
        ],
      ],
    },
    {
      name: 'III> BỆNH SỬ ',
      key: 'diseaseHistory',
      listQuestions: [
        [
          [
            {
              question: 'Năm chẩn đoán lần đầu (ví dụ: 2019): ……',
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
              question: 'Vị trí:',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Đại tràng phải ', 
                'Đại tràng ngang', 
                'Đại tràng trái', 
                'Đại tràng sigma',
                'Trực tràng cao',
                'Trực tràng trung bình',
                'Trực tràng thấp',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Đánh giá giai đoạn theo TNM',
              type: 'none',
              answer: '',
            },
          ],
          [
            {
              type: 'text',
              answer: '',
              unit: 'T…     N…    M…',
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
                'Gan', 
                'Phổi', 
                'Phúc mạc', 
                'Hạch xa (hạch thượng đòn trái, …)',
                'Xương ',
                'Lách',
                'Não',
                'Buồng trứng',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Biến chứng',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Tắc ruột', 
                'Vỡ u', 
                'Xuất huyết tiêu hóa', 
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Thể giải phẫu bệnh. Mức độ biệt hóa: 1. Thấp 2. Vừa 3. Cao',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Ung thư biểu mô tuyến. Mức độ biệt hóa:  ', 
                'Ung thư biểu mô chế nhầy. Mức độ biệt hóa:', 
                'Ung thư sarcoma. Mức độ biệt hóa:', 
                
              ],
              type: 'checkbox',
              answer: [false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Gầy sút cân *(so với cân nặng trung bình trước khi phát hiện bệnh)',
              type: 'none',
              answer: '',
            },
          ],
          [
            {
              type: 'text',
              answer: '',
              unit: '.............kg',
            },
          ],
        ],
        [
          [
            {
              question: 'Phương pháp điều trị đã sử dụng (*từ khi phát hiện bệnh đến ngày bắt đầu theo dõi BN)',
              type: 'title',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hoá trị tân bổ trợ'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Phác đồ sử dụng',
              type: 'none',
            },
            {
              type: 'checkbox',
              listChoice: [
                'FOLFLOX',
                'FOLFIRI',
                'CAPOX',
                'Khác (ghi rõ)',
                
              ],
              answer: [false, false, false, false],
            },
          ],
          [
            {
              question: '',
              type: 'none',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Xạ trị tân bổ trợ'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              unit: 'Liều xạ: …….Gy',
              type: 'text',
            }
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
              type: 'checkbox',
              listChoice: [
                'Triệt căn',
                'Cắt u không triệt căn',
                'Tạm thời',
              ],
              answer: [false, false, false],
            }
          ],
        ],
        [
          [
            {
              listChoice: ['Hoá trị bổ trợ'],
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
              listChoice: [
                'FOLFLOX',
                'FOLFIRI',
                'CAPOX',
                'Khác (ghi rõ)',
                
              ],
              answer: [false, false, false, false],
            },
          ],
          [
            {
              question: '',
              type: 'none',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Xạ trị bổ trợ'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              unit: 'Liều xạ: ……Gy',
              type: 'text',
            }
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
              question: 'Thuốc:',
              type: 'checkbox',
              listChoice: [
                'Bevacizumab',
                'Cetuximab',
                'Panitumumab',
                'Regorafenib',
                'Ziv-aflibercept',
                'Pembrolizumab',
                'Nivolumab',
                'Khác (ghi rõ): ',
              ],
              answer: [false, false, false, false, false, false, false, false],
            }
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
              unit: '……………………………………………',
              type: 'text',
            }
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
              question: 'Đi ngoài phân nhầy máu thường xuyên > 3 tháng',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              type: 'none',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Đau bụng'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              unit: '............./10  (thang VAS: 0-10 điểm)',
              type: 'text',
            }
          ],
        ],
        [
          [
            {
              question: 'Rối loạn đại tiện',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Táo bón', 'Tiêu chảy', 'Kết hợp xen kẽ táo bón vào tiêu chảy', 'Khác (ghi rõ):'],
              answer: [false, false, false, false],
              type: 'checkbox',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Thay đổi tính chất phân'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: '',
              type: 'none',
            },
            {
              type: 'checkbox',
              listChoice: [
                'Loại 1',
                'Loại 2',
                'Loại 3',
                'Loại 4',
                'Loại 5',
                'Loại 6',
                'Loại 7',
              ],
              answer: [false, false, false, false, false, false, false],
            },
          ],
          [
            {
              question: 'Bảng phân loại Bristol',
              type: 'none',
            },
            {
              // thay bằng ảnh
              type: 'checkbox',
              listChoice: [
                'Loại 1',
                'Loại 2',
                'Loại 3',
                'Loại 4',
                'Loại 5',
                'Loại 6',
                'Loại 7',
              ],
              answer: [false, false, false, false, false, false, false],
            },
          ],
          [
            {
              question: '',
              type: 'none',
            },
            {
              unit: 'Từng cục rời rạc, cứng và rất khó ra',
              type: 'text',
            },
            {
              unit: 'Giống như xúc xích khô và lọn cợn',
              type: 'text',
            },
            {
              unit: 'Giống như xúc xích khô và nứt nẻ',
              type: 'text',
            },
            {
              unit: 'Giống như xúc xích hay con rấn, trơn tru và mềm',
              type: 'text',
            },
            {
              unit: 'Từng cục nhầy và mềm (rất dễ ra)',
              type: 'text',
            },
            {
              unit: 'Lợn cợn lầy nhầy',
              type: 'text',
            },
            {
              unit: 'Phân lỏng hoàn toàn',
              type: 'text',
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
            
          ],
        ],
        [
          [
            {
              question: 'Nội soi đại tràng',
              type: 'none',
            },
          ],
        ],
        [
          [
            {
              question: 'Hình ảnh đại thể khối u:',
              listChoice: ['U loét', 'U sùi', 'U thể thâm nhiễm hay thể chai', 'U thể chít hẹp, nghẹt', 'U thể dưới niêm mạc'],
              type: 'checkbox',
              answer: [false, false, false, false, false],
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
              listChoice: ['Hoá trị bổ trợ'],
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
              listChoice: [
                'FOLFLOX',
                'FOLFIRI',
                'CAPOX',
                'Khác (ghi rõ)',
                
              ],
              answer: [false, false, false, false],
            },
          ],
          [
            {
              question: '',
              type: 'none',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hoá trị bổ trợ'],
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
              listChoice: [
                'FOLFLOX',
                'FOLFIRI',
                'CAPOX',
                'Khác (ghi rõ)',
                
              ],
              answer: [false, false, false, false],
            },
          ],
          [
            {
              question: '',
              type: 'none',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hóa trị và điều trị đích giai đoạn tái phát, di căn'],
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
              listChoice: [
                'FOLFLOX',
                'FOLFIRI',
                'CAPOX',
                'Khác (ghi rõ)',
                
              ],
              answer: [false, false, false, false],
            },
          ],
          [
            {
              question: '',
              type: 'none',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
            {
              unit: '……chu kì',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Nội soi đại tràng',
              type: 'none',
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
              type: 'checkbox',
              listChoice: [
                'Triệt căn',
                'Cắt u không triệt căn',
                'Tạm thời',
              ],
              answer: [false, false, false],
            }
          ],
        ],
        [
          [
            {
              listChoice: ['Xạ trị'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              unit: 'Liều xạ:……Gy',
              type: 'text',
            }
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
              question: 'Thuốc:',
              type: 'checkbox',
              listChoice: [
                'Bevacizumab',
                'Cetuximab',
                'Panitumumab',
                'Regorafenib',
                'Ziv-aflibercept',
                'Pembrolizumab',
                'Nivolumab',
                'Khác (ghi rõ): ',
              ],
              answer: [false, false, false, false, false, false, false, false],
            }
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
              unit: '……………………………………………',
              type: 'text',
            }
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
  genMutation: [
    [
      {
        question: 'L858R',
        type: 'none',
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
        question: 'Del19',
        type: 'none',
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
        question: 'L861',
        type: 'none',
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
        question: 'G719',
        type: 'none',
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
        question: 'S768',
        type: 'none',
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
        question: 'T790M',
        type: 'none',
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
        question: 'Khác',
        type: 'none',
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
        question: 'MET',
        type: 'none',
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
        question: 'TP53',
        type: 'none',
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
        question: 'ALK',
        type: 'none',
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
        question: 'KRAS',
        type: 'none',
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
        question: 'BRAF',
        type: 'none',
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
        question: 'NTRK',
        type: 'none',
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
        question: 'PTEN',
        type: 'none',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ],
  ],
  clinicalSymptoms: [
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
  CEA: [
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
};
export default LUNG;