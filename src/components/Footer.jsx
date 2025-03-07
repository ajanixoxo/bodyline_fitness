import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, Dumbbell, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gym%20img.jpg-g4iSyHQe1ZZzA7J08XnQBPXf9kHyWB.jpeg"
                alt="Bodyline Fitness & Gym Logo"
                className="h-12 w-auto bg-white rounded-md p-1"
              />
            </Link>
            <p className="mb-4 text-gray-300">
              Transform your body, transform your life. Join our community of fitness enthusiasts and achieve your
              goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-green transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#classes" className="text-gray-300 hover:text-green transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-300 hover:text-green transition-colors">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-300 hover:text-green transition-colors">
                  Membership
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-green transition-colors">
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Classes</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Dumbbell className="h-4 w-4 mr-2" />
                <span>Strength Training</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Heart className="h-4 w-4 mr-2" />
                <span>Cardio Fitness</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Dumbbell className="h-4 w-4 mr-2" />
                <span>CrossFit</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Heart className="h-4 w-4 mr-2" />
                <span>Yoga</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Dumbbell className="h-4 w-4 mr-2" />
                <span>Boxing</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Heart className="h-4 w-4 mr-2" />
                <span>Zumba</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green" />
                <span className="text-gray-300">123 Fitness Street, Gym City, GC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green" />
                <span className="text-gray-300">info@bodylinefitness.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-green" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 5:00 AM - 10:00 PM</p>
                  <p>Sat-Sun: 7:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Bodyline Fitness & Gym Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

