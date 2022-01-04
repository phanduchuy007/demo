import axios from 'axios';
import React, { Component } from 'react';
import HotProperties from '../components/HotProperties/HotProperties';
import FeedBack from '../components/ProductDetail/FeedBack';
import Silde from '../components/ProductDetail/Silde';

class ProductDetailPage extends Component {
    state = {
        id: this.props.match.id,

        datas: {
            caption: '',
            description: '',
            price: '',
            address: '',
            name: '',
            land_area: '',
            time: '',
            ptypeName: '',
            chouse_name: '',
            phone: '',
            sex: '',

            images: []
        }
    }

    componentDidMount() {
        const { id } = this.state;
        window.scrollTo(0, 160);
        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/details_rs.php?id=', {
            params: {
                id: id
            }
        })
            .then(res => {
                this.setState({
                    datas: {
                        caption: res.data.caption,
                        description: res.data.description,
                        price: res.data.estimated_price,
                        priceOld: res.data.estimated_price_1,
                        address: res.data.google_map,
                        name: res.data.name,
                        land_area: res.data.land_area,
                        time: res.data.post_time,
                        ptypeName: res.data.ptypeName,
                        chouse_name: res.data.chouse_name,
                        phone: res.data.phone,
                        images: res.data.img.image,
                        sex: res.data.sex
                    }
                })
            })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.id !== prevState.id) {
            return { id: nextProps.match.id };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        const { id } = this.state;
        if (prevProps.match.id !== this.state.id) {
            this.setState({ id: this.props.match.id });
            axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/details_rs.php', {
                params: {
                    id: id
                }
            })
                .then(res => {
                    this.setState({
                        datas: {
                            caption: res.data.caption,
                            description: res.data.description,
                            price: res.data.estimated_price,
                            priceOld: res.data.estimated_price_1,
                            address: res.data.google_map,
                            name: res.data.name,
                            land_area: res.data.land_area,
                            time: res.data.post_time,
                            ptypeName: res.data.ptypeName,
                            chouse_name: res.data.chouse_name,
                            phone: res.data.phone,
                            images: res.data.img.image,
                            sex: res.data.sex
                        }
                    })
                })
        }

    }

    currencyChange = () => {
        const { priceOld, land_area, ptypeName } = this.state.datas;

        const sellPrice = Math.ceil(parseFloat(priceOld / land_area) / 1000000)
        const rentPrice = Math.ceil(parseFloat(priceOld) / 1000000)

        // const newPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceOld)
        if (ptypeName === 'Cần bán') {
            return `${sellPrice} triệu/m²`
        } else {
            return `${rentPrice} triệu/tháng`
        }
    }

    render() {
        const { id } = this.state;
        const { caption, price, description, address, name, time, land_area, ptypeName, chouse_name, phone, images, sex } = this.state.datas
        const imgLink = images.map(img => {
            return img.image
        })
        return (
            <div>
                <div className="container">
                    <div className="properties-listing spacer">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 ">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="property-images">
                                            {/* Slider Starts */}
                                            <Silde imgLink={imgLink} />
                                            {/* #Slider Ends */}
                                        </div>
                                        <br />
                                        <div className="spacer">
                                            <h3> {caption}</h3>
                                            <p className="area"><span className="glyphicon glyphicon-map-marker" /> {address}</p>
                                        </div>
                                        <div className="spacer">
                                            <h4>
                                                <span className="glyphicon glyphicon-th" />Thông tin bài đăng
                                            </h4>
                                            <div class="row">
                                                <div class="row">
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Mức giá: </li>
                                                            <li className="li-detail">{price}</li>
                                                            <li>{`~${this.currencyChange()}`}</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Diện tích: </li>
                                                            <li className="li-detail">{land_area} m²</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Thời gian đăng: </li>
                                                            <li className="li-detail text-uppercase">{time}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="spacer">
                                            <h4>
                                                <span className="glyphicon glyphicon-th-list" />Thông tin mô tả
                                            </h4>
                                            <p>{description}</p>
                                        </div>

                                        <h4>
                                            <span className="glyphicon glyphicon-home" />Đặc điểm bài đăng
                                        </h4>
                                        <div className="spacer-detail">
                                            <div className="row">
                                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <span className="dacdiem">Loại tin đăng:</span>
                                                </div>

                                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                    <span className="text-left">{`${ptypeName} - ${chouse_name}`}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <span className="dacdiem">Địa chỉ cụ thể:</span>
                                                </div>
                                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                    <span className="text-left">{address}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4><span className="glyphicon glyphicon-map-marker" />Địa chỉ</h4>
                                            <iframe className="well" width="100%" height={500} src={`http://maps.google.com/maps?q=(${address})&output=embed`} ></iframe>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="col-lg-12  col-sm-6">
                                            <div className="property-info box-contact">
                                                <div className="profile user">
                                                    <div className="avatar">
                                                        {sex === "Nữ" ? <img src="/images/female.png" width="100%" /> : < img src="/images/male.png" width="100%" />}
                                                    </div>
                                                    <div className="name" title={name}>
                                                        {name}
                                                    </div>
                                                    <div className="phone text-center">&nbsp;<span className="glyphicon glyphicon-phone-alt"></span><span className="phoneEvent showHotline">{phone}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-6 ">
                                            {<FeedBack property_id={id} />}
                                        </div>
                                        <div className="col-lg-12 col-sm-6 ">
                                            <div className="hot-properties hidden-xs">
                                                <h4>Gợi ý</h4>
                                                {/* Bài đăng nổi bật */}
                                                <HotProperties />
                                                {/* Bài đăng nổi bật */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailPage;