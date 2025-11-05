// Universities Data with Benchmark Scores and Major Details
const universities = [
    {
        id: 1,
        name: "Đại học Bách Khoa TP.HCM",
        shortName: "Bách Khoa",
        website: "https://www.hcmut.edu.vn",
        majors: [
            {
                name: "Công nghệ Thông tin",
                priority: 1,
                description: "Đào tạo kỹ sư công nghệ thông tin chuyên sâu",
                details: "Thời gian đào tạo: 4 năm (8 học kỳ). Phương thức tuyển sinh: Xét điểm thi THPT Quốc gia (Toán, Lý, Hóa/Anh) hoặc xét học bạ THPT 3 năm. Kiến thức học tập: Lập trình, Cấu trúc dữ liệu, Trí tuệ nhân tạo, Phát triển ứng dụng web/mobile, An ninh mạng, Big Data. Cơ hội việc làm: Tỷ lệ có việc làm sau tốt nghiệp 95%, mức lương khởi điểm 10-18 triệu/tháng, làm việc tại các công ty công nghệ lớn như FPT, Viettel, VNG, hoặc các tập đoàn đa quốc gia."
            },
            {
                name: "Kỹ thuật Điện - Điện tử",
                priority: 2,
                description: "Chuyên ngành về hệ thống điện và điện tử",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Lý, Hóa/Anh). Kiến thức: Mạch điện tử, Vi điều khiển, Hệ thống điều khiển tự động, Truyền thông số, Năng lượng tái tạo, IoT. Cơ hội việc làm: Kỹ sư thiết kế mạch điện tử, kỹ sư tự động hóa, chuyên gia IoT tại các công ty sản xuất điện tử, viễn thông (Samsung, Panasonic, Viettel). Lương khởi điểm 9-15 triệu/tháng."
            },
            {
                name: "Kỹ thuật Cơ khí",
                priority: 3,
                description: "Đào tạo kỹ sư cơ khí ứng dụng",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Lý, Hóa). Kiến thức: Thiết kế cơ khí bằng CAD/CAM, Chế tạo máy, Cơ điện tử, Robot công nghiệp, Kỹ thuật nhiệt, Động lực. Cơ hội việc làm: Kỹ sư thiết kế, kỹ sư sản xuất tại các nhà máy ô tô (Toyota, Honda), nhà máy sản xuất (Unilever, Nestlé), công ty cơ khí chính xác. Lương khởi điểm 8-14 triệu/tháng."
            },
            {
                name: "Kỹ thuật Xây dựng",
                priority: 4,
                description: "Kỹ sư xây dựng dân dụng và công nghiệp",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Lý, Hóa). Kiến thức: Kết cấu bê tông cốt thép, Cơ học kết cấu, Quản lý dự án xây dựng, Vật liệu xây dựng, Thiết kế nhà cao tầng, BIM (Building Information Modeling). Cơ hội việc làm: Kỹ sư thiết kế, giám sát thi công, quản lý dự án tại các công ty xây dựng lớn (Coteccons, Hòa Bình, Phú Mỹ Hưng). Lương khởi điểm 8-13 triệu/tháng."
            },
            {
                name: "Kỹ thuật Hóa học",
                priority: 5,
                description: "Chuyên ngành công nghệ hóa học",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Lý). Kiến thức: Quy trình công nghệ hóa, Công nghệ sinh học, Xử lý môi trường, Hóa dầu, Công nghệ thực phẩm, An toàn hóa chất. Cơ hội việc làm: Kỹ sư công nghệ tại các nhà máy hóa chất, dược phẩm, thực phẩm (Vinamilk, TH True Milk, PetroVietnam). Lương khởi điểm 7-12 triệu/tháng."
            }
        ],
        color: "#3b82f6",
        benchmarks: [
            { major: "Công nghệ Thông tin", year2022: 26.5, year2023: 27.0, year2024: 27.5, year2025: 28.0 },
            { major: "Kỹ thuật Cơ khí", year2022: 24.5, year2023: 25.0, year2024: 25.5, year2025: 26.0 },
            { major: "Kỹ thuật Điện - Điện tử", year2022: 25.0, year2023: 25.5, year2024: 26.0, year2025: 26.5 },
            { major: "Kỹ thuật Hóa học", year2022: 23.0, year2023: 23.5, year2024: 24.0, year2025: 24.5 },
            { major: "Kỹ thuật Xây dựng", year2022: 24.0, year2023: 24.5, year2024: 25.0, year2025: 25.5 }
        ]
    },
    {
        id: 2,
        name: "Đại học Khoa Học Xã Hội và Nhân Văn",
        shortName: "KHXH & NV",
        website: "https://hcmussh.edu.vn",
        majors: [
            {
                name: "Quan hệ Quốc tế",
                priority: 1,
                description: "Chuyên gia về quan hệ đối ngoại",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Văn, Sử, Anh) hoặc chứng chỉ ngoại ngữ quốc tế. Kiến thức: Chính trị quốc tế, Ngoại giao, Tổ chức quốc tế, Kinh tế quốc tế, Luật quốc tế, Nghiên cứu khu vực. Cơ hội việc làm: Làm việc tại Bộ Ngoại giao, các tổ chức quốc tế (UN, ASEAN), NGO, doanh nghiệp đa quốc gia, chuyên viên quan hệ đối ngoại. Lương khởi điểm 10-16 triệu/tháng."
            },
            {
                name: "Ngôn ngữ Anh",
                priority: 2,
                description: "Giảng viên và chuyên gia ngôn ngữ Anh",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Văn, Anh, Toán) hoặc chứng chỉ IELTS/TOEFL. Kiến thức: Ngôn ngữ học, Văn học Anh-Mỹ, Dịch thuật, Phương pháp giảng dạy tiếng Anh, Giao tiếp văn hóa liên văn hóa. Yêu cầu đầu ra: IELTS 7.0 trở lên hoặc tương đương. Cơ hội việc làm: Giáo viên tiếng Anh, biên phiên dịch viên, chuyên viên nội dung tiếng Anh, làm việc tại trung tâm ngoại ngữ, công ty đa quốc gia. Lương khởi điểm 8-15 triệu/tháng."
            },
            {
                name: "Báo chí - Truyền thông",
                priority: 3,
                description: "Nhà báo và chuyên viên truyền thông",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Văn, Anh, Sử/Toán). Kiến thức: Viết báo, Phóng sự truyền hình, Truyền thông đa phương tiện, Marketing truyền thông, Truyền thông số, Quản trị thương hiệu, Làm phim tài liệu. Cơ hội việc làm: Phóng viên, biên tập viên tại các báo đài (VTV, HTV, Tuổi Trẻ), chuyên viên truyền thông, content creator, social media manager. Lương khởi điểm 7-14 triệu/tháng."
            },
            {
                name: "Xã hội học",
                priority: 4,
                description: "Nghiên cứu về xã hội và văn hóa",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Văn, Sử, Anh). Kiến thức: Lý thuyết xã hội học, Phương pháp nghiên cứu xã hội, Phát triển cộng đồng, Công tác xã hội, Xã hội học đô thị, Nghiên cứu văn hóa. Cơ hội việc làm: Nhà nghiên cứu xã hội, chuyên viên phát triển cộng đồng, làm việc tại các NGO, tổ chức phi chính phủ, viện nghiên cứu. Lương khởi điểm 7-12 triệu/tháng."
            },
            {
                name: "Triết học",
                priority: 5,
                description: "Nghiên cứu triết học và lý luận",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Văn, Sử, Toán). Kiến thức: Triết học Mác-Lênin, Tư tưởng Hồ Chí Minh, Triết học phương Đông, Triết học phương Tây, Logic học, Đạo đức học. Cơ hội việc làm: Giảng viên triết học tại các trường đại học, cao đẳng, chuyên viên nghiên cứu lý luận chính trị, biên tập viên. Lương khởi điểm 6-10 triệu/tháng."
            }
        ],
        color: "#a855f7",
        benchmarks: [
            { major: "Ngôn ngữ Anh", year2022: 24.0, year2023: 24.5, year2024: 25.0, year2025: 25.5 },
            { major: "Triết học", year2022: 20.0, year2023: 20.5, year2024: 21.0, year2025: 21.5 },
            { major: "Xã hội học", year2022: 21.5, year2023: 22.0, year2024: 22.5, year2025: 23.0 },
            { major: "Báo chí - Truyền thông", year2022: 23.5, year2023: 24.0, year2024: 24.5, year2025: 25.0 },
            { major: "Quan hệ Quốc tế", year2022: 25.0, year2023: 25.5, year2024: 26.0, year2025: 26.5 }
        ]
    },
    {
        id: 3,
        name: "Đại học Sư Phạm TP.HCM",
        shortName: "Sư Phạm",
        website: "https://hcmue.edu.vn",
        majors: [
            {
                name: "Sư phạm Tiếng Anh",
                priority: 1,
                description: "Giáo viên tiếng Anh chuyên nghiệp",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Văn, Anh, Toán) hoặc chứng chỉ IELTS 6.0 trở lên. Kiến thức: Ngôn ngữ học tiếng Anh, Văn học Anh-Mỹ, Phương pháp giảng dạy tiếng Anh, Tâm lý học sư phạm, Công nghệ giáo dục, Đánh giá trong giảng dạy. Yêu cầu đầu ra: IELTS 6.5-7.0, có chứng chỉ sư phạm. Cơ hội việc làm: Giáo viên tiếng Anh tại các trường THCS, THPT, trung tâm ngoại ngữ, làm việc tại các trường quốc tế. Lương khởi điểm 8-15 triệu/tháng, có cơ hội làm thêm gia sư."
            },
            {
                name: "Sư phạm Toán học",
                priority: 2,
                description: "Giáo viên toán học",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Lý, Anh/Văn). Kiến thức: Giải tích toán học, Đại số, Hình học, Xác suất thống kê, Phương pháp dạy học toán, Tâm lý học học sinh, Công nghệ dạy học. Cơ hội việc làm: Giáo viên toán tại các trường THCS, THPT, giảng viên tại trường cao đẳng, gia sư toán. Công việc ổn định với chế độ nghỉ hè. Lương khởi điểm 7-13 triệu/tháng."
            },
            {
                name: "Sư phạm Ngữ văn",
                priority: 3,
                description: "Giáo viên ngữ văn",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Văn, Sử, Anh). Kiến thức: Văn học Việt Nam, Văn học thế giới, Tiếng Việt học, Phương pháp giảng dạy ngữ văn, Văn hóa Việt Nam, Nghệ thuật ngôn từ. Cơ hội việc làm: Giáo viên ngữ văn tại các trường THCS, THPT, biên tập viên, chuyên viên văn phòng. Lương khởi điểm 7-12 triệu/tháng."
            },
            {
                name: "Sư phạm Hóa học",
                priority: 4,
                description: "Giáo viên hóa học",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Lý). Kiến thức: Hóa vô cơ, Hóa hữu cơ, Hóa phân tích, Phương pháp dạy học hóa, Thực nghiệm hóa học, An toàn phòng thí nghiệm. Cơ hội việc làm: Giáo viên hóa học tại THCS, THPT, kỹ thuật viên phòng thí nghiệm, chuyên viên kiểm định chất lượng. Lương khởi điểm 7-12 triệu/tháng."
            },
            {
                name: "Sư phạm Lịch sử",
                priority: 5,
                description: "Giáo viên lịch sử",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Văn, Sử, Anh). Kiến thức: Lịch sử Việt Nam, Lịch sử thế giới, Phương pháp nghiên cứu lịch sử, Phương pháp dạy học lịch sử, Di sản văn hóa. Cơ hội việc làm: Giáo viên lịch sử tại THCS, THPT, hướng dẫn viên du lịch, chuyên viên bảo tàng. Lương khởi điểm 6-11 triệu/tháng."
            }
        ],
        color: "#10b981",
        benchmarks: [
            { major: "Sư phạm Toán học", year2022: 22.0, year2023: 22.5, year2024: 23.0, year2025: 23.5 },
            { major: "Sư phạm Ngữ văn", year2022: 21.5, year2023: 22.0, year2024: 22.5, year2025: 23.0 },
            { major: "Sư phạm Tiếng Anh", year2022: 23.0, year2023: 23.5, year2024: 24.0, year2025: 24.5 },
            { major: "Sư phạm Lịch sử", year2022: 20.5, year2023: 21.0, year2024: 21.5, year2025: 22.0 },
            { major: "Sư phạm Hóa học", year2022: 21.0, year2023: 21.5, year2024: 22.0, year2025: 22.5 }
        ]
    },
    {
        id: 4,
        name: "Đại học Kinh Tế TP.HCM",
        shortName: "UEH",
        website: "https://www.ueh.edu.vn",
        majors: [
            {
                name: "Tài chính - Ngân hàng",
                priority: 1,
                description: "Chuyên gia tài chính ngân hàng",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Văn, Anh) hoặc SAT/ACT cho chương trình quốc tế. Kiến thức: Quản trị tài chính doanh nghiệp, Tài chính ngân hàng, Đầu tư chứng khoán, Phân tích tài chính, Quản trị rủi ro, Fintech, Thị trường tài chính. Chứng chỉ nghề nghiệp: CFA, FRM (tùy chọn). Cơ hội việc làm: Chuyên viên phân tích tài chính, quản lý quỹ đầu tư, ngân hàng viên tại các ngân hàng thương mại (Vietcombank, Techcombank, BIDV), công ty chứng khoán, công ty tài chính. Mức lương khởi điểm 12-20 triệu/tháng, có tiềm năng tăng cao."
            },
            {
                name: "Quản trị Kinh doanh",
                priority: 2,
                description: "Quản lý và điều hành doanh nghiệp",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Văn, Anh). Kiến thức: Quản trị chiến lược, Quản trị nguồn nhân lực, Quản trị sản xuất vận hành, Khởi nghiệp, Quản trị dự án, Lãnh đạo doanh nghiệp, Phân tích kinh doanh. Cơ hội việc làm: Quản lý dự án, giám đốc điều hành, chuyên viên phát triển kinh doanh, tư vấn quản trị tại các doanh nghiệp, công ty tư vấn. Lương khởi điểm 10-18 triệu/tháng."
            },
            {
                name: "Marketing",
                priority: 3,
                description: "Chuyên viên marketing và truyền thông",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Văn, Anh). Kiến thức: Marketing căn bản, Marketing số (Digital Marketing), Quảng cáo, Quản trị thương hiệu, Nghiên cứu thị trường, Content Marketing, Social Media Marketing, SEO/SEM, Google Analytics. Cơ hội việc làm: Chuyên viên marketing, brand manager, digital marketing specialist, social media manager tại các công ty FMCG (Unilever, P&G), agency, startup. Lương khởi điểm 8-16 triệu/tháng."
            },
            {
                name: "Kinh tế học",
                priority: 4,
                description: "Chuyên gia phân tích kinh tế",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Văn, Anh). Kiến thức: Kinh tế vi mô, Kinh tế vĩ mô, Kinh tế lượng, Chính sách kinh tế, Kinh tế phát triển, Phân tích dữ liệu kinh tế, Kinh tế quốc tế. Cơ hội việc làm: Chuyên viên phân tích kinh tế, nghiên cứu viên tại các viện nghiên cứu, ngân hàng, tổ chức quốc tế, cơ quan nhà nước. Lương khởi điểm 9-15 triệu/tháng."
            },
            {
                name: "Kế toán - Kiểm toán",
                priority: 5,
                description: "Kế toán viên và kiểm toán viên",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Văn, Anh). Kiến thức: Kế toán tài chính, Kế toán quản trị, Kiểm toán nội bộ, Kiểm toán độc lập, Chuẩn mực kế toán, Thuế, Phần mềm kế toán (SAP, MISA). Chứng chỉ nghề nghiệp: CPA, ACCA, CIA. Cơ hội việc làm: Kế toán viên, kiểm toán viên tại các công ty kiểm toán Big 4 (PwC, EY, Deloitte, KPMG), kế toán trưởng tại doanh nghiệp. Lương khởi điểm 8-15 triệu/tháng."
            }
        ],
        color: "#f59e0b",
        benchmarks: [
            { major: "Kinh tế học", year2022: 24.5, year2023: 25.0, year2024: 25.5, year2025: 26.0 },
            { major: "Quản trị Kinh doanh", year2022: 25.0, year2023: 25.5, year2024: 26.0, year2025: 26.5 },
            { major: "Tài chính - Ngân hàng", year2022: 25.5, year2023: 26.0, year2024: 26.5, year2025: 27.0 },
            { major: "Kế toán - Kiểm toán", year2022: 24.0, year2023: 24.5, year2024: 25.0, year2025: 25.5 },
            { major: "Marketing", year2022: 24.5, year2023: 25.0, year2024: 25.5, year2025: 26.0 }
        ]
    },
    {
        id: 5,
        name: "Đại học Y Dược TP.HCM",
        shortName: "Y Dược",
        website: "https://www.yds.edu.vn",
        majors: [
            {
                name: "Bác sĩ Đa khoa",
                priority: 1,
                description: "Bác sĩ đa khoa chuyên nghiệp",
                details: "Thời gian đào tạo: 6 năm (bao gồm 1 năm thực tập tại bệnh viện). Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Lý, Hóa hoặc Sinh) - ngành có điểm chuẩn cao nhất. Kiến thức: Giải phẫu học, Sinh lý học, Dược lý học, Bệnh học nội khoa, Bệnh học ngoại khoa, Sản phụ khoa, Nhi khoa, Chẩn đoán hình ảnh, Cấp cứu. Thực hành lâm sàng tại các bệnh viện lớn (Chợ Rẫy, Bệnh viện 115). Cơ hội việc làm: Bác sĩ tại bệnh viện công/tư, phòng khám, nghiên cứu y học. Nghề nghiệp cao quý, thu nhập ổn định từ 15-30 triệu/tháng, có thể cao hơn khi chuyên khoa sâu."
            },
            {
                name: "Dược học",
                priority: 2,
                description: "Dược sĩ chuyên nghiệp",
                details: "Thời gian đào tạo: 5 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Sinh/Lý). Kiến thức: Hóa dược, Dược lý học, Bào chế, Kiểm nghiệm dược phẩm, Dược lâm sàng, Quản lý nhà thuốc, Tư vấn sử dụng thuốc. Thực tập tại nhà máy dược, bệnh viện. Cơ hội việc làm: Dược sĩ tại bệnh viện, nhà thuốc, công ty dược phẩm (Bayer, Pfizer, Sanofi), kiểm nghiệm dược, nghiên cứu phát triển thuốc. Lương khởi điểm 10-18 triệu/tháng."
            },
            {
                name: "Kỹ thuật Y sinh",
                priority: 3,
                description: "Kỹ sư y sinh học",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Lý, Hóa/Sinh). Kiến thức: Thiết bị y tế, Điện tử y sinh, Hình ảnh y học, Công nghệ sinh học y học, Vật liệu y sinh, Kỹ thuật phục hồi chức năng, Trí tuệ nhân tạo trong y tế. Cơ hội việc làm: Kỹ sư thiết bị y tế, kỹ sư hình ảnh y học, chuyên gia công nghệ y tế tại bệnh viện, công ty thiết bị y tế (GE Healthcare, Siemens). Lương khởi điểm 9-16 triệu/tháng."
            },
            {
                name: "Y học Cổ truyền",
                priority: 4,
                description: "Bác sĩ y học cổ truyền",
                details: "Thời gian đào tạo: 5 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Sinh). Kiến thức: Y học cổ truyền Việt Nam, Đông y, Dược liệu, Châm cứu, Bấm huyệt, Kết hợp Y học hiện đại với YHCT, Nuôi dưỡng sức khỏe. Cơ hội việc làm: Bác sĩ YHCT tại bệnh viện, phòng khám đông y, spa trị liệu, nghiên cứu dược liệu. Xu hướng chăm sóc sức khỏe tự nhiên đang tăng. Lương khởi điểm 8-15 triệu/tháng."
            },
            {
                name: "Điều dưỡng",
                priority: 5,
                description: "Điều dưỡng viên chuyên nghiệp",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Sinh/Anh). Kiến thức: Chăm sóc bệnh nhân nội khoa, ngoại khoa, sản khoa, nhi khoa, Hồi sức cấp cứu, Điều dưỡng cộng đồng, Quản lý bệnh viện. Cơ hội việc làm: Điều dưỡng viên tại bệnh viện, phòng khám, chăm sóc tại nhà, cơ sở chăm sóc người cao tuổi. Nhu cầu tuyển dụng cao. Lương khởi điểm 7-13 triệu/tháng, có cơ hội đi làm việc nước ngoài."
            }
        ],
        color: "#ef4444",
        benchmarks: [
            { major: "Bác sĩ Đa khoa", year2022: 28.0, year2023: 28.5, year2024: 29.0, year2025: 29.5 },
            { major: "Dược học", year2022: 26.5, year2023: 27.0, year2024: 27.5, year2025: 28.0 },
            { major: "Điều dưỡng", year2022: 22.0, year2023: 22.5, year2024: 23.0, year2025: 23.5 },
            { major: "Y học Cổ truyền", year2022: 24.0, year2023: 24.5, year2024: 25.0, year2025: 25.5 },
            { major: "Kỹ thuật Y sinh", year2022: 25.0, year2023: 25.5, year2024: 26.0, year2025: 26.5 }
        ]
    },
    {
        id: 6,
        name: "Đại học Nông Lâm TP.HCM",
        shortName: "Nông Lâm",
        website: "https://www.hcmuaf.edu.vn",
        majors: [
            {
                name: "Thú y",
                priority: 1,
                description: "Bác sĩ thú y",
                details: "Thời gian đào tạo: 5 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Sinh). Kiến thức: Giải phẫu động vật, Sinh lý động vật, Bệnh học thú y, Dược lý thú y, Chẩn đoán và điều trị bệnh, Sản khoa thú y, Quản lý trang trại chăn nuôi, Vệ sinh an toàn thực phẩm. Cơ hội việc làm: Bác sĩ thú y tại các trang trại chăn nuôi lớn (CP, Dabaco), phòng khám thú y cưng, cơ quan kiểm dịch động vật, công ty thức ăn chăn nuôi. Lương khởi điểm 8-15 triệu/tháng, có thể mở phòng khám riêng."
            },
            {
                name: "Công nghệ Thực phẩm",
                priority: 2,
                description: "Kỹ sư công nghệ thực phẩm",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Sinh/Lý). Kiến thức: Hóa sinh thực phẩm, Vi sinh vật thực phẩm, Công nghệ chế biến thực phẩm, Bảo quản thực phẩm, An toàn vệ sinh thực phẩm, Kiểm nghiệm chất lượng, Quản lý sản xuất thực phẩm. Cơ hội việc làm: Kỹ sư công nghệ tại các nhà máy thực phẩm (Vinamilk, TH True Milk, Kinh Đô, Acecook), kiểm nghiệm viên, quản lý chất lượng, R&D. Lương khởi điểm 8-14 triệu/tháng."
            },
            {
                name: "Môi trường và Tài nguyên",
                priority: 3,
                description: "Chuyên gia môi trường",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Sinh/Lý). Kiến thức: Khoa học môi trường, Quản lý tài nguyên thiên nhiên, Đánh giá tác động môi trường (EIA), Xử lý nước thải, Xử lý chất thải rắn, Khí thải, GIS/Remote Sensing, Phát triển bền vững. Cơ hội việc làm: Chuyên viên môi trường tại các doanh nghiệp, công ty tư vấn môi trường, cơ quan quản lý nhà nước về môi trường, tổ chức phi chính phủ về môi trường. Lương khởi điểm 7-13 triệu/tháng."
            },
            {
                name: "Nông học",
                priority: 4,
                description: "Kỹ sư nông nghiệp",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Sinh). Kiến thức: Sinh lý thực vật, Chọn giống cây trồng, Canh tác cây trồng, Bảo vệ thực vật, Nông nghiệp công nghệ cao, Nông nghiệp hữu cơ, Quản lý trang trại. Cơ hội việc làm: Kỹ sư nông nghiệp tại các trang trại công nghệ cao, công ty giống cây trồng, chuyên viên khuyến nông, quản lý vùng nguyên liệu. Lương khởi điểm 6-12 triệu/tháng."
            },
            {
                name: "Lâm học",
                priority: 5,
                description: "Kỹ sư lâm nghiệp",
                details: "Thời gian đào tạo: 4 năm. Phương thức tuyển sinh: Xét điểm thi THPT (Toán, Hóa, Sinh). Kiến thức: Sinh thái rừng, Quản lý rừng, Trồng rừng, Bảo vệ rừng, Lâm sản ngoài gỗ, Kinh tế lâm nghiệp, GIS trong lâm nghiệp. Cơ hội việc làm: Kiểm lâm viên, chuyên viên quản lý rừng tại các công ty lâm nghiệp, khu bảo tồn thiên nhiên, dự án REDD+, tổ chức môi trường. Lương khởi điểm 6-11 triệu/tháng."
            }
        ],
        color: "#059669",
        benchmarks: [
            { major: "Nông học", year2022: 20.0, year2023: 20.5, year2024: 21.0, year2025: 21.5 },
            { major: "Thú y", year2022: 23.5, year2023: 24.0, year2024: 24.5, year2025: 25.0 },
            { major: "Lâm học", year2022: 19.5, year2023: 20.0, year2024: 20.5, year2025: 21.0 },
            { major: "Công nghệ Thực phẩm", year2022: 22.0, year2023: 22.5, year2024: 23.0, year2025: 23.5 },
            { major: "Môi trường và Tài nguyên", year2022: 21.0, year2023: 21.5, year2024: 22.0, year2025: 22.5 }
        ]
    }
];

