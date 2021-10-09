import React, { useState } from 'react';
import { SeparadorForm } from '../Elements/Formulario';
// import { expresiones } from '../Elements/ExpresionesRegulares';
import Input from './Input';

export const UserDomicilio = () => {
    const [calle, setCalle] = useState({ campo: '', valido: null });
    const [numeroExt, setNumeroExt] = useState({ campo: '', valido: null });
    const [numeroInterior, setNumeroInterior] = useState({ campo: '', valido: null });
    const [codigoPostal, setCodigoPostal] = useState({ campo: '', valido: null });
    const [colonia, setColonia] = useState({ campo: '', valido: null });
    const [ciudad, setCiudad] = useState({ campo: '', valido: null });
    const [estado, setEstado] = useState({ campo: '', valido: null });
    const [pais, setPais] = useState({ campo: '', valido: null });

    return (
        <>

            <SeparadorForm className='subtitulos'>Domicilio</SeparadorForm>
            <Input
                estado={calle}
                cambiarEstado={setCalle}
                tipo='text'
                label='Calle o Avenida'
                placeholder='Escriba aqui'
                name='calle'
                // leyendaError="Favor que contenga mas de 6 caracteres"
                // expresionRegular={expresiones.nombre}
            />
            <Input
                estado={numeroExt}
                cambiarEstado={setNumeroExt}
                tipo='text'
                label='Número exterior'
                placeholder='Escriba aqui'
                name='numExterior'
            // leyendaError="Favor que contenga mas de 6 caracteres"
            // expresionRegular={expresiones.nombre}
            />
            <Input
                estado={numeroInterior}
                cambiarEstado={setNumeroInterior}
                tipo='text'
                label='Número interior'
                placeholder='Escriba aqui'
                name='numInterior'
            // leyendaError="Favor que contenga mas de 6 caracteres"
            // expresionRegular={expresiones.nombre}
            />
            <Input
                estado={codigoPostal}
                cambiarEstado={setCodigoPostal}
                tipo='text'
                label='Código Postal '
                placeholder='Escriba aqui'
                name='codigo-postal'
            // leyendaError="Favor que contenga mas de 6 caracteres"
            // expresionRegular={expresiones.nombre}
            />
            <Input
                estado={colonia}
                cambiarEstado={setColonia}
                tipo='text'
                label='Colonia o Urbanización'
                placeholder='Escriba aqui'
                name='colonia'
            // leyendaError="Favor que contenga mas de 6 caracteres"
            // expresionRegular={expresiones.nombre}
            />
            <Input
                estado={ciudad}
                cambiarEstado={setCiudad}
                tipo='text'
                label='Ciudad o Población'
                placeholder='Escriba aqui'
                name='ciudad'
            // leyendaError="Favor que contenga mas de 6 caracteres"
            // expresionRegular={expresiones.nombre}
            />
            <Input
                estado={estado}
                cambiarEstado={setEstado}
                tipo='text'
                label='Entidad Federativa o Estado '
                placeholder='Escriba aqui'
                name='estado'
            // leyendaError="Favor que contenga mas de 6 caracteres"
            // expresionRegular={expresiones.nombre}
            />
            <Input
                estado={pais}
                cambiarEstado={setPais}
                tipo='text'
                label='Pais'
                placeholder='Escriba aqui'
                name='pais'
            // leyendaError="Favor que contenga mas de 6 caracteres"
            // expresionRegular={expresiones.nombre}
            />


        </>

    )
}
