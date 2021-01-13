// cSpell:Ignore valorInicial, salvaDados, apagarRegistro, editando, setEditando, Relação, índice, Parâmetro, apagaRegistro, Opções, número, itens, removidos, serão, Apagar, Editar, limparemos, carrega, página, salvaRegistro, Formulário, Salvar, Descrição, Pessoal, Faculdade, Trabalho, descricao, mudaAtributo, Tabela, Cadastro, Tarefa, Código
import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Cabecalho from '../../components/Cabecalho';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

export default function Produtos(){
    return(
        <div>
            <Cabecalho/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form>
                        <Typography component = 'h1'
                        align='center'>
                            Cadastro de Produtos
                        </Typography>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            name='id'
                            required
                            fullWidth
                            type='number'
                            id='id'
                            label='Código do Produto'
                            autoFocus
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            type='text'
                            id='descricao'
                            name='descricao'
                            label = 'Nome do Produto'
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            type='number'
                            id='descricao'
                            name='descricao'
                            label = 'Valor do Produto'
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            type='number'
                            id='descricao'
                            name='descricao'
                            label = 'Qtde'
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'>
                                <SaveIcon/ >
                                Salvar
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TableContainer component={Paper}>
                        <Table aria-label='Relação de Produtos'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Código</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Valor</TableCell>
                                    <TableCell>Qtde</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )

}