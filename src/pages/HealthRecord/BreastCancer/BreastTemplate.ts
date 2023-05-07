const BREAST: any = {
  typeHealthRecord: 'UNG THƯ VÚ',
  generalInfo: [
    {
      name: 'II> TIỀN SỬ',
      key: 'medicalHistory',
      listQuestions: [
        [
          [
            {
              question: 'Kinh nguyệt',
              type: 'none',
            },
          ],
          [
            {
              question: 'Tuổi bắt đầu có kinh',
              type: 'text',
            },
            {
              question: 'Tuổi mãn kinh(nếu có)',
              type: 'text',
            },
            {
              question: 'Chu kì kinh',
              listChoice: ['Không đều', 'Đều'],
              horizontal: true,
              type: 'radio',
            },
            {
              question: 'Độ dài một chu kì kinh nguyệt:',
              type: 'text',
              unit: 'ngày',
            },
          ],
        ],
        [
          [
            {
              question: 'Sản khoa (nếu có)',
              type: 'none',
            },
          ],
          [
            {
              question: 'Số lần mang thai đủ tháng',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              question: 'Số lần mang thai thiếu tháng',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              question: 'Số lần sảy/nạo phá thai',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              question: 'Cho con bú',
              listChoice: ['Không', 'Có'],
              type: 'radio',
              horizontal: true,
            },
            {
              question: 'Tuổi sinh con đầu lòng',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Bệnh vú lành tính',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Chưa từng mắc',
                'Xơ nang tuyến vú',
                'U xơ tuyến vú',
                'Viêm tuyến vú',
                'Áp xe vú',
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
              question: 'Bệnh kèm theo khác nếu có:',
              type: 'none',
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
              question: 'Chế độ sinh hoạt',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Thuốc lá', 'Rượu bia'],
              type: 'checkbox',
              answer: [false, false],
            },
          ],
          [
            {
              type: 'text',
              unit: 'bao/ngày',
            },
            {
              type: 'text',
              unit: 'năm',
            },
            {
              type: 'text',
              unit: 'bao/ngày',
            },
            {
              type: 'text',
              unit: 'năm',
            },
          ],
        ],
        [
          [
            {
              question: 'Mức độ vận động hàng ngày',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Không', 'Ít', 'Vừa', 'Nhiều'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              question: 'Biện pháp tránh thai từng sử dụng',
              type: 'none',
            },
          ],
          [
            {
              listChoice: [
                'Chưa từng sử dụng',
                'Dùng thuốc tránh thai chỉ chứa progesterone',
                'Dùng thuốc tránh thai hai thành phần',
                'Đặt vòng tránh thai chứa hormone',
                'Que cấy tránh thai',
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
              question: 'Tiếp xúc với yếu tố độc hại (hóa chất, tia xạ,… )',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Không', 'Có'],
              horizontal: true,
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              question:
                'Tiền sử gia đình di truyền (mẹ, chị em ruột mắc ung thư vú, ung thư buồng trứng)',
              type: 'none',
            },
          ],
          [
            {
              type: 'text',
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
              question: 'Năm chẩn đoán bệnh lần đầu (VD: 2023):',
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
              listChoice: ['Xương', 'Phổi', 'Não', 'Gan', 'Khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              question: 'Gầy sút cân *(so với cân nặng trung bình trước khi phát hiện bệnh)',
              type: 'none',
            },
          ],
          [
            {
              type: 'text',
              unit: 'kg',
            },
          ],
        ],
        [
          [
            {
              question:
                'Phương pháp điều trị đã sử dụng (*từ khi phát hiện bệnh đến ngày bắt đầu theo dõi BN)',
              type: 'none',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hóa trị tân bổ trợ'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Năm:',
              type: 'none',
            },

            {
              listChoice: ['Phác đồ CMF', 'Phác đồ AC', 'Phác đồ ACF', 'khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
          [
            {
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
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
              prefix: 'Năm:',
              unit: '',
              type: 'date',
              answer: '',
            },
            {
              prefix: 'Liều xạ',
              type: 'text',
              answer: '',
              unit: 'Gy',
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
              prefix: 'Năm:',
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              type: 'radio',
              listChoice: ['Bảo tồn', 'Cắt tuyến vú', 'Vét hạch nách', 'inh thiết hạch cửa'],
              answer: '',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hóa trị bổ trợ'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              question: 'Năm:',
              type: 'none',
            },

            {
              listChoice: ['Phác đồ CMF', 'Phác đồ AC', 'Phác đồ ACF', 'khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
          [
            {
              unit: '',
              type: 'text',
              answer: '',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
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
              prefix: 'Năm:',
              unit: '',
              type: 'date',
              answer: '',
            },
            {
              prefix: 'Liều xạ',
              type: 'text',
              answer: '',
              unit: 'Gy',
            },
          ],
        ],
        [
          [
            {
              question: 'Điều trị nội tiết',
              type: 'none',
            },
          ],
          [
            {
              question: '',
              listChoice: [
                'Tamoxifen',
                'Chất ức chế aromatase',
                'Cắt buồng trứng (phẫu thuật, xạ trị, thuốc)',
              ],
              type: 'checkbox',
              answer: [false, false, false],
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
              listChoice: [
                'Transtuzumab',
                'Pertuzumab',
                'T-DMT1',
                'Lapatimib',
                'Everolimus',
                'Bevacizumab',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false],
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
              type: 'textarea',
              answer: '',
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
              question: 'Đau vùng vú',
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
              question: 'Chảy dịch đầu vú',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Không', 'Dịch máu', 'Khác (ghi rõ):'],
              type: 'radio',
              answer: '',
            },
          ],
        ],
        [
          [
            {
              question: 'U cục vùng vú',
              type: 'none',
            },
          ],
          [
            {
              prefix: 'Số lượng u:',
              type: 'text',
            },
            {
              question: 'Vị trí',
              listChoice: [
                'Vú T',
                'Trung tâm',
                'Trên ngoài',
                'Trên trong',
                'Dưới trong',
                'Dưới ngoài',
              ],
            },
            {
              question: 'Vị trí',
              listChoice: [
                'Vú P',
                'Trung tâm',
                'Trên ngoài',
                'Trên trong',
                'Dưới trong',
                'Dưới ngoài',
              ],
            },
            {
              prefix: 'Kích thước lớn nhất',
              unit: 'cm',
              type: 'text',
            },
            {
              listChoice: ['Không', 'Có'],
              type: 'radio',
              horizontal: true,
              answer: '',
              question: 'Mật độ u:',
            },
            {
              listChoice: ['Không', 'Có'],
              type: 'radio',
              horizontal: true,
              answer: '',
              question: 'Di động:',
            },
            {
              listChoice: ['Không', 'Có'],
              type: 'radio',
              horizontal: true,
              answer: '',
              question: 'Dính da:',
            },
          ],
        ],
        [
          [
            {
              question: 'Hạch',
              type: 'none',
            },
          ],
          [
            { prefix: 'Số lượng hạch:', type: 'number' },
            {
              question: 'Vị trí',
              listChoice: ['Hạch nách', 'Hạch vú trong', 'Hạch thượng đòn', 'Hạch cửa'],
              answer: [false, false, false, false],
              type: 'checkbox',
            },
          ],
        ],
        [
          [
            {
              question: 'Chán ăn, mệt mỏi',
              type: 'none',
            },
          ],
          [
            {
              question: 'Vị trí',
              listChoice: ['Không', 'Có'],
              answer: [false, false],
              type: 'radio',
              hirizontal: true,
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
              question: 'Calci máu',
              type: 'none',
            },
          ],
          [
            {
              unit: 'mol/L',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'ALP',
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
              question: 'Progesterone',
              type: 'none',
            },
          ],
          [
            {
              unit: 'ng/mL',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Estradiol',
              type: 'none',
            },
          ],
          [
            {
              unit: 'ng/mL',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'FSH',
              type: 'none',
            },
          ],
          [
            {
              unit: 'mU/mL',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'β-HCG',
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
              question: 'Maker ung thư',
              type: 'none',
            },
          ],
          [
            {
              prefix: 'CEA :',
              type: 'text',
              unit: 'ng/mL',
            },
            {
              prefix: 'CA 15-3:',
              type: 'text',
              unit: 'ng/mL',
            },
            {
              prefix: 'CA 27-29:',
              type: 'text',
              unit: 'ng/mL',
            },
          ],
        ],
        [[{ question: 'Hóa mô miễn dịch', type: 'title' }]],
        [
          [
            {
              prefix: 'ER:',
              type: 'text',
              unit: 'điểm',
            },
          ],
          [
            {
              listChoice: ['Âm tính (≤ 10 điểm)', '11 – 199 điểm', '≥ 200 điểm'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              prefix: 'PR:',
              type: 'text',
              unit: 'điểm',
            },
          ],
          [
            {
              listChoice: ['Âm tính (≤ 10 điểm)', '11 – 199 điểm', '≥ 200 điểm'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              question: 'HER2',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['0', '1+', '2+', '3+'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              question: 'Khuếch đại HER2-FISH',
              type: 'none',
            },
          ],
          [
            {
              type: 'radio',
              listChoice: ['Không', 'Có'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'Ki67',
              type: 'none',
            },
          ],
          [
            {
              type: 'number',
              unit: '%',
            },
          ],
        ],
        [
          [
            {
              question: 'p53',
              type: 'none',
            },
          ],
          [
            {
              type: 'number',
              unit: '%',
            },
          ],
        ],
        [
          [
            {
              question: 'Bcl2',
              type: 'none',
            },
          ],
          [
            {
              type: 'radio',
              listChoice: ['Âm tính', 'Dương tính'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'CK18',
              type: 'none',
            },
          ],
          [
            {
              type: 'radio',
              listChoice: ['Âm tính', 'Dương tính'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'CK5/6',
              type: 'none',
            },
          ],
          [
            {
              type: 'radio',
              listChoice: ['Âm tính', 'Dương tính'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'CK17',
              type: 'none',
            },
          ],
          [
            {
              type: 'radio',
              listChoice: ['Âm tính', 'Dương tính'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'EGFR',
              type: 'none',
            },
          ],
          [
            {
              type: 'radio',
              listChoice: ['Âm tính', 'Dương tính'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'p63',
              type: 'none',
            },
          ],
          [
            {
              type: 'radio',
              listChoice: ['Âm tính', 'Dương tính'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'D2-40',
              type: 'none',
            },
          ],
          [
            {
              type: 'radio',
              listChoice: ['Âm tính', 'Dương tính'],
              horizontal: true,
            },
          ],
        ],
        [
          [
            {
              question: 'Chẩn đoán hình ảnh và y học hạt nhân',
              type: 'title',
            },
          ],
        ],
        [
          [
            {
              question: 'Siêu âm tuyến vú',
              type: 'none',
            },
            {
              prefix: 'Tổng số khối',
              type: 'number',
            },
            {
              type: 'table',
              header: [
                'Khối thứ',
                'Vị trí',
                'Kích thước (mm x mm)',
                'Phân độ BRADS',
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
                ]
              ]
            },
            {
              prefix: 'Tổng số hạch',
              type: 'number',
            },
          ],
        ],
        [
          [
            {
              prefix: 'X-quang',
              type: 'text',
            },
            {
              prefix: 'MRI',
              type: 'text',
            },
            {
              prefix: 'PET/CT',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Mô bệnh học',
              type: 'title',
            },
          ],
        ],
        [
          [
            {
              prefix: 'Type mô bệnh học',
              type: 'text',
            },
          ],
        ],
        [
          [
            {
              question: 'Nhóm mô bệnh học',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Nhóm A', 'Nhóm B', 'Nhóm C', 'Nhóm D'],
              type: 'radio',
            },
          ],
        ],
        [
          [
            {
              question: 'Độ mô học',
              type: 'none',
            },
          ],
          [
            {
              listChoice: ['Độ I', 'Độ II', 'Độ III'],
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
              listChoice: ['Hóa trị tân bổ trợ'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: ['Phác đồ CMF', 'Phác đồ AC', 'Phác đồ ACF', 'khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
          [
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Hóa trị bổ trợ'],
              type: 'checkbox',
              answer: [false],
            },
          ],
          [
            {
              listChoice: ['Phác đồ CMF', 'Phác đồ AC', 'Phác đồ ACF', 'khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
          [
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
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
              listChoice: ['Phác đồ CMF', 'Phác đồ AC', 'Phác đồ ACF', 'khác (ghi rõ):'],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
          [
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
            {
              type: 'text',
              unit: 'chu kì',
            },
          ],
        ],
        [
          [
            {
              question: 'Phương pháp điều trị cùng hóa chất',
              type: 'none',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Phẫu thuật'],
              answer: [false],
              type: 'checkbox',
            },
          ],
          [
            {
              listChoice: ['Bảo tồn', 'Cắt tuyến vú', 'Vét hạch nách', 'Sinh thiết hạch cửa'],
              type: 'checkbox',
              answer: [false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Xạ trị'],
              answer: [false],
              type: 'checkbox',
            },
          ],
          [
            {
              type: 'text',
              unit: 'Gy',
              prefix: 'Liều xạ',
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Điều trị nội tiết'],
              answer: [false],
              type: 'checkbox',
            },
          ],
          [
            {
              listChoice: [
                'Tamoxifen',
                'Chất ức chế aromatase',
                'Cắt buồng trứng (phẫu thuật, xạ trị, thuốc)',
              ],
              type: 'checkbox',
              answer: [false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Điều trị đích và điều trị miễn dịch'],
              answer: [false],
              type: 'checkbox',
            },
          ],
          [
            {
              listChoice: [
                'Transtuzumab',
                'Pertuzumab',
                'T-DMT1',
                'Lapatimib',
                'Everolimus',
                'Bevacizumab',
                'Khác (ghi rõ):',
              ],
              type: 'checkbox',
              answer: [false, false, false, false, false, false, false],
            },
          ],
        ],
        [
          [
            {
              listChoice: ['Điều trị khác (ghi rõ)'],
              answer: [false],
              type: 'checkbox',
            },
          ],
          [
            {
              type: 'textarea',
            },
          ],
        ],
      ],
    },
  ],
  clinicalSymptoms: {
    header: [
      "Thời gian sau sử dụng hóa chất",
      "PS*(1-5)",
      "Cân nặng",
      "Mức độ mệt mỏi",
      "Mức độ chán ăn/nôn/buồn nôn",
      "Mức độ rụng tóc",
    ],
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
      ],
    ]
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
  ],
  otherInfo: {
    marker: [
      [
        {
          type: 'none',
          question: 'Sau 3 tháng',
        },
        {
          type: 'number',
        },
        {
          type: 'number',
        },
        {
          type: 'number',
        },
      ],
    ],
    tumor: {
      header: [
        "Thời gian sau sử dụng hóa chất",
        "Lâm sàng",
        "Siêu âm",
      ],
      body: [
        [
          {
            type: 'none',
            question: 'Sau 3 tháng',
          },
          {
            type: 'number',
          },
          {
            type: 'number',
          },
        ],
      ]
    },
  },
  assessmentResponseTreatment: {
    name: '40.Theo dõi đáp ứng điều trị',
    listQuestions: [
      {
        question: 'Xquang - vú',
        type: 'text',
      },
    ],

    postListQuestions: [
      {
        question: 'Tử vong trong 2 năm theo dõi ',
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

};
export default BREAST;
