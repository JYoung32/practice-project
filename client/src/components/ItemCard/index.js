import React, { useEffect } from 'react';
import API from '../../utils/API';

function ItemCard (props) {

    useEffect(() => {
        displayItemInfo()
    })

    const displayItemInfo = () => {

        API.getItemInfo().then( results => {
            console.log(results.data);
        })
    }

    return (
        <div>
            Hello World from ItemCard component 
        </div>
    )
}

export default ItemCard;