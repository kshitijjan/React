import axios from "axios";
import { atom, selector } from "recoil";

//Asynchronous data queries
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: 'networkSelector',
        get: async () => {
            const res = await axios.get('http://localhost:3000/')
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})