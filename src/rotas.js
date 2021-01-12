//cSPell:Ignore
import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import NaoEncontrado from './pages/NaoEncontrado'
import Inicio from './pages/Inicio'

//as rotas tem que estar na ordem, o último sempre é o não encontrado!
export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </BrowserRouter>
    )
}

