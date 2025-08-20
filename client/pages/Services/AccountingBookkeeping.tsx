import React from "react";
import ServiceDetail from "./ServiceDetail";

const AccountingBookkeeping = () => (
  <ServiceDetail
    title="Accounting & Bookkeeping (India & USA)"
    tagline="Precision Finance. Strategic Growth."
    content={
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          At <strong>Hado Global</strong>, we recognize that accounting is more
          than number crunching—it is the backbone of informed decision-making
          and sustainable business growth. With expertise across{" "}
          <strong>India and the USA</strong>, we deliver end-to-end accounting
          and bookkeeping services that ensure compliance, accuracy, and
          strategic insights.
        </p>

        {/* Compliance-Focused Services */}
        <h2 className="text-xl font-semibold text-gray-900">Compliance-Focused Services</h2>
        <p>
          We ensure businesses remain compliant with all regional and global
          regulations, reducing risks and avoiding penalties:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>India – GST filings, TDS returns, ROC documentation</li>
          <li>USA – Federal & State tax filings, W-2/1099 reporting</li>
          <li>Payroll compliance and employee benefit tracking</li>
          <li>Audit-ready financial statements</li>
          <li>Cross-border accounting alignment</li>
        </ul>

        {/* Technology-Driven Accounting */}
        <h2 className="text-xl font-semibold text-gray-900">Technology-Driven Accounting</h2>
        <p>
          Leveraging cloud platforms and automation, we deliver smarter,
          error-free, and transparent bookkeeping:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Integration with QuickBooks, Xero, Zoho Books & NetSuite</li>
          <li>Automated reconciliations for banks and credit cards</li>
          <li>Real-time dashboards for cash flow and KPIs</li>
          <li>AI-powered forecasting & anomaly detection</li>
          <li>Secure digital document management</li>
        </ul>

        {/* Strategic Financial Insights */}
        <h2 className="text-xl font-semibold text-gray-900">Strategic Financial Insights</h2>
        <p>
          Beyond compliance, our services enable <strong>data-driven financial
          planning</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Budget creation and variance analysis</li>
          <li>Profitability reports by product, service, or geography</li>
          <li>Cash flow optimization & working capital management</li>
          <li>Preparation for mergers, acquisitions, or investor due diligence</li>
        </ul>

        {/* Industries We Serve */}
        <h2 className="text-xl font-semibold text-gray-900">Industries We Serve</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Startups & SMEs needing scalable accounting frameworks</li>
          <li>E-commerce & Retail with high transaction volumes</li>
          <li>Healthcare & Pharmaceuticals requiring compliance rigor</li>
          <li>IT & SaaS firms managing subscription-based revenues</li>
          <li>Manufacturing & Logistics with multi-entity operations</li>
        </ul>

        {/* Security & Compliance */}
        <h2 className="text-xl font-semibold text-gray-900">Data Security & Compliance</h2>
        <p>
          Financial data is sensitive, and we treat it with the highest level of
          security:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>GDPR & HIPAA-compliant handling for global clients</li>
          <li>Role-based access controls & audit trails</li>
          <li>Encrypted data storage & transfer</li>
        </ul>

        {/* Flexible Pricing */}
        <h2 className="text-xl font-semibold text-gray-900">Flexible Pricing Models</h2>
        <p>
          Our pricing is designed to match business scale and complexity:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Monthly Retainer</strong> – Ideal for consistent accounting needs</li>
          <li><strong>Transaction-Based</strong> – Pay only for volume handled</li>
          <li><strong>Project-Based</strong> – Suitable for audits, reconciliations, or system migrations</li>
        </ul>

        {/* Testimonials */}
        <h2 className="text-xl font-semibold text-gray-900">Client Testimonials</h2>
        <blockquote className="border-l-4 border-green-500 pl-4 italic">
          “Hado Global streamlined our multi-country accounts, reduced manual
          errors, and provided CFO-level insights that helped us secure our next
          funding round.” <br />– Founder, SaaS Startup
        </blockquote>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <p>
          Partnering with <strong>Hado Global</strong> means gaining a dedicated
          accounting ally who ensures compliance, streamlines operations, and
          empowers leadership with real-time financial intelligence. With our
          India & USA expertise, your business is future-ready.
        </p>
      </div>
    }
  />
);

export default AccountingBookkeeping;
