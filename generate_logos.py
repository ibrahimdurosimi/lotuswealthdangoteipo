import subprocess

# 1. Create CardinalStone Logo SVG
cs_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 80" fill="none" width="100%" height="100%">
  <!-- Emblem disc + 5 ascending pillars -->
  <g transform="translate(350, 4) scale(0.65)">
    <!-- Navy blue circle -->
    <circle cx="45" cy="55" r="38" fill="#162766" />
    <!-- 5 white ascending pillars with angled top cut -->
    <g fill="#ffffff">
      <!-- Pillar 1 -->
      <polygon points="21,50 27,48 27,82 21,80" />
      <!-- Pillar 2 -->
      <polygon points="31,41 37,39 37,87 31,86" />
      <!-- Pillar 3 -->
      <polygon points="41,31 47,29 47,91 41,90" />
      <!-- Pillar 4 -->
      <polygon points="51,20 57,18 57,90 51,90" />
      <!-- Pillar 5 -->
      <polygon points="61,9  67,7  67,83 61,84" />
    </g>
  </g>

  <!-- Wordmark CARDINALSTONE in serif -->
  <text x="0" y="66" 
        fill="#162766" 
        font-family="'Times New Roman', 'Playfair Display', 'Cinzel', 'Baskerville', 'Georgia', serif" 
        font-size="42" 
        font-weight="700" 
        letter-spacing="0.12em">CARDINALSTONE</text>
</svg>"""

with open('public/cardinalstone-logo.svg', 'w') as f:
    f.write(cs_svg)

# 2. Create Lotus Wealth high res SVG
lw_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 80" fill="none" width="100%" height="100%">
  <!-- Origami Icon -->
  <g transform="translate(2, 6) scale(0.85)">
    <!-- Top left ribbon fold (bright red) -->
    <polygon points="0,22 45,0 80,18 40,32 0,22" fill="#C10202" />
    <!-- Top-mid fold shadow (dark red) -->
    <polygon points="0,22 40,32 35,42 0,22" fill="#840B0E" />
    <!-- Center vertical folding ribbon (crimson) -->
    <polygon points="40,32 45,68 35,68 35,42" fill="#9E0D12" />
    <!-- Bottom base triangle (dark charcoal) -->
    <polygon points="40,74 45,82 35,82" fill="#222222" />
    <!-- Left bottom wing (crimson/burgundy) -->
    <polygon points="0,52 35,68 0,82 0,68" fill="#8B0C10" />
    <!-- Upper right diagonal rising ribbon (bright red) -->
    <polygon points="45,45 80,26 80,38 45,56" fill="#C10202" />
    <!-- Lower right diagonal rising ribbon (bright red) -->
    <polygon points="45,63 80,44 80,56 45,74" fill="#C10202" />
  </g>

  <!-- Wordmark LOTUS WEALTH -->
  <text x="86" y="61" 
        fill="#232323" 
        font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" 
        font-size="46" 
        font-weight="900" 
        letter-spacing="-0.02em">LOTUS WEALTH</text>
</svg>"""

with open('public/lotus-wealth-logo.svg', 'w') as f:
    f.write(lw_svg)

print("SVGs created successfully")
