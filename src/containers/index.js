import React, {Component} from 'react'
import SearchInput from '../components/index'
import {getFilmData} from '../actions/actions'
import {connect} from 'react-redux'


class MainComponent extends Component{

    render(){
        return(
            <div>
                <SearchInput
                    getData = {this.props.getData}
                    dataCinema = {this.props.dataCinema}
                />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    dataCinema: state.dataCinema.data
});

const mapDispatchToProps = dispatch => {
    return{
        getData: (value,page) => dispatch(getFilmData(value,page)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (MainComponent);