import { v4 as uuidv4 } from 'uuid';
import { Dispatch } from 'redux'
import { ISubmitValue } from 'interfaces';

const createOrder = (data:ISubmitValue) => async (dispatch:Dispatch) => {
    dispatch({
            type:'CREATE_NEW_ORDER',
            payload:{
                note_data: {
                    id:uuidv4(),
                    name:data.product_name,
                    shop:data.shop_name,
                },
        }
    })    
}
export default createOrder;