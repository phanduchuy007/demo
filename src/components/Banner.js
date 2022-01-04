import React, { Component } from 'react';
import {
    Link, withRouter
} from "react-router-dom";

class Banner extends Component {


    functionAuthor = () => {
        return sessionStorage.length > 0 ? <>
            <Link to="/addproduct"><button
                className="btn btn-info"
            >Đăng tin</button></Link>
        &ensp; &nbsp;
            <Link to="/manamentPage"><button
                className="btn btn-info"
            >Quản lý tin</button></Link>
        </> :
            <>
                <p>Tham gia ngay để xem các dự án bất động sản tốt nhất</p>
                <Link to="/login" className="btn btn-info">Đăng nhập</Link>
            &ensp; &nbsp;
                <Link to="/register" className="btn btn-info">Đăng ký</Link>
            </>
    }

    render() {
        return (
            <div className="banner-search">
                <div className="container">
                    <div className="searchbar">
                        <div className="row">
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h2 style={{ color: "white" }}>{this.props.pageName}</h2>
                                {/* <p>Hơn 55 bài đăng trong mục này</p> */}
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                                {this.functionAuthor()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Banner);