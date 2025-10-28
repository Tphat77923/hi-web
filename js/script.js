// Universities Data
const universities = [
    {
        name: "Đại học Bách Khoa TP.HCM",
        shortName: "Bách Khoa",
        description: "Trường đại học kỹ thuật hàng đầu Việt Nam",
        majors: [
            "Công nghệ Thông tin",
            "Kỹ thuật Cơ khí",
            "Kỹ thuật Điện - Điện tử",
            "Kỹ thuật Hóa học",
            "Kỹ thuật Xây dựng"
        ],
        color: "#3b82f6"
    },
    {
        name: "Đại học Khoa Học Xã Hội và Nhân Văn",
        shortName: "KHXH & NV",
        description: "Trường đại học chuyên về khoa học xã hội và nhân văn",
        majors: [
            "Ngôn ngữ Anh",
            "Triết học",
            "Xã hội học",
            "Báo chí - Truyền thông",
            "Quan hệ Quốc tế"
        ],
        color: "#a855f7"
    },
    {
        name: "Đại học Sư Phạm TP.HCM",
        shortName: "Sư Phạm",
        description: "Đào tạo giáo viên và chuyên gia giáo dục",
        majors: [
            "Sư phạm Toán học",
            "Sư phạm Ngữ văn",
            "Sư phạm Tiếng Anh",
            "Sư phạm Lịch sử",
            "Sư phạm Hóa học"
        ],
        color: "#10b981"
    },
    {
        name: "Đại học Kinh Tế TP.HCM",
        shortName: "UEH",
        description: "Trường đại học kinh tế hàng đầu miền Nam",
        majors: [
            "Kinh tế học",
            "Quản trị Kinh doanh",
            "Tài chính - Ngân hàng",
            "Kế toán - Kiểm toán",
            "Marketing"
        ],
        color: "#f59e0b"
    },
    {
        name: "Đại học Y Dược TP.HCM",
        shortName: "Y Dược",
        description: "Đào tạo bác sĩ và dược sĩ chuyên nghiệp",
        majors: [
            "Bác sĩ Đa khoa",
            "Dược học",
            "Điều dưỡng",
            "Y học Cổ truyền",
            "Kỹ thuật Y sinh"
        ],
        color: "#ef4444"
    },
    {
        name: "Đại học Nông Lâm TP.HCM",
        shortName: "Nông Lâm",
        description: "Chuyên ngành nông nghiệp và lâm nghiệp",
        majors: [
            "Nông học",
            "Thú y",
            "Lâm học",
            "Công nghệ Thực phẩm",
            "Môi trường và Tài nguyên"
        ],
        color: "#059669"
    }
];

// Students Data
const students = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        math: 8.5,
        literature: 7.8,
        english: 9.0,
        physics: 8.2,
        chemistry: 7.5,
        average: 8.2
    },
    {
        id: 2,
        name: "Trần Thị Bình",
        math: 9.2,
        literature: 8.5,
        english: 8.8,
        physics: 9.0,
        chemistry: 8.7,
        average: 8.84
    },
    {
        id: 3,
        name: "Lê Hoàng Cường",
        math: 7.0,
        literature: 8.0,
        english: 7.5,
        physics: 7.2,
        chemistry: 7.8,
        average: 7.5
    },
    {
        id: 4,
        name: "Phạm Thị Dung",
        math: 9.5,
        literature: 9.0,
        english: 9.5,
        physics: 9.2,
        chemistry: 9.3,
        average: 9.3
    },
    {
        id: 5,
        name: "Võ Minh Đức",
        math: 8.0,
        literature: 7.5,
        english: 8.2,
        physics: 8.5,
        chemistry: 8.0,
        average: 8.04
    },
    {
        id: 6,
        name: "Hoàng Thị Em",
        math: 6.5,
        literature: 7.0,
        english: 6.8,
        physics: 6.5,
        chemistry: 7.2,
        average: 6.8
    },
    {
        id: 7,
        name: "Đỗ Văn Phong",
        math: 8.8,
        literature: 8.2,
        english: 9.0,
        physics: 8.5,
        chemistry: 8.3,
        average: 8.56
    },
    {
        id: 8,
        name: "Bùi Thị Giang",
        math: 9.0,
        literature: 8.8,
        english: 8.5,
        physics: 8.7,
        chemistry: 9.0,
        average: 8.8
    },
    {
        id: 9,
        name: "Trương Văn Hải",
        math: 7.5,
        literature: 7.8,
        english: 7.0,
        physics: 7.5,
        chemistry: 7.2,
        average: 7.4
    },
    {
        id: 10,
        name: "Phan Thị Hoa",
        math: 8.3,
        literature: 9.0,
        english: 8.7,
        physics: 8.0,
        chemistry: 8.5,
        average: 8.5
    }
];

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
}

