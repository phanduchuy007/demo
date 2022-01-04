import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PropertyItems extends Component {
    state = {
        data: {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data !== prevState.data) {
            return {
                data: nextProps.data,
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.data !== prevState.data) {
            this.setState({
                data: this.state.data,
            })
        }
    }

    render() {
        const { property_id, caption, land_area, estimated_price, districtName, street, image } = this.state.data;

        return (
            <Link style={{ textDecoration: "none" }} to={`/productDetailPage/${property_id}`} className="col-lg-4 col-sm-6">
                <div className="properties">
                    <div className="image-holder">
                        <img className="img-pro" src={`http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${image}`} className="img-products" alt="properties" />
                        {/* <div className="status sold">Sold</div> */}
                    </div>
                    <div>
                        <h4 className="p-text">{caption}</h4>
                    </div>
                    <div className="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pro-info">
                            <p>Giá: {estimated_price}</p>
                            <p>Diện tích: {land_area}m2</p>
                        </div>
                    </div>
                    <p className="address"><span className="glyphicon glyphicon-map-marker"></span> {street} - {districtName}</p>
                </div>
            </Link>
        );
    }
}

export default PropertyItems;