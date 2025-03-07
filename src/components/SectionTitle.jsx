const SectionTitle = ({ title, subtitle, center = false, light = false }) => {
    return (
      <div className={`mb-12 ${center ? "text-center" : ""}`} data-aos="fade-up">
        <h2 className={`script-font text-4xl md:text-5xl font-bold mb-4 ${light ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-600"}`}>
            {subtitle}
          </p>
        )}
        <div className={`w-24 h-1 bg-green mt-4 mb-2 ${center ? "mx-auto" : ""}`}></div>
      </div>
    )
  }
  
  export default SectionTitle
  
  