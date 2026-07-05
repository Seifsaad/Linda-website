import React from 'react'
import about1 from '../../assets/images/about-1-1.png'
import about2 from '../../assets/images/about-2.png'
import about3 from '../../assets/images/about-3-1.avif'
import about4 from '../../assets/images/about-4.png'


export default function AboutUs() {
  return (
<main className="mt-5">
  {/* Hero Section */}
  <section className="relative h-[716px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div
        className="w-full h-full bg-cover bg-center"
        data-alt="A professional, high-fidelity wide-angle photograph of the interior of a massive steel manufacturing facility with deep perspective, industrial machinery, and overhead cranes."
        style={{backgroundImage: `url(${about1})`}}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-steel/90 to-transparent" />
    </div>
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-industrial-red text-white text-[10px] uppercase tracking-widest font-bold mb-6">
          Established 1981
        </div>
        <h1 className="text-white font-display-lg text-4xl md:text-6xl mb-6 leading-tight">
          Four Decades of <br />
          <span className="text-industrial-red">Industrial Excellence</span>
        </h1>
        <p className="text-white/90 font-body-lg max-w-xl mb-10 leading-relaxed transition-all duration-700 opacity-100 translate-y-0">
          Since 1981, Linda Group has been the backbone of infrastructure across
          the MENA region, bridging precision manufacturing with global
          engineering expertise.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="bg-white text-deep-steel px-8 py-4 font-bold rounded-lg hover:bg-industrial-red hover:text-white transition-all shadow-xl"
            href="#story"
          >
            Explore Our History
          </a>
          <a
            className="bg-transparent border border-white text-white px-8 py-4 font-bold rounded-lg hover:bg-white/10 transition-all"
            href="#stats"
          >
            Regional Operations
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Our Story */}
  <section
    className="py-24 industrial-grid relative overflow-hidden"
    id="story"
  >
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1 transition-all duration-700 opacity-100 translate-y-0">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              alt="A professional, high-fidelity wide-angle photograph of the interior of a massive steel manufacturing facility, conveying authentic scale and precision."
              className="w-full h-[500px] object-cover"
              src={about4}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-industrial-red -z-10 rounded-xl" />
        </div>
        <div className="order-1 lg:order-2 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-industrial-red font-label-technical tracking-widest block mb-4">
            THE LINDA JOURNEY
          </span>
          <h2 className="font-headline-lg text-deep-steel mb-8 transition-all duration-700 opacity-100 translate-y-0">
            Evolution of a Leader
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body-md leading-relaxed">
            <p className="transition-all duration-700 opacity-100 translate-y-0">
              Founded in 1981, Linda Group has evolved from a single material
              handling agency into a diversified industrial leader. Our journey
              is defined by a commitment to the region's growth and the pursuit
              of engineering perfection.
            </p>
            <p className="transition-all duration-700 opacity-100 translate-y-0">
              In 1998, we reached a pivotal milestone with the establishment of{" "}
              <strong className="text-deep-steel">Linda Tube</strong>, focusing
              on specialized industrial piping. This was followed by the rapid
              expansion of{" "}
              <strong className="text-deep-steel">
                Linda Engineering &amp; Trading
              </strong>
              , creating a powerhouse synergy that provides comprehensive
              industrial solutions across the continent.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="border-l-4 border-industrial-red pl-4 transition-all duration-700 opacity-100 translate-y-0">
                <div className="text-3xl font-bold text-deep-steel">1981</div>
                <div className="text-sm font-medium">Group Founded</div>
              </div>
              <div className="border-l-4 border-industrial-red pl-4 transition-all duration-700 opacity-100 translate-y-0">
                <div className="text-3xl font-bold text-deep-steel">1998</div>
                <div className="text-sm font-medium">Linda Tube Launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Strategic Leadership (KITO Section) */}
  <section className="bg-deep-steel py-20 text-white">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/3 text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <span className="material-symbols-outlined text-safety-yellow text-6xl">
              handshake
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4 transition-all duration-700 opacity-100 translate-y-0">
            Strategic Global Partnerships
          </h2>
          <p className="text-white/70 transition-all duration-700 opacity-100 translate-y-0">
            Our legacy is built on strong alliances with the world's most
            innovative manufacturers, ensuring Japanese precision meets MENA
            infrastructure.
          </p>
        </div>
        <div className="lg:w-2/3 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-white p-6 rounded-xl shrink-0">
              <img
                className="h-16 object-contain"
                data-alt="The official logo of KITO Japan rendered in high resolution against a clean white background, surrounded by minimalist industrial blueprint lines. The visual emphasizes precision engineering and the prestigious status of the brand within the global hoisting and crane industry."
                src={about2}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-safety-yellow mb-2">
                40+ Year Exclusive Partnership
              </h3>
              <p className="text-lg leading-relaxed transition-all duration-700 opacity-100 translate-y-0">
                We are proud to maintain a four-decade exclusive partnership
                with <strong className="text-white">KITO Japan</strong>. As the
                sole authorized provider for their world-renowned hoists and
                cranes, we deliver Japanese engineering reliability to the most
                demanding industrial projects in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Operations & Scale */}
  <section className="py-24 bg-surface-container" id="stats">
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-deep-steel transition-all duration-700 opacity-100 translate-y-0">
          A Growing Footprint
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 transition-all duration-700 opacity-100 translate-y-0">
          Scaling industrial capacity across borders to serve the evolving needs
          of regional infrastructure.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-industrial-red transition-all duration-700 opacity-100 translate-y-0">
          <span
            className="material-symbols-outlined text-deep-steel mb-4"
            data-weight="fill"
          >
            groups
          </span>
          <div className="text-4xl font-bold text-deep-steel mb-2">1,000+</div>
          <div className="text-sm uppercase tracking-wider text-outline">
            Dedicated Employees
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-industrial-red transition-all duration-700 opacity-100 translate-y-0">
          <span
            className="material-symbols-outlined text-deep-steel mb-4"
            data-weight="fill"
          >
            factory
          </span>
          <div className="text-4xl font-bold text-deep-steel mb-2">9 Mills</div>
          <div className="text-sm uppercase tracking-wider text-outline">
            Egypt (10th of Ramadan &amp; Suez)
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-industrial-red transition-all duration-700 opacity-100 translate-y-0">
          <span
            className="material-symbols-outlined text-deep-steel mb-4"
            data-weight="fill"
          >
            public
          </span>
          <div className="text-4xl font-bold text-deep-steel mb-2">
            Bouskoura
          </div>
          <div className="text-sm uppercase tracking-wider text-outline">
            New Operations in Morocco
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border-b-4 border-industrial-red transition-all duration-700 opacity-100 translate-y-0">
          <span
            className="material-symbols-outlined text-deep-steel mb-4"
            data-weight="fill"
          >
            precision_manufacturing
          </span>
          <div className="text-4xl font-bold text-deep-steel mb-2">
            ISO 9001
          </div>
          <div className="text-sm uppercase tracking-wider text-outline">
            Quality Standards
          </div>
        </div>
      </div>
      <div className="mt-16 rounded-2xl overflow-hidden h-96 relative">
        <div
          className="w-full h-full"
          data-alt="A professional aerial panoramic view of a massive industrial district featuring large manufacturing warehouses and logistics hubs under a clear blue sky. The scene depicts the 10th of Ramadan industrial city in Egypt, showing the vast scale of infrastructure development and modern industrial clusters in a bright, high-definition architectural photograph."
          style={{
            backgroundImage: `url(${about3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute bottom-0 left-0 bg-deep-steel/90 p-6 text-white max-w-sm">
          <h4 className="font-bold mb-2">Strategic Hub: 10th of Ramadan</h4>
          <p className="text-sm text-white/80 transition-all duration-700 opacity-100 translate-y-0">
            Our main production cluster in Egypt serves as the nerve center for
            regional distribution and precision manufacturing.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Our Values */}
  <section className="py-24">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="group transition-all duration-700 opacity-100 translate-y-0">
          <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-industrial-red transition-all">
            <span className="material-symbols-outlined text-deep-steel text-3xl group-hover:text-white">
              workspace_premium
            </span>
          </div>
          <h3 className="text-xl font-bold text-deep-steel mb-4">
            Quality Through Dedication
          </h3>
          <p className="text-on-surface-variant leading-relaxed transition-all duration-700 opacity-100 translate-y-0">
            We don't just supply equipment; we deliver peace of mind. Every
            product that leaves our facilities meets rigorous quality benchmarks
            forged through decades of experience.
          </p>
        </div>
        <div className="group transition-all duration-700 opacity-100 translate-y-0">
          <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-industrial-red transition-all">
            <span className="material-symbols-outlined text-deep-steel text-3xl group-hover:text-white">
              health_and_safety
            </span>
          </div>
          <h3 className="text-xl font-bold text-deep-steel mb-4">
            Safety First
          </h3>
          <p className="text-on-surface-variant leading-relaxed transition-all duration-700 opacity-100 translate-y-0">
            In heavy industry, safety is paramount. Our hoists and piping
            solutions are engineered to exceed international safety standards,
            protecting your most valuable assets: your people.
          </p>
        </div>
        <div className="group transition-all duration-700 opacity-100 translate-y-0">
          <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-industrial-red transition-all">
            <span className="material-symbols-outlined text-deep-steel text-3xl group-hover:text-white">
              support_agent
            </span>
          </div>
          <h3 className="text-xl font-bold text-deep-steel mb-4">
            24/7 Technical Support
          </h3>
          <p className="text-on-surface-variant leading-relaxed transition-all duration-700 opacity-100 translate-y-0">
            Our relationship begins after the sale. We provide round-the-clock
            technical expertise to ensure your operations never stop, regardless
            of the challenge.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="py-20 bg-industrial-red overflow-hidden relative">
    <div className="absolute top-0 right-0 opacity-10 rotate-12">
      <span
        className="material-symbols-outlined text-[300px]"
        data-weight="fill"
      >
        engineering
      </span>
    </div>
    <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 transition-all duration-700 opacity-100 translate-y-0">
        Ready to Build the Future?
      </h2>
      <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto transition-all duration-700 opacity-100 translate-y-0">
        Partner with an industry leader and leverage 40 years of precision
        engineering for your next project.
      </p>
      <div className="flex justify-center gap-6">
        <a
          className="bg-deep-steel text-white px-10 py-4 font-bold rounded shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
          href="#"
        >
          Partner With Us
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</main>
  )
}
