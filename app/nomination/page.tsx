"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function NominationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    category: "",
    achievements: "",
    gender: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    alert("Nomination submitted successfully!")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      category: "",
      achievements: "",
      gender: "",
    })
  }

  return (
    <main className="py-16 px-4 bg-gray-50 min-h-screen">
      <motion.div className="max-w-3xl mx-auto" initial="hidden" animate="visible" variants={fadeIn}>
        <Card className="p-8 shadow-lg">
          <div className="bg-[#2783ac] text-white py-4 px-6 -mx-8 -mt-8 mb-8 rounded-t-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-center">Nomination Form</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="organization">Organization/Institution</Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Enter your organization or institution"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Award Category</Label>
                <Select onValueChange={(value) => handleSelectChange("category", value)} value={formData.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select award category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Start-Up Awards</SelectItem>
                    <SelectItem value="entrepreneurship">Entrepreneurship & Business Excellence</SelectItem>
                    <SelectItem value="technology">Technology & Innovation</SelectItem>
                    <SelectItem value="education">Education & Academia</SelectItem>
                    <SelectItem value="healthcare">Healthcare & Wellness</SelectItem>
                    <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                    <SelectItem value="realestate">Real Estate & Architecture</SelectItem>
                    <SelectItem value="arts">Arts, Media & Literature</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="achievements">Achievements & Contributions</Label>
                <Textarea
                  id="achievements"
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  placeholder="Describe your achievements and contributions"
                  rows={5}
                  required
                />
              </div>

              <div>
                <Label>Gender</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => handleSelectChange("gender", value)}
                  className="flex space-x-8 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#2783ac] hover:bg-[#005f8b] text-white py-3 text-lg">
              Submit Nomination
            </Button>
          </form>
        </Card>
      </motion.div>
    </main>
  )
}
