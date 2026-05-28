with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<section id="top" className="pt-[144px] pb-[80px] px-6">', '<motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} id="top" className="pt-[144px] pb-[80px] px-6">')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
