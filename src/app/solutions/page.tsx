"use client"
import { useState } from "react"
import { WaitingListModal } from "@/components/waiting-list-modal"
import {  Brain, Calculator, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import LandingNav from "@/components/landing/landing-nav"
import LandingFooter from "@/components/landing/landing-footer"

export default function SolutionsPage() {
    const [waitingListOpen, setWaitingListOpen] = useState(false)
    return (
        <div className="min-h-screen bg-white pt-16">
        <LandingNav />
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Created for Every Builder by Builders 
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto m-4">
                Go from unstructured files and takeoffs to comprehensive, detailed cost estimates and Gannt chart schedules in minutes
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto m-4">
                When a firm joins ConstructWise, we ingest their historical cost proposals, P&Ls, CPM schedules, and unit rates. The AI adapts to their methods &ndash; not the other way around. 
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto m-4">
                So when they upload their data, the system doesn&apos;t spit out generic analysis. It generates a 70%-complete, detailed cost estimate with matching baseline schedule, as if their seasoned estimators had created the draft. Construction teams can then refine it with AI-powered queries, but the baseline already fits their process.
            </p>
            
            </div>
        </section>

        {/* Cost Estimators Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                    <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Cost Estimating</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Build detailed cost estimates with intelligent forecasts and real-time collaboration
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>AI-powered cost proposal where you always remain in the driver&apos;s seat</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Not just automation &ndash; customization that preserves your company&apos;s secret sauce while making your team exponentially faster</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Simulate real-world scenarios, then choose your plans according to your risk level</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Historical data integration for more accurate forecasting</span>
                    </li>
                </ul>
                </div>
                <div className="order-1 md:order-2 bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                    <div className="p-4">
                    <div className="h-8 bg-blue-100 rounded-md w-1/3 mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-6 bg-gray-100 rounded-md w-full"></div>
                        <div className="h-6 bg-gray-100 rounded-md w-5/6"></div>
                        <div className="h-6 bg-gray-100 rounded-md w-4/6"></div>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="h-20 bg-blue-50 rounded-md"></div>
                        <div className="h-20 bg-blue-50 rounded-md"></div>
                        <div className="h-20 bg-blue-50 rounded-md"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* General Contractors Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
                <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4">
                    <div className="h-8 bg-blue-100 rounded-md w-1/3 mb-4"></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="h-32 bg-blue-50 rounded-md"></div>
                        <div className="h-32 bg-green-50 rounded-md"></div>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-md w-full"></div>
                    </div>
                </div>
                </div>
                <div>
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                    <HardHat className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Schedule Building</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Create dynamic project schedules with intelligent dependency management and resource allocation
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Interactive Gantt chart with drag-and-drop functionality</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Automatic critical path calculation and visualization</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Schedule risk analysis with simulations</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Schedules for any stage of the project lifecycle</span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* Civil Engineers Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                    <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Assistant</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Get intelligent insights and recommendations from our construction-specialized AI assistant
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Construction-specific knowledge base for accurate answers</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Automated cost and schedule optimization suggestions</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Risk identification based on historical project data</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Query in natural language and visualize your data dynamically</span>
                    </li>
                </ul>
                </div>
                <div className="order-1 md:order-2 bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                    <div className="p-4">
                    <div className="h-8 bg-blue-100 rounded-md w-1/3 mb-4"></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="h-32 bg-red-50 rounded-md"></div>
                        <div className="h-32 bg-yellow-50 rounded-md"></div>
                    </div>
                    <div className="h-24 bg-blue-50 rounded-md w-full"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:w-[80%] lg:max-w-[40%]">
                <div className="md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2">
                        <div className="mx-4 m-15">
                            <h3 className="text-xl mb-10">&quot;ConstructWise offloads so much of the painstaking manual processes anyone could do. It allows us to spend more time to think critically about bidding decisions and quantify how they&apos;ll impact the holistic project.&quot;</h3>
                            <p className="font-bold">
                                Jeremy Hynum
                            </p>
                            <p className="text-gray-600">
                                Estimator, Rise Construction
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
            <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Elevate Your Construction Planning Today
</h2>
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
                <Button size="lg" onClick={() => { window.location.href = "https://app.constructwise.ai" }} className="text-lg px-8 py-3 bg-white border border-gray-400 text-black hover:bg-blue-300 duration-500">
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
