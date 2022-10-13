import ItemCount from '../ItemCount';
import ItemList from '../ItemList'
import React, {useState, useEffect} from "react";
import Title from '../Title';

const productos = [
    { id: 1, image: "https://i.pinimg.com/564x/6b/8f/93/6b8f93c0808388513f35129addafab2b.jpg", title:"rack tv"},
    { id: 2, image: "https://i.pinimg.com/564x/6a/16/8d/6a168d489781256cd84202325c702039.jpg", title:"rack tv"},
    { id: 3, image: "https://i.pinimg.com/564x/36/76/32/367632d831a7885908581f9af40d008e.jpg", title:"rack tv"},
];



export const ItemListContainer = ()=> {  
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        });
        getData.then(res => setData(res));
    
    }, []);

    const onAdd = (quantity)=> {
        console.log(`Compraste ${quantity} unidades}`);
    }

    return (
        <>
        <Title greeting='MAKERS' />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
}
export default ItemListContainer;