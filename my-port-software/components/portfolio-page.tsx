'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Palette, Database, ExternalLink } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all")
  
  const projects = [
    {
      title: "Web Development",
      description: "Full-stack applications built with modern technologies",
      icon: <Globe className="w-6 h-6 text-white" />,
      category: "web",
      className: "md:col-span-2 md:row-span-2",
      link: "/web-development"
    },
    {
      title: "Graphic Design", 
      description: "Brand identity and visual design projects",
      icon: <Palette className="w-6 h-6 text-white" />,
      category: "design",
      className: "md:col-span-1 md:row-span-1",
      link: "/graphic-design"
    },
    {
      title: "Data Science",
      description: "Data analysis and machine learning projects",
      icon: <Database className="w-6 h-6 text-white" />,
      category: "data",
      className: "md:col-span-1 md:row-span-1",
      link: "/data-science"
    }
  ]

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <div className="relative min-h-screen"> {/* Removed bg-[#f5f5f5] */}
      <div className="relative z-10 min-h-screen p-8 md:p-12 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-black">©2024</span>
          <a href="#contact" className="text-sm text-black hover:text-gray-600 transition-colors">
            CONTACT
          </a>
        </div>
        <header className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black satoshi-black">ADAM AXTOPANI GONZALES</h1>
        </header>

        {/* Content container with background image */}
        <div className="rounded-t-[3rem] flex-grow p-6 relative overflow-hidden">
          {/* Background Image - Now inside the content container */}
          <div className="absolute inset-0">
            <Image
              src="/images/sand-bg.jpg"
              alt="Background"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            {/* Overlay with inner shadow */}
            <div className="absolute inset-0 bg-black/30 shadow-[inset_0_0_50px_rgba(0,0,0,1)]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <p className="text-xl md:text-2xl fotn  text-white max-w-2xl satoshi-black mb-12">
              A multidisciplinary creator specializing in Web Development, Graphic Design, 
              and Data Science, crafting digital experiences that merge aesthetics with functionality.
            </p>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="backdrop-blur-md bg-white/10 border border-white/20">
                <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                  All Work
                </TabsTrigger>
                <TabsTrigger value="web" onClick={() => setActiveTab("web")}>
                  Web Development
                </TabsTrigger>
                <TabsTrigger value="design" onClick={() => setActiveTab("design")}>
                  Graphic Design
                </TabsTrigger>
                <TabsTrigger value="data" onClick={() => setActiveTab("data")}>
                  Data Science
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => (
                <Link href={project.link} key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative overflow-hidden rounded-3xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 p-6 ${project.className}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                        {project.icon}
                      </div>
                      <ExternalLink className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      {project.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
