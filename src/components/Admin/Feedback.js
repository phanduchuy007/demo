import React, { Component } from "react";
import Row_Feedback from "./Row_Feedback";

export class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFeedback: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.dataFeedback !== state.dataFeedback) {
      return {
        dataFeedback: props.dataFeedback,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataFeedback !== this.state.dataFeedback) {
      this.setState({
        dataFeedback: this.state.dataFeedback,
      });
    }
  }

  render() {
    let { dataFeedback } = this.state;
    let rowFeedBack = dataFeedback.map((item, index) => {
      return <Row_Feedback key={item.id} item={item} index={index} />;
    });

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-top card-header card-header-primary">
                  <h4 className="card-title ">Phản hồi</h4>
                  <p className="card-category">
                    {" "}
                    Phản hồi của khách hàng về bài đăng
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>STT</th>
                          <th>ID bài đăng</th>
                          <th>Họ tên</th>
                          <th>Email</th>
                          <th>Số điện thoại</th>
                          <th>Nội dung phản hồi</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      {/* <tbody>{row}</tbody> */}
                      <tbody>{rowFeedBack}</tbody>
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

export default Feedback;
