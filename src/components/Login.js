import React, { Component } from 'react';
import callAPI from '../utils/callAPI';
import { Link, withRouter } from 'react-router-dom'

class Login extends Component {
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
        callAPI("http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/login.php", 'POST', {
            email: email,
            password: password
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
                        sessionStorage.setItem('token', res.data.token);
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
                            <h2>Đăng nhập</h2>
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
                                <div className="forgot-password">
                                    <Link to="/forgotPass">Quên mật khẩu</Link>
                                </div>
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
        )
    }
}

export default withRouter(Login);
