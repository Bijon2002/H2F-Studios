import sys
import re

files = ['src/pages/Home.jsx', 'src/pages/Contact.jsx']
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # Fix fontVariationSettings string syntax error for 0 and 1
    content = content.replace("''FILL' 0'", "\"'FILL' 0\"")
    content = content.replace("''FILL' 1'", "\"'FILL' 1\"")
    
    with open(f, 'w') as file:
        file.write(content)

print("Fixed JSX syntax FILL 1")
