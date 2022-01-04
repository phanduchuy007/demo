import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

export class Row_Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
      index: this.props.index,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.item !== state.item) {
      return {
        item: props.item,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.item !== this.state.item) {
      this.setState({
        item: this.state.item,
      });
    }
  }

  deleteFeedBack = async (id) => {
    console.log(this.state.item.id);
    let res = await axios.delete(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/enquiry/delete.php?id=20",
      {
        headers: {
          "Content-Type": "application/json",
          token_admin: sessionStorage.getItem("token_admin"),
        },
        params: {
          id: id,
        },
      }
    );
    alert(res.data.success);
    window.location.reload();
  };

  goDetail = () => {
    let property_id = this.state.item.property_id;
    console.log(property_id);
    this.props.history.push(`/productDetailPage/${property_id}`);
    window.location.reload();
  };

  render() {
    let { item, index } = this.state;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.property_id}</td>
        <td>{item.full_name}</td>
        <td>{item.email}</td>
        <td>{item.phone_no}</td>
        <td>{item.description}</td>
        <td>
          <button
            className="btn btn-danger btn-xoa"
            onClick={() => this.deleteFeedBack(item.id)}
          >
            Xóa
          </button>
          {/* <Link
            to={`/productDetailPage/${item.property_id}`}
            // type="button"
            className="btn btn-detail btn-chitiet"
            // onClick={this.goDetail}
          >
            Chi tiết
          </Link> */}
          <button
            to={`/productDetailPage/${item.property_id}`}
            // type="button"
            className="btn btn-detail btn-chitiet"
            onClick={this.goDetail}
          >
            Chi tiết
          </button>
        </td>
      </tr>
    );
  }
}

export default withRouter(Row_Feedback);
