import axios from "axios";
import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: 'networkAtom',
    default: selector({
        key: 'networkSelector',
        get: async () => {
            const res = await axios.get('http://localhost:3000/')
            return res.data;
        }
    })
})
