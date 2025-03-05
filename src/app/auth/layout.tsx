"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

const navLinks = [
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot Password", href:"ForgotPassword"},
];

export default function AuthLayout({
    children,
}:{
    children: React.ReactNode
}) {
    const [input,setInput] = useState("");
    const pathname = usePathname();
    return (
        <>
        <nav>
            <input value={input} onChange={(e)=>setInput(e.target.value)} />
            <ul>
                {navLinks.map((link)=>
                {
                const isActive = pathname === link.href || 
                (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <li key={link.href}>
                        <Link className={isActive ?"font-bold mr-4":"text-blue-500 mr-4"}
                        href={link.href}
                        key={link.name}>{link.name}</Link>
                    </li>
                );
})}
            </ul>
        </nav>
        {children}

        </>
    );
}