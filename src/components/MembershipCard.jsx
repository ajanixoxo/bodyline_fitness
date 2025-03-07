import { Check } from "lucide-react"

const MembershipCard = ({ name, price, duration, features, popular = false, buttonText = "Choose Plan" }) => {
  return (
    <div
      className={`membership-card bg-white rounded-lg p-8 ${
        popular ? "border-2 border-green shadow-xl" : "border border-gray-200 shadow-lg"
      }`}
      data-aos="fade-up"
    >
      {popular && (
        <div className="bg-green text-white text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-navy mb-2">{name}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold text-navy">${price}</span>
        <span className="text-gray-500 ml-2">/{duration}</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green mr-2 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-full transition-colors ${
          popular ? "bg-green text-white hover:bg-green-600" : "bg-navy text-white hover:bg-navy-700"
        }`}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default MembershipCard

