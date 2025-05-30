
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Users, 
  Target, 
  Award,
  Briefcase,
  Heart,
  ArrowRight
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our legal practices and client relationships."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Client-Centric Approach",
      description: "Every legal strategy is tailored to our clients' unique needs and objectives."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in every case, ensuring the best possible outcomes for our clients."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Professional Expertise",
      description: "Our team brings deep knowledge and experience across multiple areas of law."
    }
  ];

  const expertise = [
    "Corporate and Commercial Law",
    "Litigation and Dispute Resolution", 
    "Real Estate and Property Law",
    "Family and Matrimonial Law",
    "Criminal Law",
    "Intellectual Property Rights",
    "Banking and Finance Law",
    "Employment and Labour Law",
    "Startup Legal Services",
    "Regulatory Compliance"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Sneha Jain & Associates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building a new law firm with years of experience, dedicated to providing 
              exceptional legal services that build confidence and deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Sneha Jain & Associates represents the culmination of years of dedicated 
                  legal practice and a vision to create a law firm that truly serves its clients' needs.
                </p>
                <p>
                  After gaining valuable experience working with established firms for several years, 
                  and then practicing independently for 3-4 years, we recognized the need for a 
                  legal practice that combines deep expertise with personalized attention.
                </p>
                <p>
                  Our firm was founded on the principle that every client deserves strategic 
                  legal counsel that understands their unique circumstances and objectives. 
                  Whether you're an individual facing a personal legal matter or a business 
                  navigating complex regulations, we're here to guide you with confidence.
                </p>
                <p>
                  Today, Sneha Jain & Associates stands as a testament to professional 
                  excellence, building trust one client at a time and establishing ourselves 
                  as a reliable legal partner for individuals and businesses alike.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/contact" className="flex items-center">
                    Get to Know Us Better
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-primary text-white rounded-lg p-8">
              <Briefcase className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-lg mb-6 opacity-90">
                To provide comprehensive, strategic, and personalized legal services 
                that empower our clients to make informed decisions and achieve their goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Heart className="w-5 h-5 mr-3" />
                  <span>Client satisfaction is our priority</span>
                </div>
                <div className="flex items-center">
                  <Scale className="w-5 h-5 mr-3" />
                  <span>Justice through expert representation</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-3" />
                  <span>Excellence in every legal matter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Areas of Expertise
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our comprehensive legal practice covers a wide range of areas, 
                ensuring we can meet diverse client needs with specialized knowledge.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/practice-areas">
                    Explore All Practice Areas
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why We Started This Firm
                </h3>
                <p className="text-gray-600">
                  After years of practice, we recognized the need for a legal firm that 
                  truly understands client needs and provides not just legal advice, 
                  but strategic partnership for long-term success.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Commitment
                </h3>
                <p className="text-gray-600">
                  We are committed to building lasting relationships with our clients 
                  based on trust, transparency, and consistent delivery of excellent legal services.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Looking Forward
                </h3>
                <p className="text-gray-600">
                  As we grow, our focus remains on maintaining the personal touch and 
                  strategic thinking that sets us apart while expanding our capabilities 
                  to serve our clients better.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience the difference that personalized, strategic legal counsel can make. 
            Let's discuss how we can help you achieve your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                Contact via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
