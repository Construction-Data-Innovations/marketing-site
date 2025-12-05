"use client"
import { useState } from "react"
import { WaitingListModal } from "@/components/waiting-list-modal"
import { Button } from "@/components/ui/button"
import LandingNav from "@/components/landing/landing-nav"
import LandingFooter from "@/components/landing/landing-footer"

export default function AboutPage() {
    const [waitingListOpen, setWaitingListOpen] = useState(false)
    return (
        <div className="min-h-screen bg-white pt-16">
        <LandingNav />
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    The Construction Platform to Plan Smarter
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    At ConstructWise we&apos;re committed to building software for construction professionals. Estimators and schedulers spend dozens of hours a week analyzing files, building Excel models, and entering data one activity at a time — valuable yet manual and time-consuming work that limits your company&apos;s project win rates and profitability.
                </p>
            </div>
        </section>

         <section className="py-20 text-center bg-gray-50">
            <div className="mx-auto px-4">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-semibold mb-8">Purpose built for the Construction Industry</h2>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            
                            <div className="text-xl font-semibold my-2">General Contractors</div>
                            <p className="text-gray-600">Automatically generate multi-trade, comprehensive bids and then customize to your risk tolerance. Easily retrieve all the information that&apos;s living in file folders, document clouds, and emails so you submit proposals with confidence.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            
                            <div className="text-xl font-semibold my-2">Developers</div>
                            <p className="text-gray-600">When you&apos;re developing conceptual budgets for a new development, or you&apos;re in the thick of construction, ConstructWise will help you manage your cost basis, track draws with confidence, and deliver projects the way you underwrote them.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            
                            <div className="text-xl font-semibold my-2">Trade Contractors</div>
                            <p className="text-gray-600">If you generate repetitive bid estimates or have a detailed menu of items, use ConstructWise to review for accuracy, pesky Excel errors, or benchmarking against your own data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 text-center">
                <p className="text-3xl font-semibold text-gray-600 max-w-3xl mx-auto mb-8">
                    We help make sense of all the unstructured numeric data in AEC firms, so that their teams can make sounder decisions and tackle uncertainties.
                </p>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
            <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Elevate Your Construction Planning Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join other innovative construction companies who are leveraging ConstructWise&apos;s vertical AI to generate better cost estimates and construction schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3 hover:bg-black hover:text-white duration-500"
                onClick={() => setWaitingListOpen(true)}
                >
                Join the Waiting List
                </Button>
                <Button size="lg" onClick={() => { window.location.href = "https://constructwise-ai.vercel.app/login" }} className="text-lg px-8 py-3 bg-white border border-gray-400 text-black hover:bg-blue-300 duration-500">
                Early Access
                </Button>
                
            </div>
            </div>
        </section>
        <LandingFooter />
        <WaitingListModal open={waitingListOpen} onOpenChange={setWaitingListOpen} />
        </div>
    )
}
