import { useState } from "react"

export default function InputNumerico({
  initialValue,
  min = 1,
  max = 9,
  correct = 0,
}) {
  const [value, setValue] = useState(initialValue)
  const [showCorrect, setShowCorret] = useState(false)

  const testNumber = async (number, correctNumber) => {
    return number === correctNumber
  }
  const callApi = async (value) => {
    setTimeout(() => {
      setShowCorret(testNumber(value, correct))
    }, 500)
  }

  async function handleChange(e) {
    setValue(e.target.value)
    await callApi(e.target.value)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="numericInput">Numero</label>
      <input
        type="text"
        id="numericInput"
        value={value}
        onChange={handleChange}
      />
      {value < min || value > max ? <span>Erro</span> : null}
      {showCorrect ? <span>Numero correto</span> : null}
    </div>
  )
}
