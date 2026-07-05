import React from 'react'
import tube1 from '../../assets/images/tube-1.png'
import tube2 from '../../assets/images/tube-2.png'
import tube3 from '../../assets/images/tube-3.png'
import tubeHero from '../../assets/images/tube-hero.png'
import tubeCatalog from '../../assets/images/catalogue.pdf'
export default function Manufacturing() {


  return (
<main className='mt-5'>
  <section className="relative h-[100vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 hero-gradient z-10" />
      <img
        className="w-full h-full object-cover"
        data-alt="A cinematic, high-contrast wide shot of a modern automated steel tube manufacturing line. Glowing molten metal and sparks are visible in the background, while precisely engineered chrome pipes move through robotic arms in the foreground. The lighting is dramatic and industrial, featuring deep steel blues and intense orange highlights, reflecting a high-scale corporate manufacturing environment."
        src={tubeHero}
      />
    </div>
    <div className="relative z-20 max-w-container-max mx-auto px-gutter md:px-margin-desktop w-full">
      <div className="max-w-2xl">
        <span className="font-label-technical text-label-technical text-safety-yellow uppercase tracking-[0.2em] mb-4 block">
          ESTABLISHED 1998
        </span>
        <h1 className="font-display-lg text-display-lg text-white mb-6">
          Precision-Engineered Steel Tube Manufacturing
        </h1>
        <p className="font-body-lg text-body-lg text-surface-variant mb-8 opacity-90">
          Supplying global industries with top-quality pipes and metal
          processing. Excellence in heavy engineering across Egypt and Morocco.
        </p>
        <div className="flex flex-wrap gap-4">
          <a download='linda-group-catalogue.pdf' href={tubeCatalog} target='_blank' className="download-btn cursor-pointer bg-industrial-red  text-white px-8 py-4 font-cta-label hover:opacity-90 active:scale-95 transition-all">
            Explore Product Catalog
          </a>

        </div>
      </div>
    </div>
  </section>
  {/* Manufacturing Scale Bento Grid */}
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-container-max mx-auto px-gutter md:px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 bg-white p-12 technical-border flex flex-col justify-between">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-deep-steel mb-4">
              Strategic Industrial Footprint
            </h2>
            <p className="font-body-md text-body-md text-outline max-w-xl mb-8">
              With advanced facilities strategically located across the MENA
              region, Linda Group maintains high production capacity and
              unmatched logistical speed.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-4 border-industrial-red pl-4">
              <div className="font-display-lg text-headline-lg text-deep-steel font-bold">
                09
              </div>
              <div className="font-label-technical text-label-technical uppercase text-outline">
                Production Mills (EG)
              </div>
            </div>
            <div className="border-l-4 border-industrial-red pl-4">
              <div className="font-display-lg text-headline-lg text-deep-steel font-bold">
                02
              </div>
              <div className="font-label-technical text-label-technical uppercase text-outline">
                Mills in Morocco
              </div>
            </div>
            <div className="border-l-4 border-industrial-red pl-4">
              <div className="font-display-lg text-headline-lg text-deep-steel font-bold">
                1k+
              </div>
              <div className="font-label-technical text-label-technical uppercase text-outline">
                Team Members
              </div>
            </div>
            <div className="border-l-4 border-industrial-red pl-4">
              <div className="font-display-lg text-headline-lg text-deep-steel font-bold">
                15+
              </div>
              <div className="font-label-technical text-label-technical uppercase text-outline">
                Export Countries
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-deep-steel p-12 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-safety-yellow text-6xl mb-6">
            factory
          </span>
          <h3 className="font-headline-md text-headline-md text-white mb-4">
            Expanding Operations
          </h3>
          <p className="font-body-md text-body-md text-on-primary-container">
            Currently developing our second high-scale production site in
            Morocco to meet growing European and African demand.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Product Categories */}
  <section className="py-24">
    <div className="max-w-container-max mx-auto px-gutter md:px-margin-desktop">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="font-label-technical text-label-technical text-industrial-red uppercase tracking-widest mb-2 block">
            Our Expertise
          </span>
          <h2 className="font-headline-lg text-headline-lg text-deep-steel">
            Product Categories
          </h2>
        </div>
        <a
          className="hidden md:flex items-center gap-2 text-deep-steel font-bold group"
          href={tubeCatalog}
          download="linda-group-catalogue.pdf"
          target='_blank'
        >
          Full Catalog{" "}
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Category Card 1 */}
        <div className="group bg-white technical-border bento-card transition-all duration-700 opacity-100">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="A professional product shot of high-grade API 5L and ASTM steel pipes stacked in a clean, industrial warehouse. The pipes have a smooth, matte metallic finish and precise factory markings. The lighting highlights the cylindrical geometry and thickness of the steel walls, conveying industrial strength and engineering precision in a deep steel blue environment."
              src={tube1}
            />
            <div className="absolute inset-0 bg-deep-steel/20 group-hover:bg-deep-steel/0 transition-colors" />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline-md text-headline-md text-deep-steel">
                Pipes
              </h3>
              <span className="material-symbols-outlined text-outline">
                settings_input_component
              </span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> API 5L
                Standards
              </li>
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> ASTM
                Specifications
              </li>
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> Round Pipes
                EN 10255
              </li>
            </ul>
          </div>
        </div>
        {/* Category Card 2 */}
        <div className="group bg-white technical-border bento-card transition-all duration-700 opacity-100">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Technical display of various specialized steel sections including Scaffolding tubes, U-channels, and C-channels. The components are arranged in an organized, geometric pattern against a neutral machine-gray background. The metal has a galvanized, rust-resistant sheen, emphasizing technical durability and modular industrial application. High-end architectural product photography style."
              src={tube2}
            />
            <div className="absolute inset-0 bg-deep-steel/20 group-hover:bg-deep-steel/0 transition-colors" />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline-md text-headline-md text-deep-steel">
                Specialized Tubes
              </h3>
              <span className="material-symbols-outlined text-outline">
                construction
              </span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> Heavy
                Scaffolding
              </li>
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> U &amp; C
                Channels
              </li>
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> Precision
                Cut-to-Length
              </li>
            </ul>
          </div>
        </div>
        {/* Category Card 3 */}
        <div className="group bg-white technical-border bento-card transition-all duration-700 opacity-100">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="A macro shot of industrial metal processing. Close-up on a steel wire drawing machine in action, with fine metallic wires under tension. In the background, large L SAW fitting components are visible. The atmosphere is filled with technical precision, featuring bright cool-white lights and reflective metallic surfaces. Professional industrial manufacturing aesthetic."
              src={tube3}
            />
            <div className="absolute inset-0 bg-deep-steel/20 group-hover:bg-deep-steel/0 transition-colors" />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline-md text-headline-md text-deep-steel">
                Metal Processing
              </h3>
              <span className="material-symbols-outlined text-outline">
                precision_manufacturing
              </span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> Steel Wire
                Drawing
              </li>
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> L SAW
                Processing
              </li>
              <li className="flex items-center gap-2 text-body-md text-outline">
                <span className="w-1.5 h-1.5 bg-industrial-red" /> Industrial
                Fitting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Department Services */}
  <section className="py-24 bg-deep-steel text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
      <span className="material-symbols-outlined text-[400px] leading-none select-none">
        build_circle
      </span>
    </div>
    <div className="max-w-container-max mx-auto px-gutter md:px-margin-desktop relative z-10">
      <div className="mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          Value-Added Services
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
          Beyond manufacturing, we offer integrated processing services to
          streamline your supply chain and reduce inventory costs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
          <div className="text-safety-yellow mb-4">
            <span className="material-symbols-outlined text-4xl">
              content_cut
            </span>
          </div>
          <h4 className="font-headline-md text-body-lg font-bold mb-2">
            Slitting
          </h4>
          <p className="font-body-md text-body-md text-on-primary-container opacity-80">
            Precision slitting for coils of various widths and thicknesses.
          </p>
        </div>
        <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
          <div className="text-safety-yellow mb-4">
            <span className="material-symbols-outlined text-4xl">science</span>
          </div>
          <h4 className="font-headline-md text-body-lg font-bold mb-2">
            Pickling Coils
          </h4>
          <p className="font-body-md text-body-md text-on-primary-container opacity-80">
            Chemical surface treatment to ensure oxide-free metallic finishes.
          </p>
        </div>
        <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
          <div className="text-safety-yellow mb-4">
            <span className="material-symbols-outlined text-4xl">
              straighten
            </span>
          </div>
          <h4 className="font-headline-md text-body-lg font-bold mb-2">
            Tube Cut-to-Length
          </h4>
          <p className="font-body-md text-body-md text-on-primary-container opacity-80">
            Automated cutting systems for exact tolerance fulfillment.
          </p>
        </div>
        <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
          <div className="text-safety-yellow mb-4">
            <span className="material-symbols-outlined text-4xl">verified</span>
          </div>
          <h4 className="font-headline-md text-body-lg font-bold mb-2">
            Quality Assurance
          </h4>
          <p className="font-body-md text-body-md text-on-primary-container opacity-80">
            Rigorous inspection protocols to ensure zero-defect delivery.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Technical Standards Table */}
  <section className="py-24">
    <div className="max-w-container-max mx-auto px-gutter md:px-margin-desktop">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-deep-steel mb-4">
          Technical Compliance &amp; Testing
        </h2>
        <p className="font-body-md text-body-md text-outline">
          State-of-the-art testing equipment meeting international safety and
          quality protocols.
        </p>
      </div>
      <div className="overflow-x-auto technical-border">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-deep-steel text-white">
              <th className="p-6 font-label-technical">
                Certification / Standard
              </th>
              <th className="p-6 font-label-technical">Scope of Application</th>
              <th className="p-6 font-label-technical">Testing Frequency</th>
              <th className="p-6 font-label-technical">Issuing Authority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-machine-gray/10">
            <tr className="bg-white">
              <td className="p-6 font-body-md font-bold">
                API 5L (PSL 1 &amp; 2)
              </td>
              <td className="p-6 font-body-md text-outline">
                Gas &amp; Oil Pipelines
              </td>
              <td className="p-6 font-body-md text-outline">
                Continuous Monitoring
              </td>
              <td className="p-6 font-body-md text-outline">
                American Petroleum Institute
              </td>
            </tr>
            <tr className="bg-surface-container-low">
              <td className="p-6 font-body-md font-bold">ISO 9001:2015</td>
              <td className="p-6 font-body-md text-outline">
                Quality Management
              </td>
              <td className="p-6 font-body-md text-outline">Annual Audit</td>
              <td className="p-6 font-body-md text-outline">Bureau Veritas</td>
            </tr>
            <tr className="bg-white">
              <td className="p-6 font-body-md font-bold">ASTM A53 / A106</td>
              <td className="p-6 font-body-md text-outline">
                High-Temperature Service
              </td>
              <td className="p-6 font-body-md text-outline">
                Batch-Specific Testing
              </td>
              <td className="p-6 font-body-md text-outline">
                ASTM International
              </td>
            </tr>
            <tr className="bg-surface-container-low">
              <td className="p-6 font-body-md font-bold">EN 10255:2004</td>
              <td className="p-6 font-body-md text-outline">
                Structural Components
              </td>
              <td className="p-6 font-body-md text-outline">Process Audit</td>
              <td className="p-6 font-body-md text-outline">
                European Union Standard
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</main>

  )
}
