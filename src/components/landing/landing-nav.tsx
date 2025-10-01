"use client"
import { useState } from "react"
import { ChartColumn } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { WaitingListModal } from "../waiting-list-modal";

export default function LandingNav() {
    const [waitingListOpen, setWaitingListOpen] = useState(false)

    return (
        <>
            <header className="fixed top-0 border-b bg-white/80 backdrop-blur-sm w-full z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
                <ChartColumn className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">ConstructWise</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
                <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
                Solutions
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
                </Link>
            </nav>
            <div className="flex items-center space-x-2">
                <Button
                    onClick={() => setWaitingListOpen(true)}
                    className="bg-blue-600 duration-500 px-3 py-2 text-sm sm:text-base w-auto"
                    >
                    Join the Waiting List
                </Button>
                <Button size="lg" onClick={() => { window.location.href = "https://constr-data-innov-neon.vercel.app/login" }} className="text-lg px-8 py-3 bg-white border border-gray-400 text-black hover:bg-blue-300 duration-500">
                Early Access
                </Button>
            </div>
            </div>
        </header>
        <WaitingListModal open={waitingListOpen} onOpenChange={setWaitingListOpen} />
        </>
    )
}