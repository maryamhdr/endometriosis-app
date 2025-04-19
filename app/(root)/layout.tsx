import React from "react";
import Navbar from "@/app/components/Navbar";

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className='font-fira-sans'>
            <Navbar/>
            {children}
        </main>
    );
};