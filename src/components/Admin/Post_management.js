import React, { Component } from "react";
import Row_Post from "./Row_Post";

export class Post_management extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPost: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.listPost !== state.listPost) {
      return {
        dataPost: props.listPost,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataPost !== this.state.dataPost) {
      this.setState({
        dataPost: this.state.dataPost,
      });
    }
  }

  render() {
    let { dataPost } = this.state;
    let listDataPost = dataPost.map((item, index) => {
      return <Row_Post key={item.property_id} dataPostItem={item} />;
    });
    console.log(dataPost);
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Bài đăng</h4>
                  <p className="card-category">
                    {" "}
                    Tất cả bài đăng của khách hàng
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>Mã bài đăng</th>
                          <th>Họ tên</th>
                          <th>Số điện thoại</th>
                          <th>Địa chỉ</th>
                          <th>Giá</th>
                          <th>Loại</th>
                          <th>Ngày đăng</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>{listDataPost}</tbody>
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

export default Post_management;