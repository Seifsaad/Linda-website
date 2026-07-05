import React from "react";
import engHero from "../../assets/images/eng-2-2.png";
import eng1 from "../../assets/images/eng-1.png";
import eng2 from "../../assets/images/eng-2.png";
import eng3 from "../../assets/images/eng-3.png";

export default function Engineering() {
  return (
    <main className="mt-5">
      <section className="relative md:h-[640px] h-[440px] min-h-[800px] max-h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="A massive, high-scale industrial manufacturing facility with soaring steel ceilings and dramatic shafts of natural light. High-performance KITO electric chain hoists and crane systems are suspended from overhead gantries, lifting heavy mechanical components. The color palette is dominated by deep steel blues and industrial grays with sharp red accents on the machinery. The atmosphere is professional, powerful, and technologically advanced."
            style={{
              backgroundImage: `url(${engHero})`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 md:px-margin-desktop relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-industrial-red text-white text-xs font-bold px-3 py-1 mb-6 rounded-sm uppercase tracking-widest">
              Since 1981
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-shadow-sm">
              Precision Material Handling &amp; <br />
              <span className="text-industrial-red">
                Industrial Engineering
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Exclusive Agent for KITO Japan. Empowering global industries with
              high-performance lifting solutions through four decades of
              technical excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://ferret-one.akamaized.net/files/6344ff6992702f004a360acb/Catalog-EN-General.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-industrial-red cursor-pointer text-white px-8 py-4 rounded font-bold text-base hover:bg-red-700 transition-all shadow-lg flex items-center gap-2"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  download
                </span>
                Download Catalog
              </a>
              <a
                href="#products"
                className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded font-bold text-base hover:bg-white hover:text-deep-steel transition-all"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Agency Showcase */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 border-2 border-industrial-red/20 rounded-xl group-hover:border-industrial-red/40 transition-all duration-500" />
                <div className="aspect-video w-full rounded-lg shadow-2xl overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    data-alt="A heavy-duty yellow industrial crane system in action within a bustling workshop. The crane is lifting a large steel structure with precision, highlighting the robust engineering of KITO products. The background shows a clean, organized factory floor with workers in safety gear. Sunlight filters through the high windows, creating a bright and productive industrial environment."
                    style={{
                      backgroundImage: `url(${eng1})`,
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-deep-steel p-8 rounded shadow-xl text-white hidden md:block">
                  <div className="text-4xl font-bold mb-1">150+</div>
                  <div className="text-xs uppercase tracking-widest text-white">
                    Satisfied Manufacturers
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-bold text-deep-steel mb-6">
                40+ Years of KITO Partnership
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Founded in 1981, LINDA Engineering and Trade began with a single
                agency and a vision for industrial excellence. Today, we proudly
                serve as the{" "}
                <span className="text-deep-steel font-bold">
                  exclusive agent for Japanese KITO Hoists &amp; Cranes
                </span>{" "}
                in the region.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-steel text-lg">
                      Unrivaled Expertise
                    </h4>
                    <p className="text-on-surface-variant">
                      Four decades of field-tested experience in complex lifting
                      challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
                    <span className="material-symbols-outlined">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-steel text-lg">
                      World-Class Solutions
                    </h4>
                    <p className="text-on-surface-variant">
                      Access to the latest Japanese technology for maximum
                      safety and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Categories */}
      <section id="products" className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-deep-steel mb-4">
              Core Product Range
            </h2>
            <div className="w-20 h-1 bg-industrial-red mx-auto mb-6" />
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Discover our comprehensive selection of material handling
              equipment, designed for durability and precision in the most
              demanding environments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Category 1: Hoists */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-industrial-red scale-150">
                  book
                </span>
                <h3 className="font-display text-2xl font-bold text-deep-steel">
                  Hoists &amp; Lifting
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant hover:border-deep-steel transition-colors">
                  <h4 className="font-bold text-lg mb-2">Electric Hoists</h4>
                  <p className="text-sm text-on-surface-variant mb-4">
                    High-performance KITO Electric chain hoists with precision
                    control.
                  </p>
                  <a
                    className="text-industrial-red text-sm font-bold flex items-center gap-1 group"
                    href="https://ferret-one.akamaized.net/files/633a70b14e6f20070285aeaa/Catalog-EN-ER2.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Explore{" "}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant hover:border-deep-steel transition-colors">
                  <h4 className="font-bold text-lg mb-2">Manual Hoists</h4>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Durable hand chain hoists for versatile lifting in various
                    sites.
                  </p>
                  <a
                    className="text-industrial-red text-sm font-bold flex items-center gap-1 group"
                    href="https://ferret-one.akamaized.net/files/633a74b8c1055200cba7576e/Catalog-EN-CB.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Explore{" "}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant hover:border-deep-steel transition-colors">
                  <h4 className="font-bold text-lg mb-2">Air Hoists</h4>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Spark-resistant pneumatic power for hazardous environments.
                  </p>
                  <a
                    className="text-industrial-red text-sm font-bold flex items-center gap-1 group"
                    href="https://ferret-one.akamaized.net/files/633a74b80be9250049429ffb/Catalog-EN-AH.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Explore{" "}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant hover:border-deep-steel transition-colors">
                  <h4 className="font-bold text-lg mb-2">Lever Hoists</h4>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Robust pulling and lifting tools for heavy industrial
                    rigging.
                  </p>
                  <a
                    className="text-industrial-red text-sm font-bold flex items-center gap-1 group"
                    href="https://ferret-one.akamaized.net/files/67248a5d0490bc1154c2048f/Catalog-EN-LB.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Explore{" "}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Category 2: Material Handling */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-industrial-red scale-150">
                  architecture
                </span>
                <h3 className="font-display text-2xl font-bold text-deep-steel">
                  Material Handling
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant hover:border-deep-steel transition-colors">
                  <h4 className="font-bold text-lg mb-2">Balancers</h4>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Zero-gravity tool support for ergonomic assembly lines.
                  </p>
                  <a
                    className="text-industrial-red text-sm font-bold flex items-center gap-1 group"
                    href="#"
                  >
                    Explore{" "}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant hover:border-deep-steel transition-colors">
                  <h4 className="font-bold text-lg mb-2">Cranes</h4>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Custom jib, gantry, and overhead crane systems.
                  </p>
                  <a
                    className="text-industrial-red text-sm font-bold flex items-center gap-1 group"
                    href="https://ferret-one.akamaized.net/files/633a74b9cb9f47004a87cad4/Catalog-EN-CR.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Explore{" "}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant hover:border-deep-steel transition-colors">
                  <h4 className="font-bold text-lg mb-2">Trolleys</h4>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Plain and geared trolleys for smooth horizontal movement.
                  </p>
                  <a
                    className="text-industrial-red text-sm font-bold flex items-center gap-1 group"
                    href="https://ferret-one.akamaized.net/files/633a70b14e6f20070285aeaa/Catalog-EN-ER2.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Explore{" "}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <webgl-shader
            className="w-full h-full"
            src="{{DATA:ANIMATION:ANIMATION_1}}"
          />
        </div>
        <div className="container mx-auto px-4 md:px-margin-desktop relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="font-display text-4xl font-bold text-deep-steel mb-6">
                Why Choose <br />
                <span className="text-industrial-red">Linda Engineering?</span>
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Our dedicated team boasts over 40 years of expertise in material
                handling. We don't just sell equipment; we provide end-to-end
                industrial reliability.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="mb-4 text-industrial-red">
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    engineering
                  </span>
                </div>
                <h4 className="text-xl font-bold text-deep-steel mb-2">
                  Technical Expertise
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Deep knowledge in Japanese engineering standards and material
                  handling safety protocols.
                </p>
              </div>
              <div className="group">
                <div className="mb-4 text-industrial-red">
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    support_agent
                  </span>
                </div>
                <h4 className="text-xl font-bold text-deep-steel mb-2">
                  24/7 Support
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Our services are running round-the-clock to fulfill your
                  urgent maintenance and spare part needs.
                </p>
              </div>
              <div className="group">
                <div className="mb-4 text-industrial-red">
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    payments
                  </span>
                </div>
                <h4 className="text-xl font-bold text-deep-steel mb-2">
                  Cost-Effective
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Highest quality products at competitive prices, reducing
                  long-term TCO for your facility.
                </p>
              </div>
              <div className="group">
                <div className="mb-4 text-industrial-red">
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    shield_lock
                  </span>
                </div>
                <h4 className="text-xl font-bold text-deep-steel mb-2">
                  Safe &amp; Secure
                </h4>
                <p className="text-on-surface-variant text-sm">
                  State-of-the-art testing equipment ensuring all products meet
                  strict international safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Services */}
      <section className="py-20 bg-deep-steel text-white">
        <div className="container mx-auto px-4 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h3 className="font-display text-3xl font-bold mb-6">
                Industrial Technical Services
              </h3>
              <p className="text-primary-fixed-dim mb-8">
                Beyond equipment sales, we provide the technical foundation for
                your facility's safety and longevity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-industrial-red">
                    check_circle
                  </span>
                  <span>Professional Installation &amp; Commissioning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-industrial-red">
                    check_circle
                  </span>
                  <span>Preventative Maintenance Contracts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-industrial-red">
                    check_circle
                  </span>
                  <span>Official Load Testing &amp; Safety Certification</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-industrial-red">
                    check_circle
                  </span>
                  <span>Genuine KITO Spare Parts Supply</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div
                className="aspect-square bg-cover bg-center rounded-lg"
                data-alt="Close-up shot of a technician in a high-visibility vest performing maintenance on a KITO electric chain hoist. The lighting is focused and industrial, highlighting the precision work and tools. The scene communicates trust, safety, and deep technical knowledge."
                style={{
                  backgroundImage: `url(${eng2})`,
                }}
              />
              <div
                className="aspect-square bg-cover bg-center rounded-lg mt-8"
                data-alt="A technician conducting a load test on a large overhead crane in a factory setting. Specialized monitoring equipment is visible as the crane lifts a test weight. The background is a large industrial warehouse with a blue and gray color palette."
                style={{
                  backgroundImage: `url(${eng3})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
