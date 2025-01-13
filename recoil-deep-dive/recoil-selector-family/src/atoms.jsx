import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoAtom = atomFamily({
    key: 'todoAtom',
    default: selectorFamily({
        key: 'todoSelector',
        get: (id) => async () => {
            const res = await axios.get(`http://localhost:3000/todo?id=${id}`)
            
            return res.data;
        }
    })
})