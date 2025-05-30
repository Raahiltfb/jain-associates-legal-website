
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DisclaimerModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('legal-disclaimer-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('legal-disclaimer-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-6 bg-white">
        <h2 className="text-xl font-bold mb-4 text-primary">Important Legal Disclaimer</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>As per the Bar Council of India Rules:</strong>
          </p>
          <p>
            This website is not intended for advertising or solicitation purposes. The information 
            provided on this website is solely for informational purposes and should not be construed 
            as legal advice or advertisement.
          </p>
          <p>
            The contents of this website are not intended to create an attorney-client relationship. 
            Accessing this website or communicating with Sneha Jain & Associates through this website 
            does not establish an attorney-client relationship.
          </p>
          <p>
            This website complies with the Bar Council of India Rules and does not constitute 
            advertisement or solicitation of legal work.
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={handleAccept} className="px-8">
            I Understand and Accept
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DisclaimerModal;
