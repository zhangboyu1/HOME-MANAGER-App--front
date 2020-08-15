import React from 'react';
import { DeleteSchedule } from '../../Store/ModalOperation'

export default function ButtonDelete(props) {


    async function DeleteSch(_deleteItem, _deleteDate) {

        const isDelete = DeleteSchedule(props.deleteItem, props.deleteDate)
        console.log(isDelete)

        // if (isOpenModal.value) {
        //     OpenModalResult = isOpenModal.scheduleList
        //     console.log(OpenModalResult)
        //     this.setState({
        //         OpenModalResult,
        //         isViewSchedule: true
        //     })
        // }
    }



    const deleteButton = () => {
        //Now we can directly malnipulate the localstorage.....
        DeleteSch(props.deleteItem, props.deleteDate)
        props.freshViewShcedule()
    }


    return (
        <button onClick={deleteButton}>delete item</button>
    )
}