import React from "react";
import ServiceDetail from "./ServiceDetail";

const CloudMigration = () => (
  <ServiceDetail
    title="Cloud Migration"
    tagline="Your Future, in the Cloud."
    content={
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          At <strong>Hado Global</strong>, we recognize that cloud migration is
          not just a technical shift—it is a <strong>strategic business
          transformation</strong>. With expertise across major cloud providers
          including <strong>AWS, Microsoft Azure, and Google Cloud</strong>, we
          ensure businesses transition to modern, secure, and scalable
          environments while maintaining continuity and optimizing performance.
        </p>

        {/* Migration Strategy */}
        <h2 className="text-xl font-semibold text-gray-900">Our Migration Strategy</h2>
        <p>
          We follow a structured, phased approach that minimizes risk and
          maximizes ROI:
        </p>
        <ul className="list-decimal pl-6 space-y-1">
          <li>
            <strong>Assessment</strong> – Audit of on-premises infrastructure,
            application dependencies, and workloads.
          </li>
          <li>
            <strong>Planning & Roadmap</strong> – Define migration strategy
            (Rehost, Refactor, Rearchitect, or Replace).
          </li>
          <li>
            <strong>Migration Execution</strong> – Data transfer, app
            re-platforming, and infrastructure provisioning.
          </li>
          <li>
            <strong>Validation & Testing</strong> – Performance benchmarking,
            disaster recovery validation, and failover testing.
          </li>
          <li>
            <strong>Optimization & Governance</strong> – Cost control,
            autoscaling, and continuous monitoring.
          </li>
        </ul>

        {/* Migration Models */}
        <h2 className="text-xl font-semibold text-gray-900">Migration Models</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Rehosting (“Lift & Shift”)</strong> – Fast migration with minimal code changes.</li>
          <li><strong>Replatforming</strong> – Optimize applications to leverage cloud-native services.</li>
          <li><strong>Refactoring</strong> – Modernize applications for microservices & serverless architectures.</li>
          <li><strong>Hybrid Cloud Integration</strong> – Combine on-premises and cloud for flexible operations.</li>
          <li><strong>Multi-Cloud Strategies</strong> – Distribute workloads across AWS, Azure, and GCP.</li>
        </ul>

        {/* Tools & Technologies */}
        <h2 className="text-xl font-semibold text-gray-900">Tools & Technologies</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>AWS Migration Hub, Database Migration Service (DMS)</li>
          <li>Azure Migrate, Cloud Adoption Framework</li>
          <li>Google Cloud Migrate & Anthos for hybrid cloud</li>
          <li>Terraform & Ansible for Infrastructure as Code (IaC)</li>
          <li>Kubernetes & Docker for containerized workloads</li>
          <li>CI/CD pipelines for seamless DevOps integration</li>
        </ul>

        {/* Security & Compliance */}
        <h2 className="text-xl font-semibold text-gray-900">Security & Compliance</h2>
        <p>
          Security is embedded into every step of our migration. We implement:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Identity & Access Management (IAM) best practices</li>
          <li>End-to-end encryption for data in transit & at rest</li>
          <li>Compliance with GDPR, HIPAA, SOC 2, ISO 27001</li>
          <li>Cloud-native monitoring and SIEM integrations</li>
        </ul>

        {/* Post-Migration Support */}
        <h2 className="text-xl font-semibold text-gray-900">Post-Migration Support</h2>
        <p>
          Migration is only the beginning—our team ensures continuous
          optimization through:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>24/7 monitoring & incident management</li>
          <li>Cloud cost optimization (FinOps practices)</li>
          <li>Performance tuning & autoscaling configuration</li>
          <li>Disaster Recovery & Business Continuity Planning</li>
        </ul>

        {/* Industries */}
        <h2 className="text-xl font-semibold text-gray-900">Industries We Support</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Banking & Financial Services – Secure, compliant migrations</li>
          <li>Healthcare – HIPAA-compliant patient data migrations</li>
          <li>E-commerce – Scalable infrastructure for seasonal demand</li>
          <li>IT & SaaS – Multi-tenant cloud-native application hosting</li>
          <li>Manufacturing – IoT data processing in the cloud</li>
        </ul>

        {/* Business Impact */}
        <h2 className="text-xl font-semibold text-gray-900">Business Impact</h2>
        <p>
          By leveraging our migration expertise, businesses can achieve:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reduced infrastructure costs through pay-as-you-go models</li>
          <li>Faster time-to-market with agile deployments</li>
          <li>Enhanced application performance and scalability</li>
          <li>Improved security posture and compliance adherence</li>
          <li>Future-proof infrastructure ready for AI/ML and IoT</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <p>
          Cloud migration is a journey, and with <strong>Hado Global</strong> as
          your partner, it becomes a smooth, secure, and strategic advantage.
          Our proven frameworks, technical expertise, and post-migration support
          ensure that your business doesn’t just move to the cloud—it thrives in
          it.
        </p>
      </div>
    }
  />
);

export default CloudMigration;
