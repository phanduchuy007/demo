import React, { Component } from 'react';
import { StaticDialog } from 'react-st-modal';
import ModalContent from './ModalContent';
import { withRouter } from 'react-router-dom'
class Modals extends Component {

    render() {
        const { modalDatas } = this.props;
        return (
            <StaticDialog
                isOpen={true}
                showCloseIcon={true}
                isCanClose={true}
                onAfterClose={!modalDatas.errors ? () => {
                    this.props.history.push('/manamentPage')
                } : () => {
                    this.props.openModal(false)
                }}
                isBodyScrollLocked={false}
            >
                <ModalContent modalDatas={modalDatas} />
            </StaticDialog>
        )
    }
}

export default withRouter(Modals);