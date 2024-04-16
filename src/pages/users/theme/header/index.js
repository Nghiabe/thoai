import React from "react";
import logo from "assets/users/logo.png";
import "./style.scss";

function Header() {
  return (
    <div className="header">
      <div className="container ">
        <div className="row header-main  ">
          <div className="logo col-xl-6 header-left ">
            <img src={logo} alt="thoai" className="logo"/>
          </div>
          <div className="col-xl-6 header-right">
            <ul>
              <li >
                <a href="#" title="Trò chuyện với AI" className="header-link">
                  Trò chuyện với AI
                </a>
              </li>
              <li >
                <a
                  href="#"
                  title="Trò chuyện với tình nguyện viên"
                  className="header-link"
                >
                  Trò chuyện với tình nguyện viên
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;
