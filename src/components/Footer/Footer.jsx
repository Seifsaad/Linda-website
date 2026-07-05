import logo from "../../assets/images/Linda.png"

export default function Footer() {
    return (
<footer className="bg-tertiary text-on-primary py-16">
  <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-12">
    <div className="col-span-1 md:col-span-2">
      <div className="flex items-center gap-3 mb-6">
        <img
          alt="LINDA Logo"
          className="h-20 "
          src={logo}
        />
        <span className="font-headline-md text-headline-md text-on-primary font-bold">
          LINDA GROUP
        </span>
      </div>
      <p className="font-body-md text-body-md opacity-80 max-w-sm mb-8">
        Your global partner for steel tube manufacturing and industrial
        engineering excellence. Leading the market since 1981.
      </p>
      <div className="flex gap-4">
        <a
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-industrial-red transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-sm">face_nod</span>
        </a>
        <a
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-industrial-red transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-sm">
            alternate_email
          </span>
        </a>
        <a
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-industrial-red transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-sm">podcasts</span>
        </a>
      </div>
    </div>
    <div>
      <h6 className="font-cta-label text-cta-label text-safety-yellow mb-6 uppercase tracking-wider">
        Quick Links
      </h6>
      <ul className="space-y-4 font-body-md text-body-md">
        <li>
          <a
            className="text-surface-container-highest hover:text-white transition-colors"
            href="#"
          >
            Our Story
          </a>
        </li>
        <li>
          <a
            className="text-surface-container-highest hover:text-white transition-colors"
            href="#"
          >
            Linda Tube Products
          </a>
        </li>
        <li>
          <a
            className="text-surface-container-highest hover:text-white transition-colors"
            href="#"
          >
            Linda Engineering
          </a>
        </li>
        <li>
          <a
            className="text-surface-container-highest hover:text-white transition-colors"
            href="#"
          >
            Quality Assurance
          </a>
        </li>
        <li>
          <a
            className="text-surface-container-highest hover:text-white transition-colors"
            href="#"
          >
            Request a Quote
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h6 className="font-cta-label text-cta-label text-safety-yellow mb-6 uppercase tracking-wider">
        Contact Us
      </h6>
      <p className="text-surface-container-highest mb-4 text-sm leading-loose">
        44 Burg Al Hana, #62, Madinet Al Zahra,
        <br />
        Helmiet Al Zayton Cairo, Egypt
      </p>
      <p className="text-surface-container-highest mb-2 text-sm">
        Email: sales@linda.com.eg
      </p>
      <p className="text-surface-container-highest text-sm">
        Phone: +20 2 26428815
      </p>
    </div>
  </div>
  <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="font-body-md text-body-md opacity-60 text-sm">
      © 2026 Linda Group. All Rights Reserved. Industrial Excellence Across
      Borders.
    </p>
    <div className="flex gap-6 text-sm opacity-60">
      <a className="hover:text-industrial-red transition-colors" href="#">
        Privacy Policy
      </a>
      <a className="hover:text-industrial-red transition-colors" href="#">
        Terms of Service
      </a>
    </div>
  </div>
</footer>

    )
}