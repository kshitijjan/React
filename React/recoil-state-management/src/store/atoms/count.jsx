import { atom, selector } from "recoil";

export const countAtom = atom({
    key: 'countAtom',
    default: 0
})

export const evenSelector = selector({
    key: 'evenSelector',
    get: ({get}) => {
        const count = get(countAtom)
        return count%2
    }
})
//Selector represents a derived state
//The derived state here is countAtom and evenselector is dependent on countAtom
//A selector can be derived from atom or selectors
//So whenever countAtom changes, evenSelector also changes