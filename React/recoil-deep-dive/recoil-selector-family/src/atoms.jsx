import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoAtom = atomFamily({
    key: 'todoAtom',
    default: selectorFamily({
        key: 'todoSelector',
        get: (id) => async () => {
            await new Promise(r => setTimeout(r, 5000))
            const res = await axios.get(`http://localhost:3000/todo?id=${id}`)
            
            return res.data;
        }
    })
})