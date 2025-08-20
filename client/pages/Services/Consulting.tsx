import React from "react";
import ServiceDetail from "./ServiceDetail";

const Consulting = () => (
  <ServiceDetail
    title="Consulting"
    tagline="Navigate Change. Drive Growth."
    content={
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {/* Intro */}
        <p>
          <strong>Hado Global’s Consulting Services</strong> are designed to help 
          businesses tackle complex challenges, enhance operational efficiency, 
          and achieve sustainable growth. Our consultants collaborate with your 
          leadership teams to design and implement strategies that deliver 
          measurable business impact.
        </p>

        {/* Core Consulting Areas */}
        <h2 className="text-xl font-semibold text-gray-900">Core Consulting Areas</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Business Strategy</strong> – market entry, competitive analysis, growth roadmaps</li>
          <li><strong>Digital Transformation</strong> – IT modernization, ERP/CRM adoption, automation</li>
          <li><strong>Operations & Process Optimization</strong> – lean management, Six Sigma, workflow automation</li>
          <li><strong>Change Management</strong> – stakeholder alignment, training, adoption frameworks</li>
          <li><strong>Financial Advisory</strong> – cost optimization, risk management, investment planning</li>
          <li><strong>Technology Consulting</strong> – cloud migration, cybersecurity, AI/ML integration</li>
        </ul>

        {/* Methodologies & Frameworks */}
        <h2 className="text-xl font-semibold text-gray-900">Methodologies & Frameworks</h2>
        <p>
          We apply globally recognized methodologies to ensure structured and impactful consulting outcomes:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>McKinsey 7-S Framework for organizational alignment</li>
          <li>SWOT & PESTEL analysis for market and risk evaluation</li>
          <li>Lean Six Sigma for process efficiency</li>
          <li>Agile & DevOps frameworks for technology transformation</li>
          <li>Kotter’s 8-Step Change Model for managing organizational change</li>
        </ul>

        {/* Tools & Platforms */}
        <h2 className="text-xl font-semibold text-gray-900">Tools & Platforms</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Business Intelligence: Power BI, Tableau, Qlik</li>
          <li>ERP & CRM: SAP, Oracle NetSuite, Salesforce, Microsoft Dynamics</li>
          <li>Collaboration: Jira, Confluence, Microsoft Teams, Slack</li>
          <li>Cloud Platforms: AWS, Azure, Google Cloud</li>
          <li>Project Management: Asana, Trello, Monday.com</li>
        </ul>

        {/* Industries Served */}
        <h2 className="text-xl font-semibold text-gray-900">Industries We Serve</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Information Technology – agile scaling, DevOps maturity</li>
          <li>Healthcare – compliance, patient experience, process efficiency</li>
          <li>Manufacturing – supply chain optimization, digital twins</li>
          <li>Retail & E-commerce – omnichannel strategies, CX transformation</li>
          <li>Finance & Banking – regulatory compliance, fintech adoption</li>
        </ul>

        {/* Business Benefits */}
        <h2 className="text-xl font-semibold text-gray-900">Business Benefits</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Accelerated digital adoption with minimal disruption</li>
          <li>Reduced operational costs through process optimization</li>
          <li>Improved decision-making with data-driven insights</li>
          <li>Increased workforce productivity and agility</li>
          <li>Long-term resilience with scalable growth strategies</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <p>
          Whether you are a <strong>startup</strong> looking for market entry 
          strategies or a <strong>global enterprise</strong> seeking large-scale 
          digital transformation, Hado Global’s Consulting Services provide the 
          <strong> expertise, tools, and frameworks</strong> to help your business 
          adapt, compete, and thrive in today’s dynamic marketplace.
        </p>
      </div>
    }
  />
);

export default Consulting;
