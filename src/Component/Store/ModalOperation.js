import { data } from './localStorage'
import axios from 'axios';
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
    let targetUser = data.get(userid).user
    const url_viewList = `http://localhost:8080/api/schedule/list?date=${_date}&&user=${targetUser}`
    return axios.get(url_viewList).then(response => {
        if (response.data.errno) {
            console.log(response.data)
            const scheduleList = response.data.data
            return SuccessHint(scheduleList, _date)
        }
        return FailHint(response.data.message)
    }).catch(err => {
        // authFail(err)
    });


    // It should be an 
    // const ScheduleList = data.get(userid).ScheduleList
    // if (ScheduleObject_handel.ScheduleList.hasOwnProperty(_date)) {
    //     console.log('Now we can load the data')
    //     return SuccessHint(ScheduleList[_date], _date)
    // } else {
    //     return FailHint('THE Schedule cannot be viewed')
    // }
}




const checkInStore = (_userid, _infoPack, _date, _scheduleItem) => {
    let ScheduleObject_handel = data.get(_userid)
    let oldScedule_Obj = ScheduleObject_handel.ScheduleList
    console.log('开始checkin store 了。。。。。。。')
    if (oldScedule_Obj === undefined) {
        ScheduleObject_handel.ScheduleList = _infoPack
        console.log(ScheduleObject_handel)
    } else {
        if (Object.keys(oldScedule_Obj).indexOf(_date) !== -1) {
            oldScedule_Obj[_date].push(_scheduleItem)
            data.set(userid, ScheduleObject_handel)
            return SuccessHint()
        }
        if (Object.keys(oldScedule_Obj).indexOf(_date) === -1) {
            oldScedule_Obj[_date] = [];
            oldScedule_Obj[_date].push(_scheduleItem)
            ScheduleObject_handel.ScheduleList = {
                ...oldScedule_Obj,
            }
            data.set(userid, ScheduleObject_handel)
            return SuccessHint()
        }
    }
}


export const StoreSchedule = (_scheduleItem, _date, _infoPack) => {
    const url_newlist = 'http://localhost:8080/api/schedule/new'
    console.log('now the store is inserting.....')
    console.log(_scheduleItem, _date, _infoPack)
    const currentUser = data.get(data.get(`currentUser`))
    const data_NewShceudel = {
        date: _date,
        content: _scheduleItem,
        user: currentUser.user
    }
    return axios.post(url_newlist, JSON.stringify(data_NewShceudel)).then(response => {
        console.log(response)
        if (response.data.errno) {
            // 还是要把mark的日期存在localStorage中这样方便查找。。。。
            const isCheck = checkInStore(data.get(`currentUser`), _infoPack, _date, _scheduleItem);
            if (isCheck.value) {
                return SuccessHint(_scheduleItem, _date)
            }
        }
    }).catch(err => {
        FailHint(err)
    });
}


export const DeleteSchedule = (_scheduleItem, _deleteDate) => {
    //在对应的localStorage中找到对应日期的arry。。。然后再删除这个数组中特定的那一项。
    let ScheduleObject_handel = data.get(userid)
    let oldScedule_Obj = ScheduleObject_handel.ScheduleList

    const deleteData = {
        date: _deleteDate,
        user:
    }
    console.log(oldScedule_Obj)
    const url_deleteSch = 'http://localhost:8080/api/schedule/delete'
    return axios.post(url_deleteSch, JSON.stringify(data_NewShceudel)).then(response => {
        console.log(response)
        if (response.data.errno) {
            // // 还是要把mark的日期存在localStorage中这样方便查找。。。。
            // const isCheck = checkInStore(data.get(`currentUser`), _infoPack, _date, _scheduleItem);
            // if (isCheck.value) {
            //     return SuccessHint(_scheduleItem, _date)
            //         // }
        }
    })
        .catch(err => {
            FailHint(err)
        });


    // const checkedArry = oldScedule_Obj[_deleteDate]
    // checkedArry.splice(checkedArry.findIndex(item => item === _scheduleItem), 1)

    // if (checkedArry.length !== 0) {
    // } if (checkedArry.length === 0) {
    //     delete oldScedule_Obj[_deleteDate]
    // }
    // data.set(userid, ScheduleObject_handel)
    // return SuccessHint(data.get(userid).ScheduleList, _deleteDate)
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