import React, { Component } from 'react';
import {
    Link, Route, withRouter
} from 'react-router-dom';
import callApiAu from '../utils/callApiAu';
import callApiAdmin from '../utils/callApiAdmin'

const MenuLink = ({ label, to, activeOnlyWhenExact, onClick }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`${active}`} onClick={onClick}>
                    <Link to={to}>{label}</Link>
                </li>
            )
        }}
        />
    )
}

class Header extends Component {
    onLogOut = async () => {
        const approved = window.confirm("Bạn có muốn đăng xuất ?") == true;
        const token = sessionStorage.getItem("token")
        const token_admin = sessionStorage.getItem("token_admin")
        if (approved) {
            if (token_admin) {
                callApiAdmin('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/logout.php', 'DELETE', token_admin, null)
                    .then(res => {
                        console.log(res);
                        alert(res.data.success);
                        sessionStorage.removeItem('token_admin')
                        this.props.history.push('/');
                    })
            } else {
                callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/logout.php', 'DELETE', token, null)
                    .then(res => {
                        alert(res.data.success);
                        sessionStorage.removeItem('token')
                        this.props.history.push('/');
                    })
            }
        }
    }

    functionAuthor = () => {
        return sessionStorage.length > 0 ?
            <>

                {sessionStorage.getItem('token_admin') ? <MenuLink label="Admin" to="/adminPage" activeOnlyWhenExact={true} /> : <><MenuLink label="Tài Khoản" to="/profilePage" activeOnlyWhenExact={false} />
                    <MenuLink label="Quản lý tin" to="/manamentPage" activeOnlyWhenExact={true} /> </>}
                <MenuLink label="Đăng xuất" activeOnlyWhenExact={false} onClick={this.onLogOut} />
            </>
            : <>
                <MenuLink label="Đăng nhập" to="/Login" />
                <MenuLink label="Đăng ký" to="/Register" activeOnlyWhenExact={false} />
            </>;
    }

    render() {
        return (
            <>
                {/* Header Starts */}
                <div className="navbar-wrapper">

                    <div className="navbar-inverse" role="navigation">
                        <div className="container nav-top-logo-and-img">
                            <div className="navbar-header header-image">
                                <Link to="/"><img src="/images/logo-real-estate.png" className="img-logo"/></Link>
                            </div>
                            {/* Nav Starts */}
                            <div>
                                <div className="navbar-collapse  collapse mg-nav">
                                    <ul className="nav navbar-nav navbar-right btn-topp">
                                        <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />
                                        <MenuLink label="About" to="/about" activeOnlyWhenExact={false} />
                                        {this.functionAuthor()}
                                    </ul>
                                </div>
                                <div className="navbar-collapse  collapse">
                                    <ul className="nav navbar-nav navbar-right btn-bott">
                                        <MenuLink label="Nhà Đất Bán" to="/buy" />
                                        <MenuLink label="Nhà Đất Thuê" to="/rent" />
                                        {sessionStorage.getItem("token") ? <MenuLink label="Đăng tin" to="/addproduct" /> : ''}
                                    </ul>
                                </div>
                            </div>
                            {/* Nav Ends */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Header);