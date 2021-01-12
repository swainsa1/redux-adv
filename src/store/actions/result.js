 import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return {
        type:actionTypes.STORE_RESULT,
        result:res
    };
};

export const storeResult = (res) => {
    return (dispatch,getState) => {
        // This is where you would like to make a call to database 
        //Rest api call 
        //Transform any data before store the result 

        //You can also retrieve old state data before you dispatch 


        //This is a simulation of a call to real time service
        setTimeout(()=> {
           const oldCounter = getState().ctr.counter;
           console.log('Store Result : Old state value before dispatch : '+oldCounter); 
           dispatch(saveResult(res)); 
        },2000);
         
    }
};

export const deleteResult =(resElId) => {
    return {
        type : actionTypes.DELETE_RESULT,
        resultElId:resElId

    };
};