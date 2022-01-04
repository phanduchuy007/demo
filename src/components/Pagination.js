import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        totalPages: this.props.totalPages,
        currentPage: 1
    }

    // onChangeNext = async () => {
    //     await this.onNext();
    //     this.onCurrentPage();
    // }

    // onChangePrev = async () => {
    //     await this.onPrev();
    //     this.onCurrentPage();
    // }

    onNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        }, () => {
            this.onCurrentPage();
        })
    }

    onPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        }, () => {
            this.onCurrentPage();
        })
    }

    onCurrentPage = () => {
        this.props.onCurrentPage(this.state.currentPage)
    }

    render() {
        let { currentPage, totalPages } = this.state
        let { checkDatas } = this.props
        let prevStop = currentPage === 1 ? 'disable' : '';
        // let nextStop = checkDatas.length === 9 ? '' : 'disable';
        // console.log(totalPages);
        return (
            <ul className="pagination">
                <li
                    className={prevStop}
                    onClick={this.onPrev}
                ><a href="#">«</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li
                    // className={nextStop}
                    onClick={this.onNext}
                ><a href="#">»</a></li>
            </ul>
        )
    }
}
export default Pagination;