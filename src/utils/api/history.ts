import { HISTORY_API } from '../url'
import axios from 'axios'

type Params = {
    uuid: string
    id?: number
}

export const readHistory = async (params: Params) => await axios.get(HISTORY_API, { params })
export const deleteHistory = async (params: Params) => await axios.delete(HISTORY_API, { params })