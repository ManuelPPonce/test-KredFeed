import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
    borde: ' rgb(82, 34, 200)',
    error: '#bb2929',
    exito: '#1ed12d',
}



const SelectOption = styled.select`
    width: 99%;
    border: 3px solid rgb(84, 84, 120);
    background: #fff;
    border-radius: 5px ;
    height: 50px;
    padding: 0 40px 0  10px;
    transition: .3s ease all;
    font-size: 16px;
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;

`;

const ContenedorBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: span 2;
    
`;

const Button = styled.button`
    margin-top: 40px;
    height: 45px;
    border: none;
    line-height: 45px;
    width: 30%;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    background: #512DA8 ;
    transition: .1s ease all;

    &:hover{
        box-shadow: 4px 4px 4px rgba(163,163,163,.4);
        background: rgba(82, 20, 200,.8);
        
    }

`;

const MensajeExito = styled.p`
    
    width: 60%;
    color: white;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    font-weight: 700;
    background:#58D68D ;
    border-radius: 4px;
    grid-column: span 2;
   
`;

const MensajeError = styled.div`
  
    
    width: 60%;
    text-align: center;
    height: 45px;
    line-height: 45px;
    background: #EF5350 ;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    transition: .3 ease all;
    
    p{
        margin: 0;
    }
    b{
        margin-left: 10px;
    }
`;

const SeparadorForm = styled.h2`
    display: block;
    grid-column: span 2;
    margin-top: 40px;
    padding: 20px 0;
    border-bottom: 2px solid rgb(84, 84, 120);
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position : absolute;
    right : 25px;
    bottom: 15px;
    z-index: 100;
    font-size: 20px;
    color: ${colores.exito};
    opacity: 0;
    transition: .3s ease all;
    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colores.error};
    `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito};
    `}
`;


const LeyendaError = styled.p`
    margin-left: 5px ;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;
    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;



const Input = styled.input`
    width: 90%;
 
    border: 3px solid rgb(84, 84, 120);
    background: #fff;
    border-radius: 5px ;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    font-size: 16px;
    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
    
    /* ${props => props.valido === 'true' && css`
        border: 3px solid ${colores.exito} !important;
    `} */
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}
`;

const Label = styled.label`
    display: block;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    padding: 8px 0;
    margin-top: 15px;
    min-height: 40px ;

    ${props => props.valido === 'false' && css`
        color: ${colores.error};
    `}
`;

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 100px;
    
    @media(max-width : 800px){
        grid-template-columns:  1fr;
    }    
`;



export {
    IconoValidacion,
    Formulario,
    Label,
    GrupoInput,
    Input,
    LeyendaError,
    Button,
    ContenedorBtn,
    MensajeExito,
    MensajeError,
    SeparadorForm,
    SelectOption
};