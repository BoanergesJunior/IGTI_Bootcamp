export function getApi(date) {
    return fetch(`http://localhost:3001/despesas?${date}`)
    .then(resp => {
        return resp.json()
    })
}
