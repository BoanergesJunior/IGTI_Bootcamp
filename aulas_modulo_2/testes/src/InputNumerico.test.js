import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderIntoDocument } from "react-dom/test-utils"
import InputNumerico from "./InputNumerico"

describe("Componente InputNumerico", () => {
  test("Renderiza o componente", () => {
    render(<InputNumerico />)
  })

  test("Mostra erro com numero fora da faixa", () => {
    render(<InputNumerico max={5} initialValue={10} />)
    const error = screen.getByText(/erro/i)
    expect(error).toBeInTheDocument()
  })

  test("Digita de um valor invalido", () => {
    render(<InputNumerico max={9} />)
    const input = screen.getByLabelText(/numero/i)
    userEvent.type(input, "7")
    userEvent.type(input, "0")
    const error = screen.queryByText(/erro/i)
    expect(error).toBeInTheDocument()
  })

  test("Escolhe o numero correto", async () => {
    renderIntoDocument(<InputNumerico correct={10} max={100} />)
    const input = screen.getByLabelText(/numero/i)
    userEvent.type(input, "10")
    const msg = await screen.findByText(/numero correto/i)
    expect(msg).toBeInTheDocument()
    screen.debug()
  })
})
