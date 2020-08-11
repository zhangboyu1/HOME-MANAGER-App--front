import React from 'react';
import { DeleteSchedule } from '../../Store/ModalOperation'

export default function ButtonDelete(props) {

    const deleteButton = () => {
        //Now we can directly malnipulate the localstorage.....
        console.log(props)
        // const deletedItem = this.props
        // const deletedDate = 
        //then we can have the deletedItem and deletedDate 
        DeleteSchedule(props.deleteItem, props.deleteDate)
        props.freshViewShcedule()
    }


    return (
        <button onClick={deleteButton}>delete item</button>
    )
}