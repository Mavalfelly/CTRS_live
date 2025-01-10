/* eslint-disable react/prop-types */
const PageHeader = ({ 
    title,
    backgroundImage = "/api/placeholder/1200/400",
    minHeight = "h-48",
    overlayOpacity = "bg-black/50"
  }) => {
    return (
      <div 
        className={`relative w-full ${minHeight} flex items-center justify-center`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`
          }}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayOpacity}`} />
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white px-4">
            {title}
          </h1>
        </div>
      </div>
    );
  };
  
  export default PageHeader;