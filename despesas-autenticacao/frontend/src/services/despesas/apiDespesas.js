import { handleResponse } from "../users/apiUsers"

export function getApi() {
  return fetch("http://localhost:3001/despesas", {
    credentials: "include",
  }).then(handleResponse)
}
