with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('{ value: "1", label: "Hackathon Win" }\n  Languages: ["Python"', '{ value: "1", label: "Hackathon Win" }\n  ]\n\n  const SKILLS = {\n    Languages: ["Python"')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
