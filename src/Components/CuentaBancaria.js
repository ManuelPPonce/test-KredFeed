import React from 'react'

export const CuentaBancaria = () => {
    return (

        <form className='form__container'>
            <h1 className='title__data'>Cuenta Bancaria</h1>
            <div>
                <div className='form__input__container'>
                    <label >CLABE : </label>
                    <input defaultValue='Razon social' disabled type="text" />
                </div>
                <div className="form__imput__container__right">
                    <label >Banco : </label>
                    <input defaultValue='2021' disabled type="text" />
              

                </div>
            </div>
        </form>

    )
}