// Track expanded majors
let expandedMajors = new Set();

// Current selected university
let selectedUniversity = null;

// Switch tabs
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');

    // If switching to benchmarks tab and no university selected, show all
    if (tabName === 'benchmarks' && !selectedUniversity) {
        showAllBenchmarks();
    }
}

// Toggle major details
function toggleMajorDetails(universityId, majorName, event) {
    event.stopPropagation();
    const key = `${universityId}-${majorName}`;
    const detailsElement = document.getElementById(`details-${key}`);
    const icon = event.currentTarget.querySelector('.toggle-icon');
    
    if (expandedMajors.has(key)) {
        // Collapse
        expandedMajors.delete(key);
        detailsElement.style.display = 'none';
        icon.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V14M2 8H14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        icon.classList.remove('expanded');
    } else {
        // Expand
        expandedMajors.add(key);
        detailsElement.style.display = 'block';
        icon.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V14M2 8H14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        icon.classList.add('expanded');
    }
}

// Show university details
function showUniversityDetails(universityId) {
    selectedUniversity = universities.find(u => u.id === universityId);
    
    // Switch to benchmarks tab
    const benchmarksTab = document.getElementById('benchmarks');
    const universitiesTab = document.getElementById('universities');
    
    benchmarksTab.classList.add('active');
    universitiesTab.classList.remove('active');
    
    // Update tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    tabButtons[1].classList.add('active');
    
    // Render university benchmark details
    renderUniversityBenchmarks(selectedUniversity);
}

