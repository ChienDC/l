import React from 'react';

const Body = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2>Chào mừng bạn đến với Bệnh Viện Thu Cúc</h2>
          <p>
            Bệnh Viện Thu Cúc cam kết cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ và y tá
            chuyên nghiệp. Chúng tôi luôn lắng nghe và chăm sóc tận tâm đến sức khỏe của bạn.
          </p>
          <h3>Chuyên Khoa</h3>
          <p>
            Bệnh Viện Thu Cúc có đội ngũ bác sĩ chuyên gia đa khoa, đảm bảo cung cấp dịch vụ điều trị
            và chăm sóc sức khỏe toàn diện cho mọi người.
          </p>
          <h3>Dịch Vụ Khám</h3>
          <p>
            Chúng tôi cung cấp nhiều dịch vụ khám bệnh và chẩn đoán sớm, giúp phát hiện và điều trị
            các vấn đề sức khỏe một cách nhanh chóng và hiệu quả.
          </p>
        </div>
        <div className="col-md-4">
          {/* Nếu bạn có thông tin đặc biệt hoặc quảng cáo, bạn có thể hiển thị ở đây */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quảng cáo hoặc Thông báo đặc biệt</h5>
              <p className="card-text">Mô tả về quảng cáo hoặc thông báo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
