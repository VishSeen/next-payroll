import { TableData } from "@/types/type";
import data from '../../config.json';



export const getLocalStorage = (key: string): TableData[] => {
    let value: string | null = "";
    let objValue = [];

    if(typeof window !== "undefined") {
        value = localStorage.getItem(key);
        if(value !== null) {
            objValue = JSON.parse(value);
        }
    }

    return objValue
}


export const setLocalStorage = (key: string, data: TableData[]) => {
    localStorage.setItem(key, JSON.stringify(data));
}