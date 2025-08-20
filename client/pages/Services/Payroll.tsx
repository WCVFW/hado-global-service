import React from "react";
import ServiceDetail from "./ServiceDetail";

const Payroll = () => (
  <ServiceDetail
    title="Payroll Services"
    tagline="Efficient Payroll. Confident Compliance."
    content={
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Managing payroll efficiently while ensuring compliance with complex
          tax regulations is a challenge that <strong>Hado Global</strong>
          expertly addresses with our end-to-end Payroll Services. Serving
          clients across <strong>India and the USA</strong>, we deliver
          technology-driven payroll management solutions that reduce
          administrative burdens, eliminate costly errors, and ensure employees
          are always paid on time.
        </p>

        {/* Core Payroll Services */}
        <h2 className="text-xl font-semibold text-gray-900">Core Payroll Services</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Salary calculations with precision and automation</li>
          <li>Overtime, allowances, and incentive management</li>
          <li>Employee benefits & reimbursements processing</li>
          <li>Statutory deductions including PF, ESI, TDS, Medicare, Social Security</li>
          <li>Payroll tax filings and compliance reporting</li>
          <li>Generation of payslips and year-end tax statements (Form 16, W-2, 1099)</li>
        </ul>

        {/* Compliance Coverage */}
        <h2 className="text-xl font-semibold text-gray-900">Compliance Coverage</h2>
        <p>
          We ensure every payroll cycle is <strong>legally compliant</strong>,
          covering country-specific requirements:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>India</strong> – PF, ESI, Professional Tax, Labour Welfare Fund,
            TDS filing, and Income Tax Act compliance.
          </li>
          <li>
            <strong>USA</strong> – Federal & State tax withholdings, FICA (Social
            Security & Medicare), W-2, 1099, ACA compliance.
          </li>
        </ul>

        {/* Technology & Automation */}
        <h2 className="text-xl font-semibold text-gray-900">Technology & Automation</h2>
        <p>
          We integrate payroll with leading <strong>HRIS and ERP systems</strong> to
          deliver seamless employee lifecycle management:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Integration with SAP, Oracle, Workday, BambooHR, and Zoho People</li>
          <li>Cloud-based payroll processing platforms</li>
          <li>Automated compliance tracking and alerts</li>
          <li>Employee self-service portals for payslips & tax documents</li>
          <li>Secure document storage & audit-ready reporting</li>
        </ul>

        {/* Value-Added Features */}
        <h2 className="text-xl font-semibold text-gray-900">Value-Added Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Multi-currency payroll for global teams</li>
          <li>Customizable salary structures and benefits mapping</li>
          <li>Real-time analytics and payroll dashboards</li>
          <li>Automated reimbursement & expense claims processing</li>
          <li>Integration with time & attendance systems</li>
        </ul>

        {/* Industries We Serve */}
        <h2 className="text-xl font-semibold text-gray-900">Industries We Serve</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>IT & SaaS Companies</li>
          <li>Startups & SMEs</li>
          <li>Healthcare & Pharmaceuticals</li>
          <li>Manufacturing & Logistics</li>
          <li>E-commerce & Retail</li>
        </ul>

        {/* Business Benefits */}
        <h2 className="text-xl font-semibold text-gray-900">Business Benefits</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reduce administrative overhead with automation</li>
          <li>Ensure 100% compliance with local and international laws</li>
          <li>Enhance employee satisfaction with timely, accurate pay</li>
          <li>Access to detailed payroll insights for decision-making</li>
          <li>Scalable payroll solutions for growing businesses</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <p>
          With <strong>Hado Global</strong> as your payroll partner, you gain a
          secure, scalable, and transparent solution designed to handle the
          complexities of workforce management. From compliance to employee
          satisfaction, we ensure your payroll process strengthens your business
          operations, enabling you to focus on growth and innovation.
        </p>
      </div>
    }
  />
);

export default Payroll;
