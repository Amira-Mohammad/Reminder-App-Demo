import {ADD_REMINDER , REMOVE_REMINDER , CLEAR_REMINDER} from '../types'
const reminders = (state=[] , action) =>{
    let reminders = null;
    if (action.type === ADD_REMINDER ){
        reminders = [...state , {text : action.text , date : action.date , id : Math.random()}]
        console.log("from reducer" , action)
        return reminders

   
    }
    else if( action.type === REMOVE_REMINDER  ){
        reminders = state.filter(reminder => reminder.id !== action.id)
        console.log("from reducer" , action)
        return reminders

    }
    else if( action.type === CLEAR_REMINDER ){
        reminders = []
        console.log("from reducer" , action)
        return reminders

    }
    else{
        return state
    }

}
export default reminders;