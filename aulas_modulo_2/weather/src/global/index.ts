import { atom } from "jotai"
import { CityEntity } from "../api/entities/EntityDefinition"

export const citiesAtom = atom<CityEntity[]>([])

export const checkedCityAtom = atom<number | undefined>(undefined)
