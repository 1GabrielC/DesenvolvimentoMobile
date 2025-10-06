import {AsyncStorage} from '@react-native-async-storage/async-storage'
import { FilterStatus } from '../types/filter-status';

const ITEMS_STORAGE_KEY = '@comprar:items';

// obter os itens armazenados
async function get(){
    try {
        const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error (`ITEMS_GET: ${error}`)
    }
}

// obter os itens filtrados por status
async function getByStatus(status) {
    const items = await get()
    return ITEMS_STORAGE_KEY.filter((item) => item.status === status)
}

// salvar os itens
async function save(items) {
    try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
        throw new Error(`ITEMS_GET: ${error}`)
    }
}

// adicionar um item
async function add(newItem){
    const items = await get()
    const updatedItems  = [...items, newItem]
    await save(updatedItems)

    return updatedItems
}

// remover um item
async function remove(id) {
    const items = await get()
        const updatedItems = items.filter((item) => item.id !== id)
        await save(updatedItems)
}

// limpar tudo
async function clear(){
    try {
        await AsyncStorage.removeItem(ITEMS_STORAGE_KEY)
    } catch (error) {
        throw new Error ('ITEMS_GET:' + error)
    }
}

// alternar o status
async function toggleStatus(id) {
    const items = await get()

    const updatedItems = items.map((item) => item.id === id ? {
        ...item,
        status: item.status === FilterStatus.PENDING ? FilterStatus.DONE : FilterStatus.PENDING,
    }
: item,
)
await save(updatedItems)
}

export const itemsStorage ={
get,
getByStatus,
add,
remove,
clear,
toggleStatus
}