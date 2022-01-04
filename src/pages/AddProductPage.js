import axios from 'axios'
import React, { Component } from 'react'
import Modals from '../components/AddProduct/Modals'
import Banner from '../components/Banner'
import { getCity, getDistrict, getKindNew, getPostType, getPropertyType, getWard } from '../constans/getAPI'
import { Confirm, Alert } from 'react-st-modal';

class AddProductPage extends Component {
    state = {
        chouse_id: '',
        ptype_id: '',
        caption: '',
        kind_id: '',
        city_id: '',
        district_id: '',
        ward_id: '',
        street: '',
        apartment_number: '',
        estimated_price: '',
        land_area: '',
        description: '',
        day_number: '',

        p_photo: [],
        cityDatas: [],
        districtDatas: [],
        wardDatas: [],
        kindNewDatas: [],
        propertyType: [],
        postType: [],

        openModal: false,
        modalDatas: null
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    onChangePrice = (e) => {
        const value = e.target.value
        let price = parseInt(value)
        if (price < 0 || price > 50000000000) {
            Alert('vui lòng nhập đúng định dạng giá tiền bằng số (Không quá 50 tỷ)', 'Thông báo');
            this.setState({
                estimated_price: '',
            })
        } else {
            this.setState({
                estimated_price: price
            })
        }
    }

    onChangeArea = (e) => {
        const value = e.target.value
        let areas = parseInt(value)
        if (areas < 0 || areas > 2000) {
            Alert('vui lòng nhập đúng định dạng diện tích bằng số (Không quá 2000 m2)', 'Thông báo');
            this.setState({
                land_area: '',
            })
        } else {
            this.setState({
                land_area: areas
            })
        }
    }

    onChangeHouseNumber = (e) => {
        const value = e.target.value;
        this.setState({
            apartment_number: value
        }, () => {
            this.checkValid(value);
        })
    }

    checkValid = (value) => {
        const charValid = '1234567890/';
        for (const char of value) {
            if (charValid.indexOf(char) !== -1) {
                this.setState({
                    apartment_number: value
                })
            } else {
                Alert('Vui lòng nhập đúng định dạng số nhà (bao gồm số và "/")', "Thông báo !")
                this.setState({
                    apartment_number: ''
                })
            }
        }
    }

    onChangeFile = (e) => {
        const file = e.target.files;

        const images = []
        for (const key of file) {
            images.push(key)
        }
        if (file.length > 5 || file.length < 3) {
            Alert("Vui lòng chọn dưới 5 ảnh và trên 3 ảnh", "Thông báo !")
            this.setState({
                p_photo: []
            })
        } else {
            this.setState({
                p_photo: images
            })
        }
    }

    componentDidMount() {
        getCity().then(res => {
            this.setState({
                cityDatas: res.data.list
            })
        })
        getDistrict().then(res => {
            this.setState({
                districtDatas: res.data.list
            })
        })
        getWard().then(res => {
            this.setState({
                wardDatas: res.data.list
            })
        })
        getKindNew().then(res => {
            this.setState({
                kindNewDatas: res.data.list
            })
        })
        getPropertyType().then(res => {
            this.setState({
                propertyType: res.data.list
            })
        })
        getPostType().then(res => {
            this.setState({
                postType: res.data.list
            })
        })
    }

    newCity = () => {
        const { cityDatas } = this.state
        const newCity = cityDatas.map(city => {
            return <option value={city.city_id}>{city.cityName}</option>
        })
        return newCity;
    }

    newDistrict = () => {
        const { districtDatas, city_id } = this.state
        const newDistrict = districtDatas.map(dis => {
            if (dis.city_id === city_id) {
                return <option value={dis.district_id}>{dis.districtName}</option>
            }
        })
        return newDistrict;
    }
    newWard = () => {
        const { wardDatas, district_id } = this.state
        const newWard = wardDatas.map(ward => {
            if (ward.district_id === district_id) {
                return <option value={ward.ward_id}>{ward.wardName}</option>
            }
        })
        return newWard;
    }

    kindNews = () => {
        const { kindNewDatas } = this.state
        const newKind = kindNewDatas.map(kind => {
            return <option value={kind.id}>{`${kind.name} - ${kind.price}`}</option>
        })
        return newKind;
    }

    propertyType = () => {
        const { propertyType } = this.state
        const newType = propertyType.map(type => {
            return <option value={type.chouse_id}>{type.name}</option>
        })
        return newType;
    }

    postType = () => {
        const { postType } = this.state;
        const newPostType = postType.map(type => {
            return <option value={type.ptype_id}>{type.name}</option>
        })
        return newPostType;
    }

    handleOnSubmitPost = async (e) => {
        e.preventDefault();

        const { chouse_id, ptype_id, caption, kind_id, city_id, district_id, ward_id, street, apartment_number, estimated_price, land_area, description, day_number, p_photo } = this.state;
        const token = sessionStorage.getItem("token");
        const url = "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/add_property.php";
        const formData = new FormData();
        formData.append('chouse_id', chouse_id)
        formData.append('ptype_id', ptype_id)
        formData.append('caption', caption)
        formData.append('kind_id', kind_id)
        formData.append('city_id', city_id)
        formData.append('district_id', district_id)
        formData.append('ward_id', ward_id)
        formData.append('street', street)
        formData.append('apartment_number', apartment_number)
        formData.append('estimated_price', estimated_price)
        formData.append('land_area', land_area)
        formData.append('description', description)
        formData.append('day_number', day_number)
        p_photo.map(img => {
            formData.append('p_photo[]', img)
        })

        const confirm = await Confirm("vui lòng kiểm tra đầy đủ thông tin trước khi đăng bài", "Thông báo !")
        if (confirm) {
            axios({
                url: url,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    token: token,
                },
                data: formData
            })
                .then(res => {
                    console.log(res);
                    this.setState({
                        openModal: true,
                        modalDatas: res.data
                    })
                })
                .catch(err => {
                    console.log(err.data);
                })
        }
    }

