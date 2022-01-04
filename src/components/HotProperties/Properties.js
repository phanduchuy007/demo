import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Properties extends Component {
    state = {
        id: this.props.datas.property_id,
        caption: this.props.datas.caption,
        land_area: this.props.datas.land_area,
        price: this.props.datas.estimated_price,
        districtName: this.props.datas.districtName,
        street: this.props.datas.street,
        image: this.props.datas.image,
    }

    render() {
        const { id, caption, land_area, price, districtName, street, image } = this.state;
        return (
            <Link to={`/productDetailPage/${id}`}>
                <div className="row hot-properties-3">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 img-hot-pro-3">
                        <img src={`http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${image}`} className="img-products" alt="properties" />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 hot-pro-3">
                        <h6 className="p-text-hot-3">{caption}</h6>
                        <p> <span className="glyphicon glyphicon-usd"></span> {`${price} - ${land_area} m²`}</p>
                        <p className="p-text-address-hot-3"> <span className="glyphicon glyphicon-map-marker"></span> {street} - {districtName}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Properties;
