import React from 'react';
import { DeleteSchedule } from '../../Store/ModalOperation'

export default function ButtonDelete(props) {


    async function DeleteSch(_deletePackage) {

        console.log('deleteitem is ', _deletePackage)
        const isDelete = await DeleteSchedule(_deletePackage)

        if (isDelete.value) {
            console.log('now the deleted one need to fresh the  page')
            props.freshViewShcedule(_deletePackage)
        }

    }



    const deleteButton = () => {
        //Now we can directly malnipulate the localstorage.....
        DeleteSch(props.deleteItem, props.deleteDate)
    }


    return (
        <button onClick={deleteButton}>delete item</button>
    )
}