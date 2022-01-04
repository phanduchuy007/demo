import React, { Component } from 'react';

class ContactPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="spacer">
                    <div className="row contact">
                        <div className="col-lg-6 col-sm-6 ">
                            <h3>Văn phòng Đà Nẵng</h3>
                            <p>Địa chỉ: 20 Nguyễn Hoàng</p>
                            <h3>Số điện thoại liên hệ</h3>
                            <p>(84) 035 295 6129</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 ">
                            <div className="well"><iframe width="100%" height={300} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.101814576944!2d108.2113806145136!3d16.06020554394647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219caa62ae69b%3A0x55d36579ce6ee9c!2zTmd1eeG7hW4gSG_DoG5nLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1617872944337!5m2!1svi!2s" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;