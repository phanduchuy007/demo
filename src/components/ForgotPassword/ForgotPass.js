import axios from 'axios';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Alert } from 'react-st-modal';

class ForgotPass extends Component {
    state = {
        email: '',
        pending: null,
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.pending) {
            this.showPending(this.state.pending)
        }
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({
            email: value
        })
    }

    onSubmitEmail = async (e) => {
        e.preventDefault();
        const { email } = this.state;

        this.setState({
            pending: true,
        })
        const res = await axios.put('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/forgot_password/input_email.php', {
            email: email,
        })

        if (res) {
            this.setState({
                pending: false
            })
            if (res.data.success) {
                Alert(res.data.success, "Thông báo !")
                this.props.history.push(`/otpCheck/${email}`)
            } else {
                Alert(res.data.errors, "Thông báo !")
            }
        }
    }

    showPending = (status) => {
        return status ? Alert("Đang kiểm tra email...........", "Thông báo !") : '';
    }

    render() {
        return (
            <>
                <div className="container" style={{ padding: "30px 0px" }}>
                    <div class="row">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h2>Quên mật khẩu</h2>
                            <form onSubmit={this.onSubmitEmail}>
                                <div className="form-group">
                                    <label className="sr-only">Nhập vào Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Nhập vào email"
                                        name="email"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-login"
                                >Gửi mã</button>
                            </form>
                            <br />
                            <h4>Hoặc tạo tài khoản mới</h4>
                            <p>Bắt đầu đăng tin ngay trên nền tảng của chúng tôi</p>
                            <Link to="/register" className="btn btn-default">
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                </div>
            </>
        );
    }
}

export default withRouter(ForgotPass);