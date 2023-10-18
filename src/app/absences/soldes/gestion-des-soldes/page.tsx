'use client'

import TableView from '@/components/table-view/table-view';
import { useEffect, useLayoutEffect, useState } from 'react';
import { TableData } from '@/types/type';
import { usePathname } from 'next/navigation';
import { getLocalStorage, setLocalStorage } from '@/util/getLocalStorage';

export default function Gestion() {
    const [data, setData] = useState<TableData[]>([]);
    const pathName = usePathname();
    const value: TableData[] = getLocalStorage("Table");

    const deleteItemClick = (e) => {
        const id = e.target.closest('tr').getAttribute('id');

        const newValue: TableData[] = data.filter((item) => {
            return (item.id) !== id;
        });

        setData(newValue);
        setLocalStorage("Table", newValue);
    }


    useEffect(() => {
        if(value.length !== 0) {
            setData(value);
        }

    }, [pathName])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>
                Sous Module: Gestion des Soldes
            </h1>


            {
                (data.length !== 0) ? (
                    <TableView data={data} deleteClick={deleteItemClick} />
                ) : (
                    <div className="txt-error">
                        <h3>Tableau est vide..</h3>
                        <p>
                            Commencez par ajouter des éléments
                        </p>
                    </div>
                )
            }
        </main>
    )
}
