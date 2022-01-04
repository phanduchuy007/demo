import React, { Component } from 'react';
import * as API from './../constans/getAPI';
import axios from 'axios';
import { Alert } from 'react-st-modal';

class Search extends Component {
    state = {
        price: null,
        caption: null,
        type: null,
        price_start: null,
        price_end: null,
        area_start: null,
        area_end: null,

        area: '',

        city: [],
        district: [],
        ward: [],
        types: [],

        city_id: null,
        district_id: null,
        ward_id: null,

        currentPage: 1,

        datasSearch: []
    }

    async componentDidMount() {
        const cityDatas = await API.getCity();
        const districtDatas = await API.getDistrict();
        const wardDatas = await API.getWard();
        const typesDatas = await API.getPropertyType();
        this.setState({
            city: cityDatas.data.list,
            district: districtDatas.data.list,
            ward: wardDatas.data.list,
            types: typesDatas.data.list,
        })
    }

    newTypes = () => {
        const { types } = this.state;
        if (!types) return;
        const newTypes = types.map(type => {
            return <option value={type.chouse_id}>{type.name}</option>
        })
        return newTypes;
    }

    newCity = () => {
        const { city } = this.state;
        if (!city) return;
        const newCity = city.map(city => {
            return <option value={city.city_id}>{city.cityName}</option>
        })
        return newCity;
    }

    newDistrict = () => {
        const { district, city_id } = this.state;
        const newDistrict = district.map(dis => {
            if (dis.city_id === city_id) {
                return <option value={dis.district_id}>{dis.districtName}</option>
            }
        })
        return newDistrict;
    }

    newWard = () => {
        const { ward, district_id } = this.state
        const newWard = ward.map(ward => {
            if (ward.district_id === district_id) {
                return <option value={ward.ward_id}>{ward.wardName}</option>
            }
        })
        return newWard;
    }

    onChangePrice = (e) => {
        const milion = '000000';
        const bilion = '000000000'
        const value = e.target.value;

        const { typeSearch } = this.props;

        if (typeSearch === 'sell') {
            switch (value) {
                case "1":
                    this.setState({
                        price_start: `${5}${milion}`,
                        price_end: `${8}${milion}`
                    })
                    break;
                case "2":
                    this.setState({
                        price_start: `${8}${milion}`,
                        price_end: `${1}${bilion}`
                    })
                    break;
                case "3":
                    this.setState({
                        price_start: `${1}${bilion}`,
                        price_end: `${2}${bilion}`
                    })
                    break;
                case "4":
                    this.setState({
                        price_start: `${2}${bilion}`,
                        price_end: `${3}${bilion}`
                    })
                    break;
                case "5":
                    this.setState({
                        price_start: `${3}${bilion}`,
                        price_end: `${5}${bilion}`
                    })
                    break;
                case "6":
                    this.setState({
                        price_start: `${5}${bilion}`,
                        price_end: `${7}${bilion}`
                    })
                    break;
                case "7":
                    this.setState({
                        price_start: `${7}${bilion}`,
                        price_end: `${10}${bilion}`
                    })
                    break;
                case "8":
                    this.setState({
                        price_start: `${10}${bilion}`,
                        price_end: `${20}${bilion}`
                    })
                    break;
                case "9":
                    this.setState({
                        price_start: `${20}${bilion}`,
                        price_end: `${30}${bilion}`
                    })
                    break;
                case "10":
                    this.setState({
                        price_start: `${30}${bilion}`,
                        price_end: ``
                    })
                    break;
                default:
                    break;
            }
        } else {
            switch (value) {
                case "1":
                    this.setState({
                        price_start: ``,
                        price_end: `${1}${milion}`
                    })
                    break;
                case "2":
                    this.setState({
                        price_start: `${1}${milion}`,
                        price_end: `${3}${milion}`
                    })
                    break;
                case "3":
                    this.setState({
                        price_start: `${3}${milion}`,
                        price_end: `${5}${milion}`
                    })
                    break;
                case "4":
                    this.setState({
                        price_start: `${5}${milion}`,
                        price_end: `${10}${milion}`
                    })
                    break;
                case "5":
                    this.setState({
                        price_start: `${10}${milion}`,
                        price_end: `${40}${milion}`
                    })
                    break;
                case "6":
                    this.setState({
                        price_start: `${40}${milion}`,
                        price_end: `${70}${milion}`
                    })
                    break;
                case "7":
                    this.setState({
                        price_start: `${70}${milion}`,
                        price_end: `${100}${milion}`
                    })
                    break;
                case "8":
                    this.setState({
                        price_start: `${100}${milion}`,
                        price_end: ``
                    })
                    break;
                default:
                    break;
            }
        }
    }

