import { TableData } from "@/types/type";
import { useEffect, useState } from "react"
import data from '../../config.json';


const useLocalStorage = (key: string) => {
    const mockData: TableData[] = data?.data?.table?.mock;
    const [value, setValue] = useState<TableData[]>();

    if(value === null || value === undefined) {
        setValue(mockData)
    }

    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event('storage'))

    return [value, setValue] as const;
}

export default useLocalStorage;