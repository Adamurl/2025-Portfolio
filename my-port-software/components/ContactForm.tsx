'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting:', { name, email, phone })
    // Here you would typically send this data to your backend
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, phone }) })
    // Reset form
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-black hover:text-gray-600 transition-colors">
          CONTACT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-3xl backdrop-blur-md bg-white/10 border border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white">Contact Me</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3 backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right text-white">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="col-span-3 backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/50"
            />
          </div>
          <Button type="submit" className="w-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 text-white border border-white/20">Send</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

