import React from "react";
import ServiceDetail from "./ServiceDetail";

const HR = () => (
  <ServiceDetail
    title="HR Services"
    tagline="People First. Business Thrives."
    content={
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          At <strong>Hado Global</strong>, our HR Services encompass the full spectrum 
          of <strong>employee lifecycle management</strong> to help your business attract, 
          develop, and retain top talent. We design and implement HR strategies that align 
          with organizational goals while fostering a productive, engaged, and compliant workforce.
        </p>

        {/* Core HR Services */}
        <h2 className="text-xl font-semibold text-gray-900">Core HR Services</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Talent Acquisition & Recruitment – sourcing, screening, and onboarding</li>
          <li>Performance Management Systems – KPI alignment and goal tracking</li>
          <li>Employee Engagement Programs – feedback cycles, recognition, surveys</li>
          <li>Learning & Development – upskilling, leadership training, e-learning modules</li>
          <li>Policy Development – HR handbooks, SOPs, workplace guidelines</li>
          <li>Compliance & Risk Management – labor laws, diversity & inclusion, audits</li>
        </ul>

        {/* HR Technology & Tools */}
        <h2 className="text-xl font-semibold text-gray-900">HR Technology & Tools</h2>
        <p>
          We integrate modern HRTech platforms to streamline processes and improve data-driven decisions:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>HRMS/HRIS Platforms: SAP SuccessFactors, Oracle HCM, Workday, BambooHR</li>
          <li>Applicant Tracking Systems (ATS): Greenhouse, Lever, Zoho Recruit</li>
          <li>Payroll & Compliance: ADP, QuickBooks Payroll, Gusto</li>
          <li>Performance Tools: 15Five, Lattice, CultureAmp</li>
          <li>Learning Management Systems (LMS): Moodle, TalentLMS, Coursera for Business</li>
          <li>Employee Self-Service Portals for transparency and engagement</li>
        </ul>

        {/* Advanced HR Capabilities */}
        <h2 className="text-xl font-semibold text-gray-900">Advanced HR Capabilities</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>AI-driven recruitment for faster and bias-free talent acquisition</li>
          <li>Predictive HR analytics for workforce planning and attrition risk management</li>
          <li>360° feedback systems for holistic performance reviews</li>
          <li>Hybrid workforce enablement – remote, onsite, and global teams</li>
          <li>Well-being and mental health programs integrated with HR policy</li>
        </ul>

        {/* Industries Served */}
        <h2 className="text-xl font-semibold text-gray-900">Industries We Serve</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>IT & Technology – Agile HR for fast-scaling teams</li>
          <li>Healthcare – Credentialing, staffing, compliance-heavy HR</li>
          <li>Manufacturing – Shift scheduling, safety training, workforce optimization</li>
          <li>Retail – High-volume hiring, seasonal workforce management</li>
          <li>Finance & Professional Services – Regulatory compliance, policy frameworks</li>
        </ul>

        {/* Business Benefits */}
        <h2 className="text-xl font-semibold text-gray-900">Business Benefits</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reduced attrition through data-driven engagement strategies</li>
          <li>Improved hiring speed with AI-driven recruitment platforms</li>
          <li>Higher workforce productivity via continuous upskilling</li>
          <li>Regulatory peace of mind with 100% labor law compliance</li>
          <li>Enhanced employee satisfaction leading to stronger employer branding</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <p>
          By partnering with <strong>Hado Global</strong>, you gain a{" "}
          <strong>people-centric HR approach</strong> that not only supports growth 
          but also nurtures a <strong>thriving organizational culture</strong>. 
          From recruitment to retention, compliance to culture-building, 
          our HR experts ensure your workforce is empowered, engaged, and future-ready.
        </p>
      </div>
    }
  />
);

export default HR;
