import React, { Component } from 'react';
import { Confirm } from 'react-st-modal';
import callApiAu from '../../utils/callApiAu';
class EditProfile extends Component {
    state = {
        full_name: '',
        phone: '',
        sex: '',
    }

    componentDidMount() {
        this.setState({
            full_name: this.props.datas.full_name,
            phone: this.props.datas.phone,
            sex: this.props.datas.sex,
        })
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    submitUpdateForm = async (e) => {
        const { full_name, phone, sex } = this.state;
        e.preventDefault();
        const confirm = await Confirm("Bạn muốn cập nhập lại thông tin cá nhân !", "Thông báo");
        const token = sessionStorage.getItem("token");
        if (confirm) {
            const url = 'http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/update.php';
            callApiAu(url, 'POST', token, {
                full_name: full_name,
                phone_no: phone,
                sex: sex
            })
                .then(res => {
                    console.log(res);
                })
        }
    }

    render() {
        const { full_name, phone, sex } = this.state;
        return (
            <div className="edit-profile">
                <form className="form-edit" onSubmit={this.submitUpdateForm}>
                    <legend className="text-center legen-form-edit">Cập nhập thông tin</legend>
                    <div className="form-group">
                        <label htmlFor>Họ tên</label>
                        <input
                            type="text"
                            value={full_name}
                            name="full_name"
                            onChange={this.onChange}
                            className="form-control"
                            placeholder="Nhập vào họ tên"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Số điện thoại</label>
                        <input
                            type="text"
                            value={phone}
                            name="phone"
                            onChange={this.onChange}

                            className="form-control"
                            placeholder="Nhập vào số điện thoại"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Giới tính</label>
                        <select
                            name="sex"
                            onChange={this.onChange}
                            value={sex}
                            className="form-control"
                        >
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                    <div className="form-group button-changePass">
                        <button
                            className="btn btn-edit-form"
                            onClick={this.props.onCloseForm}
                        >Đóng</button>
                        <button
                            type="submit"
                            className="btn btn-edit-form"
                        >Cập nhập</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditProfile;