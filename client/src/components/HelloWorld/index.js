import React, { useEffect } from 'react';
import API from '../../utils/API';

function HelloWorld (props) {

    useEffect(() => {
        displayUserInfo()
    })

    const displayUserInfo = () => {

        API.getUserInfo().then( results => {
            console.log(results.data);
        })
    }

    return (
        <div>
            Hello World from HelloWorld component 
        </div>
    )
}

export default HelloWorld;