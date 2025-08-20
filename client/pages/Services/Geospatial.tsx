import React from "react";
import ServiceDetail from "./ServiceDetail";

const Geospatial = () => (
  <ServiceDetail
    title="Geospatial Solutions"
    tagline="Location Intelligence. Strategic Insights."
    content={
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          In today’s data-driven world, <strong>location intelligence</strong>
          has become a critical factor in business success.{" "}
          <strong>Hado Global’s Geospatial Solutions</strong> leverage advanced
          <strong> GIS mapping, remote sensing, spatial analytics</strong>, and
          <strong> location-based services</strong> to deliver actionable
          insights across industries such as logistics, agriculture, utilities,
          urban planning, defense, and infrastructure development.
        </p>

        {/* Core Services */}
        <h2 className="text-xl font-semibold text-gray-900">Core Geospatial Services</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>High-resolution GIS mapping and cartographic modeling</li>
          <li>Satellite imagery processing and classification</li>
          <li>Remote sensing for environmental monitoring and disaster management</li>
          <li>Geocoding and location-based data integration</li>
          <li>Route optimization and logistics planning</li>
          <li>3D terrain modeling and digital elevation models (DEMs)</li>
          <li>Geospatial database design and management</li>
        </ul>

        {/* Technology & Tools */}
        <h2 className="text-xl font-semibold text-gray-900">Technology & Tools</h2>
        <p>
          We utilize industry-leading geospatial technologies to ensure accurate
          and scalable solutions:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>GIS Platforms: ESRI ArcGIS, QGIS, MapInfo</li>
          <li>Remote Sensing Tools: ENVI, ERDAS Imagine</li>
          <li>Cloud GIS: Google Earth Engine, AWS Location Service, Azure Maps</li>
          <li>Programming & Analytics: Python (GeoPandas, Rasterio, Shapely), R, MATLAB</li>
          <li>Visualization: Leaflet, Mapbox, Cesium for interactive 2D/3D mapping</li>
          <li>Database Systems: PostGIS, Oracle Spatial, MongoDB with geospatial extensions</li>
        </ul>

        {/* Industries Served */}
        <h2 className="text-xl font-semibold text-gray-900">Industries We Serve</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Logistics & Supply Chain – Route optimization, fleet tracking</li>
          <li>Agriculture – Precision farming, crop monitoring, soil mapping</li>
          <li>Urban Planning – Smart cities, zoning, infrastructure development</li>
          <li>Utilities & Energy – Asset management, grid planning, pipeline monitoring</li>
          <li>Environmental – Deforestation monitoring, climate impact assessment</li>
          <li>Defense & Security – Surveillance, border monitoring, tactical mapping</li>
        </ul>

        {/* Advanced Capabilities */}
        <h2 className="text-xl font-semibold text-gray-900">Advanced Capabilities</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>AI & ML-driven geospatial analytics for predictive modeling</li>
          <li>Drone-based data capture for real-time site monitoring</li>
          <li>IoT sensor integration for smart city applications</li>
          <li>Change detection analysis for land use and urban growth</li>
          <li>Geospatial Business Intelligence (Geo-BI) dashboards</li>
        </ul>

        {/* Business Benefits */}
        <h2 className="text-xl font-semibold text-gray-900">Business Benefits</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Improved decision-making with spatial insights</li>
          <li>Reduced operational costs via optimized resource allocation</li>
          <li>Enhanced risk management through predictive analysis</li>
          <li>Faster response to emergencies with real-time geospatial monitoring</li>
          <li>Competitive advantage by integrating location intelligence into strategy</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <p>
          By utilizing state-of-the-art geospatial technology,{" "}
          <strong>Hado Global</strong> empowers organizations to harness spatial
          data for <strong>predictive analytics, real-time monitoring,</strong>{" "}
          and <strong>business intelligence</strong>. Our tailored solutions
          integrate seamlessly with existing systems, delivering{" "}
          <strong>user-friendly visualization and reporting tools</strong> that
          transform raw data into strategic insights. Choose Hado Global for
          comprehensive geospatial services that drive{" "}
          <strong>innovation, sustainability, and operational excellence</strong>.
        </p>
      </div>
    }
  />
);

export default Geospatial;
