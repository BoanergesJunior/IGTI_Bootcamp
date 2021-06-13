import { read } from '../httpService'

export async function apiGetAllCandidates() {
    const allCanditates = await read('/candidates')
    return allCanditates
}