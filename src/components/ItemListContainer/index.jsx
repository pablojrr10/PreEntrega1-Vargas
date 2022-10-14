import ItemCount from '../ItemCount';
import ItemList from '../ItemList'
import React, {useState, useEffect} from "react";
import Title from '../Title';
import { useParams } from 'react-router-dom';

const productos = [
    { id: 1, image: "https://i.pinimg.com/564x/6b/8f/93/6b8f93c0808388513f35129addafab2b.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 2, image: "https://i.pinimg.com/564x/6a/16/8d/6a168d489781256cd84202325c702039.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 3, image: "https://i.pinimg.com/564x/36/76/32/367632d831a7885908581f9af40d008e.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 4, image: "https://i.pinimg.com/736x/7f/4b/15/7f4b15a06315bb479f71fb8dd3f53d3a.jpg", category:'mesaLuz', title:"Mesita de Luz"},
    { id: 5, image: "https://i.pinimg.com/736x/5f/d1/68/5fd168ab81927ee3279984140d8565b7.jpg", category:'mesaLuz', title:"Mesita de Luz"},
];



export const ItemListContainer = ()=> {  
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if(categoriaId) {
            getData.then(res => setData(res.filter(productos => productos.category === categoriaId)));
        } else{
            getData.then(res => setData(res));
        }
    }, [categoriaId]);

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