import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todoAtom = atomFamily({
    key: 'todoAtom',
    default: id => { 
        return TODOS.find(x => x.id === id)
    }
})