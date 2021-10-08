import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AsideUser } from './AsideUser';
import { CuentaBancaria } from './CuentaBancaria';
import { FormUser } from './FormUser';
import { RepLegal } from './RepLegal';

function formUser() {
   return <FormUser />;
}

function repLegal() {
    return <RepLegal />;
}

function cuentaBancaria() {
    return <CuentaBancaria />;
}

export const ContainerUser = () => {


    return (
        <div className='data__container'>
            <Router>

                <AsideUser />
                <Route path="/" exact component={formUser} />
                <Route path="/about/" component={repLegal} />
                <Route path="/users/" component={cuentaBancaria} />
            </Router>
        </div>
    )
}
