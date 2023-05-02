import { State } from './defaultState';
import { INote } from 'interfaces';


export default function rootReducer (state=State, action:any){
    switch (action.type){
        case 'CREATE_NEW_ORDER':
            return {...state, notes: [...state.notes, action.payload.note_data]}
        case 'DELETE_ORDER':
            return {...state, notes:state.notes.filter((item:INote)=> item.id !== action.payload.id)}
        default:
            return {...state}
    }
}