import * as ActionType from '../ActionType'


export const AddcartAction = (data) => (dispatch) =>{
    dispatch ({type : ActionType.ADD_CART  , payload : data})
}


export const GetcartAction = () => (dispatch) =>{
    dispatch ({type : ActionType.GET_CART})
}