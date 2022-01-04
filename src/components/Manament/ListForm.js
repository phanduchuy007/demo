import React, { Component } from 'react';
import ListItem from './ListItem';
import callApiAu from '../../utils/callApiAu'
import axios from 'axios'
import { Confirm, Alert } from 'react-st-modal';

class ListForm extends Component {
    state = {
        datas: [],
        sortDatas: null
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token')
        callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/manage_products/post.php?ptype_id=0', 'GET', token, null)
            .then(res => {
                this.setState({
                    datas: res.data.list
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    showListItem = () => {
        const { datas, sortDatas } = this.state;
        if (sortDatas !== null) {
            return sortDatas.map((data, index) => (
                <ListItem
                    data={data}
                    index={index}
                    handleDeleteFormId={this.handleDeleteFormId}
                />
            ))
        } else {
            return datas.map((data, index) => (
                <ListItem
                    data={data}
                    index={index}
                    handleDeleteFormId={this.handleDeleteFormId}
                />
            ))
        }
    }

    handleDeleteFormId = async (id) => {
        const token = sessionStorage.getItem('token')

        const confirm = await Confirm('Bạn có chắc muốn xóa bài đăng này', 'Thông báo !')

        if (confirm) {
            const delPost = await axios.delete('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/manage_products/delete_post.php?id=48', {
                params: {
                    id: id
                },
                headers: {
                    'Content-Type': 'application/json',
                    token: token
                }
            }, null)

            callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/manage_products/post.php?ptype_id=0', 'GET', token, null)
                .then(res => {
                    this.setState({
                        datas: res.data.list
                    })
                })
                .catch(err => {
                    console.log(err);
                })
            return delPost;
        }
    }

    handleTypeSort = (e) => {
        const value = e.target.value;
        const { datas } = this.state;
        this.findPtype_name(value, datas);
    }

    findPtype_name = (value, datas) => {
        const newDatas = datas.filter(data => {
            return data.ptype_name.indexOf(value) !== -1;
        })
        this.setState({
            sortDatas: newDatas
        })
    }

    render() {
        return (
            <div className="container list">
                <div className="btn-group top-btn">
                    <button
                        className="btn btn-default choose-btn"
                        value="Cần bán"
                        onClick={this.handleTypeSort}
                    >Cần bán</button>
                    <button
                        className="btn btn-default choose-btn"
                        value="Cho thuê"
                        onClick={this.handleTypeSort}
                    >Cho thuê</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Loại</th>
                            <th>Địa chỉ</th>
                            <th>Giá</th>
                            <th>Diện tích</th>
                            <th>Thời gian</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showListItem()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListForm;