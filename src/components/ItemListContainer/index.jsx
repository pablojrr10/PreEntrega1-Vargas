import ItemList from '../ItemList'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import Title from '../Title';
import { useParams } from 'react-router-dom';

/*const productos = [
    { id: 1, price:1000, image: "https://i.pinimg.com/564x/6b/8f/93/6b8f93c0808388513f35129addafab2b.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 2, price:2000, image: "https://i.pinimg.com/564x/6a/16/8d/6a168d489781256cd84202325c702039.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 3, price:2500, image: "https://i.pinimg.com/564x/36/76/32/367632d831a7885908581f9af40d008e.jpg", category:'muebleTV', title:"Mesa tv"},
    { id: 4, price:4500, image: "https://i.pinimg.com/736x/7f/4b/15/7f4b15a06315bb479f71fb8dd3f53d3a.jpg", category:'mesaLuz', title:"Mesita de Luz"},
    { id: 5, price:1100, image: "https://i.pinimg.com/736x/5f/d1/68/5fd168ab81927ee3279984140d8565b7.jpg", category:'mesaLuz', title:"Mesita de Luz"},
];*/



export const ItemListContainer = ()=> {  
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();


    useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "productos");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

   /* useEffect(() => {
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
        
    }, [categoriaId]);*/

    return (
        <>
        <Title greeting='MAKERS' />
        <ItemList data={data} />
        </>
    );
}
export default ItemListContainer;