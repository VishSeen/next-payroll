'use client'

import TableView from '@/components/table-view/table-view';
import { useEffect, useLayoutEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { TableData } from '@/types/type';

export default function Gestion() {
    const [value, setValue] = useLocalStorage("Table");
    const [localChanged, setLocalChanged] = useState(false)

    const deleteItemClick = (e: Event) => {
        const id = e.target.closest('tr').getAttribute('id');

        const newValue: TableData[] = value.filter((item) => {
            return (item.id) !== Number(id);
        });

        setValue(newValue);
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>
                Sous Module: Gestion des Soldes
            </h1>


            <TableView data={value} deleteClick={deleteItemClick} />
        </main>
    )
}
