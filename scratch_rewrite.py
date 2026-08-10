import re

with open('c:/#############website-game/website-portofolio/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract the cards by their headers
def extract_card(header_name):
    # Find the header element
    header_idx = html.find(header_name)
    # Find the enclosing <div class="skill-category"
    start = html.rfind('<div class="skill-category"', 0, header_idx)
    
    # find the start of the next card or the end of the section
    next_card = html.find('<div class="skill-category"', start + 10)
    end_grid = html.find('<!-- Portfolio Section -->', start)
    
    if next_card == -1 or end_grid < next_card:
        # It's the last card (Soft Skills), its end is the closing div of the skills-grid
        end = html.find('</div>\n        </div>\n    </section>', start)
    else:
        end = next_card
    
    return html[start:end].strip()

card_prog = extract_card('skills_cat_prog')
card_it = extract_card('IT Support & Networking')
card_office = extract_card('skills_cat_office')
card_design = extract_card('skills_cat_design')
card_soft = extract_card('Soft Skills')

new_html_block = f'''<div class="skills-columns">
                <div class="skills-col">
                    {card_prog}
                    {card_design}
                </div>
                <div class="skills-col">
                    {card_it}
                    {card_office}
                </div>
            </div>
            {card_soft}
            '''

# Find the start and end of skills grid
start_idx = html.find('<div class="skills-grid">')
end_idx = html.find('</div>\n        </div>\n    </section>', start_idx)

modified_html = html[:start_idx] + new_html_block + html[end_idx:]

with open('c:/#############website-game/website-portofolio/index.html', 'w', encoding='utf-8') as f:
    f.write(modified_html)

print('Success')
