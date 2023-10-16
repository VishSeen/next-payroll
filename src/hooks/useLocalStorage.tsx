import { TableData } from "@/types/type";
import { useEffect, useState } from "react"
import data from '../../config.json';


const useLocalStorage = (key: string) => {
    const mockData: TableData[] = data?.data?.table?.mock;
    const [value, setValue] = useState<TableData[]>();

    if(value === null || value === undefined) {
        setValue(mockData)
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue] as const;
}

export default useLocalStorage;