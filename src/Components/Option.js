import React  from 'react';
import { SelectOption, Label } from '../Elements/Formulario';

export const Option = ({ estado , cambiarEstado ,label, name , value1 , value2 , value3}) => {

    const onChange = (e) => {
        cambiarEstado({  valor : e.target.value});
    }

    
    return (
        <div>
            <Label htmlFor={name}> {label} : </Label>
            <SelectOption value={estado.valor} onChange={onChange}>
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
            </SelectOption>
        </div>
    )
}
