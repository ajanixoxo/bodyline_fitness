import { Facebook, Instagram, Twitter } from "lucide-react"

const TrainerCard = ({ name, specialty, image, bio, socialLinks }) => {
  return (
    <div className="trainer-card rounded-lg overflow-hidden" data-aos="fade-up">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-96 object-cover" />

      <div className="trainer-info">
        <h3 className="text-xl font-bold text-navy">{name}</h3>
        <p className="text-green font-medium mb-2">{specialty}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>

        <div className="flex space-x-4">
          {socialLinks?.facebook && (
            <a
              href={socialLinks.facebook}
              className="text-navy hover:text-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
          {socialLinks?.instagram && (
            <a
              href={socialLinks.instagram}
              className="text-navy hover:text-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {socialLinks?.twitter && (
            <a
              href={socialLinks.twitter}
              className="text-navy hover:text-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrainerCard

