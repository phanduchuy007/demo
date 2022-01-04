import axios from 'axios';
import React, { Component } from 'react';
import HotProperties from '../components/HotProperties/HotProperties';
import Properties from '../components/Properties';
import Search from '../components/Search';
import Pagination from "react-js-pagination";

class BuyCategoryPage extends Component {
    state = {
        datas: [],
        activePage: 1,
        row_per_page: 9,
        totalItemsCount: '',

        typeSearch: 'sell',

        datasSearch: []
    }

    componentDidMount() {
        window.scrollTo(0, 160);
        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php', {
            params: {
                page: this.state.activePage,
                row_per_page: this.state.row_per_page
            }
        }).then(res => {
            this.setState({
                datas: res.data.list,
                totalItemsCount: res.data.count
            })
        })
    }

    changeApiPaginate = (activePage) => {
        return axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php', {
            params: {
                page: activePage,
                row_per_page: this.state.row_per_page
            }
        })
    }

    onChangePagination = async (pageNumber) => {
        const res = await this.changeApiPaginate(pageNumber)
        this.setState({
            datas: res.data.list,
            activePage: pageNumber
        })
    }

    datasSearch = (datas) => {
        this.setState({
            datasSearch: datas
        })
    }

    render() {
        const { datas, activePage, row_per_page, datasSearch, totalItemsCount, typeSearch } = this.state;
        return (
            <div className="container">
                <div className="properties-listing spacer">
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 ">
                            {/* Search */}
                            <Search datasSearch={this.datasSearch} typeSearch={typeSearch} />
                            {/* Search */}
                            <div className="hot-properties">
                                <h4>Gợi ý</h4>
                                {/* Bài đăng nổi bật */}
                                <HotProperties />
                                {/* Bài đăng nổi bật */}
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-8">
                            <div className="sortby clearfix">
                                <div className="pull-right">
                                    <select className="form-control">
                                        <option>Lọc</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                {/* properties */}
                                <Properties datas={datas} datasSearch={datasSearch} />
                                {/* properties */}
                            </div>
                            <div className="center">

                                <Pagination
                                    activePage={activePage}
                                    itemsCountPerPage={row_per_page}
                                    totalItemsCount={totalItemsCount}
                                    pageRangeDisplayed={5}
                                    onChange={this.onChangePagination}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyCategoryPage;