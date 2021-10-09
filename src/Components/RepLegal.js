import React, { useState } from 'react'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formulario, MensajeError, MensajeExito, Button, ContenedorBtn, SeparadorForm } from '../Elements/Formulario'
import { UserDomicilio } from './UserDomicilio';
import Input from './Input';
import { expresiones } from '../Elements/ExpresionesRegulares';
import { Option } from './Option';

export const RepLegal = () => {

    // ValidarFormulario
    const [formularioValido, setFormularioValido] = useState(null);

    //  Estados
    const [nombre, setNombre] = useState({ campo: '', valido: null });
    const [fechaNacimiento, setFechaNacimiento] = useState({ campo: '', valido: null });
    const [estado, setEstado] = useState({ campo: '', valido: null });
    const [pais, setPais] = useState({ campo: '', valido: null });
    const [nacionalidad, setNacionalidad] = useState({ campo: '', valido: null });
    const [curp, setCurp] = useState({ campo: '', valido: null });
    const [rfc, setRfc] = useState({ campo: '', valido: null });
    const [correo, setCorreo] = useState({ campo: '', valido: null });
    const [telefono, setTelefono] = useState({ campo: '', valido: null });
    const [documentoIdentificacion, setDocumentoIdentificacion] = useState({ campo: '', valido: null });
    const [genero, setGenero] = useState({ valor: null });
    const [estadoCivil, setEstadoCivil] = useState({ valor: '' });

    const onSubmit = (e) => {
        e.preventDefault();

        if
            (
            nombre.valido === 'true' &&
            curp.valido === 'true' &&
            rfc.valido === 'true' &&
            telefono.valido === 'true' &&
            correo.valido === 'true'
        ) {
            setFormularioValido(true);
        } else {
            setFormularioValido(false)
        }

    }

    return (
        <main>
            <h1 className='title__data'>Representante Legal</h1>
            <Formulario className='group-input' onSubmit={onSubmit}>
                <Input
                    estado={nombre}
                    cambiarEstado={setNombre}
                    tipo='text'
                    label='Nombre'
                    placeholder='Nombre Completo'
                    name='nombre'
                    leyendaError="Favor de escribir su nombre correctamente"
                    expresionRegular={expresiones.nombre}
                />
                <Option
                    estado={genero}
                    cambiarEstado={setGenero}
                    label='Genero'
                    name='genero'
                    value1='Masculino'
                    value2='Femenino'
                    value3='Prefiero no decirlo'
                />

                <Input
                    estado={fechaNacimiento}
                    cambiarEstado={setFechaNacimiento}
                    tipo='date'
                    label='Fecha de Nacimiento'
                    placeholder='Seleccione su fecha de nacimiento'
                    name='fechaNacimiento'

                // leyendaError="Favor que contenga mas de 6 caracteres"
                // expresionRegular={expresiones.nombre}
                />
                <Input
                    estado={estado}
                    cambiarEstado={setEstado}
                    tipo='text'
                    label='Entidad Federativa de Nacimiento '
                    placeholder='Escriba aqui'
                    name='estado'
                // leyendaError="Favor que contenga mas de 6 caracteres"
                // expresionRegular={expresiones.nombre}
                />
                <Input
                    estado={pais}
                    cambiarEstado={setPais}
                    tipo='text'
                    label='Pais de Nacimiento'
                    placeholder='Escriba aqui'
                    name='pais'
                // leyendaError="Favor que contenga mas de 6 caracteres"
                // expresionRegular={expresiones.nombre}
                />

                <Input
                    estado={nacionalidad}
                    cambiarEstado={setNacionalidad}
                    tipo='text'
                    label='Nacionalidad '
                    placeholder='Escriba aqui'
                    name='nacionalidad'
                // leyendaError="Favor que contenga mas de 4 caracteres"
                // expresionRegular={expresiones.usuario}
                />
                <Input
                    estado={curp}
                    cambiarEstado={setCurp}
                    tipo='text'
                    label='Curp'
                    placeholder='Escriba aqui'
                    name='usuario'
                    leyendaError="Favor de verificar su CURP"
                    expresionRegular={expresiones.curp}
                />

                <Input
                    estado={rfc}
                    cambiarEstado={setRfc}
                    tipo='text'
                    label='RFC '
                    placeholder='Ingrese su RFC'
                    name='rfc'
                    leyendaError="Favor de verificar su RFC"
                    expresionRegular={expresiones.rfc}
                />

                <UserDomicilio />


                <SeparadorForm>Contacto</SeparadorForm>

                <Option
                    estado={estadoCivil}
                    cambiarEstado={setEstadoCivil}
                    label='Estado Civil'
                    name='estado_civil'
                    value1='Soltero/a'
                    value2='Casado/a'
                    value3='Union Libre'
                />

                <Input
                    estado={telefono}
                    cambiarEstado={setTelefono}
                    tipo='number'
                    label='Telefono '
                    placeholder='Minimo 10 digitos'
                    name='telefono'
                    leyendaError="Favor de revisar el numero de telefono"
                    expresionRegular={expresiones.telefono}
                />

                <Input
                    estado={correo}
                    cambiarEstado={setCorreo}
                    tipo='email'
                    label='Correo'
                    placeholder='ejemplo@gmail.com'
                    name='correo'
                    leyendaError="Correo incorrecto"
                    expresionRegular={expresiones.correo}
                />
                <Input
                    estado={documentoIdentificacion}
                    cambiarEstado={setDocumentoIdentificacion}
                    tipo='file'
                    label='Documento de Identificación '
                    // placeholder='Escriba aqui'
                    name='identificacion'
                // leyendaError=""
                // expresionRegular={expresiones.nombre}
                />





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
