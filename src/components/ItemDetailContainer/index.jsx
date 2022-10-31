import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';

const producto = [
    { id: 1, price:1000, image: "https://i.pinimg.com/564x/6b/8f/93/6b8f93c0808388513f35129addafab2b.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 2, price:2000, image: "https://i.pinimg.com/564x/6a/16/8d/6a168d489781256cd84202325c702039.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 3, price:2500, image: "https://i.pinimg.com/564x/36/76/32/367632d831a7885908581f9af40d008e.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 4, price:4500, image: "https://i.pinimg.com/736x/7f/4b/15/7f4b15a06315bb479f71fb8dd3f53d3a.jpg", category:'mesaLuz', title:"Mesita de Luz"},
    { id: 5, price:1100, image: "https://i.pinimg.com/736x/5f/d1/68/5fd168ab81927ee3279984140d8565b7.jpg", category:'mesaLuz', title:"Mesita de Luz"},
];

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const {detalleId} = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(producto);
            },1000);
        });
        if(detalleId){
            getData.then(res => setData(res.find(producto => producto.id === parseInt(detalleId))));
        } else {

        }
        
    },[])

    return(
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;

