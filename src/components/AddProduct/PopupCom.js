import React, { Component } from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import ModalPayment from '../Manament/ModalPayment';

class PopupCom extends Component {
    state = {
        modalDatas: this.props.modalDatas,
    }
    render() {
        const { propertyId, disable, type, name } = this.props;
        return (
            <Popup trigger={<button className={`btn btn-status paid-button ${disable}`}>{name}</button>} position="right center" modal="true">
                {close => <ModalPayment
                    close={close}
                    type={type}
                    propertyId={propertyId} />}
            </Popup>
        )
    }
}
export default PopupCom;