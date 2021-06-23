import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
  
    maxWidth: "1200px",
    margin: "auto",
    marginTop: "8px",
  },
  header: {
    fontWeight: "bold"
  }
}) 

export default function TableScreen({
  despesas = []
}) {

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
          <TableHead>
          <TableRow className={classes.header}>
            <TableCell align="left">Despesas</TableCell>
            <TableCell align="left">Categoria</TableCell>
            <TableCell align="center">Dia</TableCell>
            <TableCell align="right">Valor (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            despesas.map(despesa => {
              return(
                <TableRow key={despesa.id}>
                  <TableCell align="left">{despesa.descricao}</TableCell>
                  <TableCell align="left">{despesa.categoria}</TableCell>
                  <TableCell align="center">{despesa.dia}</TableCell>
                  <TableCell align="right">{despesa.valor}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
