MD features supported:
- headings
- code blocks
- emphasis
- links
- pictures
- lists (bullet points, ordered list, TODO list)
- thematic break
- block quotes
MD features missing (ordered by priority):
- tables
- subscript/superscript
- math formulas
- footnotes

Text formatting and PDF generation features:
- possibility to define own attribures, from font to margins, for each text style
- full support for Bidi algorithm
- automatic selection of font based on supported glyphs (so more than one font can be added for each style)
- advanced line-break identification heuristic alghoritm, works also for mixed-language texts where line breaks are not obvious
- font subsetting
- print to the foreground/background
- text rotation
- repeat fragment for defined pages
- ligatures substitution

Known limitations
- Only initial support for complex scripts - not all font features are supported (especially GPOS, baseline and kerning)
- Initial support for BIDI texts - not all font features are supported (especially the GSUB for RTL and justify using Kashida for Arabic)
- Links are not supported for rotated texts
