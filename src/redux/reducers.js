import { CHANGE_SEARCH_FEILD } from './constants';

const initialState = {
    searchFeild: ""
}
export const changeSearchFeild = (state = initialState, action:{}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FEILD:
            return {...state, searchFeild: action.payload}
        default:
            return state
    }
}
