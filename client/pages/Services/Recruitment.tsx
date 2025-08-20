import React from "react";
import ServiceDetail from "./ServiceDetail";

const Recruitment = () => (
  <ServiceDetail
    title="Recruitment Process Outsourcing"
    tagline="Find the Best Talent. Faster."
    content={
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {/* Intro */}
        <p>
          <strong>Hado Global’s Recruitment Process Outsourcing (RPO)</strong> 
          services streamline and optimize the end-to-end hiring lifecycle. 
          From workforce planning to onboarding, we act as an extension of your 
          HR team, helping you attract, assess, and secure the right talent 
          faster, with reduced costs and improved hiring quality.
        </p>

        {/* Core RPO Services */}
        <h2 className="text-xl font-semibold text-gray-900">Core RPO Services</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Talent Sourcing</strong> – AI-driven candidate search across global databases, social platforms, and niche talent pools</li>
          <li><strong>Screening & Assessments</strong> – pre-employment testing, psychometric evaluations, skill assessments</li>
          <li><strong>Interview Management</strong> – scheduling, coordination, panel interviews, and candidate feedback</li>
          <li><strong>Onboarding Support</strong> – documentation, compliance checks, induction programs</li>
          <li><strong>Employer Branding</strong> – building your brand presence to attract top-tier talent</li>
        </ul>

        {/* Recruitment Process Workflow */}
        <h2 className="text-xl font-semibold text-gray-900">Our Recruitment Workflow</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Workforce Planning & Role Analysis</li>
          <li>Job Description Creation & Market Mapping</li>
          <li>Candidate Sourcing & AI-enabled Shortlisting</li>
          <li>Multi-stage Screening & Assessments</li>
          <li>Interview Coordination & Feedback Loop</li>
          <li>Offer Management & Negotiation</li>
          <li>Onboarding & Continuous Engagement</li>
        </ol>

        {/* Tools & Technology */}
        <h2 className="text-xl font-semibold text-gray-900">Tools & Technology</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Applicant Tracking Systems (ATS): Greenhouse, Lever, iCIMS</li>
          <li>AI & Automation Tools: LinkedIn Recruiter, Entelo, HireVue</li>
          <li>Assessment Platforms: Codility, HackerRank, SHL, Mercer Mettl</li>
          <li>Collaboration & Communication: Slack, Teams, Zoom</li>
          <li>Analytics & Reporting: Power BI, Tableau</li>
        </ul>

        {/* Compliance & Governance */}
        <h2 className="text-xl font-semibold text-gray-900">Compliance & Governance</h2>
        <p>
          We ensure full compliance with <strong>local labor laws</strong>, 
          <strong>equal opportunity regulations</strong>, and 
          <strong>data protection laws (GDPR, CCPA)</strong>. Our rigorous 
          background checks and documentation processes ensure that every 
          hire meets regulatory and ethical standards.
        </p>

        {/* Industries Served */}
        <h2 className="text-xl font-semibold text-gray-900">Industries We Serve</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Technology & IT – developers, engineers, data scientists</li>
          <li>Healthcare – doctors, nurses, clinical staff</li>
          <li>Finance & Banking – analysts, auditors, compliance officers</li>
          <li>Manufacturing & Supply Chain – operations managers, logistics experts</li>
          <li>Retail & E-commerce – sales, marketing, customer service talent</li>
        </ul>

        {/* Business Benefits */}
        <h2 className="text-xl font-semibold text-gray-900">Business Benefits</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reduced <strong>time-to-hire</strong> through automation and global networks</li>
          <li>Improved <strong>quality-of-hire</strong> via skill-based screening and assessments</li>
          <li>Lower <strong>cost-per-hire</strong> with scalable outsourcing models</li>
          <li>Access to <strong>niche and passive talent pools</strong></li>
          <li>Enhanced <strong>candidate experience</strong> through transparent, timely communication</li>
        </ul>

        {/* Closing */}
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <p>
          By choosing Hado Global’s RPO services, you gain a 
          <strong>scalable, compliant, and technology-enabled</strong> 
          recruitment engine that aligns with your long-term workforce strategy. 
          We enable you to build <strong>high-performing teams</strong> quickly 
          and cost-effectively, while freeing your internal HR teams to focus 
          on strategic priorities.
        </p>
      </div>
    }
  />
);

export default Recruitment;
