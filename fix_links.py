import sys
import re

files = ['src/pages/Home.jsx', 'src/pages/Contact.jsx']
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # Replace href="home.html" or similar with href="/"
    content = re.sub(r'href="[^"]*home\.html"', 'href="/"', content)
    # Replace href="contact.html" or similar with href="/contact"
    content = re.sub(r'href="[^"]*contact\.html"', 'href="/contact"', content)
    
    with open(f, 'w') as file:
        file.write(content)

print("Fixed navigation links")
