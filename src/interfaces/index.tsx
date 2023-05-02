export interface RootState {
    notes:[],
}

export interface ISubmitValue {
    product_name:string,
    shop_name:string
}

export interface INote {
    id:string, 
    name:string, 
    shop:string, 
}
