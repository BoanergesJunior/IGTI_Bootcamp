export default function getApi() {
    return fetch('http://localhost:3001/despesas')
    .then(resp => {
        return resp.json()
    })
}
  