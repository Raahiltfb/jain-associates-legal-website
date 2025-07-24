
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  User,
  Building,
  FileText
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hello! I'm interested in legal consultation.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Subject: ${formData.subject}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: ["+91 98765 43210"],
      action: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: ["contact@snehajainlaw.com"],
      action: "mailto:contact@snehajainlaw.com"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
      action: null
    }
  ];

  const consultationTypes = [
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "WhatsApp Consultation",
      description: "Quick legal queries and initial discussions",
      action: "https://wa.me/919876543210"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Phone Consultation",
      description: "Detailed discussion of your legal matters",
      action: "tel:+919876543210"
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Office Meeting",
      description: "In-person consultation at one of our offices",
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to discuss your legal needs? Get in touch with our experienced team 
              for professional legal consultation and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Choose Your Consultation Method
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {consultationTypes.map((type, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200 text-center">
                <CardContent className="space-y-4">
                  <div className="flex justify-center mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-black">
                    {type.title}
                  </h3>
                  <p className="text-gray-700">
                    {type.description}
                  </p>
                  {type.action && (
                    <Button 
                      className="bg-primary hover:bg-primary/90 w-full h-10" 
                      asChild
                    >
                      <a href={type.action} target={type.action.startsWith('http') ? '_blank' : undefined}>
                        Connect Now
                      </a>
                    </Button>
                  )}
                  {!type.action && (
                    <Button 
                      className="bg-primary hover:bg-primary/90 w-full h-10" 
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Schedule Meeting
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <Card className="p-8 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black mb-4">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-700">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full"
                        placeholder="Please provide details about your legal requirements..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Send className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black mb-4">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-700">
                            {info.action ? (
                              <a href={info.action} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="p-8 border-gray-200 bg-gray-50">
                <CardContent>
                  <h4 className="font-semibold text-black mb-4">
                    Quick Response Guarantee
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      WhatsApp queries: Immediate to 2 hours
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Email inquiries: Within 24 hours
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Consultation scheduling: Same day
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Urgent Legal Assistance?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            For urgent matters requiring immediate legal attention, 
            contact us directly via phone or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100" asChild>
              <a href="tel:+919876543210" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </a>
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                </svg>
                WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
