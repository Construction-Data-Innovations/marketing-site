"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import LandingNav from "@/components/landing/landing-nav"
import LandingFooter from "@/components/landing/landing-footer"
import { WaitingListModal } from "@/components/waiting-list-modal"
import {ChartColumn, CalendarCheck2, User} from "lucide-react" 

export default function HomePage() {
  const [waitingListOpen, setWaitingListOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      <LandingNav />

      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Intelligent Bid Estimation and Schedule Planning{" "}
            <span className="text-blue-600">for the Construction Industry</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Upload your historical documents, connect to your existing apps, and access AI-powered construction solutions – all in one platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
           
            <Button size="lg" onClick={() => setWaitingListOpen(true)} className="text-lg px-8 py-3 bg-blue-600 duration-500">
              Join the Waiting List
            </Button>

            <Button size="lg" onClick={() => { window.location.href = "https://constructwise-ai.vercel.app/login" }} className="text-lg px-8 py-3 bg-white border border-gray-400 text-black hover:bg-blue-300 duration-500">
              Early Access
            </Button>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-600">Time saved generating bids</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-gray-600">Increase in bid win rates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-gray-600">Reduction in costly errors</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 justify-center m-12 text-3xl md:text-4xl font-semibold">Complete Construction Intelligence Platform</div>
        <p className="text-2xl text-center text-gray-600 mb-8 max-w-3xl mx-auto">From initial planning to project completion, ConstructWise provides AI-powered solutions for your numeric bid & schedule data </p>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <ChartColumn className="h-12 w-12 text-blue-600"/>
              <div className="text-xl font-semibold my-2">Cost Estimates</div>
              <p className="text-gray-600">AI-powered cost breakdowns with risk analysis and optimization suggestions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <CalendarCheck2 className="h-12 w-12 text-blue-600"/>
              <div className="text-xl font-semibold my-2">Schedules</div>
              <p className="text-gray-600">No more manually typing schedule activities in P6 or MS Project with complicated WBS, dependencies, and resources. Streamline critical path scheduling and then query your schedule.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <User className="h-12 w-12 text-blue-600"/>
             <div className="text-xl font-semibold my-2">Forecasting</div>
              <p className="text-gray-600">Predictive analytics in a whole new light</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Generate High Quality Cost Estimates</h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your proposal process with ConstructWise&apos;s advanced AI engine. Generate comprehensive, tailored proposals in minutes instead of days.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">10x faster</div>
                  <span className="text-gray-700">Than traditional methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">30% higher</div>
                  <span className="text-gray-700">Win rate for clients</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
                <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4">
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
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className=" bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Construction Schedule Optimization</h2>
              <p className="text-lg text-gray-600 mb-8">
               Leverage our intelligence platform to create and optimize construction schedules based on your company&apos;s historical data. Model your timelines, resource needs, and potential risks before making decisions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">95% accuracy</div>
                  <span className="text-gray-700">In timeline predictions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">40% reduction</div>
                  <span className="text-gray-700">In project delays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless Integration & Actionable Insights</h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect to your existing apps and pull your relevant construction data into one place. Get actionable insights through ConstructWise&apos;s conversational chat to make better decisions, based on your company&apos;s own job histories 
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Multiple Integrations</div>
                  <span className="text-gray-700">With popular construction apps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Actionable insights</div>
                  <span className="text-gray-700">From all your historical bid and project data</span>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
             <h2 className="text-4xl font-bold text-gray-900 mb-10">How to Get Started</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] text-2xl font-bold bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                1
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Start for free</h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Sign up and be first on the waitlist to use ConstructWise as your trusted, daily cost proposal and schedule management platform. 
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] text-2xl font-bold bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                2
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Connect & upload</h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Upload your historical construction files and connect to your existing apps to gain deeper understanding of your data.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] text-2xl font-bold bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                3
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Generate & optimize</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
                Create accurate cost estimates and optimized construction schedules with our intelligence platform.
              </p>
            </div>

          </div>
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
