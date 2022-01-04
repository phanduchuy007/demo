import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import getAPI from "../../api/getAPI";
import { Confirm } from "react-st-modal";

export class Row_Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPostItem: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.dataPostItem !== state.dataPostItem) {
      return {
        dataPostItem: props.dataPostItem,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataPostItem !== this.state.dataPostItem) {
      this.setState({
        dataPostItem: this.state.dataPostItem,
      });
    }
  }

  onDelete = async (id) => {
    await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/confirm/delete.php?id=94",
      "DELETE",
      `${sessionStorage.getItem("token_admin")}`,
      null,
      id
    );
  };

  onDeleteapproved = async (id) => {
    await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/approved/delete.php?id=137",
      "DELETE",
      `${sessionStorage.getItem("token_admin")}`,
      null,
      id
    );
  };

  confirmPost = async (id) => {
    await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/confirm/confirm.php?id=119",
      "PUT",
      `${sessionStorage.getItem("token_admin")}`,
      null,
      id
    );
  };

  onConfirmPost = async () => {
    const confirm = await Confirm(
      "Bạn có muốn duyệt bài đăng này?",
      "Thông báo"
    );
    if (confirm) {
      await this.confirmPost(this.state.dataPostItem.property_id);
      window.location.reload();
    }
  };

  onDeleteUser = async (id) => {
    const confirm = await Confirm("Bạn có muốn xóa bài đăng này?", "Thông báo");
    if (confirm) {
      console.log(this.state.dataPostItem);
      if (this.state.dataPostItem.note === 0) {
        await this.onDelete(id);
        window.location.reload();
      } else {
        await this.onDeleteapproved(id);
        window.location.reload();
      }
    }
  };

  approval = () => {
    const note = this.state.dataPostItem.note;
    if (note === "0") {
      return "Chưa duyệt";
    } else if (note === "1") {
      return "Đã duyệt";
    }
    return "Hết hạn";
  };

  addClassApproval = () => {
    const note = this.state.dataPostItem.note;
    if (note === "0") {
      return (
        <button
          type="button"
          className="btn btn-duyet btn-warning"
          onClick={this.onConfirmPost}
        >
          {this.approval()}
        </button>
      );
    } else if (note === "1") {
      return (
        <button
          style={{ pointerEvents: "none", opacity: "0.6" }}
          type="button"
          className="btn btn-duyet btn-success"
        >
          {this.approval()}
        </button>
      );
    } else {
      return <td>{this.approval()}</td>;
    }
  };

  handleDetail = () => {
    if (this.state.dataPostItem.note === "0") {
      this.callDetailConfirm(this.state.dataPostItem.property_id).then(
        (res) => {}
      );
    }
  };

  goDetail = () => {
    this.props.history.push(
      `/productDetailPage/${this.state.dataPostItem.property_id}`
    );
    window.location.reload();
  };

  render() {
    let { dataPostItem } = this.state;
    // console.log(dataPostItem);

    return (
      <tr>
        <td>{dataPostItem.property_id}</td>
        <td>{dataPostItem.name}</td>
        <td>{dataPostItem.phone}</td>
        <td>
          {dataPostItem.cityName +
            ", " +
            dataPostItem.districtName +
            ", " +
            dataPostItem.wardName +
            ", " +
            dataPostItem.apartment_number +
            ", đường " +
            dataPostItem.street}
        </td>
        <td>{dataPostItem.estimated_price}</td>
        <td>{dataPostItem.ptype_name}</td>
        <td>{dataPostItem.post_time}</td>
        <td>
          <button
            type="button"
            className="btn btn-detail btn-chitiet"
            onClick={this.goDetail}
          >
            Chi tiết
          </button>

          <Link
            to={`edit/${dataPostItem.note}/${dataPostItem.property_id}`}
            className="btn btn-primary btn-capnhat"
          >
            Cập nhật
          </Link>
          <button
            type="button"
            className="btn btn-danger btn-xoa"
            onClick={() =>
              this.onDeleteUser(this.state.dataPostItem.property_id)
            }
          >
            Xóa
          </button>
          {this.addClassApproval()}
        </td>
      </tr>
    );
  }
}
export default withRouter(Row_Post);
