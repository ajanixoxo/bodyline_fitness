import { Clock, Users, Dumbbell } from "lucide-react"

const ClassCard = ({ title, description, duration, capacity, intensity, image, trainer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-gray-200 text-sm">{trainer}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-green" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1 text-green" />
            <span>{capacity} people</span>
          </div>
          <div className="flex items-center">
            <Dumbbell className="w-4 h-4 mr-1 text-green" />
            <span>{intensity}</span>
          </div>
        </div>

        <button className="mt-6 w-full py-2 bg-navy text-white rounded-full hover:bg-navy-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default ClassCard

