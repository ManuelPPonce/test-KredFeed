import React from 'react'
import { DataUser } from './DataUser'
import { UserDomicilio } from './UserDomicilio'

export const FormUser = () => {
    return (
        
        <form className = 'form__container'>
        <h1 className ='title__data'>Datos de Usuario</h1>
             <DataUser />
             <UserDomicilio />
        </form >
        
    )
}
