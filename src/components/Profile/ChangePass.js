import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import callApiAu from './../../utils/callApiAu'
import { Confirm, Alert } from 'react-st-modal';
class ChangePass extends Component {
    state = {
        oldPassWord: '',
        newPassWord: '',
        confirmPassWord: '',
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    submitUpdatePass = async (e) => {
        e.preventDefault();
        const { oldPassWord, newPassWord, confirmPassWord } = this.state;
        const token = sessionStorage.getItem('token')
        const confirm = await Confirm("Bạn có muốn đổi mật khẩu !", "Thông báo");

        if (confirm) {
            callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/change_password.php', 'PUT', token, {
                password: oldPassWord,
                new_password: newPassWord,
                confirm_password: confirmPassWord
            })
                .then(res => {
                    if (res.data.success) {
                        Alert(res.data.success, 'Thông báo');
                    }
                    if (res.data.errors) {
                        Alert(res.data.errors, 'Thông báo');
                    }
                })
                .catch(res => {
                    console.log(res);
                })
        }
    }

    render() {
        return (
            <div className="changePass">
                <form className="form-width" onSubmit={this.submitUpdatePass}>
                    <legend className="legen-changePass text-center">Đổi mật khẩu</legend>
                    <div className="form-group">
                        <label>Mật khẩu cũ</label>
                        <input
                            type="password"
                            name="oldPassWord"
                            onChange={this.onChange}
                            className="form-control"
                            placeholder="Mật khẩu cũ"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Mật khẩu mới</label>
                        <input
                            type="password"
                            name="newPassWord"
                            onChange={this.onChange}
                            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                            title="Mật khẩu (chữ hoa, chữ thường, số, ký tự đặc biệt, và tối thiểu 8 ký tự)"
                            className="form-control"
                            placeholder="Mật khẩu mới"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Xác nhận mật khẩu mới</label>
                        <input
                            type="password"
                            name="confirmPassWord"
                            onChange={this.onChange}

                            className="form-control"
                            placeholder="Xác nhận mật khẩu mới"
                        />
                    </div>
                    <div className="btn-group row">
                        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <button
                                className="btn btn-primary"
                                onClick={() => { this.props.history.push('/ProfilePage') }}
                            >trở về</button>
                        </div>
                        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Đổi mật khẩu</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(ChangePass);