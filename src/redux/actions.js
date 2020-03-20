import { CHANGE_SEARCH_FEILD } from "./constants"
export const action = (text) =>({
    type: CHANGE_SEARCH_FEILD,
    payload: text
})