// Get grade color class
function getGradeColorClass(score) {
    if (score >= 9.0) return 'grade-excellent';
    if (score >= 8.0) return 'grade-good';
    if (score >= 7.0) return 'grade-average';
    return 'grade-below';
}

// Get rank
function getRank(average) {
    if (average >= 9.0) return { label: 'Xuất sắc', className: 'rank-excellent' };
    if (average >= 8.0) return { label: 'Giỏi', className: 'rank-good' };
    if (average >= 7.0) return { label: 'Khá', className: 'rank-average' };
    return { label: 'Trung bình', className: 'rank-below' };
}

// Render universities
function renderUniversities() {
    const grid = document.getElementById('universitiesGrid');
    
    universities.forEach(university => {
        const card = document.createElement('div');
        card.className = 'university-card';
        
        const majorsList = university.majors.map(major => 
            `<li>${major}</li>`
        ).join('');
        
        card.innerHTML = `
            <div class="university-header">
                <div class="university-icon" style="background-color: ${university.color};">
                    📚
                </div>
                <span class="badge">${university.shortName}</span>
            </div>
            <h3>${university.name}</h3>
            <p class="university-description">${university.description}</p>
            <p class="majors-title">Các ngành đào tạo:</p>
            <ul class="majors-list">
                ${majorsList}
            </ul>
        `;
        
        grid.appendChild(card);
    });
}

// Render grades table
function renderGradesTable() {
    const tbody = document.getElementById('gradesTableBody');
    
    students.forEach(student => {
        const rank = getRank(student.average);
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td class="text-center ${getGradeColorClass(student.math)}">${student.math.toFixed(1)}</td>
            <td class="text-center ${getGradeColorClass(student.literature)}">${student.literature.toFixed(1)}</td>
            <td class="text-center ${getGradeColorClass(student.english)}">${student.english.toFixed(1)}</td>
            <td class="text-center ${getGradeColorClass(student.physics)}">${student.physics.toFixed(1)}</td>
            <td class="text-center ${getGradeColorClass(student.chemistry)}">${student.chemistry.toFixed(1)}</td>
            <td class="text-center ${getGradeColorClass(student.average)}">${student.average.toFixed(2)}</td>
            <td class="text-center">
                <span class="rank-badge ${rank.className}">${rank.label}</span>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Render statistics
function renderStatistics() {
    const statsContainer = document.getElementById('statistics');
    
    const excellent = students.filter(s => s.average >= 9.0).length;
    const good = students.filter(s => s.average >= 8.0 && s.average < 9.0).length;
    const average = students.filter(s => s.average >= 7.0 && s.average < 8.0).length;
    const below = students.filter(s => s.average < 7.0).length;
    
    statsContainer.innerHTML = `
        <div class="stat-card excellent">
            <p class="stat-label">Xuất sắc</p>
            <p class="stat-value">${excellent} học sinh</p>
        </div>
        <div class="stat-card good">
            <p class="stat-label">Giỏi</p>
            <p class="stat-value">${good} học sinh</p>
        </div>
        <div class="stat-card average">
            <p class="stat-label">Khá</p>
            <p class="stat-value">${average} học sinh</p>
        </div>
        <div class="stat-card below">
            <p class="stat-label">Trung bình</p>
            <p class="stat-value">${below} học sinh</p>
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderUniversities();
    renderGradesTable();
    renderStatistics();
});
