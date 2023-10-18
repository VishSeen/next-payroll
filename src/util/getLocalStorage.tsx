import { TableData } from "@/types/type";
import data from '../../config.json';



export const getLocalStorage = (key: string): TableData[] => {
    const value = localStorage.getItem(key);

    if(value !== null) {
        const objValue = JSON.parse(value);
        return objValue;
    } else {
        return([]);
    }
}


export const setLocalStorage = (key: string, data: TableData[]) => {
    localStorage.setItem(key, JSON.stringify(data));
}