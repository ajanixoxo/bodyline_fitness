"use client"
import { Dumbbell, Users, Clock, Trophy, ArrowRight, PlayCircle } from "lucide-react"

import SectionTitle from "../components/SectionTitle"
import ClassCard from "../components/ClassCard"
import TrainerCard from "../components/TrainerCard"
import MembershipCard from "../components/MembershipCard"
import TestimonialCard from "../components/TestimonialCard"
import Schedule from "../components/Schedule"
import ContactForm from "../components/ContactForm"


const HomePage = () => {
  // Sample data for classes
  const classes = [
    {
      title: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive strength training program.",
      duration: "60 min",
      capacity: "15",
      intensity: "High",
      image: "/placeholder.svg?height=400&width=600",
      trainer: "John Smith",
    },
    {
      title: "Cardio Blast",
      description: "High-energy cardio workout to improve endurance and burn calories.",
      duration: "45 min",
      capacity: "20",
      intensity: "High",
      image: "/placeholder.svg?height=400&width=600",
      trainer: "Emma Davis",
    },
    {
      title: "Yoga Flow",
      description: "Find balance and flexibility through dynamic yoga sequences.",
      duration: "75 min",
      capacity: "18",
      intensity: "Medium",
      image: "/placeholder.svg?height=400&width=600",
      trainer: "Sarah Wilson",
    },
    // Add more classes as needed
  ]

  // Sample data for trainers
  const trainers = [
    {
      name: "John Smith",
      specialty: "Strength & Conditioning",
      image: "/placeholder.svg?height=600&width=400",
      bio: "Certified strength coach with 10+ years of experience.",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Emma Davis",
      specialty: "Cardio & HIIT",
      image: "/placeholder.svg?height=600&width=400",
      bio: "Former athlete turned fitness instructor. Specializes in high-intensity workouts.",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Wilson",
      specialty: "Yoga & Pilates",
      image: "/placeholder.svg?height=600&width=400",
      bio: "Experienced yoga instructor with a focus on mindfulness and body awareness.",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    // Add more trainers as needed
  ]

  // Sample data for membership plans
  const membershipPlans = [
    {
      name: "Basic",
      price: "29",
      duration: "month",
      features: ["Access to gym facilities", "Basic equipment usage", "Locker room access", "Free parking"],
    },
    {
      name: "Premium",
      price: "59",
      duration: "month",
      popular: true,
      features: [
        "All Basic features",
        "Group fitness classes",
        "Personal training session",
        "Nutrition consultation",
        "Access to spa facilities",
      ],
    },
    {
      name: "Elite",
      price: "99",
      duration: "month",
      features: [
        "All Premium features",
        "Unlimited personal training",
        "Priority class booking",
        "Exclusive member events",
        "Guest passes",
        "Towel service",
      ],
    },
  ]

  // Sample data for testimonials
  const testimonialsData = [
    {
      name: "Michael Brown",
      role: "Member since 2020",
      image: "https://placehold.co/400x400",
      rating: 5,
      testimonial:
        "Joining Bodyline Fitness was the best decision I've made for my health. The trainers are exceptional!",
    },
    {
      name: "Jennifer Lee",
      role: "Member since 2021",
      image: "https://placehold.co/400x400",
      rating: 5,
      testimonial:
        "The facilities are top-notch and the community is so supportive. I've achieved results I never thought possible.",
    },
    {
      name: "David Wilson",
      role: "Member since 2019",
      image: "https://placehold.co/400x400",
      rating: 4,
      testimonial: "Great variety of classes and equipment. The trainers really know how to push you to your limits.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/5.jpg"
            alt="Hero background"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <h1 className="script-font text-5xl md:text-7xl font-bold mb-6" data-aos="fade-up">
            Transform Your Body
            <br />
            Transform Your Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200" data-aos="fade-up" data-aos-delay="100">
            Join Bodyline Fitness & Gym for a stronger, healthier you. State-of-the-art facilities and expert trainers
            to guide your fitness journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <a
              href="#membership"
              className="inline-flex items-center px-8 py-3 bg-green text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <Dumbbell className="w-5 h-5 mr-2" />
              Start Your Journey
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-3 bg-white text-navy rounded-full hover:bg-gray-100 transition-colors"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Take a Tour
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up">
              <Dumbbell className="w-8 h-8 text-green mx-auto mb-2" />
              <h3 className="text-3xl font-bold text-navy mb-1">1,000+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <Users className="w-8 h-8 text-green mx-auto mb-2" />
              <h3 className="text-3xl font-bold text-navy mb-1">20+</h3>
              <p className="text-gray-600">Expert Trainers</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <Clock className="w-8 h-8 text-green mx-auto mb-2" />
              <h3 className="text-3xl font-bold text-navy mb-1">50+</h3>
              <p className="text-gray-600">Weekly Classes</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <Trophy className="w-8 h-8 text-green mx-auto mb-2" />
              <h3 className="text-3xl font-bold text-navy mb-1">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Gym facilities"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div data-aos="fade-left">
              <SectionTitle
                title="About Our Gym"
                subtitle="Welcome to Bodyline Fitness & Gym, where we turn your fitness goals into reality."
                center={false}
              />

              <p className="mb-6 text-gray-600">
                At Bodyline Fitness, we believe in providing more than just a place to work out. Our state-of-the-art
                facility is equipped with the latest fitness technology and staffed by certified professionals who are
                passionate about helping you achieve your goals.
              </p>

              <p className="mb-8 text-gray-600">
                Whether you're just starting your fitness journey or looking to take your training to the next level, we
                offer a wide range of equipment, classes, and personalized programs to suit your needs.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-green rounded-full p-2 mr-4">
                    <Dumbbell className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Modern Equipment</h3>
                    <p className="text-sm text-gray-600">Latest fitness technology</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green rounded-full p-2 mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Expert Trainers</h3>
                    <p className="text-sm text-gray-600">Certified professionals</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green rounded-full p-2 mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Flexible Hours</h3>
                    <p className="text-sm text-gray-600">Open 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green rounded-full p-2 mr-4">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Proven Results</h3>
                    <p className="text-sm text-gray-600">Success stories</p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-full hover:bg-navy-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Classes"
            subtitle="Choose from a variety of classes designed to help you achieve your fitness goals"
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <ClassCard key={index} {...classItem} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#schedule"
              className="inline-flex items-center px-8 py-3 bg-navy text-white rounded-full hover:bg-navy-700 transition-colors"
            >
              View Schedule
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Trainers"
            subtitle="Meet our team of expert trainers dedicated to helping you achieve your goals"
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} {...trainer} />
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Membership Plans"
            subtitle="Choose the perfect membership plan for your fitness journey"
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <MembershipCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Class Schedule"
            subtitle="Find the perfect time for your workout with our weekly class schedule"
            center={true}
          />

          <Schedule />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Success Stories"
            subtitle="Hear what our members have to say about their experience"
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Get in Touch"
            subtitle="Have questions? We're here to help you start your fitness journey"
            center={true}
            light={true}
          />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage

