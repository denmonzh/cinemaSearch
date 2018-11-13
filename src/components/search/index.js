import React from 'react'
import {Input} from "semantic-ui-react";


const Search = props =>(
    <div>
        <Input
            placeholder='Search film...'
            value={props.value}
            onChange={props.onChange}
        />
    </div>
);

export default Search;