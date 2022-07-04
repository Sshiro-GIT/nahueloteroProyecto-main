import React from "react";

export default function Item({ elem }) {
  return (
    <div>
      <h1 className='flex justify-center items-center  bg-stone-400 py-2'>{elem.nombre}</h1>
      <h2 className='flex justify-center items-center  bg-stone-600 py-2'>{elem.descripcion}</h2>
      <h3 className='flex justify-center items-center  bg-stone-200 py-2'>{elem.precio}</h3>
    </div>
  );
}
