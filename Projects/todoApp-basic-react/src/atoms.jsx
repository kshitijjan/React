import axios from "axios";
import { atom, selector, atomFamily, selectorFamily } from "recoil";

export const findAllTodoAtom = atom({
    key: 'findAllTodoAtom',
    default: selector({
        key: 'findAllTodoSelector',
        get: async (get) => {
            const res = await axios.get('http://localhost:3000/alltodos');
            return res.data
        }
    })
})

export const notCompletedTodosAtom = atom({
    key: 'notCompletedTodosAtom',
    default: selector({
        key: 'notCompletedTodosSelector',
        get: async (get) => {
            const res = await axios.get(`http://localhost:3000/notcompletedtodos`)
            return res.data
        }
    })
})

export const searchTodoAtom = atomFamily({
    key: 'searchTodoAtom',
    default: selectorFamily({
        key: 'searchTodoSelector',
        get: (text) => async (get) => {
            const res = await axios.get(`http://localhost:3000/search?title=${text}`)
            return res.data
        }
    })
})