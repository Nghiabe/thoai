import React, { memo } from "react";
import logo from "assets/users/logo.png";
import "./style.scss";
const Footer = () => {
  // Hàm này sẽ chỉ được gọi lại nếu props thay đổi
  return (
    <div className="footer">
      <div className=" footer-item">
        <div className="row footer-item1 ">
          <div className="logo col-xl-3 ">
            <img src={logo} alt="thoai" className="logo" />
          </div>
          <div className="name col-xl-6 ">
            <h1>INNOVATIVE TECHNOLOGY VIETNAM</h1>
          </div>
        </div>
        <div className="row footer-item2">
          <div className="col-xl-6">
            <ul>
              <li>
                <h2> THÔNG TIN CÔNG TY</h2>
              </li>
              <li>
                <p>Địa chỉ: 470 Trần Đại Nghĩa, Ngũ Hành Sơn, Đà Nẵng</p>
              </li>
              <li>
                <p>SDT: 0389650942</p>
              </li>
              <li>
                <p>Email: InoTeV@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="col-xl-6">
            <ul>
              <li>
                <h2> HỖ TRỢ KHÁCH HÀNG</h2>
              </li>
              <li>
                <p>Giới thiệu</p>
              </li>
              <li>
                <p>Các mẫu đơn</p>
              </li>
              <li>
                <p>Câu hỏi thường gặp</p>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <p>Copyright © INOTEV | Designed by ITV Design Studio.</p>
      </div>
    </div>
  );
};

export default memo(Footer);
