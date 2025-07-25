
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, TechStart Solutions",
      content: "Sneha Jain & Associates provided exceptional legal support during our startup incorporation and ESOP structuring. Their attention to detail and timely responses made the complex process seamless. Highly recommended for any startup legal needs.",
      rating: 5,
      category: "Corporate Law"
    },
    {
      name: "Priya Sharma",
      position: "Real Estate Developer",
      content: "The team's expertise in real estate law and RERA compliance saved us significant time and potential legal issues. Their thorough due diligence process and clear communication made our property transactions smooth and worry-free.",
      rating: 5,
      category: "Real Estate Law"
    },
    {
      name: "Amit Patel",
      position: "Small Business Owner",
      content: "From contract drafting to employment law compliance, they've been our trusted legal partners for over two years. Their practical approach and cost-effective solutions have helped us navigate various business challenges successfully.",
      rating: 5,
      category: "Commercial Law"
    },
    {
      name: "Dr. Meera Reddy",
      position: "Medical Professional",
      content: "The matrimonial dispute resolution services were handled with utmost sensitivity and professionalism. The team's empathetic approach combined with strong legal expertise helped achieve a favorable outcome during a difficult time.",
      rating: 5,
      category: "Family Law"
    },
    {
      name: "Vikram Industries",
      position: "Manufacturing Company",
      content: "Their comprehensive support in debt recovery and NCLT proceedings was outstanding. The strategic approach and thorough preparation resulted in successful resolution of our complex commercial dispute.",
      rating: 5,
      category: "Litigation"
    },
    {
      name: "Sarah Johnson",
      position: "International Client",
      content: "Excellent support for FEMA compliance and FDI structuring. The team's understanding of cross-border regulations and their ability to explain complex matters clearly made our India entry smooth and compliant.",
      rating: 5,
      category: "Regulatory Compliance"
    }
  ];

  const stats = [
    { number: "500+", label: "Cases Handled" },
    { number: "95%", label: "Success Rate" },
    { number: "3+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with 
              Sneha Jain & Associates. Their success stories reflect our commitment 
              to excellence and client satisfaction.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700">
              Real experiences from real clients across various practice areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200 h-full">
                <CardContent className="space-y-4">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-8 h-8 text-gray-300 absolute -top-2 -left-2 transform scale-x-[-1]" />
                    <p className="text-gray-700 italic leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-semibold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-primary font-medium mt-2">
                      {testimonial.category}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Why Clients Choose Us
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Excellence</h4>
              <p className="text-gray-700">
                Consistent delivery of high-quality legal services with attention to detail
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-primary transform scale-x-[-1]" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Communication</h4>
              <p className="text-gray-700">
                Clear, timely, and transparent communication throughout the legal process
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Results</h4>
              <p className="text-gray-700">
                Focused on achieving the best possible outcomes for our clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our satisfied clients and experience professional legal services 
            that prioritize your success and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100" asChild>
              <a href="https://wa.me/919768181858" target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#25D366] hover:bg-[#20BA5A] text-white">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                </svg>
                Start Your Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary bg-transparent" asChild>
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
