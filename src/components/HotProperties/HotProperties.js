import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllVip } from "../../constans/getAPI";
import Properties from "./Properties";

class HotProperties extends Component {
  state = {
    datas: [],
  };

  async componentDidMount() {
    try {
      const res = await getAllVip();
      this.setState({
        datas: res.data.list,
      });
    } catch (error) {}
  }

  showDatas = () => {
    const { datas } = this.state;
    return datas.map((data) => {
      return <Properties datas={data} />;
    });
  };
  render() {
    return <>{this.showDatas()}</>;
  }
}

export default HotProperties;
