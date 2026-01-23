
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DisclaimerModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Always show disclaimer on page load/reload
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-6 bg-white">
        <h2 className="text-xl font-bold mb-4 text-primary">Important Legal Disclaimer</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Disclaimer:</strong>
          </p>
          <p>
This website has been designed only for the purposes of dissemination of basic information on Sneha Jain & Associates; information which is otherwise available on the internet, various public platforms and social media. Careful attention has been given to ensure that the information provided herein is accurate and up-to-date. However, Sneha Jain & Associates is not responsible for any reliance that a reader places on such information and shall not be liable for any loss or damage caused due to any inaccuracy in or exclusion of any information, or its interpretation thereof. Reader is advised to confirm the veracity of the same from independent and expert sources.


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
