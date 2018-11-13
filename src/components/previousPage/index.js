import React from 'react'
import {Button} from "semantic-ui-react";



const PrevPage = props =>(
    <div>
        {
            props.dataPages.total_pages === 1 ||
            props.dataPages.results === undefined ||
            props.page === 1 ? null :

                (
                    <Button onClick={props.prevPage}>Previous page</Button>
                )

        }
    </div>
);


export default PrevPage