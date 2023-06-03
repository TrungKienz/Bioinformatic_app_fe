let LUNG: any = {
  typeHealthRecord: 'lung-record',

  generalInfo:[
    {
        "name": "II> TIỀN SỬ",
        "key": "medical_history",
        "listQuestions": [
            [
                [
                    {
                        "listChoice": [
                            "Hút thuốc lá chủ động",
                            "Hút thuốc lá bị động"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false,
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "",
                        "type": "text",
                        "unit": "bao/ngày",
                        "answer": "",
                        "key": ""
                    },
                    {
                        "question": "",
                        "type": "text",
                        "unit": "năm",
                        "answer": "",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "listChoice": [
                            "Hút thuốc lào"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "",
                        "type": "text",
                        "answer": "",
                        "unit": "Điếu/ngày",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "listChoice": [
                            "Các bệnh lý của phổi"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "listChoice": [
                            "COPD",
                            "Viêm phổi",
                            "Hen phế quản",
                            "Giãn phế quản",
                            "Tràn dịch/Tràn khí màng phổi",
                            "Khác (ghi rõ):"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "listChoice": [
                            "Các bệnh khác ngoài phổi(nếu có, ghi rõ)"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "",
                        "unit": "",
                        "type": "text",
                        "answer": "",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "listChoice": [
                            "Tiếp xúc với độc tố hoặc hóa chất"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Amiant",
                            "Radon",
                            "Bụi phóng xạ",
                            "Silic",
                            "Khác (ghi rõ):"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "listChoice": [
                            "Tiền sử gia đình (xét người thân trong gia đình ít nhất 3 thế hệ) mắc ung thư phổi (K BM dạng biểu bì, K BM TB nhỏ, K BM tuyến, K BM TB lớn"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "Quan hệ với bệnh nhân:",
                        "type": "text",
                        "unit": "",
                        "answer": "",
                        "key": "quan_he_voi_benh_nhan"
                    },
                    {
                        "listChoice": [
                            "Biểu mô vảy",
                            "Biểu mô tuyến",
                            "Biểu mô tế bào lớn",
                            "Biểu mô tuyến-vảy",
                            "Khác (ghi rõ):"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ]
            ]
        ]
    },
    {
        "name": "III> BỆNH SỬ (*từ khi phát hiện bệnh đến ngày bắt đầu theo dõi BN)",
        "key": "disease_history",
        "listQuestions": [
            [
                [
                    {
                        "question": "Năm chẩn đoán bệnh lần đầu",
                        "type": "none",
                        "key": "nam_chan_doan_benh_lan_dau"
                    }
                ],
                [
                    {
                        "question": "",
                        "unit": "",
                        "type": "date",
                        "answer": "",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Lý do vào viện",
                        "type": "none",
                        "key": "ly_do_vao_vien"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Ho",
                            "Ho ra máu",
                            "Đau ngực",
                            "Khó thở"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Thời gian diễn biến bệnh",
                        "type": "none",
                        "answer": "",
                        "key": "thoi_gian_dien_bien_benh"
                    }
                ],
                [
                    {
                        "type": "text",
                        "answer": "",
                        "unit": "ngày",
                        "key": ""
                    }
                ]
            ]
        ]
    },
    {
        "name": "IV> KHÁM LÂM SÀNG (*ngay trước điều trị hoá chất)",
        "key": "clinical_examination",
        "listQuestions": [
            [
                [
                    {
                        "question": "Cân nặng",
                        "type": "none",
                        "key": "can_nang"
                    }
                ],
                [
                    {
                        "unit": "kg",
                        "type": "text",
                        "answer": "",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Chiều cao",
                        "type": "none",
                        "key": "chieu_cao"
                    }
                ],
                [
                    {
                        "unit": "cm",
                        "type": "text",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Triệu chứng lâm sàng",
                        "type": "title",
                        "key": "trieu_chung_lam_sang"
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Triệu chứng toàn thân và triệu chứng cơ năng",
                        "type": "none",
                        "key": "trieu_chung_toan_than_va_trieu_chung_co_nang"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Đau ngực",
                            "Ho khan",
                            "Ho đờm",
                            "Ho ra máu",
                            "Khó thở",
                            "Sốt",
                            "Mệt mỏi"
                        ],
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "type": "checkbox",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Nghe phổi",
                        "type": "none",
                        "key": "nghe_phoi"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Rale ẩm",
                            "Rale rít",
                            "Không rale",
                            "Phổi thông khí giảm"
                        ],
                        "answer": [
                            false,
                            false,
                            false,
                            false
                        ],
                        "type": "checkbox",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Triệu chứng do u di căn và hội chứng cận ung thư",
                        "type": "none",
                        "key": "trieu_chung_do_u_di_can_va_hoi_chung_can_ung_thu"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Đau đầu",
                            "Hạch ngoại vi (Hạch thượng đòn- hạch nách)",
                            "Nốt bất thường ngoài phổi (khối, nốt dưới da..)",
                            "Đau cột sống",
                            "Đau xương",
                            "Đau bụng",
                            "Khàn tiếng",
                            "Nuốt nghẹn",
                            "Nấc",
                            "Hội chứng chèn ép TM chủ trên",
                            "Hội chứng Pancoast Tobias",
                            "Hội chứng Claude-Bernard- Horner",
                            "Hội chứng cận ung thư",
                            "Khác (ghi rõ):"
                        ],
                        "type": "checkbox",
                        "answer": [
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
                            false
                        ],
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Đánh giá toàn trạng (PS) theo ECOG: (trước điều trị hoá chất)",
                        "listChoice": [
                            "PS 0: Hoạt động bình thường.",
                            "PS 1: Bị hạn chế hoạt động nặng, nhưng đi lại được và làm được việc nhẹ. ",
                            "PS 2: Đi lại được nhưng không làm được các việc, hoàn toàn chăm sóc được bản thân, phải nghỉ ngơi dưới 50% thời gian thức.",
                            "PS 3: Chỉ chăm sóc bản thân tối thiểu, phải nghỉ trên 50% thời gian.",
                            "PS 4: Mất khả năng chăm sóc bản thân và hoàn toàn nằm nghỉ tại giường hoặc ghế."
                        ],
                        "type": "radio",
                        "key": "danh_gia_toan_trang_ps_theo_ecog_truoc_dieu_tri_hoa_chat"
                    }
                ]
            ]
        ]
    },
    {
        "name": "V>CẬN LÂM SÀNG",
        "key": "subclinical",
        "listQuestions": [
          [
            [
              {
                question: 'Xét nghiệm máu',
                type: 'title',
                key: 'xet_nghiem_mau',
              },
            ],
          ],
          [
            [
              {
                question: 'Hồng cầu(RBC)',
                type: 'none',
                key: 'hong_cau_rbc',
              },
            ],
            [
              {
                unit: 'T/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Hb',
                type: 'none',
                key: 'hb',
              },
            ],
            [
              {
                unit: 'g/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Bạch cầu(WBC)',
                type: 'none',
                key: 'bach_cau_wbc',
              },
            ],
            [
              {
                unit: 'G/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Bạch cầu đa nhân trung tính',
                type: 'none',
                key: 'bach_cau_da_nhan_trung_tinh',
              },
            ],
            [
              {
                unit: 'G/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Tiểu cầu',
                type: 'none',
                key: 'tieu_cau',
              },
            ],
            [
              {
                unit: 'G/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'PT%',
                type: 'none',
                key: 'pt',
              },
            ],
            [
              {
                unit: '%',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'INR',
                type: 'none',
                key: 'inr',
              },
            ],
            [
              {
                unit: 'none',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'APTT b/c',
                type: 'none',
                key: 'aptt_b_c',
              },
            ],
            [
              {
                unit: 'none',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Bilirubin toàn phần',
                type: 'none',
                key: 'bilirubin_toan_phan',
              },
            ],
            [
              {
                unit: 'μmol/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Bilirubin trực tiếp',
                type: 'none',
                key: 'bilirubin_truc_tiep',
              },
            ],
            [
              {
                unit: 'μmol/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Albumin',
                type: 'none',
                key: 'albumin',
              },
            ],
            [
              {
                unit: 'g/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'ALT',
                type: 'none',
                key: 'alt',
              },
            ],
            [
              {
                unit: 'UI/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'AST',
                type: 'none',
                key: 'ast',
              },
            ],
            [
              {
                unit: 'UI/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Ure',
                type: 'none',
                key: 'ure',
              },
            ],
            [
              {
                unit: 'mmol/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Creatinine',
                type: 'none',
                key: 'creatinine',
              },
            ],
            [
              {
                unit: 'mmol/L',
                type: 'text',
                key: '',
              },
            ],
          ],
          [
            [
              {
                question: 'Marker ung thư',
                type: 'none',
                key: 'marker_ung_thu',
              },
            ],
            [
              {
                question:'CEA',
                unit: 'ng/mL',
                type: 'text',
                key: 'cea',
              },
              {
                question:'Cyfra 21-1',
                unit: 'ng/mL',
                type: 'text',
                key: 'cyfra_21-1',
              },
            ],
          ]
          ,
            [
                [
                    {
                        "question": "X-Quang phổi thường quy thẳng và nghiêng",
                        "type": "none",
                        "key": "x_quang_phoi_thuong_quy_thang_va_nghieng"
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Vị trí tổn thương",
                        "type": "none",
                        "key": "vi_tri_ton_thuong"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Trên phải",
                            "Giữa phải",
                            "Dưới phải",
                            "Trên trái",
                            "Dưới trái"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Cắt lớp vi tính lồng ngực",
                        "type": "none",
                        "key": "cat_lop_vi_tinh_long_nguc"
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Vị trí tổn thương",
                        "type": "none",
                        "key": "vi_tri_ton_thuong"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Trên phải",
                            "Giữa phải",
                            "Dưới phải",
                            "Trên trái",
                            "Dưới trái"
                        ],
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "type": "checkbox",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Kích thước khối u nguyên phát",
                        "type": "none",
                        "key": "kich_thuoc_khoi_u_nguyen_phat"
                    }
                ],
                [
                    {
                        "unit": "cm",
                        "type": "text",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Số lượng khối u tại phổi",
                        "type": "none",
                        "key": "so_luong_khoi_u_tai_phoi"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Một khối",
                            "Nhiều khối",
                            "Cùng thuỳ",
                            "Khác thuỳ",
                            "Cùng bên",
                            "Đối bên"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Hạch trung thất",
                        "type": "none",
                        "key": "hach_trung_that"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Không",
                            "Có"
                        ],
                        "type": "radio",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Kết quả MRI não (nếu có):",
                        "type": "textarea",
                        "key": "ket_qua_mri_nao_neu_co"
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Kết quả xạ hình xương (nếu có):",
                        "type": "textarea",
                        "key": "ket_qua_xa_hinh_xuong_neu_co"
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Kết quả di căn cơ quan khác ngoài phổi",
                        "type": "none",
                        "key": "ket_qua_di_can_co_quan_khac_ngoai_phoi"
                    }
                ],
                [
                    {
                        "type": "checkbox",
                        "listChoice": [
                            "Di căn thượng thận",
                            "Di căn gan",
                            "Tràn dịch đa màng",
                            "Di căn khác"
                        ],
                        "answer": [
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Loại bệnh phẩm",
                        "unit": "",
                        "type": "textarea",
                        "key": "loai_benh_pham"
                    },
                    {
                        "question": "Kết luận",
                        "unit": "",
                        "type": "textarea",
                        "key": "ket_luan"
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Thể mô bệnh học",
                        "type": "none",
                        "key": "the_mo_benh_hoc"
                    }
                ],
                [
                    {
                        "listChoice": [
                            "Biểu mô tuyến",
                            "Biểu mô vảy",
                            "Biểu mô tế bào lớn",
                            "Biểu mô tuyến-vảy",
                            "Khác (ghi rõ):"
                        ],
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "type": "checkbox",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "question": "Giai đoạn lâm sàng theo IASLC lần thứ 8",
                        "type": "none",
                        "key": "giai_doan_lam_sang_theo_iaslc_lan_thu_8"
                    }
                ],
                [
                    {
                        "question": "T",
                        "unit": "",
                        "type": "text",
                        "key": "t"
                    },
                    {
                        "question": "N",
                        "unit": "",
                        "type": "text",
                        "key": "n"
                    },
                    {
                        "question": "M",
                        "unit": "",
                        "type": "text",
                        "key": "m"
                    },
                    {
                        "question": "Giai đoạn",
                        "unit": "",
                        "type": "text",
                        "key": "giai_doan"
                    }
                ]
            ]
        ]
    },
    {
        "name": "VI> PHƯƠNG PHÁP ĐIỀU TRỊ (*tính từ ngày bắt đầu theo dõi)",
        "key": "treatments",
        "listQuestions": [
            [
                [
                    {
                        "question": "Phương pháp điều trị(*bắt buộc)",
                        "type": "title",
                        "key": "phuong_phap_dieu_tri_bat_buoc"
                    }
                ]
            ],
            [
                [
                    {
                        "listChoice": [
                            "Điều trị nhắm trúng đích"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "thuốc sử dụng",
                        "type": "none",
                        "key": "thuoc_su_dung"
                    },
                    {
                        "type": "checkbox",
                        "listChoice": [
                            "Erlotinib",
                            "Gefitinib",
                            "Afatinib",
                            "Osimertinib",
                            "Crizotinib",
                            "Ceretinib",
                            "Alectinib"
                        ],
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "Liều",
                        "type": "none",
                        "key": "lieu"
                    },
                    {
                        "unit": "mg/m2",
                        "type": "text",
                        "key": ""
                    },
                    {
                        "unit": "mg/m2",
                        "type": "text",
                        "key": ""
                    },
                    {
                        "unit": "mg/m2",
                        "type": "text",
                        "key": ""
                    },
                    {
                        "unit": "mg/m2",
                        "type": "text",
                        "key": ""
                    },
                    {
                        "unit": "mg/m2",
                        "type": "text",
                        "key": ""
                    },
                    {
                        "unit": "mg/m2",
                        "type": "text",
                        "key": ""
                    },
                    {
                        "unit": "mg/m2",
                        "type": "text",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "listChoice": [
                            "Phác đồ điều trị bước 2"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "Phác đồ",
                        "type": "none",
                        "key": "phac_do"
                    },
                    {
                        "type": "checkbox",
                        "listChoice": [
                            "Thuốc đích",
                            "Hoá chất ",
                            "Điều trị miễn dịch",
                            "Khác (ghi rõ):"
                        ],
                        "answer": [
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "Loại thuốc",
                        "type": "none",
                        "key": "loai_thuoc"
                    },
                    {
                        "type": "text",
                        "key": ""
                    },
                    {
                        "type": "text",
                        "key": ""
                    },
                    {
                        "type": "text",
                        "key": ""
                    },
                    {
                        "type": "text",
                        "key": ""
                    }
                ]
            ],
            [
                [
                    {
                        "listChoice": [
                            "Loại thuốc"
                        ],
                        "type": "checkbox",
                        "answer": [
                            false
                        ],
                        "key": ""
                    }
                ],
                [
                    {
                        "question": "Tác dụng phụ",
                        "listChoice": [
                            "Nổi ban da",
                            "Buồn nôn, nôn",
                            "Mệt mỏi, chán ăn",
                            "Tăng men gan",
                            "Tiêu chảy",
                            "Viêm quanh móng",
                            "Rụng tóc",
                            "Đau nhức mỏi cơ",
                            "Khác (ghi rõ): "
                        ],
                        "type": "checkbox",
                        "answer": [
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false,
                            false
                        ],
                        "key": "tac_dung_phu"
                    }
                ],
                [
                    {
                        "question": "Phân độ",
                        "type": "none",
                        "key": "phan_do"
                    },
                    {
                        "type": "textarea",
                        "key": ""
                    }
                ]
            ]
        ]
    }
],
  assessmentResponseTreatment: {
    key:'assessment_response_treatment',
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
