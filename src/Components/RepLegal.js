import React from 'react'
import { UserDomicilio } from './UserDomicilio'

export const RepLegal = () => {
    return (
        <form className='form__container'>
            <h1 className='title__data'>Representante Legal</h1>

            <div>
                <div className='form__input__container'>
                    <label >Nombre : </label>
                    <input defaultValue='Razon social' disabled type="text" />
                    <label > Fecha de Nacimiento : </label>
                    <input defaultValue='Nombre comercial' disabled type="text" />
                    <label > Pais de nacimiento:  </label>
                    <input defaultValue='Mexicana' disabled type="text" />
                    <label >Estado civil</label>
                    <input defaultValue='2021' disabled type="text" />
                    <label > Curp: </label>
                    <input defaultValue='' disabled type="email" />
                    <label > Número telefónico : </label>
                    <input defaultValue='981012010' disabled type="phone" />

                </div>
                <div className="form__imput__container__right">
                    <label >Género : </label>
                    <input defaultValue='2021' disabled type="text" />
                    <label > Nacionalidad : </label>
                    <input defaultValue='2021' disabled type="text" />
                    <label > Entidad Federativa de nacimiento : </label>
                    <input defaultValue='2021' disabled type="text" />
                    <label > RFC: </label>
                    <input defaultValue='981012010' disabled type="phone" />
                    <label > Dirección de correo electronico : </label>
                    <input defaultValue='ejemplo@gmail.com' disabled type="email" />
                    <label > Documento de indentificación : </label>
                    <input defaultValue='981012010' disabled type="phone" />

                </div>

            

            </div>
                <UserDomicilio />
        </form >
    )
}
