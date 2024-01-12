-- Tạo bảng KhachHang
CREATE TABLE KhachHang (
    MaKhachHang INT PRIMARY KEY,
    TenKhachHang NVARCHAR(255)
);

-- Tạo bảng SanPham
CREATE TABLE SanPham (
    MaSanPham INT PRIMARY KEY,
    TenSanPham NVARCHAR(255),
    MoTa NVARCHAR(255),
    DonVi NVARCHAR(50),
    Gia INT
);

-- Tạo bảng DonDatHang
CREATE TABLE DonDatHang (
    MaDonHang INT PRIMARY KEY,
    MaKhachHang INT,
    NgayDat DATE,
    FOREIGN KEY (MaKhachHang) REFERENCES KhachHang(MaKhachHang)
);

-- Tạo bảng ChiTietDonDatHang
CREATE TABLE ChiTietDonDatHang (
    MaDonHang INT,
    MaSanPham INT,
    SoLuong INT,
    ThanhTien INT,
    PRIMARY KEY (MaDonHang, MaSanPham),
    FOREIGN KEY (MaDonHang) REFERENCES DonDatHang(MaDonHang),
    FOREIGN KEY (MaSanPham) REFERENCES SanPham(MaSanPham)
);


-- Thêm dữ liệu vào bảng KhachHang
INSERT INTO KhachHang (MaKhachHang, TenKhachHang)
VALUES
(1, 'Nguyen Van An'),
(2, 'Tran Thi Binh');

-- Thêm dữ liệu vào bảng SanPham
INSERT INTO SanPham (MaSanPham, TenSanPham, MoTa, DonVi, Gia)
VALUES
(1, 'Máy Tính T450', 'Máy nhập mới', 'Chiếc', 1000),
(2, 'Điện Thoại Nokia5670', 'Điện thoại đang hot', 'Chiếc', 200),
(3, 'Máy In Samsung 450', 'Máy in đang ế', 'Chiếc', 100);

-- Thêm dữ liệu vào bảng DonDatHang và ChiTietDonDatHang
INSERT INTO DonDatHang (MaDonHang, MaKhachHang, NgayDat)
VALUES
(101, 1, '2023-10-30'),
(102, 2, '2023-10-29');

INSERT INTO ChiTietDonDatHang (MaDonHang, MaSanPham, SoLuong, ThanhTien)
VALUES
(101, 1, 1, 1000),
(102, 2, 2, 400);


SELECT KhachHang.*
FROM KhachHang
JOIN DonDatHang ON KhachHang.MaKhachHang = DonDatHang.MaKhachHang;

SELECT *
FROM SanPham;

SELECT *
FROM DonDatHang;

SELECT *
FROM KhachHang
ORDER BY TenKhachHang;

SELECT *
FROM SanPham
ORDER BY Gia DESC;

SELECT SanPham.*
FROM SanPham
JOIN ChiTietDonDatHang ON SanPham.MaSanPham = ChiTietDonDatHang.MaSanPham
JOIN DonDatHang ON ChiTietDonDatHang.MaDonHang = DonDatHang.MaDonHang
JOIN KhachHang ON DonDatHang.MaKhachHang = KhachHang.MaKhachHang
WHERE KhachHang.TenKhachHang = 'Nguyen Van An';
