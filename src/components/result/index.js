import React, {Component} from 'react'
import {Item, Button, Segment, Loader} from 'semantic-ui-react'
import '../style.css'


class ResultSearching extends Component {

    state = {
        switchInfo: true,
        isLoading: true
    };

    componentDidMount() {
        const {isLoading} = this.state;
        this.setState({
            isLoading: !isLoading
        })
    }

    handleSwitchInfo = () => {
        const {switchInfo} = this.state;
        this.setState({
            switchInfo: !switchInfo
        })
    };

    handleErrorImg = (e) => {
        e.target.src = 'https://loading.io/spinners/glow-ring/index.glowing-rotate-ring.svg'
    };


    render() {
        const {item} = this.props;
        const {switchInfo, isLoading} = this.state;

        return (

            isLoading ? <Loader active/> :

                <Item>
                    <Segment>
                        <Item.Image size='tiny'
                                    src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                                    onError={this.handleErrorImg}
                                    alt='posterImage'/>
                    </Segment>

                    {
                        switchInfo ?
                            (
                                <Item.Content>

                                    <Item.Content className = "titleText" verticalAlign='middle'>{item.title}</Item.Content>
                                    <Button floated='right' onClick={this.handleSwitchInfo}>More</Button>

                                </Item.Content>
                            ) :
                            (
                                <Item.Content>

                                    <Item.Content className = "titleText" verticalAlign='middle'>{item.title}</Item.Content>
                                    <Item.Description className='subTitle'>{item.overview}</Item.Description>
                                    <Item.Description><span className='subTitle'>Release data:</span> {item.release_date}</Item.Description>
                                    <Item.Description><span className='subTitle'>Rating:</span> {item.vote_average}</Item.Description>
                                    <Item.Description><span className='subTitle'>Popularity:</span> {item.popularity}</Item.Description>
                                    <Button floated='right' onClick={this.handleSwitchInfo}>Back</Button>

                                </Item.Content>
                            )
                    }
                </Item>

        )
    }
}

export default ResultSearching;