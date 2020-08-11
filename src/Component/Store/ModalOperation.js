import { data } from './localStorage'

const userid = data.get('currentUser')

const SuccessHint = (scheduleList, selectedDate) => {
    // the schedeuleList should be a complete array.....
    //Pass this array to the modal componeent and then display it ......
    return {
        type: 'OPEN_SUCCESS',
        scheduleList: scheduleList,
        selectedDate: selectedDate,
        value: 1
    };
};

const FailHint = (error) => {
    return {
        type: 'OPEN__FAIL',
        error: error,
        value: 0
    };
};


export const OpenModal = (_date) => {
    console.log(_date)
    let ScheduleObject_handel = data.get(userid)
    const ScheduleList = data.get(userid).ScheduleList
    if (ScheduleObject_handel.ScheduleList.hasOwnProperty(_date)) {
        console.log('Now we can load the data')
        return SuccessHint(ScheduleList[_date], _date)
    } else {
        return FailHint('THE Schedule cannot be viewed')
    }
}

export const StoreSchedule = (_scheduleItem, _date, _infoPack) => {

    console.log('now the store is inserting.....')
    let ScheduleObject_handel = data.get(userid)
    let oldScedule_Obj = ScheduleObject_handel.ScheduleList
    //不要直接在在遍历中做不同条件的键值对操作
    if (oldScedule_Obj === undefined) {
        ScheduleObject_handel.ScheduleList = _infoPack
    } else {
        if (Object.keys(oldScedule_Obj).indexOf(_date) !== -1) {
            oldScedule_Obj[_date].push(_scheduleItem)
        }
        if (Object.keys(oldScedule_Obj).indexOf(_date) === -1) {
            ScheduleObject_handel.ScheduleList = {
                ...oldScedule_Obj,
                ..._infoPack
            }
        }
    }
    data.set(userid, ScheduleObject_handel)

    console.log(data.get(userid).ScheduleList)
    return SuccessHint(data.get(userid).ScheduleList)
}



export const DeleteSchedule = (_scheduleItem, _deleteDate) => {
    //在对应的localStorage中找到对应日期的arry。。。然后再删除这个数组中特定的那一项。
    let ScheduleObject_handel = data.get(userid)
    let oldScedule_Obj = ScheduleObject_handel.ScheduleList

    const checkedArry = oldScedule_Obj[_deleteDate]
    checkedArry.splice(checkedArry.findIndex(item => item === _scheduleItem), 1)

    if (checkedArry.length !== 0) {
    } if (checkedArry.length === 0) {
        delete oldScedule_Obj[_deleteDate]
    }
    data.set(userid, ScheduleObject_handel)
    return SuccessHint(data.get(userid).ScheduleList, _deleteDate)
}



export const CheckMarkedDay = () => {
    let ScheduleObject_handel = data.get(userid)

    console.log(ScheduleObject_handel)
    if (ScheduleObject_handel.hasOwnProperty('ScheduleList')) {
        let oldScedule_Obj = ScheduleObject_handel.ScheduleList
        console.log(Object.keys(oldScedule_Obj))
        return Object.keys(oldScedule_Obj)
    }
    return []


}