import React, { ReactNode } from "react";

interface ServiceDetailProps {
  title: string;
  tagline: string;
  content: ReactNode; // 👈 changed from string to ReactNode
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, tagline, content }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 sm:p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 italic mb-6">{tagline}</p>
      <div className="text-gray-700 leading-relaxed space-y-4">
        {content}
      </div>
    </div>
  );
};

export default ServiceDetail;
