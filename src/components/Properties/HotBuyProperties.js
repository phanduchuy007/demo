import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBuyVip } from "../../constans/getAPI";
import Properties from "./Properties";

class HotBuyProperties extends Component {
  state = {
    datas: [],
  };

  async componentDidMount() {
    try {
      const res = await getBuyVip();
      this.setState({ datas: res.data.list });
    } catch (error) {}
  }

  showDatas = () => {
    const { datas } = this.state;
    return datas.map((datas) => {
      return <Properties datas={datas} />;
    });
  };

  render() {
    return (
      <div className="hot_buy_properties">
        <div className="row note-buy">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h3>Bài đăng bán</h3>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Link to="/buy">
              <a className="pull-right viewall">Xem tất cả</a>
            </Link>
          </div>
        </div>
        <div className="row">{this.showDatas()}</div>
      </div>
    );
  }
}

export default HotBuyProperties;
