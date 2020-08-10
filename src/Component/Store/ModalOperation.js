import { data } from './localStorage'

const userid = data.get('currentUser')

const SuccessHint = (scheduleList) => {
    // the schedeuleList should be a complete array.....
    //Pass this array to the modal componeent and then display it ......
    return {
        type: 'OPEN_SUCCESS',
        scheduleList: scheduleList,
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
    //Now we can search the Schelue list via the giving data.....
    //根据currentUser来检索对应的数据
    console.log('now the Open modal start to retrieve schedule list')
    //get the cuurent User
    //then retrieve the object from reletive 'userId
    const ScheduleList = data.get(userid).ScheduleList

    console.log(ScheduleList)
    console.log(_date)
    if (ScheduleList.hasOwnProperty(_date)) {
        console.log(ScheduleList[_date])
        return SuccessHint(ScheduleList[_date])
    } else {
        return FailHint('THE Schedule cannot be viewed')
    }

}

export const StoreSchedule = (_scheduleItem, _date, _infoPack) => {
    let ScheduleObject_handel = data.get(userid)
    let oldScedule_Obj = ScheduleObject_handel.ScheduleList
    //不要直接在在遍历中做不同条件的键值对操作
    if (oldScedule_Obj === undefined) {
        oldScedule_Obj = _infoPack
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
    return SuccessHint(data.get(userid).ScheduleList)
}

export const CheckMarkedDay = () => {
    //Now we can search the Schelue list via the giving data.....
    //根据currentUser来检索对应的数据
    //get the cuurent User
    //then retrieve the object from reletive 'userId
    let ScheduleObject_handel = data.get(userid)
    let oldScedule_Obj = ScheduleObject_handel.ScheduleList
    return Object.keys(oldScedule_Obj)

}