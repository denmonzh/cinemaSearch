import {GET_DATA} from "./types";


export const getFilmData = (value,page) => dispatch => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=2687e3a16c48ae979d8b4254f76a6391&language=en-US&query=' + value + '&page=' + page + '&include_adult=false')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_DATA,
                payload: data
            })
        })
        .catch(()=>(console.log('Something went wrong...')))
};





