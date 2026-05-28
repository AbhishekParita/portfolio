import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<section id="experience"', '<motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} id="experience"')
content = content.replace('<section id="projects"', '<motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} id="projects"')
content = content.replace('<section id="education"', '<motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} id="education"')
content = content.replace('<section id="connect"', '<motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} id="connect"')
content = content.replace('</section>', '</motion.section>')
# But wait, <section className="bg-[var(--color-text-near-black)]... (STATS section)
content = content.replace('<section className="bg-[var(--color-text-near-black)]', '<motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-[var(--color-text-near-black)]')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Animations added")
