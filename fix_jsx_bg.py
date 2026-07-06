import sys
import re

files = ['src/pages/Home.jsx', 'src/pages/Contact.jsx']
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # Fix style strings that have quotes inside, by replacing outer single quotes with double quotes.
    # Currently style={{ prop: 'value' }} -> we want style={{ prop: "value" }} if value has single quotes
    
    # Let's just fix the url('...') specifically
    content = re.sub(r"backgroundImage:\s*'url\('([^']+)'\)'", r'backgroundImage: "url(\'\1\')"', content)
    
    with open(f, 'w') as file:
        file.write(content)

print("Fixed JSX style backgroundImage syntax")
