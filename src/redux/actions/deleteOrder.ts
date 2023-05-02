import { Dispatch } from 'redux'
const deleteOrder = (id:string) => async (dispatch:Dispatch) => {
    dispatch({
            type:'DELETE_ORDER',
            payload:{
                id: id,
        }
    })         
}

export default deleteOrder