import { TableData } from "@/types/type";
import data from '../../config.json';



export const getLocalStorage = (key: string): TableData[] => {
    const value = localStorage.getItem(key);
    const objValue = JSON.parse(value);

    if(objValue === null) return []

    return objValue;
}


export const setLocalStorage = (key: string, data: TableData[]) => {
    localStorage.setItem(key, JSON.stringify(data));
}