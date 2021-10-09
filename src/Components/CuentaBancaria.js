import React, { useState } from 'react'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Formulario, MensajeError, MensajeExito, Button, ContenedorBtn, SeparadorForm } from '../Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserDomicilio } from './UserDomicilio';
import Input from './Input';
import { expresiones } from '../Elements/ExpresionesRegulares';

export const CuentaBancaria = () => {

    // ValidarFormulario
    const [formularioValido, setFormularioValido] = useState(null);

    //  Estados
    const [cable, setCable] = useState({ campo: '', valido: null });
    const [banco, setBanco] = useState({ campo: '', valido: null });

    const onSubmit = (e) => {
        e.preventDefault();
        setFormularioValido(true);
    }

    return (

        <main>
            <h1 className='title__data'>Representante Legal</h1>
            <Formulario className='group-input' onSubmit={onSubmit}>
                <Input
                    estado={cable}
                    cambiarEstado={setCable}
                    tipo='text'
                    label='CABLE'
                    placeholder='CABLE'
                    name='cable'
                // leyendaError="Favor de escribir su nombre correctamente"
                // expresionRegular={expresiones.nombre}
                />
                <Input
                    estado={banco}
                    cambiarEstado={setBanco}
                    tipo='text'
                    label='Banco'
                    placeholder='Banco'
                    name='bancp'
                // leyendaError="Favor de escribir su nombre correctamente"
                // expresionRegular={expresiones.nombre}
                />
                {false && <MensajeError>
                    <p> <FontAwesomeIcon icon={faExclamationTriangle} /> <b>Error : </b> Por favor , rellene los campos correctamente</p>
                </MensajeError>}
                {formularioValido === false && <div className="centrar__mensaje">
                    <MensajeError>
                        <p> <FontAwesomeIcon icon={faExclamationTriangle} /> <b>Error : </b> Por favor , rellene los campos correctamente</p>
                    </MensajeError>
                </div>
                }
                <ContenedorBtn>
                    <Button type="submit"> Enviar </Button>
                    {formularioValido === true && <div className="centrar__mensaje">
                        <MensajeExito>Formulario enviado exitosamente</MensajeExito>
                    </div>
                    }
                </ContenedorBtn>
            </Formulario >
        </main>

    )
}
