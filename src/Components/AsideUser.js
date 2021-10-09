import React from 'react';
import { BrowserRouter as Router, Route , Link} from "react-router-dom";
import imgUser from '../img/user.jpg';

export const AsideUser = () => {
    return (
        <div className='aside__container'>
            <div className='aside__img__container'>
                <img className='img__user' src={imgUser} alt="Foto no disponible" />
            </div>
            <div className="aside__item__container">
                <Link to="/">Datos de usuario</Link>

            </div>
            <div className="aside__item__container">
                <Link to="/about/">Representante Legal</Link>
               
            </div>
            <div className="aside__item__container">
                <Link to="/users/">Cuenta Bancaria</Link>
               
            </div>

        </div>
    )
}
