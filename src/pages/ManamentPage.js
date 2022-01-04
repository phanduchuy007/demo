import React, { Component } from 'react'
import Banner from "../components/Banner";
import ListForm from '../components/Manament/ListForm';

class ManamentPage extends Component {
    render() {
        const pageName = 'Quản lý tin'
        return (
            <>
                <div class="container mt-10 mb-40">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ListForm />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ManamentPage;