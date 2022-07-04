import React, { useEffect, useState } from "react";
import peliculas from "../data";
import ItemList from "./ItemList";
import ItemCount from './ItemCount'


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(peliculas);
    }, 2000);
});

export default function ItemListContainer({ netfli }) {
    const [peliculasList, setPeliculasList] = useState([]);
    const [loading, setLoading] = useState(false);
    const onAdd = () => {
        alert(`Gracias, por tu alquiler`)
    }

    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
            setLoading(false);
            setPeliculasList(response);
    });
    }, []);

    if (loading) {
        return (
            <>
            <h1>Cargando...</h1>
            </>
    );
    }
    return (
    <div>
        <h1 className='text-3xl font-bold'>{netfli}</h1>
        <ItemList peliculass={peliculasList} />
        <ItemCount maximo={5} onAdd={onAdd} />
    </div>
    );
}