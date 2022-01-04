import React, { Component } from 'react'
import '../AddProduct/ModalContent.css'
import axios from 'axios';

class ModalPayment extends Component {
    state = {
        id: this.props.propertyId,
        type: this.props.type,
        modalDatas: {
            bank_name: '',
            name: '',
            bank_number: '',
            last_id: '',
            price: ''
        }
    }

    componentDidMount() {
        const { id } = this.state;
        const token = sessionStorage.getItem('token')
        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/manage_products/info_payment.php?id=106', {
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
                    modalDatas: {
                        bank_name: res.data.bank_name,
                        name: res.data.name,
                        bank_number: res.data.bank_number,
                        last_id: res.data.property_id,
                        price: res.data.price_root
                    }
                })
            })
    }

    showModal = () => {

        const { bank_name, bank_number, name, price, last_id } = this.state.modalDatas;
        const { type } = this.state;

        const checkType = type === 'Cần bán' ? "NB" : "NT";
        const formatPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.ceil(price / 1000)*1000)

        return <div className="content-popup">
            <h4 className="notifi">Thông báo</h4>
            <h3>Đang xử lý</h3>
            <p>Quý khách vui lòng thanh toán theo cú pháp bên dưới để bài đăng được duyệt</p>
            <p><span className="accent">Ngân Hàng: </span>{bank_name}</p>
            <p><span className="accent">Chủ tài khoản: </span>{name}</p>
            <p><span className="accent">Số tài khoản: </span>{bank_number}</p>
            <p><span className="accent">Số tiền: </span>{formatPrice} (vnd)</p>
            <p><span className="accent">Nội dung (lưu ý *): </span>{`${checkType} ${last_id}`}</p>
            <span className="accent-mini">* Lưu ý: quý khách vui lòng chuyển tiền theo đúng thông tin và (nội dung) như trên !</span>
            <span className="accent-mini">* Lưu ý: bài đăng sẽ tự động xóa nếu không thanh toán trong vòng 3 ngày !</span>
            <span className="accent-mini">* Nếu có bất kỳ sai sót nào vui lòng liên hệ <span className="phone-number">0352956129</span> để được hỗ trợ</span>
        </div>
    }
    render() {
        return this.showModal()
    }
}

export default ModalPayment;