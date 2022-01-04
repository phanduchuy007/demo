import React, { Component } from 'react';
import Banner from '../components/Banner';

class ProductManPage extends Component {
    render() {
        let pageName = "Quản lý bài đăng";
        return (
            <>
                {/* <Banner  pageName={pageName}/> */}
                <div className="container mt-40">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Danh sách bài đăng</h3>
                        </div>
                        <div className="panel-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tiêu đề</th>
                                        <th>Hình thức</th>
                                        <th>Loại</th>
                                        <th>Thành phố</th>
                                        <th>Giá</th>
                                        <th>Diện tích</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>đfff</td>
                                        <td>rggrg</td>
                                        <td>ggn</td>
                                        <td>bbb</td>
                                        <td>tbtbnt</td>
                                        <td>btbt</td>
                                        <td>thbth</td>
                                    </tr >
                                    <tr>
                                        <td>đfff</td>
                                        <td>rggrg</td>
                                        <td>ggn</td>
                                        <td>bbb</td>
                                        <td>tbtbnt</td>
                                        <td>btbt</td>
                                        <td>thbth</td>
                                    </tr >
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ProductManPage;
