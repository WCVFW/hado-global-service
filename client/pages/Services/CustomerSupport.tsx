import React from "react";
import ServiceDetail from "./ServiceDetail";

const CustomerSupport: React.FC = () => (
  <ServiceDetail
    title="Customer Support Service"
    tagline="Your Brand's Voice. Our Expertise."
    content={
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          At <strong>Hado Global</strong>, we provide customer support solutions
          that are not only people-driven but also technology-enabled. Our
          support ecosystem leverages <strong>AI automation, ITSM tools, cloud-based
          platforms, and analytics dashboards</strong> to deliver measurable
          outcomes across industries. Whether handling 10 or 10,000 requests per
          day, our infrastructure scales seamlessly with your business.
        </p>

        {/* Why it matters */}
        <h2 className="text-xl font-semibold text-gray-900">
          Why Customer Support Matters
        </h2>
        <p>
          In today’s competitive environment, support operations are more than
          query resolution—they are critical to customer retention, revenue
          assurance, and brand differentiation. Modern organizations track
          <strong> KPIs such as CSAT, NPS, First Contact Resolution (FCR),
          Average Handle Time (AHT)</strong> to measure the business impact of
          their customer service operations. Our support framework is aligned
          with these metrics to drive continuous improvement.
        </p>

        {/* Approach */}
        <h2 className="text-xl font-semibold text-gray-900">Our Approach</h2>
        <p>
          Hado Global follows a <strong>process-driven support methodology</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Omni-channel support integrated via <strong>Zendesk, Freshdesk, Salesforce Service Cloud</strong></li>
          <li>Tiered support model (L1, L2, L3) with defined escalation workflows</li>
          <li>Automated ticket routing, SLA monitoring, and incident tracking</li>
          <li>AI-driven knowledge base and self-service portals</li>
          <li>Performance dashboards for real-time reporting and SLA compliance</li>
        </ul>

        {/* Channels */}
        <h2 className="text-xl font-semibold text-gray-900">
          Multi-Channel & Omni-Channel Support
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Live Chat</strong> – AI + human hybrid chatbots for instant query handling</li>
          <li><strong>Voice/IVR Support</strong> – Cloud telephony (Twilio, Five9) integrated with CRM</li>
          <li><strong>Email Ticketing</strong> – Automated case creation with priority-based workflows</li>
          <li><strong>Social Media Listening</strong> – Support integrated with WhatsApp, Facebook, Twitter APIs</li>
          <li><strong>Mobile App In-App Support</strong> – Embedded SDKs for contextual help</li>
        </ul>

        {/* Proactive */}
        <h2 className="text-xl font-semibold text-gray-900">
          Proactive & Preventive Support
        </h2>
        <p>
          We use <strong>predictive analytics and monitoring tools</strong> to
          identify issues before they impact customers. Proactive outreach,
          self-service knowledge bases, and guided onboarding reduce support
          volume by up to 30% and improve <strong>Mean Time to Resolution
          (MTTR)</strong>.
        </p>

        {/* Security */}
        <h2 className="text-xl font-semibold text-gray-900">
          Data Security & Compliance
        </h2>
        <p>
          Customer data is handled with enterprise-grade security. Hado Global
          adheres to <strong>GDPR, HIPAA, ISO 27001, SOC 2</strong> standards
          with <strong>end-to-end encryption, role-based access controls,
          anonymization</strong> for sensitive data. We maintain audit trails
          for compliance across industries such as <strong>finance, healthcare,
          and e-commerce</strong>.
        </p>

        {/* Tailored */}
        <h2 className="text-xl font-semibold text-gray-900">Tailored Solutions</h2>
        <p>
          Every business has unique workflows and customer expectations. We
          customize support frameworks with integrations such as:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>CRM integrations: Salesforce, Zoho, HubSpot</li>
          <li>DevOps tools: Jira, ServiceNow for issue tracking</li>
          <li>AI/ML-based analytics for customer sentiment analysis</li>
        </ul>

        {/* 24/7 */}
        <h2 className="text-xl font-semibold text-gray-900">
          24/7 Global Support Operations
        </h2>
        <p>
          Our distributed support teams across India, USA, and EMEA deliver
          <strong> 24x7 coverage</strong>. With <strong>follow-the-sun models,
          cloud-based infrastructure, and disaster recovery plans</strong>, we
          ensure zero downtime in customer support operations.
        </p>

        {/* Advantage */}
        <h2 className="text-xl font-semibold text-gray-900">
          The Hado Global Advantage
        </h2>
        <ul className="list-decimal pl-6 space-y-1">
          <li>Certified agents with ITIL & customer success training</li>
          <li>AI & automation reducing manual workload by up to 40%</li>
          <li>Dedicated QA team for ticket reviews & knowledge base updates</li>
          <li>Customizable SLA tiers with <strong>99.9% uptime guarantee</strong></li>
          <li>Granular reporting: CSAT, NPS, SLA adherence, ticket aging</li>
        </ul>

        {/* Industries */}
        <h2 className="text-xl font-semibold text-gray-900">Industries We Serve</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>E-commerce & Retail</li>
          <li>FinTech & Banking</li>
          <li>Healthcare & Pharmaceuticals</li>
          <li>IT & SaaS</li>
          <li>Travel, Hospitality & Logistics</li>
        </ul>

        {/* Growth */}
        <h2 className="text-xl font-semibold text-gray-900">From Support to Growth</h2>
        <p>
          Our philosophy: <strong>Support is a growth enabler</strong>. Every
          resolved query adds to <strong>customer lifetime value (CLV)</strong>.
          Every proactive interaction builds loyalty. With <strong>predictive
          analytics, AI chatbots, and customer success strategies</strong>, we
          help organizations turn support operations into a revenue-driving
          function.
        </p>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <p>
          Hado Global provides <strong>end-to-end customer support outsourcing</strong>
          with the right balance of <strong>human empathy and advanced
          technology</strong>. From <strong>ticket triage to predictive
          engagement</strong>, we ensure every customer interaction strengthens
          your brand.
        </p>
      </div>
    }
  />
);

export default CustomerSupport;
