import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PopupCom from '../AddProduct/PopupCom'
import axios from 'axios'
class ListItem extends Component {

    handleClickStatus = () => {
        const { post_status, property_id, ptype_name } = this.props.data;
        if (post_status === 'Chưa thanh toán') {
            return <PopupCom
                name={post_status}
                propertyId={property_id}
                type={ptype_name}
            />
        }
        if (post_status === 'Đã thanh toán') {
            return <PopupCom
                name={post_status}
                disable={'disable'}
            />
        }
    }

    handleDeleteId = (id) => {
        this.props.handleDeleteFormId(id)
    }

    render() {
        const { estimated_price, post_time, ptype_name, land_area, apartment_number, street, property_id } = this.props.data;
        const { index } = this.props;
        return (
            <>
                <tr>
                    <td className="text-center">{index + 1}</td>
                    <td>{ptype_name}</td>
                    <td>{`${apartment_number} ${street}`}</td>
                    <td>{estimated_price}</td>
                    <td className="text-center">{land_area} m²</td>
                    <td>{post_time}</td>
                    <td>
                        {this.handleClickStatus()}
                    </td>
                    <td>
                        <div className="btn-group" role="group">
                            <Link to={`/ProductDetailPage/${property_id}`} className="btn btn-default paid-button">Xem chi tiết</Link>
                            <button
                                className="btn btn-delete paid-button"
                                onClick={() => this.handleDeleteId(property_id)}
                            >Xóa</button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
export default ListItem;