    handleOpenModal = (isOpen) => {
        this.setState({
            openModal: isOpen
        })
    }

    checkModal = () => {
        const { openModal, modalDatas } = this.state
        return openModal ? <Modals modalDatas={modalDatas} openModal={this.handleOpenModal} /> : '';
    }

    render() {
        const {
            caption,
            ptype_id,
            chouse_id,
            city_id,
            district_id,
            ward_id,
            apartment_number,
            street,
            estimated_price,
            land_area,
            description,
            p_photo,
            kind_id,
            day_number,
            openModal,
        } = this.state;
        return (
            <>
                {this.checkModal()}
                <div className="container">
                    <div className="row mt-40 mb-40">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="mt-10 center">
                                <h3>ĐĂNG TIN RAO BÁN, CHO THUÊ NHÀ ĐẤT</h3>
                                <p>(Quý vị nhập thông tin nhà đất cần bán hoặc cho thuê vào các mục dưới đây)</p>
                            </div>
                            <form
                                onSubmit={this.handleOnSubmitPost}
                                encType="multipart/form-data"
                            >
                                <div className="form-group">
                                    <label>Tiêu đề(<span className="star-color">*</span>)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        placeholder="Nhập vào tiêu đề"
                                        name="caption"
                                        value={caption}
                                        onChange={this.onChange}
                                        maxlength="100"
                                        title="Tiêu đề không nhập quá 100 từ"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Hình thức(<span className="star-color">*</span>)</label>
                                            <select
                                                className="form-control"
                                                name="ptype_id"
                                                value={ptype_id}
                                                onChange={this.onChange}
                                            >
                                                <option>-- Hình thức --</option>
                                                {this.postType()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Loại(<span className="star-color">*</span>)</label>
                                            <select
                                                className="form-control"
                                                name="chouse_id"
                                                value={chouse_id}
                                                onChange={this.onChange}
                                            >
                                                <option>-- Loại --</option>
                                                {this.propertyType()}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Thành phố(<span className="star-color">*</span>)</label>
                                    <select
                                        className="form-control"
                                        name="city_id"
                                        value={city_id}
                                        onChange={this.onChange}
                                    >
                                        <option>-- Chọn Tỉnh --</option>
                                        {this.newCity()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Quận / Huyện</label>
                                    <select
                                        className="form-control"
                                        name="district_id"
                                        value={district_id}
                                        onChange={this.onChange}
                                    >
                                        <option>-- Chọn Thành phố / Quận / Huyện --</option>
                                        {this.newDistrict()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Thị Trấn / Xã</label>
                                    <select
                                        className="form-control"
                                        required
                                        name="ward_id"
                                        value={ward_id}
                                        onChange={this.onChange}
                                    >
                                        <option>-- Chọn Thị Trấn / Xã --</option>
                                        {this.newWard()}
                                    </select>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Số nhà</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="apartment_number"
                                            value={apartment_number}
                                            onChange={this.onChangeHouseNumber}
                                            placeholder="Số nhà VD: 20/1/16 hoặc 20"
                                            title="Vui lòng nhập đúng định dạng - vd: 20/1/16"
                                            maxlength="12"
                                        />
                                    </div>
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Đường(<span className="star-color">*</span>)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="street"
                                            value={street}
                                            onChange={this.onChange}
                                            placeholder="Nhập vào đường"
                                            maxlength="30"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Giá(<span className="star-color">*</span>): </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="estimated_price"
                                                value={estimated_price}
                                                onChange={this.onChangePrice}
                                                required
                                                placeholder="Nhập vào giá"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Diện tích(<span className="star-color">*</span>)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="land_area"
                                                value={land_area}
                                                onChange={this.onChangeArea}
                                                placeholder="m2"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Mô tả về bài đăng(<span className="star-color">không quá 4000 từ</span>)</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        required
                                        placeholder="Nhập vào mô tả"
                                        name="description"
                                        value={description}
                                        onChange={this.onChange}
                                    ></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Tải ảnh lên (<span className="star-color">không quá 5 ảnh</span>)</label>
                                            <input
                                                type="file"
                                                multiple
                                                accept=".png, .jpg, .jpeg"
                                                name="p_photo"
                                                onChange={this.onChangeFile}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Loại tin(<span className="star-color">*</span>)</label>
                                            <select
                                                className="form-control"
                                                required
                                                name="kind_id"
                                                value={kind_id}
                                                onChange={this.onChange}
                                            >
                                                <option>-- Chọn loại tin --</option>
                                                {this.kindNews()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Số ngày đăng(<span className="star-color">*</span>)</label>
                                            <select
                                                className="form-control"
                                                required
                                                name="day_number"
                                                value={day_number}
                                                onChange={this.onChange}
                                            >
                                                <option>-- Chọn số ngày đăng --</option>
                                                <option value={5}>5 Ngày</option>
                                                <option value={10}>10 Ngày</option>
                                                <option value={15}>15 Ngày</option>
                                                <option value={20}>20 Ngày</option>
                                                <option value={30}>30 Ngày</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 confirm_box">
                                        <h4><span className="glyphicon glyphicon-exclamation-sign"></span> Vui lòng kiểm tra chính xác các thông tin trước khi đăng bài</h4></div>
                                </div>
                                <br />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >Đăng bài</button>
                            </form>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AddProductPage;