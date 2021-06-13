import { read } from '../httpService'

export async function apiGetAllElection() {
    const allElection = await read('/election')
    return allElection
}