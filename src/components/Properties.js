import React, { Component } from 'react';
import PropertyItems from './PropertyItems';

class Properties extends Component {
    state = {
        datas: [],
        datasSearch: []
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.datas !== prevProps.datas || this.props.datasSearch !== prevProps.datasSearch) {
            this.setState({
                datas: this.props.datas,
                datasSearch: this.props.datasSearch
            })
        }
    }

    showDatasPost = () => {
        const { datasSearch, datas } = this.state;
        if (datasSearch.length > 0) {
            return this.showPost(datasSearch);
        }
        return this.showPost(datas);
    }

    showPost = (datas) => {
        const DB = datas?.map(data => {
            return <PropertyItems data={data} />
        })
        return DB;
    }

    render() {
        return (
            <>
                {this.showDatasPost()}
            </>
        )
    }
}

export default Properties;