'use client'

import TableView from '@/components/table-view/table-view'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function Absence() {
    const click = (e) => {
        console.log(e)
        e.target.closest('tr').remove();
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>
                Page: Absences

                <TableView deleteClick={click}/>
            </h1>
        </main>
    )
}