// Show all benchmarks
function showAllBenchmarks() {
    selectedUniversity = null;
    renderAllBenchmarks();
}

// Render universities
function renderUniversities() {
    const grid = document.getElementById('universitiesGrid');
    grid.innerHTML = '';
    
    universities.forEach(university => {
        const card = document.createElement('div');
        card.className = 'university-card';
        
        // Sort majors by priority
        const sortedMajors = [...university.majors].sort((a, b) => a.priority - b.priority);
        
        // Create majors HTML as horizontal tags
        const majorsHTML = sortedMajors.map(major => {
            const key = `${university.id}-${major.name}`;
            return `
                <div class="major-tag-wrapper">
                    <div class="major-tag" onclick="toggleMajorDetails(${university.id}, '${major.name}', event)">
                        <span class="toggle-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2V14M2 8H14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span>${major.name}</span>
                    </div>
                    <div class="major-details" id="details-${key}" style="display: none;">
                        <p class="major-description">${major.description}</p>
                        <p class="major-info">${major.details}</p>
                    </div>
                </div>
            `;
        }).join('');
        
        card.innerHTML = `
            <div class="university-header">
                <div class="university-icon" style="background-color: ${university.color};">
                    📚
                </div>
                <span class="badge">${university.shortName}</span>
            </div>
            <h3><a href="${university.website}" target="_blank" rel="noopener noreferrer">${university.name}</a></h3>
            <div class="divider"></div>
            <div class="majors-container">
                ${majorsHTML}
            </div>
            <div class="view-benchmark-hint" onclick="showUniversityDetails(${university.id})">
                <small style="color: #3b82f6; cursor: pointer;">👆 Nhấn để xem điểm chuẩn</small>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Render all benchmarks (summary view)
function renderAllBenchmarks() {
    const content = document.getElementById('benchmarkContent');
    const title = document.getElementById('benchmarkTitle');
    const description = document.getElementById('benchmarkDescription');
    const backButton = document.getElementById('backButton');
    
    title.textContent = 'Điểm Chuẩn Các Trường Đại Học';
    description.textContent = 'Tổng hợp điểm chuẩn năm 2025 của các trường đại học tại TP.HCM';
    backButton.style.display = 'none';
    
    let html = '<div class="benchmark-grid">';
    
    universities.forEach(university => {
        // Calculate average benchmark for 2025
        const avg2025 = university.benchmarks.reduce((sum, b) => sum + b.year2025, 0) / university.benchmarks.length;
        const highest2025 = Math.max(...university.benchmarks.map(b => b.year2025));
        const lowest2025 = Math.min(...university.benchmarks.map(b => b.year2025));
        
        html += `
            <div class="benchmark-summary-card" onclick="showUniversityDetails(${university.id})" style="cursor: pointer;">
                <div class="university-header">
                    <div class="university-icon" style="background-color: ${university.color};">
                        📚
                    </div>
                    <span class="badge">${university.shortName}</span>
                </div>
                <h3>${university.name}</h3>
                <div class="benchmark-stats">
                    <div class="benchmark-stat">
                        <span class="stat-label">Điểm cao nhất 2025</span>
                        <span class="stat-value" style="color: ${university.color};">${highest2025.toFixed(1)}</span>
                    </div>
                    <div class="benchmark-stat">
                        <span class="stat-label">Điểm thấp nhất 2025</span>
                        <span class="stat-value" style="color: ${university.color};">${lowest2025.toFixed(1)}</span>
                    </div>
                    <div class="benchmark-stat">
                        <span class="stat-label">Điểm trung bình 2025</span>
                        <span class="stat-value" style="color: ${university.color};">${avg2025.toFixed(1)}</span>
                    </div>
                </div>
                <div class="view-detail-btn">
                    <small style="color: #3b82f6;">👆 Nhấn để xem chi tiết theo năm</small>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    content.innerHTML = html;
}

// Render university benchmarks detail
function renderUniversityBenchmarks(university) {
    const content = document.getElementById('benchmarkContent');
    const title = document.getElementById('benchmarkTitle');
    const description = document.getElementById('benchmarkDescription');
    const backButton = document.getElementById('backButton');
    
    title.textContent = `Điểm Chuẩn - ${university.name}`;
    description.textContent = `Điểm chuẩn của các ngành đào tạo từ năm 2022 đến 2025`;
    backButton.style.display = 'block';
    
    let html = `
        <div class="table-container">
            <table class="grades-table benchmark-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ngành học</th>
                        <th class="text-center">2022</th>
                        <th class="text-center">2023</th>
                        <th class="text-center">2024</th>
                        <th class="text-center">2025</th>
                        <th class="text-center">Xu hướng</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    university.benchmarks.forEach((benchmark, index) => {
        const trend = benchmark.year2025 - benchmark.year2022;
        const trendIcon = trend > 0 ? '📈' : trend < 0 ? '📉' : '➡️';
        const trendColor = trend > 0 ? '#059669' : trend < 0 ? '#dc2626' : '#64748b';
        
        html += `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${benchmark.major}</strong></td>
                <td class="text-center">${benchmark.year2022.toFixed(1)}</td>
                <td class="text-center">${benchmark.year2023.toFixed(1)}</td>
                <td class="text-center">${benchmark.year2024.toFixed(1)}</td>
                <td class="text-center benchmark-highlight">${benchmark.year2025.toFixed(1)}</td>
                <td class="text-center">
                    <span style="color: ${trendColor};">
                        ${trendIcon} ${trend >= 0 ? '+' : ''}${trend.toFixed(1)}
                    </span>
                </td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
        
        <div class="benchmark-notes">
            <h4>📌 Ghi chú:</h4>
            <ul>
                <li>Điểm chuẩn được tính trên thang điểm 30</li>
                <li>Xu hướng cho thấy sự thay đổi điểm chuẩn từ năm 2022 đến 2025</li>
                <li>Điểm chuẩn năm ${new Date().getFullYear()} là dự báo dựa trên xu hướng các năm trước</li>
                <li>Thí sinh nên tham khảo thông tin chính thức từ <a href="${university.website}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">website nhà trường</a></li>
            </ul>
        </div>
    `;
    
    content.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderUniversities();
    renderAllBenchmarks();
});
