import { Star } from "lucide-react"

const TestimonialCard = ({ name, role, image, rating, testimonial }) => {
  return (
    <div className="testimonial-card bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
      <div className="flex items-center mb-6">
        <img src={image || "/placeholder.svg"} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-bold text-navy">{name}</h4>
          <p className="text-green text-sm">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial}</p>
    </div>
  )
}

export default TestimonialCard

