export function getUserEndpoint() {
  return fetch("http://localhost:3001/sessao/usuario", {
    credentials: "include",
  }).then(handleResponse)
}

export function singInEndpoint(email, senha) {
  return fetch(`http://localhost:3001/sessao/criar`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  }).then(handleResponse)
}

export function onSigOutEndpoint() {
  return fetch("http://localhost:3001/sessao/finalizar", {
    credentials: "include",
    method: "POST",
  }).then(handleResponse)
}

export function handleResponse(resp) {
  if (resp.ok) {
    return resp.json()
  } else {
    throw new Error(resp.statusText)
  }
}
