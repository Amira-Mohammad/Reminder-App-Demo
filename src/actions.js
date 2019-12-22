import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER} from './types';
export const add_reminder = (text , date) => {
    const action = {
        type : ADD_REMINDER,
        text,
        date

    }
    console.log("Add Reminder", action)
    return action

}
export const remove_reminder = (id) => {
    const action = {
        type : REMOVE_REMINDER ,
        id

    }
    console.log("remove Reminder", action)
    return action

}
export const clear_reminder = () => {
    const action = {
        type : CLEAR_REMINDER
        

    }
    console.log("clear Reminder", action)
    return action

}