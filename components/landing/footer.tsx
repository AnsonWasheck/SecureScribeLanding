const columns = [
  {
    heading: "Product",
    links: [
      { label: "Workflow", href: "#workflow" },
      { label: "Features", href: "#product" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Pilot program", href: "#pilot" },
      { label: "Security review", href: "mailto:pilot@securescribe.health?subject=Security%20review%20materials" },
      { label: "Contact", href: "mailto:pilot@securescribe.health" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060c18] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-sky-500 text-[13px] font-bold text-[#060c18]">
                S
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-white">SecureScribe</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Behavioral-health documentation infrastructure for psych teams.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} SecureScribe. Pilot program now open for behavioral-health units.
          </p>
        </div>
      </div>
    </footer>
  )
}
