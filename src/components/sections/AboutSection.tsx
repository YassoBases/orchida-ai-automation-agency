export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
          About Us
        </h2>
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed text-orchid-100/80">
            At Orchida, we're passionate about transforming businesses through the
            power of artificial intelligence. Our mission is to make advanced AI
            technology accessible, ethical, and practical for businesses of all
            sizes.
          </p>
          <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-orchid-100/80">
            Founded by a team of AI experts and industry veterans, we combine
            cutting-edge technology with deep business understanding to deliver
            solutions that drive real results. Our approach focuses on creating
            seamless, efficient, and scalable AI implementations that grow with
            your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="text-center p-4">
              <h4 className="font-montserrat font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
                Our Mission
              </h4>
              <p className="text-sm md:text-base text-orchid-100/80">
                To democratize AI technology and make it accessible to businesses
                worldwide
              </p>
            </div>
            <div className="text-center p-4">
              <h4 className="font-montserrat font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
                Our Vision
              </h4>
              <p className="text-sm md:text-base text-orchid-100/80">
                To lead the AI revolution while maintaining ethical practices and
                transparency
              </p>
            </div>
            <div className="text-center p-4">
              <h4 className="font-montserrat font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
                Our Values
              </h4>
              <p className="text-sm md:text-base text-orchid-100/80">
                Innovation, Integrity, and Customer Success drive everything we do
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};