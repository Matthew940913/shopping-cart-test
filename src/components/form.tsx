import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Select } from 'antd';
import createOrder from '../redux/actions/createOrder';
import { ISubmitValue } from 'interfaces';

const shopUrl = './shops.json';

export const InputForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [shops, setShops] = useState([]);
    const [selectedShop, setSelectShop] = useState(null);
    const {notes} = useSelector((state:any) => state);

    const submitNote = (value:ISubmitValue) => {   
        
        const is_exist = notes.find((note: any) => {
            return note.name == value.product_name && note.shop == value.shop_name;
        })

        if (is_exist != undefined) {
            alert('Already exist');
            return;
        }

        if(value.product_name != undefined && value.shop_name != undefined && selectedShop != null) {
            dispatch(createOrder(value))
        } else {
            alert('Can not add new product to the cart! Please confirm the information.')
        }
    }

    const handleShopChange = (value: any) => {
        setSelectShop(value);
    }

    useEffect(() => {
        fetch(shopUrl)
            .then((res) => res.json())
            .then((data) => {
                data.sort((a: any, b: any) => a.sortOrder > b.sortOrder ? 1 : -1 ).map((item: any) => {
                    item.value = item.id;
                    item.label = item.name;
                })
                setShops(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    });

    return (
        <Form 
            className='d-flex'
            form={form}
            onFinish={(data)=>submitNote(data)}
            initialValues={{ shop_name: "Select shop" }}
        >
            <Form.Item name='product_name'>
                <Input placeholder="Name" style={{ width: "200px", marginRight: "20px" }} />
            </Form.Item>
            <Form.Item name='shop_name'>
                <Select
                    style={{ width: "200px", marginRight: "60px" }}
                    options={ shops }
                    onChange={(value)=>handleShopChange(value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" shape="round" htmlType="submit" style={{ background: "green", borderColor: "green" }} >Add</Button>
            </Form.Item>
        </Form>
    );
};