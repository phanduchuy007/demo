import React, { Component } from "react";
import Row_User from "./Row_User";
import getAPI from "../../api/getAPI";

export class Account_management extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listUser: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.listUser !== state.listUser) {
      return {
        listUser: props.listUser,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.listUser !== this.state.listUser) {
      this.setState({
        listUser: this.state.listUser,
      });
    }
  }

  render() {
    let { listUser } = this.state;
    let row = listUser.map((item, index) => {
      return (
        <Row_User
          key={item.tenant_id}
          User={item}
          onDelete={(tenant_id) => this.props.onDelete(tenant_id)}
        />
      );
    });

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-top card-header card-header-primary">
                  <h4 className="card-title ">Tài khoản</h4>
                  <p className="card-category">
                    {" "}
                    Tài khoản khách hàng
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>ID người dùng</th>
                          <th>Họ tên</th>
                          <th>Email</th>
                          <th>Số điện thoại</th>
                          <th>Giới tính</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>{row}</tbody>
                    </table>
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

export default Account_management;
