
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Building, 
  Home, 
  Heart, 
  ShieldCheck, 
  Gavel, 
  FileText, 
  Copyright, 
  Handshake, 
  Banknote, 
  Briefcase, 
  DollarSign,
  Users, 
  ShieldX, 
  UserCheck, 
  Calculator, 
  Shield, 
  Leaf, 
  Rocket, 
  MapPin, 
  FileCheck, 
  Anchor, 
  ClipboardCheck,
  ArrowRight 
} from 'lucide-react';

const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Litigation & Dispute Resolution",
      description: "Civil and commercial litigation before Trial Courts, High Courts & Tribunals, criminal law, matrimonial disputes, debt recovery, NCLT/NCLAT representation, and arbitration."
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Corporate & Commercial Law",
      description: "Business incorporation, shareholder agreements, legal opinions, M&A due diligence, FEMA compliance, and general corporate advisory services."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Real Estate & Property Law",
      description: "Title due diligence, property documentation, RERA compliance, joint development agreements, and real estate dispute resolution."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Family Law",
      description: "Matrimonial disputes, divorce proceedings, child custody, domestic violence cases, and family settlement agreements."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Criminal Law",
      description: "Bail applications, quashing petitions, cheque bounce cases, fraud matters, cybercrime defense, and criminal litigation."
    },
    {
      icon: <Gavel className="w-8 h-8 text-primary" />,
      title: "Civil Law",
      description: "Civil disputes, property matters, contract violations, tort claims, and general civil litigation before courts."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Contracts & Agreements",
      description: "Drafting and review of all commercial contracts, agreements, MOUs, NDAs, and transactional documentation."
    },
    {
      icon: <Copyright className="w-8 h-8 text-primary" />,
      title: "Intellectual Property Rights (IPR)",
      description: "Trademark, copyright, and design registration, IP portfolio management, licensing, and brand protection services."
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Arbitration & Mediation",
      description: "Alternative dispute resolution, arbitration proceedings, mediation services, and out-of-court settlement negotiations."
    },
    {
      icon: <Banknote className="w-8 h-8 text-primary" />,
      title: "Banking & Finance Law",
      description: "Loan documentation, NBFC advisory, fintech compliance, mortgage documentation, and financial regulatory matters."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "NCLT & Insolvency Law",
      description: "Insolvency proceedings, corporate restructuring, NCLT/NCLAT representation, and debt resolution processes."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Debt Recovery & DRT Matters",
      description: "Debt recovery proceedings, DRT litigation, SARFAESI actions, and enforcement of security interests."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Employment & Labour Law",
      description: "Employment contracts, HR policies, labour law compliance, POSH compliance, and workplace legal matters."
    },
    {
      icon: <ShieldX className="w-8 h-8 text-primary" />,
      title: "Consumer Protection Law",
      description: "Consumer disputes, product liability, service deficiency cases, and representation before consumer forums."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Inheritance, Wills & Succession Planning",
      description: "Wills, succession planning, probate matters, family settlements, and inheritance dispute resolution."
    },
    {
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "Taxation & GST Advisory",
      description: "Direct and indirect tax advisory, GST compliance, tax notice responses, and coordination with tax consultants."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Cyber Law & Data Protection",
      description: "Cyber fraud cases, privacy policies, DPDP Act compliance, IT Act advisory, and data protection matters."
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Environmental & Regulatory Law",
      description: "Environmental compliance, pollution control, regulatory approvals, and environmental dispute resolution."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Startups & Legal Compliance",
      description: "Startup incorporation, funding documentation, regulatory compliance, and comprehensive startup legal support."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Land & Revenue Matters",
      description: "Land acquisition, revenue records, survey settlements, and land-related dispute resolution."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Legal Documentation & Opinions",
      description: "Legal notice drafting, expert opinions, customized documentation, and comprehensive legal advisory services."
    },
    {
      icon: <Anchor className="w-8 h-8 text-primary" />,
      title: "Maritime & Shipping Law",
      description: "Maritime contracts, shipping disputes, port regulations, admiralty matters, and marine insurance claims."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Corporate Compliance & Regulatory Advisory",
      description: "Corporate governance, regulatory compliance, statutory filings, and ongoing corporate advisory services."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold">Your Trusted Legal Partners – From Courtroom to Boardroom</span>
              <br /><br />
              At Sneha Jain & Associates, we provide a comprehensive range of legal services spanning both 
              litigation and non-litigation domains. Whether you're navigating complex court proceedings, 
              structuring a business deal, or seeking legal clarity on regulatory matters, our team of 
              dedicated legal professionals is equipped to deliver strategic, personalized, and effective solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              With a network of experienced counsels, consultants, and subject-matter experts, 
              we ensure that each matter receives the specialized attention it deserves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200 h-full w-full">
                <CardHeader className="pb-4">
                  <div className="mb-4">{area.icon}</div>
                  <CardTitle className="text-xl font-semibold text-black">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6 text-center">
              Beyond Traditional Practice Areas
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
              The above list is illustrative and not exhaustive. We continuously expand our offerings 
              to meet evolving legal, regulatory, and commercial challenges. Our approach combines 
              courtroom strength with boardroom insight, ensuring comprehensive legal support for 
              individuals, businesses, startups, and institutions alike.
            </p>
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact" className="flex items-center">
                  Discuss Your Legal Needs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Your One-Stop Legal Partner
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Sneha Jain & Associates is committed to being your trusted legal partner, 
            combining expertise with personalized service to deliver results that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                </svg>
                WhatsApp Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary bg-transparent" asChild>
              <Link to="/contact">
                Schedule Meeting
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
