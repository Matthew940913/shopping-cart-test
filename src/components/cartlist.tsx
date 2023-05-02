import React  from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from 'interfaces';
import { Button } from 'antd';
import deleteOrder from 'redux/actions/deleteOrder';
import { INote } from 'interfaces';

export const CartList = (Props: any) => {
    const dispatch = useDispatch()
    const {notes} = useSelector((state:RootState) => state); 
    return (
        <table>
            <tbody>
            {
                notes.length ? (
                    notes.map((item:INote)=>{
                        const { id, name, shop } = item
                        return (
                            <tr key={id}>
                                <th style={{ width: "45%" }}>{name}</th>
                                <th style={{ width: "45%" }}>{shop}</th>
                                <th style={{ width: "10%" }}>
                                    <Button 
                                        type='link'
                                        danger
                                        onClick={()=>{dispatch(deleteOrder(id))}}
                                    >
                                        delete
                                    </Button>
                                </th>
                            </tr>
                        )
                    })
                ):(
                    <tr>
                        <td colSpan={3}>
                            <div style={{ padding: "20px", textAlign: "center" }}>
                                No product in the cart!
                            </div>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}