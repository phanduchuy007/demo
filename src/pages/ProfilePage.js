import React, { Component } from 'react'
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile'

class ProfilePage extends Component {
    state = {
        openForm: false,
        full_name: '',
        email: '',
        phone: '',
        sex: '',
    }

    onOpenForm = () => {
        this.setState({
            openForm: !this.state.openForm
        })
    }

    onCloseForm = () => {
        this.setState({
            openForm: !this.state.openForm
        })
    }
    editDatas = (res) => {
        this.setState({
            full_name: res.full_name,
            email: res.email,
            phone: res.phone,
            sex: res.sex
        })
    }

    render() {
        const { openForm } = this.state;
        const bs3_col3_openForm = !openForm ? <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        </div> : '';

        const bs3_col6_editForm = openForm ? <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <EditProfile
                datas={this.state}
                onCloseForm={this.onCloseForm}
            />
        </div> : '';

        return (
            < div className="container mt-10 mb-40" >
                <div className="row">
                    {/* {this.showForm()} */}
                    {bs3_col3_openForm}
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Profile
                            onOpenForm={this.onOpenForm}
                            editDatas={this.editDatas}
                        />
                    </div>
                    {bs3_col6_editForm}
                    {bs3_col3_openForm}
                </div>
            </div >
        )
    }
}



export default ProfilePage;