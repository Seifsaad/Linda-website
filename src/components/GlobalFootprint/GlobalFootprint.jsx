import { useState } from 'react'
import Modal from '../utls/Modal';
import gf1 from '../../assets/images/gf1.jpg'
import gf2 from '../../assets/images/gf2.png'

export default function GlobalFootprint() {
  const [contactModal, setContactModal] = useState(false)
  return (
<main className="mt-5">
  {/* Hero Section */}
  <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-deep-steel">
      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url(${gf1})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-steel via-deep-steel/60 to-transparent" />
    </div>
    <div className="relative max-w-container-max mx-auto px-margin-desktop w-full">
      <div className="max-w-2xl reveal-on-scroll visible">
        <span className="font-label-technical text-label-technical text-industrial-red tracking-widest uppercase mb-4 block">
          International Infrastructure
        </span>
        <h1 className="font-display-lg text-display-lg text-white mb-6">
          Global Industrial Presence
        </h1>
        <p className="font-body-lg text-body-lg text-surface-variant mb-8">
          Managing a sophisticated network of production facilities and
          logistics hubs to serve the evolving needs of global manufacturing and
          heavy industry.
        </p>
        <div className="flex gap-4">
          <a
            className="bg-industrial-red text-white px-8 py-4 font-cta-label text-cta-label transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
            href="#strategic-hubs"
          >
            Explore Hubs
          </a>
          <a
            className="border-2 border-white text-white px-8 py-4 font-cta-label text-cta-label transition-all hover:bg-white hover:text-deep-steel"
            href="#stats"
          >
            Key Statistics
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Stats Section */}
  <section
    className="py-16 bg-white border-b border-outline-variant/30"
    id="stats"
  >
    <div className="max-w-container-max mx-auto px-margin-desktop">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
        <div className="reveal-on-scroll text-center lg:text-left border-l-4 border-industrial-red pl-6 py-2 visible">
          <div className="font-display-lg text-display-lg text-deep-steel mb-1">
            1000+
          </div>
          <div className="font-label-technical text-label-technical text-on-surface-variant">
            Skilled Employees
          </div>
        </div>
        <div
          className="reveal-on-scroll text-center lg:text-left border-l-4 border-industrial-red pl-6 py-2 visible"
          style={{ transitionDelay: "100ms" }}
        >
          <div className="font-display-lg text-display-lg text-deep-steel mb-1">
            11+
          </div>
          <div className="font-label-technical text-label-technical text-on-surface-variant">
            Production Mills
          </div>
        </div>
        <div
          className="reveal-on-scroll text-center lg:text-left border-l-4 border-industrial-red pl-6 py-2 visible"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="font-display-lg text-display-lg text-deep-steel mb-1">
            15+
          </div>
          <div className="font-label-technical text-label-technical text-on-surface-variant">
            Export Countries
          </div>
        </div>
        <div
          className="reveal-on-scroll text-center lg:text-left border-l-4 border-industrial-red pl-6 py-2 visible"
          style={{ transitionDelay: "300ms" }}
        >
          <div className="font-display-lg text-display-lg text-deep-steel mb-1">
            40+
          </div>
          <div className="font-label-technical text-label-technical text-on-surface-variant">
            Years of Excellence
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Strategic Hubs Map Section */}
  <section
    className="py-24 bg-surface-container-low overflow-hidden"
    id="strategic-hubs"
  >
    <div className="max-w-container-max mx-auto px-margin-desktop">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 reveal-on-scroll visible">
          <span className="font-label-technical text-label-technical text-industrial-red uppercase tracking-widest block mb-4">
            Industrial Backbone
          </span>
          <h2 className="font-headline-lg text-headline-lg text-deep-steel mb-6">
            Our Strategic Hubs
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white border border-outline-variant/30 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-industrial-red/10 p-3">
                  <span className="material-symbols-outlined text-industrial-red">
                    factory
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-deep-steel mb-2">
                    Egypt Operations
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Centralized production power with 9 high-capacity sites
                    located in the 10th of Ramadan and Suez. These facilities
                    represent our core manufacturing strength.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white border border-outline-variant/30 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-industrial-red/10 p-3">
                  <span className="material-symbols-outlined text-industrial-red">
                    language
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-deep-steel mb-2">
                    Morocco Branch
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Our strategic Bousekoura branch serves as the gateway to
                    West African markets, ensuring localized support and rapid
                    distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 relative reveal-on-scroll visible"
          style={{ transitionDelay: "200ms" }}
        >
          {/* Stylized Map Placeholder */}
          <div className="aspect-square bg-deep-steel rounded-full p-8 relative flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }}
            />
            <div className="relative w-full h-full border border-white/10 rounded-full flex items-center justify-center">
              {/* Abstract Globe / Region visualization */}
              <div className="w-[80%] h-[80%] border-2 border-industrial-red/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="w-[60%] h-[60%] absolute border border-white/20 rounded-full" />
              {/* Hub Markers */}
              <div className="absolute top-1/3 left-1/2 group">
                <div className="map-dot-pulse w-4 h-4 bg-industrial-red rounded-full cursor-pointer relative z-10" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 text-label-technical text-deep-steel shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Cairo &amp; Suez (9 Sites)
                </div>
              </div>
              <div className="absolute top-1/2 left-1/4 group">
                <div
                  className="map-dot-pulse w-4 h-4 bg-industrial-red rounded-full cursor-pointer relative z-10"
                  style={{ animationDelay: "0.5s" }}
                />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 text-label-technical text-deep-steel shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Bousekoura, Morocco
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-6 shadow-2xl border border-outline-variant/30 min-w-[280px] rounded-lg">
              <h4 className="font-label-technical text-label-technical text-industrial-red uppercase tracking-widest mb-4 border-b border-outline-variant/30 pb-2">
                Strategic Operations Hubs
              </h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-deep-steel text-sm mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="font-cta-label text-sm text-deep-steel">
                      Egypt
                    </p>
                    <p className="font-body-md text-[12px] text-on-surface-variant">
                      9 High-Capacity Sites (Cairo &amp; Suez)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-deep-steel text-sm mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="font-cta-label text-sm text-deep-steel">
                      Morocco
                    </p>
                    <p className="font-body-md text-[12px] text-on-surface-variant">
                      Bousekoura Regional Hub
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-deep-steel p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-safety-yellow rounded-full animate-pulse" />
                  <span className="font-label-technical text-[10px] text-white uppercase tracking-tighter">
                    Active Hubs: 10
                  </span>
                </div>
                <span className="font-label-technical text-[10px] text-primary-fixed-dim uppercase tracking-tighter">
                  Status: Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Logistics Section */}
  <section className="py-24 bg-white">
    <div className="max-w-container-max mx-auto px-margin-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 reveal-on-scroll visible">
          <div className="relative group overflow-hidden border-2 border-deep-steel">
            <div
              className="aspect-video w-full"
              style={{
                backgroundImage: `url(${gf2})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className="absolute bottom-0 right-0 bg-industrial-red text-white p-6 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
              <span className="material-symbols-outlined text-[48px]">
                local_shipping
              </span>
            </div>
          </div>
        </div>
        <div
          className="order-1 lg:order-2 reveal-on-scroll visible"
          style={{ transitionDelay: "200ms" }}
        >
          <h2 className="font-headline-lg text-headline-lg text-deep-steel mb-6">
            Seamless Logistics &amp; Distribution
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Our cross-border delivery network is engineered for speed and
            reliability. By integrating advanced tracking systems and strategic
            port proximity, we ensure that industrial components reach their
            destination on schedule, every time.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-industrial-red font-bold">
                check_circle
              </span>
              <span className="font-cta-label text-cta-label text-deep-steel">
                End-to-end supply chain visibility
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-industrial-red font-bold">
                check_circle
              </span>
              <span className="font-cta-label text-cta-label text-deep-steel">
                Strategic proximity to major Mediterranean ports
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-industrial-red font-bold">
                check_circle
              </span>
              <span className="font-cta-label text-cta-label text-deep-steel">
                Dedicated customs clearance teams
              </span>
            </div>
          </div>
          <button className="border-2 border-deep-steel text-deep-steel px-8 py-3 font-cta-label text-cta-label hover:bg-deep-steel hover:text-white transition-colors">
            Download Logistics Brochure
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="py-24">
    <div className="max-w-container-max mx-auto px-margin-desktop">
      <div className="bg-deep-steel relative overflow-hidden p-12 lg:p-20 text-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px"
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display-lg text-display-lg text-white mb-6">
            Partner with a Global Leader
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-10">
            Join a network of international industrial partners who rely on
            Linda Group for precision manufacturing and robust logistics.
          </p>
          <button onClick={() => setContactModal(true)} className="bg-industrial-red text-white px-10 py-5 font-cta-label text-cta-label text-lg hover:scale-105 transition-transform shadow-2xl active:scale-95">
            Request Quote Today
          </button>
          
          {contactModal && (
            <Modal
              isOpen={contactModal}
              setIsOpen={setContactModal}
              
            />
          )}
        </div>
      </div>
    </div>
  </section>
</main>
  )
}
