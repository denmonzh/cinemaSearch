import React, {Component} from 'react'
import {Item} from 'semantic-ui-react'
import ResultSearching from './result/index'
import NextPage from './nextPage/index'
import PrevPage from './previousPage/index'
import Search from './search/index'
import {Loader} from 'semantic-ui-react'
import './style.css'


class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            page: 1
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
            page: 1
        });
    };

    handleNextPage = () => {
        const {page} = this.state;
        this.setState({
            page: page + 1
        })
    };

    handlePreviousPage = () => {
        const {page} = this.state;
        this.setState({
            page: page - 1
        })
    };

    componentDidUpdate(prevProps, prevState) {
        const {value, page} = this.state;
        const {getData} = this.props;
        if (prevState.value !== this.state.value || prevState.page !== this.state.page) {
            getData(value, page);
        }
    }

    render() {

        const {value, page} = this.state;
        const {dataCinema} = this.props;

        return (
            <div className='input_films'>
                <Search
                    value={value}
                    onChange={this.handleChange}
                />
                <Item.Group divided>
                    {
                        dataCinema.results === undefined ?
                            <div>
                                <Loader active/>
                            </div>:
                            (
                                dataCinema.results.map((item, index) => (
                                    <ResultSearching
                                        item={item}
                                        index={index}
                                        key={item.id}
                                    />

                                ))
                            )
                    }
                </Item.Group>
                <div className='buttonContainer'>
                    <PrevPage
                        dataPages={dataCinema}
                        page={page}
                        prevPage={this.handlePreviousPage}
                    />
                    <NextPage
                        dataPages={dataCinema}
                        page={page}
                        nextPage={this.handleNextPage}
                    />
                </div>
            </div>
        )
    }
}


export default SearchInput;



