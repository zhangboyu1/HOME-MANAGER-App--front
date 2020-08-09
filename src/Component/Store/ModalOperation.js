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
    console.log(_date)
    //get the cuurent User
    //then retrieve the object from reletive 'userId

    const ScheduleList = data.get(userid).ScheduleList
    if (ScheduleList[_date]) {
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
    console.log('Judge if the list hasnt been inserted into local storage', data.get(userid))
    return SuccessHint(data.get(userid).ScheduleList)
}