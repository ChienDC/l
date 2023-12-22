// App.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Student from './Student/Student';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Css/styles.css'; // Import your custom styles

const studentData = [
  { id: 1, name: 'Trần Thị Kiều Oanh', image: 'https://thcshoxuanhuong.vn/wp-content/uploads/2021/07/49226227333_226c5ceb0d_c.jpg', email: 'kieuoanh1610@gmail.com' },
  { id: 2, name: 'Đoàn Trần Minh Minh', image: 'https://bizweb.dktcdn.net/100/175/849/files/chup-anh-the-dep-cho-hoc-sinh-05.jpg?v=1609569927000', email: 'minhminh@gmail.com' },
  // Add more student data as needed
];

const App = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-4">Danh sách Học Sinh Giỏi</h1>
      <Row>
        {studentData.map(student => (
          <Col key={student.id} xs={12} md={6} lg={4}>
            <Student {...student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
