import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Alert } from 'react-st-modal';

class OtpCheck extends Component {
    state = {
        code: '',
        email: '',
    }

    componentDidMount() {
        this.setState({
            email: this.props.match.params.email
        })
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({
            code: value
        })
    }

    onSubmitOTP = async (e) => {
        e.preventDefault();
        const { email } = this.state;
        try {
            const res = await axios({
                method: 'put',
                url: 'http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/forgot_password/input_otp.php?email=ngminhngoc123@gmail.com',
                params: {
                    email: email
                },
                data: {
                    otp: this.state.code
                }
            });

            if (res) {
                if (res.data.success) {
                    Alert(res.data.success, "Thông báo !")
                    this.props.history.push(`/newPass/${email}`)
                } else {
                    Alert(res.data.errors, "Thông báo !")
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    render() {
        // console.log(this.props.match.params.email);
        return (
            <>
                <div className="container" style={{ padding: "30px 0px" }}>
                    <div class="row">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h2>Nhập vào mã OTP</h2>
                            <form onSubmit={this.onSubmitOTP}>
                                <div className="form-group">
                                    <label className="sr-only">Nhập mã OTP vào đây</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập vào mã"
                                        pattern="\d*" maxlength="6"
                                        name="otpCode"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-login"
                                >Gửi mã</button>
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

export default withRouter(OtpCheck);