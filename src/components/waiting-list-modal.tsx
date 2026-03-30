"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, User, Building, CheckCircle, Phone } from 'lucide-react'
import { supabase } from "@/lib/supabase/client"

interface WaitingListModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitingListModal({ open, onOpenChange }: WaitingListModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  })
  
  //  Added ref for phone input to handle cursor positioning
  const phoneInputRef = useRef<HTMLInputElement>(null)


  //  Added phone number formatting function
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '')
    
    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10)
    
    // Format based on length
    if (limitedDigits.length <= 3) {
      return limitedDigits.length > 0 ? `(${limitedDigits}` : ''
    } else if (limitedDigits.length <= 6) {
      return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`
    } else {
      return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Waiting list submission:", formData)
    const { error } = await supabase.from("waitlist").insert([{
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone 
    }])

    if (error) {
      console.error("Error inserting to waitlist: ", error);
      return;
    }
    setIsSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", phone: ""})
      onOpenChange(false)
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    //  Special handling for phone number formatting
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value)
      setFormData({
        ...formData,
        [name]: formattedPhone,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  //  Added phone input key handler for better backspace behavior
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const input = e.currentTarget
      const cursorPosition = input.selectionStart || 0
      const value = input.value
      
      // If cursor is right after a formatting character, move it back
      if (cursorPosition > 0 && (value[cursorPosition - 1] === ')' || value[cursorPosition - 1] === '-')) {
        setTimeout(() => {
          input.setSelectionRange(cursorPosition - 1, cursorPosition - 1)
        }, 0)
      }
    }
  }

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">You&apos;re on the list!</DialogTitle>
            <DialogDescription className="text-gray-600">
              Thanks for joining our waiting list. We&apos;ll notify you as soon as ConstructWise is ready for early access.
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-900">Join the Waiting List</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Be the first to experience AI-powered construction planning. Get early access and exclusive updates.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleInputChange}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                ref={phoneInputRef}
                id="phone"
                name="phone"
                type="text"
                placeholder="(___)-___-____"
                value={formData.phone}
                onChange={handleInputChange}
                onKeyDown={handlePhoneKeyDown}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Join Waiting List
          </Button>
        </form>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">What you&apos;ll get</span>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Early access to ConstructWise platform</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Exclusive product updates and features</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Special launch pricing and discounts</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
