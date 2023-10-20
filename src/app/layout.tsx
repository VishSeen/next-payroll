'use client'
import { poppins } from '@/styles/fonts'
import './globals.css'
import type { Metadata } from 'next'
import TopBar from '@/components/top-bar/top-bar'
import SideBar from '@/components/side-bar/side-bar'
import { useState } from 'react'
import ModalForm from '@/components/modal-form/modal-form'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isFormOpen, setIsFormOpen] = useState(false);


    // opens side bar overlay, form and hanburger menu.
    const openElement = () => {
        setIsFormOpen(!isFormOpen)
    }

    return (
        <html lang="en">
            <head>
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </head>
            <body style={poppins.style}>
                <TopBar />

                <SideBar openFormClick={openElement}/>

                <ModalForm open={isFormOpen} viewModalClick={openElement} />

                {children}
            </body>
        </html>
    )
}
