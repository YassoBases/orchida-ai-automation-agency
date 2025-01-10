export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-orchid-50 dark:bg-orchid-900/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-8">
          About <span className="text-primary">Us</span>
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
            At Orchida, we're passionate about transforming businesses through the
            power of artificial intelligence. Our mission is to make advanced AI
            technology accessible, ethical, and practical for businesses of all
            sizes.
          </p>
          <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
            Founded by a team of AI experts and industry veterans, we combine
            cutting-edge technology with deep business understanding to deliver
            solutions that drive real results. Our approach focuses on creating
            seamless, efficient, and scalable AI implementations that grow with
            your business.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-xl mb-2">
                Our Mission
              </h4>
              <p className="text-muted-foreground">
                To democratize AI technology and make it accessible to businesses
                worldwide
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-xl mb-2">
                Our Vision
              </h4>
              <p className="text-muted-foreground">
                To lead the AI revolution while maintaining ethical practices and
                transparency
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-montserrat font-semibold text-xl mb-2">
                Our Values
              </h4>
              <p className="text-muted-foreground">
                Innovation, Integrity, and Customer Success drive everything we do
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};