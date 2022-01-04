import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Alert } from 'react-st-modal';

class NewPass extends Component {
    state = {
        newPass: '',
        confirmPass: '',
        email: '',
    }

    componentDidMount() {
        this.setState({
            email: this.props.match.email
        })
    }

    onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        })
    }

    onSubmitNewPass = async (e) => {
        e.preventDefault();
        const { newPass, confirmPass, email } = this.state;
        try {
            const res = await axios({
                method: 'put',
                url: 'http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/forgot_password/change_password_forgot.php?email=ngminhngoc123@gmail.com',
                params: {
                    email: email
                },
                data: {
                    new_password: newPass,
                    confirm_password: confirmPass
                }
            });

            if (res) {
                if (res.data.success) {
                    Alert(res.data.success, "Thông báo !")
                    this.props.history.push('/login')
                } else {
                    Alert(res.data.errors, "Thông báo !")
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        console.log(this.state.email);
        return (
            <>
                <div className="container" style={{ padding: "30px 0px" }}>
                    <div class="row">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h2>Mật khẩu mới</h2>
                            <form onSubmit={this.onSubmitNewPass}>
                                <div className="form-group">
                                    <label className="sr-only">Nhập vào mật khẩu mới</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Mật khẩu mới"
                                        name="newPass"
                                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                        title="Mật khẩu (chữ hoa, chữ thường, số, ký tự đặc biệt, và tối thiểu 8 ký tự)"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only">Nhập vào mật khẩu mới</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Xác nhận mật khẩu"
                                        name="confirmPass"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-login"
                                >Tạo mật khẩu mới</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                </div>
            </>
        );
    }
}

export default withRouter(NewPass);