import { TableData } from "@/types/type";


const removeDuplicate = (arr: TableData[]) => {
    const uniqueItem: string[] = [];

    const unique = arr.filter(item => {
        const isDuplicate: boolean = uniqueItem.includes(item?.user);

        if(!isDuplicate) {
            uniqueItem.push(item.user)
        }
    });

    return uniqueItem;
}


export default removeDuplicate;