'use client'

import TableView from '@/components/table-view/table-view';
import { useEffect, useLayoutEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { TableData } from '@/types/type';

export default function Absence() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>
                Page: Absences
            </h1>
        </main>
    )
}
