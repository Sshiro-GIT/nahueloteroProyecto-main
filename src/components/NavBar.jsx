import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className='flex justify-center items-center  bg-stone-700 py-2'>
            <div className='flex w-11/12 justify-between items-center'>
                <img className='h-12 w-12' src="https://e7.pngegg.com/pngimages/2/233/png-clipart-netflix-television-show-streaming-media-television-comedy-production-companies-netflix-television-angle.png" alt="logo" />

                <ul className='flex gap-6 cursor-pointer text-white font-semibold'>
                    <li className="scale-125">Inicio |</li>
                    <li className="scale-125">peliculas |</li>
                    <li className="scale-125">series |</li>
                    <li className="scale-125">Contacto</li>
                </ul>
                    <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar