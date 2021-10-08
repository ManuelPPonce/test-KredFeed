import React from 'react'

export const UserDomicilio = () => {
    return (
        <>
            <div>
                <h2 className = 'subtitulos'>Domicilio</h2>
                <div className='form__input__container'>
                    <label >Calle o Avenida : </label>
                    <input defaultValue='Razon social' disabled type="text" />
                    <label > Número exterior : </label>
                    <input defaultValue='Nombre comercial' disabled type="text" />
                    <label >Nacionalidad : </label>
                    <input defaultValue='Mexicana' disabled type="text" />
                    <label >Pais : </label>
                    <input defaultValue='2021' disabled type="text" />
                    <label >Compravante de domicilio: </label>
                    <input defaultValue='2021' disabled type="text" />
              

                </div>
                <div className="form__imput__container__right">
                    <label >Colonia o Urbanización : </label>
                    <input defaultValue='2021' disabled type="text" />
                    <label > Número interior : </label>
                    <input defaultValue='2021' disabled type="text" />
                    <label > Codigo Postal : </label>
                    <input defaultValue='2021' disabled type="text" />
                    <label > Entidad Federativa o Estado : </label>
                    <input defaultValue='2021' disabled type="text" />
              
                </div>

            </div>
        </>
    )
}
