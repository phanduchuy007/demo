import React, { Component } from 'react'
import './ModalContent.css'
import axios from 'axios';

class ModalContent extends Component {
    state = {
        id: this.props.propertyId,
        payment: []
    }

    componentDidMount() {
        const { id } = this.state;
        const token = sessionStorage.getItem('token')
        if (id) {
            axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/manage_products/info_payment.php?id=166', {
                params: {
                    id: id
                },
                headers: {
                    'Content-Type': 'application/json',
                    token: token
                }
            }, null)
                .then(res => {
                    console.log(res);
                    this.setState({
                        
                    })
                })
        }
    }

    showModal = () => {
        const { modalDatas } = this.props;
        const currency = new Intl.NumberFormat().format(parseInt(modalDatas.price_root))
        return modalDatas.errors ? <div className="content-popup">
            <h4 className="notifi">Thông báo</h4>
            <h3>Vui lòng nhập lại</h3>
            <p>Quý khách vui lòng nhập đúng thông tin theo yêu cầu</p>
            <p><span className="accent">Sai sót: </span>{modalDatas.errors}</p>
            <span className="accent-mini">* Nếu có bất kỳ sai sót nào vui lòng liên hệ <span className="phone-number">0352956129</span> để được hỗ trợ</span>
        </div> : <div className="content-popup">
            <h4 className="notifi">Thông báo</h4>
            <h3>Đang xử lý</h3>
            <p>Quý khách vui lòng thanh toán theo cú pháp bên dưới để bài đăng được duyệt</p>
            <p><span className="accent">Ngân Hàng: </span>{modalDatas.bank_name}</p>
            <p><span className="accent">Chủ tài khoản: </span>{modalDatas.name}</p>
            <p><span className="accent">Số tài khoản: </span>{modalDatas.bank_number}</p>
            <p><span className="accent">Số tiền: </span>{currency} vnd</p>
            <p><span className="accent">Nội dung (lưu ý *): </span>{`${modalDatas.ptype_id} ${modalDatas.last_id}`}</p>
            <span className="accent-mini">* Lưu ý: quý khách vui lòng chuyển tiền theo đúng thông tin và (nội dung) như trên!</span>
            <span className="accent-mini">* Nếu có bất kỳ sai sót nào vui lòng liên hệ <span className="phone-number">0352956129</span> để được hỗ trợ</span>
        </div>
    }
    render() {
        return this.showModal()
    }
}

export default ModalContent;