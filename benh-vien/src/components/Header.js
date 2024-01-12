import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white text-center p-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Bệnh Viện Thu Cúc</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Trang chủ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Giới thiệu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Chuyên khoa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dịch vụ khám</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hỗ trợ khách hàng</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tin tức</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
