import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core"
import React, { useState } from "react"
import { singInEndpoint } from "../services/users/apiUsers"

const useStyle = makeStyles({
  error: {
    backgroundColor: "rgb(253, 236, 234)",
    borderRadius: "4px",
    padding: "16px",
    margin: "16px 0px",
  },
})

export default function LoginScreen({ props: onSignIn }) {
  const classes = useStyle()

  const [email, setEmail] = useState("usuario2@email.com")
  const [password, setPassword] = useState("react")
  const [error, setError] = useState("")

  function signIn(evt) {
    singInEndpoint(email, password).then(onSignIn, (e) => {
      setError("Email não encontrado ou senha incorreta")
    })
  }

  return (
    <div>
      <Container maxWidth="sm">
        <h1>Agenda React</h1>
        <p>
          email: <kbd>usuario@email.com</kbd> senha: <kbd>1234</kbd>
        </p>

        <form onSubmit={signIn}>
          <TextField
            margin="normal"
            label="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />

          <TextField
            type="password"
            margin="normal"
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          {error && <div className={classes.error}>{error}</div>}
          <Box textAlign="right" marginTop="16px">
            <Button type="submit" variant="contained" color="primary">
              Entrar
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  )
}
