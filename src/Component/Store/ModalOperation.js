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
}




const checkInStore = (_userid, _infoPack, _date, _scheduleItem) => {
    let ScheduleObject_handel = data.get(_userid)
    let oldScedule_Obj = ScheduleObject_handel.ScheduleList

    if (oldScedule_Obj === undefined) {
        ScheduleObject_handel.ScheduleList = _infoPack
        console.log('first time')
        data.set(userid, ScheduleObject_handel)
        return SuccessHint()
    } else {
        console.log('not the first time')
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
    const currentUser = data.get(data.get(`currentUser`))
    console.log(currentUser)
    const data_NewShceudel = {
        date: _date,
        content: _scheduleItem,
        user: currentUser.user
    }
    return axios.post(url_newlist, JSON.stringify(data_NewShceudel)).then(response => {
        if (response.data.errno) {
            // return SuccessHint(_scheduleItem, _date)
            // 需要链式调用。。。。
            // 还是要把mark的日期存在localStorage中这样方便查找。。。。
            const isCheck = checkInStore(data.get(`currentUser`), _infoPack, _date, _scheduleItem);
            console.log(isCheck)
            if (isCheck.value) {
                return SuccessHint(_scheduleItem, _date)
            }
        }
    }).catch(err => {
        FailHint(err)
    });
}


export const DeleteSchedule = _deletePackage => {
    //在对应的localStorage中找到对应日期的arry。。。然后再删除这个数组中特定的那一项。
    let { user } = data.get(userid)
    let ScheduleObject_handel = data.get(userid)
    let oldScedule_Obj = ScheduleObject_handel.ScheduleList
    const { schedules_DATE, schedules_CONTENT } = _deletePackage

    const delete_Schdule = {
        date: schedules_DATE,
        content: schedules_CONTENT,
        user: user
    }
    // console.log(oldScedule_Obj)
    const url_deleteSch = 'http://localhost:8080/api/schedule/delete'
    return axios.post(url_deleteSch, JSON.stringify(delete_Schdule)).then(response => {
        if (response.data.errno) {
            console.log(response.data)
            // 在本地localStorage中把它在删了
            const checkedArry = oldScedule_Obj[schedules_DATE]
            checkedArry.splice(checkedArry.findIndex(item => item === schedules_CONTENT), 1)
            if (checkedArry.length === 0) {
                delete oldScedule_Obj[schedules_DATE]
            }
            data.set(userid, ScheduleObject_handel)
        }
        // 这是返回到数据库中了。。。
        return SuccessHint(_deletePackage.schedules_DATE, _deletePackage.schedules_CONTENT)
    })
}



export const CheckMarkedDay = () => {

    console.log("")
    let { user } = data.get(userid)
    const url_checkScheDate = `http://localhost:8080/api/schedule/all?user=${user}`
    return axios.get(url_checkScheDate).then(response => {

        console.log(response.data)
        if (response.data.errno) {
            console.log(response.data)
            const newArr = [];
            response.data.data.map((obj, index) => {
                newArr.push(obj.schedules_DATE)
            })
            console.log(newArr)//然后我们现在把这个Arr交给
            return SuccessHint(newArr)
        }
        return FailHint(response.data.message)
    })

    // console.log(ScheduleObject_handel)
    // if (ScheduleObject_handel.hasOwnProperty('ScheduleList')) {
    //     let oldScedule_Obj = ScheduleObject_handel.ScheduleList
    //     console.log(Object.keys(oldScedule_Obj))
    //     return Object.keys(oldScedule_Obj)
    // }
    // return []


}