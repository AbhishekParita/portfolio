import sys

with open("app/page.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

nav_start = -1
nav_end = -1
for i, line in enumerate(lines):
    if "{/* Navbar */}" in line:
        nav_start = i
    if "      {mobileMenuOpen && (" in line:
        nav_end = i
        break

if nav_start != -1 and nav_end != -1:
    correct_nav = """      {/* Navbar */}
      <nav className={`fixed top-0 w-full h-[64px] z-40 transition-colors duration-300 ${scrolled ? 'bg-[#FFFFFFCC] backdrop-blur-md border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-[75rem] mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl tracking-tight text-[var(--color-text-near-black)] flex items-end">
            A.Parita<span className="text-[var(--color-primary-lime)] text-2xl leading-none font-bold">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link key={link} href={`#${link.lower()}`} className="text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-text-near-black)] font-medium transition-colors relative group">
                {link}
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary-lime)] group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
            <Link href="/Abhishek_Parita_Resume.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-text-near-black)] text-white text-[14px] font-medium hover:bg-black transition-colors">
              <Download className="w-4 h-4" /> Resume
            </Link>
          </div>
          
          <button className="md:hidden text-[var(--color-text-near-black)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

"""
    with open("app/page.tsx", "w", encoding="utf-8") as f:
        f.writelines(lines[:nav_start])
        f.write(correct_nav)
        f.writelines(lines[nav_end:])
        print("Nav fixed")
