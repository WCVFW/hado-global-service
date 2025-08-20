import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          Get in Touch
        </h2>

        {/* Office Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* India Office */}
          <div className="group border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:shadow-md hover:border-gray-400">
            <div className="mb-6">

              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                India
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-black mt-0.5" />
                3/32, 1st Main Road, Ayyappa Nagar, Virugambakkam, Chennai-600092
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-black" />
                <a href="tel:+91123456789" className="hover:text-blue-600 transition">
                  +91 123456789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-black" />
                <a href="mailto:info@hado.co.in" className="hover:text-blue-600 transition">
                  info@hado.co.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-black" />
                Mon - Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0022857177353!2d80.19090437507654!3d13.06426348726744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526105b7c86305%3A0xf1cbdbdf8782c1ce!2s32%2C%201st%20St%2C%20Sri%20Ayyappa%20Nagar%2C%20Chinmaya%20Nagar%20Stage%20II%20Extension%2C%20Kumaran%20Nagar%2C%20Virugambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600092!5e0!3m2!1sen!2sin!4v1723714000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* US Office */}
          <div className="group border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:shadow-md hover:border-gray-400">
            <div className="mb-6">

              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                California
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-black mt-0.5" />
                710, Lakeway Drive, Sunnyvale, California-94087
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-black" />
                <a href="tel:+15109459514" className="hover:text-blue-600 transition">
                  +1 510 945 9514
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-black" />
                <a href="mailto:info@hadoglobalservices.com" className="hover:text-blue-600 transition">
                  info@hadoglobalservices.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-black" />
                Mon - Fri: 9:00 AM - 5:00 PM (PST)
              </li>
            </ul>
            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.349963356347!2d-122.04082728468128!3d37.376184979832334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d39ffbbf2d%3A0x87b116c1be9d6971!2sSunnyvale%2C%20CA%2094087%2C%20USA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
