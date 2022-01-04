import React, { Component } from 'react';
import callAPI from '../../utils/callAPI'
import { Confirm, Alert } from 'react-st-modal';

class FeedBack extends Component {
    state = {
        property_id: this.props.property_id,
        full_name: '',
        email: '',
        phone_no: '',
        description: '',
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmitFeedBack = async (e) => {
        e.preventDefault();
        const { property_id, full_name, email, phone_no, description } = this.state
        const confirm = await Confirm('Gửi phản hồi ?', 'Thông báo')
        if (confirm) {
            callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/enquiry.php', 'POST', {
                property_id: property_id,
                full_name: full_name,
                email: email,
                phone_no: phone_no,
                description: description,
            })
                .then(res => res.data)
                .then(async res => {
                    if (res.success) {
                        await Alert(res.success, "Thông báo !")
                        this.setState({
                            full_name: '',
                            email: '',
                            phone_no: '',
                            description: '',
                        })
                    } else {
                        Alert(res.errors, "Thông báo !")
                    }
                })
        }
    }

    render() {
        const { full_name, email, phone_no, description } = this.state;
        return (
            <div className="enquiry">
                <h4><span className="glyphicon glyphicon-envelope" />Phản hồi</h4>
                <form onSubmit={this.onSubmitFeedBack}>
                    <input
                        type="text"
                        name="full_name"
                        value={full_name}
                        onChange={this.onChange}
                        maxLength={40}
                        required
                        className="form-control"
                        placeholder="Họ tên"
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        required
                        name="phone_no"
                        value={phone_no}
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="Số điện thoại"
                        pattern="\d*"
                        maxLength={10}
                        title="Vui lòng nhập đúng định dạng số điện thoại"
                    />
                    <textarea
                        rows={6}
                        required
                        name="description"
                        value={description}
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="Gửi vấn đề cần báo cáo về bài đăng tại đây"
                        maxLength={1000}
                        defaultValue={""}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        name="Submit"
                    >Gửi phản hồi</button>
                </form>
            </div>
        );
    }
}

export default FeedBack;