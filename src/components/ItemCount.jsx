import React, { useState } from 'react'

const ItemCount = ({ maximo, initial = 0, onAdd }) => {
    const [cuenta, setCuenta] = useState(initial)

    const sumar = () => {
        cuenta < maximo && setCuenta(cuenta + 1)
        cuenta >= maximo && alert('No hay mas peliculas')
    }

    const restar = () => {
        setCuenta(Math.max(cuenta - 1, 0))
    }

    return (
        <>
        <div className='flex justify-center items-center'>
            <div className='flex gap-6 py-6 px-10'>
                <button className='text-xl' onClick={restar}>-</button>
                <p className='text-xl font-bold'>{cuenta}</p>
                <button className='text-xl' onClick={sumar}>+</button>
            </div>
            <button
                className='bg-stone-700 p-4 text-white'
                onClick={onAdd}
            >
                Alquilar
            </button>
        </div>
        </>
    )
}

export default ItemCount