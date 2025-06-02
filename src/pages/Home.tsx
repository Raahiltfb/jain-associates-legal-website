
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Building, 
  Home as HomeIcon, 
  Users, 
  Gavel, 
  FileText,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Home: React.FC = () => {
  const featuredServices = [
    {
      icon: <Gavel className="w-8 h-8 text-primary" />,
      title: "Litigation & Dispute Resolution",
      description: "Expert representation in civil, commercial, and criminal matters before all courts and tribunals."
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Corporate & Commercial Law",
      description: "Comprehensive corporate legal services from incorporation to M&A transactions."
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-primary" />,
      title: "Real Estate & Property Law",
      description: "Complete property legal solutions including due diligence, documentation, and RERA compliance."
    }
  ];

  const whyChooseUs = [
    "3+ years of independent practice experience",
    "Comprehensive legal expertise across 20+ practice areas",
    "Client-focused approach with personalized solutions",
    "Strong network of experienced counsels and experts",
    "Proven track record in courtroom advocacy",
    "End-to-end legal support from advisory to litigation"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-0" />
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Your Trusted Legal Partners
                <span className="block text-primary">From Courtroom to Boardroom</span>
              </h1>
              <p className="text-xl text-gray-700 mt-6 leading-relaxed">
                At Sneha Jain & Associates, we provide comprehensive legal services with strategic thinking, personalized
                attention, and unwavering commitment to your success.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact" className="flex items-center">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                  <Link to="/practice-areas">View Practice Areas</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-200">
                <Scale className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Professional Legal Excellence</h3>
                <p className="text-gray-700 mb-6">
                  Building confidence through expert legal representation and strategic advisory services.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 text-gray-400 mr-1" />
                  <Link to="/testimonials" className="hover:text-primary transition-colors cursor-pointer">
                    Trusted by clients across India
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Core Practice Areas
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive legal services tailored to meet your unique needs across 
              litigation and non-litigation domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                  <Link to="/practice-areas" className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/practice-areas">
                View All Practice Areas
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Why Choose Sneha Jain & Associates?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                With years of independent practice and a commitment to excellence, 
                we bring strategic thinking and personalized attention to every case.
              </p>
              
              <div className="space-y-4">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-gray-700 mb-6">
                Contact us today for a consultation and let us help you navigate 
                your legal challenges with confidence.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" asChild>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                    </svg>
                    Schedule via WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" size="lg" asChild>
                  <a href="mailto:contact@snehajainlaw.com">
                    Email for Consultation
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" size="lg" asChild>
                  <Link to="/contact">
                    Visit Contact Page
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Professional Legal Support When You Need It Most
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't let legal complexities hold you back. Our experienced team is here 
            to provide the strategic guidance and representation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100" asChild>
              <a href="tel:+919876543210" className="flex items-center">
                Call Now: +91 98765 43210
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
