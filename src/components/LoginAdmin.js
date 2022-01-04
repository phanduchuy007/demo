import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import callAPI from '../utils/callAPI';


class LoginAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        callAPI("http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/login.php", 'POST', {
            email_ad: email,
            password_ad: password
        })
            .then(res => {
                return res.data
            })
            .then(res => {
                if (res.errors) {
                    alert(res.errors)
                } else {
                    alert(res.success)
                    this.props.history.push('/')
                    window.location.reload();
                    if (typeof (Storage) !== 'undefined') {
                        sessionStorage.setItem('token_admin', res.data.token);
                    } else {
                        alert('Trình duyệt của bạn không hỗ trợ!');
                    }
                }
            })
    }
    render() {
        return (
            <>
                <div className="container" style={{ padding: "30px 0px" }}>
                    <div class="row">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h2>Đăng nhập Admin</h2>
                            <form className role="form" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label className="sr-only">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Nhập vào email"
                                        name="email"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Nhập vào mật khẩu"
                                        name="password"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-login"
                                >Đăng nhập</button>
                            </form>
                            <br />
                            <h4>Trang quản lý của Admin</h4>
                            <p>Vui lòng đăng nhập bằng tài khoản Admin</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                </div>
            </>
        );
    }
}

export default withRouter(LoginAdmin);