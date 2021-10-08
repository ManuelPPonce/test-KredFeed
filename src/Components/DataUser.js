import React from 'react';
import { UserDomicilio } from './UserDomicilio';

export const DataUser = () => {
  return (
    <div>
      <div className='form__input__container'>
        <label >Rázon social : </label>
        <input defaultValue='Razon social' disabled type="text" />
        <label > Nombre comercial : </label>
        <input defaultValue='Nombre comercial' disabled type="text" />
        <label >Nacionalidad : </label>
        <input defaultValue='Mexicana' disabled type="text" />
        <label >Fecha de constitución : </label>
        <input defaultValue='2021' disabled type="text" />
        <label > Dirección de correo electronico : </label>
        <input defaultValue='ejemplo@gmail.com' disabled type="email" />

      </div>
      <div className="form__imput__container__right">
        <label >RFC : </label>
        <input defaultValue='2021' disabled type="text" />
        <label > Regimen Fiscal : </label>
        <input defaultValue='2021' disabled type="text" />
        <label > Industria : </label>
        <input defaultValue='2021' disabled type="text" />
        <label > Número telefónico : </label>
        <input defaultValue='981012010' disabled type="phone" />

      </div>


    </div>
  )
}
