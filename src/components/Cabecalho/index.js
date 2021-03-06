// cSpell:Ignore Cabecalho, Reservada, logado, secao, Empresa,Teste,Produtos, titulo, secoes, Serviços, servicos
import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import ApartmentIcon from '@material-ui/icons/Apartment'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const useStyles = makeStyles((theme) => ({
    toolbarTitle: {
        flex: 1
    },
    toolbarSecundaria:{
        justifyContent : 'space-between'
    }
}))

const Cabecalho = () => {
    const classes = useStyles()
    const history = useHistory()

    const secoes=[
        {titulo: 'Produtos', url:'/produtos'},
        {titulo: 'Serviços', url:'/servicos'},
        {titulo: 'SAV', url:'/sav'},
        {titulo: 'FAQ', url:'/faq'},
        {titulo: 'Área Reservada', url:'/login'}
    ]

    return(
        <>
            <AppBar position='relative'>
                <Toolbar>
                    <ApartmentIcon />
                    <Typography component='h1'
                    color='inherit'
                    align='center'
                    noWrap
                    className={classes.toolbarTitle}>
                        Empresa Delta
                    </Typography>
                    {localStorage.getItem('logado') !== btoa(process.env.REACT_APP_USER)
                        ?<Button variant='contained'
                            startIcon={<LockOutlinedIcon/>}
                            color='secondary'
                            size='small'
                            href='/login'>Login</Button>
                        :<Button variant='contained'
                            startIcon={<ExitToAppIcon/>}
                            color='secondary'
                            size='small'
                            onClick={() => {
                                localStorage.removeItem('logado')
                                history.push('/login')
                            }}>Logout</Button>
                    }
                </Toolbar>
            </AppBar>
            <Toolbar component='nav' className={classes.toolbarSecundaria}>
                {secoes.map((secao) => (
                    <Link 
                    color='secondary'
                    noWrap
                    variant='body2'
                    key={secao.titulo}
                    href={secao.url}>{secao.titulo}</Link>
                ))}
            </Toolbar>
        </>
    )
}

export default Cabecalho