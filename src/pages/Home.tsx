
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
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Family Law",
      description: "Sensitive handling of matrimonial disputes, custody matters, and domestic relations."
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
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted Legal Partners
                <span className="block text-primary">From Courtroom to Boardroom</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                At Sneha Jain & Associates, we provide comprehensive legal services with 
                strategic thinking, personalized attention, and unwavering commitment to your success.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact" className="flex items-center">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/practice-areas">
                    View Practice Areas
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <Scale className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Legal Excellence
                </h3>
                <p className="text-gray-600 mb-6">
                  Building confidence through expert legal representation and strategic advisory services.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>Trusted by clients across India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Practice Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services tailored to meet your unique needs across 
              litigation and non-litigation domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/practice-areas" className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/practice-areas">
                View All Practice Areas
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Sneha Jain & Associates?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
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
                <Button size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today for a consultation and let us help you navigate 
                your legal challenges with confidence.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full" size="lg" asChild>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    Schedule via WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a href="mailto:contact@snehajainlaw.com">
                    Email for Consultation
                  </a>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
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
            <Button size="lg" variant="secondary" asChild>
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
