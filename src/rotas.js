//cSPell:Ignore
import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import NaoEncontrado from './pages/NaoEncontrado'
import Inicio from './pages/Inicio'
import Produtos from './pages/Produtos'
import Menu from './pages/Menu'

//as rotas tem que estar na ordem, o último sempre é o não encontrado!
export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/Menu" component={Menu}/>
                <Route exact path="/Produtos" component={Produtos}/>
                <Route component={NaoEncontrado}/>
            </Switch>
        </BrowserRouter>
    )
}

