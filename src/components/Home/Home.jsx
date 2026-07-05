import tubeimg from "../../assets/images/tube.png";
import engimg from "../../assets/images/eng.png";
import img1 from "../../assets/images/img-1.png";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-3.png";
import img4 from "../../assets/images/img-4.png";
import img5 from "../../assets/images/img-5.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../utls/Modal";

export default function Home() {
  const [contactModal, setContactModal] = useState(false);

  return (
    <main className="mt-5">
      {/* Dual Hero Section */}
      <section className="relative md:h-[85vh] overflow-hidden flex flex-col md:flex-row">
        {/* Linda Tube Side */}
        <div className="relative w-full md:w-1/2 h-full group transition-all duration-700 md:hover:w-[60%] md:hero-clip z-10 overflow-hidden">
          <div className="absolute inset-0 bg-deep-steel/70 z-10 transition-colors group-hover:bg-deep-steel/40" />
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            data-alt="Wide-angle shot of a massive industrial steel tube manufacturing facility. High-tech machinery is in operation, with giant steel pipes lined up perfectly. The lighting is crisp and cold, emphasizing the blue steel tones and precision of Linda Tube's 40-year legacy in manufacturing."
            style={{
              backgroundImage: `url(${tubeimg})`,
            }}
          />
          <div className="relative z-20 h-full flex flex-col justify-center p-margin-desktop text-white">
            <span className="font-label-technical text-label-technical tracking-[0.2em] mb-4 text-safety-yellow">
              ESTABLISHED 1998
            </span>
            <h2 className="font-display-lg text-display-lg mb-6 leading-tight">
              LINDA <br />
              TUBE
            </h2>
            <p className="font-body-lg text-body-lg max-w-md mb-8 opacity-90">
              Pioneering steel pipe production with 11 high-capacity mills
              across the MENA region. Quality that builds nations.
            </p>
            <div className="flex items-center gap-4">
              <Link to={"manufacturing"}>
                <button className="bg-white cursor-pointer text-deep-steel px-8 py-4 hover:bg-deep-steel/90 hover:text-white font-cta-label text-cta-label rounded-lg flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Products{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Linda Engineering Side */}
        <div className="relative w-full md:w-1/2 h-full group transition-all duration-700 md:hover:w-[60%] overflow-hidden">
          <div className="absolute inset-0 bg-industrial-red/70 z-10 transition-colors group-hover:bg-industrial-red/40" />
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{
              backgroundImage: `url(${engimg})`,
            }}
          />
          <div className="relative z-20 h-full flex flex-col justify-center p-margin-desktop text-white text-right items-end md:pr-margin-desktop">
            <span className="font-label-technical text-label-technical tracking-[0.2em] mb-4 text-safety-yellow">
              ESTABLISHED 1981
            </span>
            <h2 className="font-display-lg text-display-lg mb-6 leading-tight">
              LINDA <br />
              ENGINEERING
            </h2>
            <p className="font-body-lg text-body-lg max-w-md mb-8 opacity-90">
              Exclusive material handling solutions and authorized Japanese KITO
              Hoist partnership for over 4 decades.
            </p>
            <div className="flex items-center gap-4">
              <Link to={"engineering"}>
                <button className="bg-white cursor-pointer text-industrial-red px-8 py-4 hover:bg-industrial-red/90 hover:text-white font-cta-label text-cta-label rounded-lg flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Solutions{" "}
                  <span className="material-symbols-outlined">
                    settings_suggest
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section (Bento Style) */}
      <section className="py-margin-desktop px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main Statement */}
          <div className="md:col-span-2 bg-white p-12 border border-machine-gray/10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-headline-lg text-headline-lg text-deep-steel mb-6">
                Built on 40+ Years of Industrial Excellence
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Linda Group has managed to respond to local and international
                customer demands with the shortest lead times possible,
                eliminating the need for client investments in inventory.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-machine-gray/10">
              <div className="flex items-center gap-4 text-deep-steel">
                <span
                  className="material-symbols-outlined text-4xl"
                  data-weight="fill"
                >
                  verified
                </span>
                <span className="font-label-technical text-label-technical">
                  ISO CERTIFIED MANUFACTURING PROCESSES
                </span>
              </div>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="bg-deep-steel p-8 text-white flex flex-col justify-center items-center text-center">
            <span className="text-5xl font-bold font-display-lg mb-2">
              1000+
            </span>
            <span className="font-label-technical text-label-technical opacity-80 uppercase tracking-widest">
              Global Employees
            </span>
          </div>
          <div className="bg-industrial-red p-8 text-white flex flex-col justify-center items-center text-center">
            <span className="text-5xl font-bold font-display-lg mb-2">15+</span>
            <span className="font-label-technical text-label-technical opacity-80 uppercase tracking-widest">
              Countries Served
            </span>
          </div>
          <div className="bg-surface-container p-8 border border-machine-gray/10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4 text-deep-steel">
              <span className="material-symbols-outlined">factory</span>
              <span className="font-headline-md text-headline-md font-bold">
                9
              </span>
            </div>
            <p className="font-body-md text-body-md text-machine-gray">
              Strategic sites in Egypt including 10th of Ramadan &amp; Suez
              industrial zones.
            </p>
          </div>
          <div className="bg-surface-container p-8 border border-machine-gray/10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4 text-industrial-red">
              <span className="material-symbols-outlined">public</span>
              <span className="font-headline-md text-headline-md font-bold">
                2
              </span>
            </div>
            <p className="font-body-md text-body-md text-machine-gray">
              Regional hubs in Morocco (Bouskoura), serving the expanding
              African market.
            </p>
          </div>
          <div className="md:col-span-2 relative overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="A portrait-style shot of Linda Group's diverse engineering team standing together in front of a modern steel structure. They are wearing high-visibility vests and hard hats, looking confident and professional. The background is a clean industrial sunrise with warm golden lighting hitting the metallic surfaces."
              style={{
                backgroundImage: `url(${img5})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-steel to-transparent opacity-80" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <h4 className="text-white font-headline-md text-headline-md mb-2">
                Dedicated Expertise
              </h4>
              <p className="text-white/80 font-body-md text-body-md">
                Our team boasts over 25 years of average expertise in steel
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="bg-deep-steel text-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <span className="material-symbols-outlined text-[400px] select-none">
            architecture
          </span>
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="font-label-technical text-label-technical text-safety-yellow tracking-widest block mb-4">
                OUR LEGACY
              </span>
              <h2 className="font-display-lg text-display-lg mb-8">
                Engineering a Better Future Through Quality &amp; Dedication
              </h2>
              <div className="space-y-6 opacity-90">
                <p className="font-body-lg text-body-lg leading-relaxed">
                  Founded in 1981, Linda Group has evolved from a single
                  material handling agency into a regional powerhouse. Today, we
                  stand as the exclusive partner for KITO Hoists &amp; Cranes,
                  serving over 150 satisfied manufacturers globally.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="border-l-4 border-industrial-red pl-6">
                    <h5 className="font-cta-label text-cta-label mb-2">
                      Precision
                    </h5>
                    <p className="text-sm opacity-70">
                      State-of-the-art testing equipment meeting international
                      safety standards.
                    </p>
                  </div>
                  <div className="border-l-4 border-safety-yellow pl-6">
                    <h5 className="font-cta-label text-cta-label mb-2">
                      24/7 Support
                    </h5>
                    <p className="text-sm opacity-70">
                      Continuous operations to ensure your supply chain never
                      stops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="h-64 bg-cover bg-center rounded-lg"
                  data-alt="Detailed macro shot of steel pipes during a quality inspection process. Sparks and precision light highlights show the strength and high-quality finish of the metal. Corporate blue and silver industrial aesthetic."
                  style={{
                    backgroundImage: `url(${img1})`,
                  }}
                />
                <div
                  className="h-64 bg-cover bg-center rounded-lg mt-8"
                  data-alt="A massive yellow KITO hoist system installed in a high-roofed industrial warehouse. The equipment is lifting a heavy load with precision, showcasing the engineering prowess of Linda Engineering's solutions."
                  style={{
                    backgroundImage: `url(${img2})`,
                  }}
                />
                <div
                  className="h-64 bg-cover bg-center rounded-lg -mt-8"
                  data-alt="Exterior shot of a Linda Group production facility in Egypt during the daytime. The large-scale complex is clean and modern, with many trucks lined up for logistics. Bright blue sky background."
                  style={{
                    backgroundImage: `url(${img3})`,
                  }}
                />
                <div
                  className="h-64 bg-cover bg-center rounded-lg"
                  data-alt="A close-up of a technical engineer at Linda Group reviewing blueprints on a digital screen. The background shows a busy but organized manufacturing floor with warm industrial lighting."
                  style={{
                    backgroundImage: `url(${img4})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 px-gutter text-center bg-surface relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-deep-steel mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-10">
            Connect with our technical sales team for custom quotes and project
            consultation. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setContactModal(!contactModal)}
              className="border-2 border-deep-steel text-deep-steel px-10 py-4 font-cta-label text-cta-label rounded transition-all hover:bg-deep-steel hover:text-white"
            >
              Contact Sales
            </button>
            <div
              id="contact-modal"
              onKeyUp={(e) => {
                if (e.key === "Escape") setContactModal(false);
              }}
              className={`${!contactModal ? "hidden" : "flex"}  font-body-md text-on-surface min-h-screen overflow-hidden`}
            >
              <div className="relative w-full h-screen">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="A cinematic, wide-angle shot of a state-of-the-art manufacturing facility with automated robotic arms and heavy machinery. The lighting is cool and professional, with deep steel blue shadows and clean white highlights. Industrial workers in high-visibility vests move with purpose through the organized, high-tech space. The atmosphere conveys global scale and precision engineering."
                />
                <div className="absolute inset-0 bg-deep-steel/60" />
              </div>
              {/* Modal Overlay */}
              <div
                onClick={() => setContactModal(false)}
                className="fixed inset-0 z-[100] flex items-center justify-center p-margin-mobile md:p-gutter modal-blur"
              >
                {/* Contact Modal Container */}
                <div className="bg-white w-full max-w-md shadow-2xl overflow-hidden border border-machine-gray/10 modal-enter">
                  {/* Header */}
                  <div className="bg-deep-steel p-6 flex justify-between items-center">
                    <h2 className="font-headline-md text-headline-md text-white">
                      Contact Our Sales Team
                    </h2>
                    <button
                      aria-label="Close modal"
                      onClick={() => setContactModal(!contactModal)}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      <span className="material-symbols-outlined text-3xl">
                        close
                      </span>
                    </button>
                  </div>
                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Egypt HQ Address */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <span
                          className="material-symbols-outlined text-deep-steel"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          location_on
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="font-label-technical text-label-technical uppercase text-deep-steel/60 text-start">
                          Egypt HO Office
                        </p>
                        <p className="text-body-md text-deep-steel font-medium text-start">
                          44 Burg Al Hana, #62, Madinet Al Zahra, Helmiet Al
                          Zayton Cairo, Egypt
                        </p>
                      </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <span
                          className="material-symbols-outlined text-deep-steel"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          mail
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="font-label-technical text-label-technical uppercase text-deep-steel/60 text-start">
                          Email Support
                        </p>
                        <a
                          className="text-body-md text-industrial-red hover:underline font-bold transition-all text-start"
                          href="mailto:sales@linda.com.eg"
                        >
                          sales@linda.com.eg
                        </a>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-start gap-4 pb-6">
                      <div className="flex-shrink-0 mt-1">
                        <span
                          className="material-symbols-outlined text-deep-steel"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          phone_in_talk
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="font-label-technical text-label-technical uppercase text-deep-steel/60 text-start">
                          Telephone
                        </p>
                        <div className="flex flex-col gap-1">
                          <p className="text-body-md text-deep-steel font-medium text-start">
                            +20 2 26428815
                          </p>
                          <p className="text-body-md text-deep-steel font-medium text-start">
                            +20 100 0081 757
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Actions */}
                  </div>
                  {/* Footer Meta */}
                  <div className="bg-surface-container-low p-4 text-center">
                    <p className="font-label-technical text-[12px] text-machine-gray/60 tracking-wider">
                      LINDA GROUP • INDUSTRIAL EXCELLENCE SINCE 1984
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
