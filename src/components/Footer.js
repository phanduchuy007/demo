import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-3">
                                <h4>Thông tin</h4>
                                <ul className="row">
                                    <Link to="/about" className="col-lg-12 col-sm-12 col-xs-3">Thành viên</Link>
                                    <Link to="/contact" className="col-lg-12 col-sm-12 col-xs-3">Liên hệ</Link>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <h4>Liên hệ khi gặp sự cố</h4>
                                <p>034 334 1370</p>
                                <p>batdongsan@gmail.com</p>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <h4>Theo dõi chúng tôi</h4>
                                <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
                                <a href="#"><img src="/images/twitter.png" alt="twitter" /></a>
                                <a href="#"><img src="/images/linkedin.png" alt="linkedin" /></a>
                                <a href="#"><img src="/images/instagram.png" alt="instagram" /></a>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <h4>Liên hệ với chúng tôi</h4>
                                <p><b>Real Estate</b><br />
                                    <span className="glyphicon glyphicon-map-marker" /> 20 Nguyễn Hoàng <br />
                                    <span className="glyphicon glyphicon-envelope" /> batdongsan@gmail.com<br />
                                    <span className="glyphicon glyphicon-earphone" /> (84) 034 334 1370</p>
                            </div>
                        </div>
                        <p className="copyright">Copyright 2021. All rights reserved.	</p>
                    </div>
                </div>
                {/* Modal */}
                {/* /.modal */}
            </>
        );
    }
}

export default Footer;