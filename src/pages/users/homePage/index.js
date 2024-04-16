import React, { memo } from "react";
import botchat1 from "assets/users/botchat1.png";
import botchat2 from "assets/users/botchat2.png";
import botchat3 from "assets/users/botchat3.png";
import columnmap from "assets/users/columnmap.png";
import ratio from "assets/users/40%.png";
import feature1 from "assets/users/feature1.png";
import feature2 from "assets/users/feature2.png";
import feature3 from "assets/users/feature3.png";
import Activate from "assets/users/Activate.png";
import Activate1 from "assets/users/1.png";
import Activate2 from "assets/users/2.png";
import Activate3 from "assets/users/3.png";
import Activate4 from "assets/users/4.png";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="container">
        <div className="row">
          <div className="banner col-xl-12">
            <div className="banner-text">
              <h2>
                Hệ thống hỗ trợ <br />
                tâm lý giới trẻ
              </h2>
              <p>
                Thoại sẽ luôn ở đây, sẵn sàng lắng nghe và đồng hành <br /> cùng
                bạn. Bắt đầu hành trình của bạn với Thoại ngay <br /> hôm nay và
                tận hưởng một ngày tràn đầy năng lượng và <br /> hạnh phúc!
              </p>
              <a
                href="#"
                title="Trò chuyện với tình nguyện viên"
                className="header-link"
              >
                Trò chuyện ngay{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="botchat row">
          <div className="botchat-item">
            <ul>
              <li>
                <div>
                  <img src={botchat1} />
                  <h1>
                    KHÔNG COI BẠN <br /> LÀ BỆNH NHÂN
                  </h1>
                  <p>
                    Chúng tôi coi bạn là một bạn thân <br /> quen với những câu
                    chuyện muốn
                    <br /> chia sẽ. Thoại là người lắng nghe
                    <br /> chân thành.
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <img src={botchat2} />
                  <h1>
                    GIÚP BẠN KẾT NỐI VỚI <br /> MỌI NGƯỜI XUNG QUANH
                  </h1>
                  <p>
                    Chúng tôi coi bạn là một bạn thân <br /> quen với những câu
                    chuyện muốn
                    <br /> chia sẽ. Thoại là người lắng nghe
                    <br /> chân thành.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src={botchat3} />
                  <h1>
                    GIÚP BẠN GIẢI ĐÁP <br /> NHIỀU CÂU HỎI
                  </h1>
                  <p>
                    Web sở hữu botchat cực kì thông <br /> minh giúp bạn biết
                    những điều
                    <br /> bạn thắc mắc
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" statistical ">
          <div className="  statistical-item row ">
            <div className="col-xl-6 statistical-ite item1">
              <h1> VẤN ĐỀ TÂM LÝ THƯỜNG GẶP</h1>
              <img src={columnmap} />
            </div>
            <div className="col-xl-6 statistical-ite">
              <h2> TÌNH TRẠNG TÂM LÝ Ở VIỆT NAM</h2>
              <h6>
                {" "}
                Không chỉ có bạn đang gặp vấn đề về sức <br /> khỏe mà{" "}
              </h6>
              <h4> Hơn</h4>
              <img src={ratio} />
              <p>giới trẻ mắc các bệnh về tâm lý.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="introduce col-xl-12">
            <div className="introduce-text">
              <h3>
              Về chúng tôi
              </h3>
              <h2>Phát hiện cũng như giúp <br/> đỡ  những người bị tâm lý <br/> trở nên tốt đẹp hơn</h2>
              <p>
              Chúng tôi sẽ sử dụng cái tâm để giúp đỡ <br/> mọi người như là một người bạn của bạn
              </p>
              <a
                href="#"
                title="Chi tiết"
                className="header-link"
              >
               Chi tiết
              </a>
            </div>
          </div>
        </div>
        <div className="feature row">
          <h1 className="title-feature">ĐẾN VỚI “THOẠI”  CÓ NHỮNG TÍNH NĂNG GÌ</h1>
          <div className="feature-item">
            <ul>
              <li>
                <div>
                  <img src={feature1} />
                  <h1>
                  Tận tâm
                  </h1>
                  <p>
                  Yên tâm khi đến với thoại bạn <br/> sẽ có được sự giúp đỡ rất tận <br/> tình từ các tình nguyện viên <br/> cũng như web.
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <img src={feature2} />
                  <h1>
                  Hệ thống cực kì <br /> thông minh
                  </h1>
                  <p>
                  Thuật toán Match giúp kết nối mọi <br /> người với nhau tạo tính liên kết.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src={feature3} />
                  <h1>
                  Botchat
                  </h1>
                  <p>
                  Bạn không chỉ có sự giúp đỡ của <br /> mọi người mà còn cả của công <br /> nghệ AI tiên tiến.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="Activate ">
        <h1 className="title-Activate">CÁCH THỨC HOẠT ĐỘNG</h1>
          <div className="Activate-item row">
<div className="col-xl-4">
<ul>
<li>
                <div>
                  <img src={Activate1} />
                  <h1>
                  CHIA SẼ
                  </h1>
                  <p>
                  Chia sẽ thông tin cá nhân của bạn<br/> có web biết.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src={Activate3} />
                  <h1>
                  GHÉP ĐÔI
                  </h1>
                  <p>
                  Ghép đôi với một người phù hợp <br/> theo tiêu chính đánh giá.
                  </p>
                </div>
              </li>
</ul>
</div>
<div className="col-xl-4 center">
<img src={Activate} />
</div>
<div className="col-xl-4">
<ul>
<li>
                <div>
                  <img src={Activate2} />
                  <h1>
                  GIÚP ĐỠ
                  </h1>
                  <p>
                  Được giúp đỡ bởi các <br/> tình nguyện viên.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src={Activate4} />
                  <h1>
                  BOTCHAT
                  </h1>
                  <p>
                  Botchat giúp hỏi đáp các câu hỏi <br/> khi tình nguyện viên bận.
                  </p>
                </div>
              </li>
</ul>
</div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default memo(HomePage);
