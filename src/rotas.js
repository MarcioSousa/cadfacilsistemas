//cSPell:Ignore
import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import NaoEncontrado from './pages/NaoEncontrado'

//as rotas tem que estar na ordem, o último sempre é o não encontrado!
export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route component={NaoEncontrado}/>
            </Switch>
        </BrowserRouter>
    )
}