    onChangeArea = (e) => {
        const value = e.target.value;
        switch (value) {
            case "1":
                this.setState({
                    area_start: '',
                    area_end: '30',
                })
                break;
            case "2":
                this.setState({
                    area_start: '30',
                    area_end: '50',
                })
                break;
            case "3":
                this.setState({
                    area_start: '50',
                    area_end: '80',
                })
                break;
            case "4":
                this.setState({
                    area_start: '80',
                    area_end: '100',
                })
                break;
            case "5":
                this.setState({
                    area_start: '100',
                    area_end: '150',
                })
                break;
            case "6":
                this.setState({
                    area_start: '150',
                    area_end: '200',
                })
                break;
            case "7":
                this.setState({
                    area_start: '200',
                    area_end: '250',
                })
                break;
            case "8":
                this.setState({
                    area_start: '250',
                    area_end: '300',
                })
                break;
            case "9":
                this.setState({
                    area_start: '300',
                    area_end: '350',
                })
                break;
            case "10":
                this.setState({
                    area_start: '350',
                    area_end: '',
                })
                break;
            default:
                break;
        }
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmitSearchForm = (e) => {
        const { type, caption, city_id, ward_id, district_id, price_start, price_end, area_start, area_end } = this.state;
        const { typeSearch } = this.props;
        e.preventDefault();

        const url = typeSearch === "sell" ? "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/search/search_sell.php" : "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/search/search_rent.php"
        axios({
            method: 'post',
            url: url,
            params: {
                page: this.state.currentPage,
                row_per_page: '9'
            },
            data: {
                chouse_id: type,
                caption_s: caption,
                city_id_s: city_id,
                district_id_s: district_id,
                ward_id_s: ward_id,
                price_begin: price_start,
                price_end: price_end,
                land_area_begin: area_start,
                land_area_end: area_end,
            }
        })
            .then(res => {
                console.log(res);
                if (res.data.count === 0) {
                    Alert("Không tìm thấy sản phẩm !", "Thông báo !")
                }
                this.props.datasSearch(res.data.list)
            })
    }

    render() {
        // console.log(this.state.datasSearch);
        const { district_id, city_id, ward_id, price, caption, area } = this.state;
        console.log(price, ' ', area);
        return (
            <form onSubmit={this.onSubmitSearchForm} >
                <div className="search-form"><h4>Tìm kiếm</h4>
                    <input
                        type="text"
                        name="caption"
                        value={caption}
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="Tìm kiếm theo tên"

                    />
                    <div className="row">
                        <div className="col-lg-6">
                            <select
                                name="price"
                                value={price}
                                onChange={this.onChangePrice}
                                className="form-control"
                            >
                                <option>Giá</option>
                                {this.props.typeSearch === 'sell' ?
                                    <>
                                        <option value={1}>500 - 800 triệu</option>
                                        <option value={2}>800 triệu - 1 tỷ</option>
                                        <option value={3}>1 - 2 tỷ</option>
                                        <option value={4}>2 - 3 tỷ</option>
                                        <option values={5}>3 - 5 tỷ</option>
                                        <option value={6}>5 - 7 tỷ</option>
                                        <option value={7}>7 - 10 tỷ</option>
                                        <option value={8}>10 - 20 tỷ</option>
                                        <option value={9}>20 - 30 tỷ</option>
                                        <option value={10}>Trên 30 tỷ</option>
                                    </> : <>
                                        <option value={1}>Dưới 1 triệu</option>
                                        <option value={2}>1 - 3 triệu</option>
                                        <option value={3}>3 - 5 triệu</option>
                                        <option value={4}>5 - 10 triệu</option>
                                        <option values={5}>10 - 40 triệu</option>
                                        <option value={6}>40 - 70 triệu</option>
                                        <option value={7}>70 - 100 triệu</option>
                                        <option value={8}>Trên 100 triệu</option>
                                    </>
                                }
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <select
                                name="area"
                                onChange={this.onChangeArea}
                                className="form-control"
                            >
                                <option>Diện tích</option>
                                <option value={1}>dưới 30 m²</option>
                                <option value={2}>30 - 50 m²</option>
                                <option value={3}>50 - 80 m²</option>
                                <option value={4}>80 - 100 m²</option>
                                <option value={5}>100 - 150 m²</option>
                                <option value={6}>150 - 200 m²</option>
                                <option value={7}>200 - 250 m²</option>
                                <option value={8}>250 - 300 m²</option>
                                <option value={9}>300 - 350 m²</option>
                                <option value={10}>trên 500 m²</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <select
                                name="type"
                                // value={type}
                                onChange={this.onChange}
                                className="form-control"
                            >
                                <option>Loại</option>
                                {this.newTypes()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <select
                                name="city_id"
                                value={city_id}
                                onChange={this.onChange}
                                className="form-control"
                            >
                                <option value="">Tỉnh / Thành phố</option>
                                {this.newCity()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <select
                                name="district_id"
                                value={district_id}
                                onChange={this.onChange}
                                className="form-control"
                            >
                                <option value="">Quận / Huyện</option>
                                {this.newDistrict()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <select
                                className="form-control"
                                name="ward_id"
                                value={ward_id}
                                onChange={this.onChange}
                            >
                                <option value="">Phường / Thị Xã</option>
                                {this.newWard()}
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-Search"
                    >Tìm kiếm</button>

                    {/* <div class="row">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <button
                                type="button"
                                className="btn btn-Search"
                                onClick={this.onDelete}
                            >Xóa</button>
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                        </div>
                    </div> */}
                </div>
            </form>
        )
    }
}

export default Search;