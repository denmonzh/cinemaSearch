import React from 'react'
import {Button} from "semantic-ui-react";



const NextPage = props =>(
    <div>
        {
            props.dataPages.total_pages === 1 ||
            props.dataPages.results === undefined ||
            props.page >= props.dataPages.total_pages ? null :

                (
                    <Button onClick={props.nextPage}>Next page</Button>
                )

        }
    </div>
);


export default NextPage