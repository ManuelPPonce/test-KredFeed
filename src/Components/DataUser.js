import React, { useState } from 'react';
import { Formulario, ContenedorBtn, Button, MensajeExito, MensajeError, SeparadorForm } from '../Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { expresiones } from '../Elements/ExpresionesRegulares';
import { UserDomicilio } from './UserDomicilio';




export const DataUser = () => {

  // ValidarFormulario
  const [formularioValido, setFormularioValido] = useState(null);

  //  Estados
  const [usuario, setUsuario] = useState({ campo: '', valido: null });
  const [nombreComercial, setNombreComercial] = useState({ campo: '', valido: null });
  const [nacionalidad, setNacionalidad] = useState({ campo: '', valido: null });
  const [fechaConstitucion, setFechaConstitucion] = useState({ campo: '', valido: null });
  const [rfc, setRfc] = useState({ campo: '', valido: null });
  const [regimenFiscal, setRegimenFiscal] = useState({ campo: '', valido: null });
  const [industria, setIndustria] = useState({ campo: '', valido: null });
  const [comprobanteDomicilio, setComprobanteDomicilio] = useState({ campo: '', valido: null });
  const [telefono, setTelefono] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });


  // Validacion de Formulario
  const onSubmit = (e) => {
    e.preventDefault();

    if
      (
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



    <Formulario className="group-input" onSubmit={onSubmit}>

      <Input
        estado={usuario}
        cambiarEstado={setUsuario}
        tipo='text'
        label='Rázon social'
        placeholder='Escriba aqui'
        name='usuario'

      // leyendaError="Favor que contenga mas de 6 caracteres"
      // expresionRegular={expresiones.nombre}
      />

      <Input
        estado={nombreComercial}
        cambiarEstado={setNombreComercial}
        tipo='text'
        label='Nombre Comercial '
        placeholder='Escriba aqui'
        name='nombreComercial'
      // leyendaError="Favor que contenga mas de 4 caracteres"
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
        estado={fechaConstitucion}
        cambiarEstado={setFechaConstitucion}
        tipo='date'
        label='Fecha de Constitución '
        placeholder='Seleccione la fecha'
        name='fechaConstitucion'
      // leyendaError= "Favor que contenga mas de 4 caracteres"
      // expresionRegular={expresiones.usuario}
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

      <Input
        estado={regimenFiscal}
        cambiarEstado={setRegimenFiscal}
        tipo='text'
        label='Régimen Fiscal '
        placeholder='Escriba aqui'
        name='regimen'
      // leyendaError="Favor de verificar su RFC"
      // expresionRegular={expresiones.rfc}
      />
      <Input
        estado={industria}
        cambiarEstado={setIndustria}
        tipo='text'
        label='Industria '
        placeholder='Escriba aqui'
        name='industria'
      // leyendaError=""
      // expresionRegular={expresiones.nombre}
      />
      <UserDomicilio />
      <SeparadorForm>Contacto</SeparadorForm>

      <Input
        estado={comprobanteDomicilio}
        cambiarEstado={setComprobanteDomicilio}
        tipo='file'
        label='Comprobante de domicilio '
        placeholder='Escriba aqui'
        name='domicilio'
      // leyendaError=""
      // expresionRegular={expresiones.nombre}
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

      <div className="centrar__mensaje">
        {formularioValido === false && <MensajeError>
          <p> <FontAwesomeIcon icon={faExclamationTriangle} /> <b>Error : </b> Por favor , rellene los campos correctamente</p>
        </MensajeError>}
      </div>
      <ContenedorBtn>
        <Button type="submit"> Enviar </Button>
        {formularioValido === true && <div className="centrar__mensaje">
          <MensajeExito>Formulario enviado exitosamente</MensajeExito>
        </div>
        }
      </ContenedorBtn>

    </Formulario>

  )
}
