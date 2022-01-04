import React, { Component } from 'react';
import HotProperties from '../components/HotProperties/HotProperties';
import HotBuyProperties from '../components/Properties/HotBuyProperties';
import HotRentProperties from '../components/Properties/HotRentProperties';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <>
                <Carousel
                    showThumbs={false}
                    interval={5000}
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    emulateTouch={true}
                >
                    <div>
                        <img src="https://www.emeraldgrouppublishing.com/sites/default/files/2020-02/ejournal_subject_-_fw_-_property_management_and_built_environment.jpg" />
                        <Link to="/login" className="legend" style={{ fontSize: "24px" }}>Tham gia ngay với chúng tôi để bắt đầu đăng tin ngay</Link>
                    </div>
                    <div>
                        <img src="https://www.ajg.com/uk/-/media/images/gallagher/uk/products/insurance/expertise/real-estate-hospitality-and-leisure/real-estate-hero.jpg?h=550&w=1440&hash=1B7E2E4EC0AD1F362D08F10D1D5EB8FE" />
                        <Link to="/about" className="legend" style={{ fontSize: "24px" }}>Đội ngũ hỗ trợ 24/7 - 0352956129</Link>
                    </div>
                </Carousel>

                <div className="container">
                    <div className="properties-listing spacer">
                        <h2 className="h2-black">Các bài đăng nổi bật</h2>
                        <HotBuyProperties />
                        <HotRentProperties />
                    </div>

                    <div className="spacer about-bottom">
                        <div className="row">
                            <div className="col-lg-8 col-sm-9 recent-view about-us-css">
                                <h3>Về chúng tôi</h3>
                                <p>Là công ty tiên phong xây dựng thị trường bất động sản minh bạch và thúc đẩy các giao dịch trên thị trường BĐS Việt Nam diễn ra dễ dàng, nhanh chóng thông qua sự đột phá trên nền tảng công nghệ dẫn dắt bởi đội ngũ chuyên gia hàng đầu.</p>
                                <p>RE luôn cam kết sự Chính Xác, Minh Bạch, Thông Minh và Chuyên Nghiệp trên tất cả thông tin, sản phẩm và dịch vụ mà chúng tôi cung cấp. Đội ngũ nhân viên kinh doanh tâm huyết cam kết, luôn tư vấn và phục vụ khách hàng nhanh chóng, kịp thời và tận tâm nhất. Để đạt được sứ mệnh cuối cùng là tất cả mọi người đều đưa ra được những quyết định đúng đắn và có trải nghiệm hài lòng khi giao dịch tại RE.</p>
                            </div>
                            <div className="col-lg-3 col-lg-offset-1 col-sm-3 recommended">
                                <h3>Gợi ý</h3>
                                <HotProperties />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;
