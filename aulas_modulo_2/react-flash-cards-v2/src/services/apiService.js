import { get } from "./httpService";

const BACK_END_URL = 'http://localhost:3001'

export async function apiGetAllFlashCards() {
    const allFlashCards = get(BACK_END_URL)

    return allFlashCards
}