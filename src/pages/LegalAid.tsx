
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Scale, Users, Heart, FileText, Shield, HandHeart, ArrowRight } from 'lucide-react';

const LegalAid: React.FC = () => {
  const legalAidServices = [
    {
      icon: Scale,
      title: "Free Legal Consultation",
      description: "We provide free initial consultations for individuals who cannot afford legal representation, helping them understand their rights and options."
    },
    {
      icon: Users,
      title: "Community Legal Camps",
      description: "Regular legal awareness camps in underserved communities to educate people about their fundamental rights and available legal remedies."
    },
    {
      icon: Heart,
      title: "Pro Bono Representation",
      description: "Full legal representation at no cost for deserving cases involving fundamental rights, domestic violence, and other critical matters."
    },
    {
      icon: FileText,
      title: "Document Assistance",
      description: "Help with drafting essential legal documents, affidavits, and applications for those who cannot afford professional services."
    },
    {
      icon: Shield,
      title: "Rights Awareness Programs",
      description: "Educational sessions on constitutional rights, consumer protection, women's rights, and labor laws for vulnerable populations."
    },
    {
      icon: HandHeart,
      title: "Victim Support Services",
      description: "Dedicated support for victims of crime, domestic abuse, and exploitation, providing legal guidance and emotional support throughout the process."
    }
  ];

  const eligibilityCriteria = [
    "Individuals with annual income below ₹3,00,000",
    "Women and children in need of legal assistance",
    "Victims of trafficking, domestic violence, or abuse",
    "Persons with disabilities",
    "Senior citizens facing legal challenges",
    "Industrial workmen and laborers",
    "Members of scheduled castes and scheduled tribes",
    "Victims of mass disasters or ethnic violence"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Legal Aid Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              At Sneha Jain & Associates, we believe that access to justice should not be 
              limited by financial constraints. Our legal aid initiative is committed to 
              providing quality legal assistance to those in need.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Commitment to Justice
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Legal aid is not charity; it is a fundamental right. We are dedicated to ensuring 
              that every individual, regardless of their economic status, has access to competent 
              legal representation and can effectively participate in the justice system.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Legal Aid Services We Offer
            </h2>
            <p className="text-xl text-gray-700">
              Comprehensive support for those who need it most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalAidServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                <CardContent className="space-y-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Who Can Avail Legal Aid?
              </h2>
              <p className="text-gray-700 mb-6">
                As per the Legal Services Authorities Act, 1987, the following categories of 
                persons are entitled to free legal services. We extend our support to all 
                eligible individuals seeking justice.
              </p>
              <ul className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent/5 p-8 rounded-xl border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-4">
                How to Apply for Legal Aid
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Step 1:</strong> Contact us via phone, email, or WhatsApp to schedule 
                  an initial consultation.
                </p>
                <p>
                  <strong>Step 2:</strong> Provide relevant documents including income certificate, 
                  ID proof, and case-related documents.
                </p>
                <p>
                  <strong>Step 3:</strong> Our team will assess your eligibility and the merits 
                  of your case.
                </p>
                <p>
                  <strong>Step 4:</strong> If eligible, we will assign a legal professional to 
                  handle your matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-lg opacity-90">Pro Bono Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">200+</div>
              <div className="text-lg opacity-90">Free Consultations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-lg opacity-90">Legal Camps</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-lg opacity-90">People Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            If you or someone you know needs legal help but cannot afford it, reach out to us. 
            We are here to ensure that justice is accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
              <a href="https://wa.me/919768181858" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                </svg>
                Request Legal Aid
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalAid;
