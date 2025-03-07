"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Dumbbell } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "nav-blur bg-white/80 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gym%20img.jpg-g4iSyHQe1ZZzA7J08XnQBPXf9kHyWB.jpeg"
              alt="Bodyline Fitness & Gym Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-200 hover:text-green transition-colors">
              Home
            </Link>
            <a href="#about" className="text-gray-200 hover:text-green transition-colors">
              About
            </a>
            <a href="#classes" className="text-gray-200 hover:text-green transition-colors">
              Classes
            </a>
            <a href="#trainers" className="text-gray-200 hover:text-green transition-colors">
              Trainers
            </a>
            <a href="#membership" className="text-gray-200 hover:text-green transition-colors">
              Membership
            </a>
            <a href="#schedule" className="text-gray-200 hover:text-green transition-colors">
              Schedule
            </a>
            <a href="#contact" className="text-gray-200 hover:text-green transition-colors">
              Contact
            </a>
          </nav>

          {/* Join Now Button */}
          <div className="hidden md:block">
            <a
              href="#membership"
              className="inline-flex items-center px-6 py-2 bg-green text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <Dumbbell className="w-4 h-4 mr-2" />
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-200 hover:text-green transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 bg-white shadow-lg" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="text-gray-200 hover:text-green transition-colors">
            Home
          </Link>
          <a href="#about" className="text-gray-200 hover:text-green transition-colors">
            About
          </a>
          <a href="#classes" className="text-gray-200 hover:text-green transition-colors">
            Classes
          </a>
          <a href="#trainers" className="text-gray-200 hover:text-green transition-colors">
            Trainers
          </a>
          <a href="#membership" className="text-gray-200 hover:text-green transition-colors">
            Membership
          </a>
          <a href="#schedule" className="text-gray-200 hover:text-green transition-colors">
            Schedule
          </a>
          <a href="#contact" className="text-gray-200 hover:text-green transition-colors">
            Contact
          </a>
          <a
            href="#membership"
            className="inline-flex items-center justify-center px-6 py-2 bg-green text-white rounded-full hover:bg-green-600 transition-colors"
          >
            <Dumbbell className="w-4 h-4 mr-2" />
            Join Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

