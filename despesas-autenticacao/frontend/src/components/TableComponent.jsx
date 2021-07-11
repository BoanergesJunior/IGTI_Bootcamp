import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import { Tabs, Tab } from "@material-ui/core"

const useStyles = makeStyles({
  table: {
    maxWidth: "1200px",
    margin: "auto",
    marginTop: "8px",
  },
})

export default function TableScreen({ despesas = [] }) {
  const classes = useStyles()

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  let allCategories = []
  for (const despesa of despesas) {
    if (!allCategories.includes(despesa.categoria)) {
      allCategories.push(despesa.categoria)
    }
  }

  let finalValue = allCategories.map((categoria) => {
    const allDespesas = despesas.filter(
      (despesa) => despesa.categoria === categoria
    )

    let totalValue = 0
    for (const despesa of allDespesas) {
      totalValue += despesa.valor
    }

    return { categoria, totalValue }
  })

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Resumo" />
        <Tab label="Details" />
      </Tabs>

      {value === 0 && (
        <TableContainer component={"div"}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Categoria
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="right">
                  Valor (R$)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalValue.map((each) => {
                return (
                  <TableRow key={each.categoria}>
                    <TableCell align="left">{each.categoria}</TableCell>
                    <TableCell align="right">
                      {each.totalValue.toFixed(2)}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {value === 1 && (
        <TableContainer component={"div"}>
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
              {despesas.map((despesa) => {
                return (
                  <TableRow key={despesa.id}>
                    <TableCell align="left">{despesa.descricao}</TableCell>
                    <TableCell align="left">{despesa.categoria}</TableCell>
                    <TableCell align="center">{despesa.dia}</TableCell>
                    <TableCell align="right">{despesa.valor}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}
