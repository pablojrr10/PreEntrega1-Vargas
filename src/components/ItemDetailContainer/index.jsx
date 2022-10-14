import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const productos = {id: 1, image: "https://i.pinimg.com/564x/6b/8f/93/6b8f93c0808388513f35129addafab2b.jpg ", title:"rack tv"}

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(productos);
            },3000);
        });
    getData.then(res => setData(res));
    },[])

    return(
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;

