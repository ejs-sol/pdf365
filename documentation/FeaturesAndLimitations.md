---
title: "Features and limitations"
---

# Features and limitations

Convert MD document to PDF file
Print MD fragment into an existing document (e.g. for watermarks, headers, footers, etc)
Print multiple MD fragments on one or more pages to construct complex documents like invoices

MD features supported:
- headings
- code blocks
- emphasis
- links
- pictures
- lists (bullet points, ordered list, TODO list)
- thematic break
- block quotes
- tables (including cell spanning, column alignment definition & multi-row headers)

MD features missing (ordered by priority, as we will ad them):
- footnotes
- subscript/superscript
- math formulas

Text formatting and PDF generation features:
- out-of-the box support for all major scripts: latin, cyrillic, greek, arabic, hebrew, CJK, indic (tamil, devanagari, bengali)
- other scripts can be added with user supplied OTF fonts
- full shaping support
- possibility to define own styles, from font to margins, for each text style
- full support for Bidi algorithm
- justification
- automatic selection of font based on supported glyphs (so more than one font can be added for each style)
- advanced line-break identification heuristic algorithm, works also for mixed-language texts where line breaks are not obvious
- font subsetting into the resulting PDF
- print to the foreground/background
- text rotation
- repeat fragment for defined pages
- hyphenation for latin, cyrillic and indic languages (for a comprehensive list of languages supported refer to the [hypherator library](https://github.com/ejossev/hypherator-java))
- advanced typesetting features like orphan&widow prevention

Known limitations
- Links are not supported for rotated texts

Constraints
- Maximum request body size: 50MB
- Supported font format: TTF only

Missing something? Anything does not work as expected? Feel free to use [GitHub Issues](https://github.com/ejs-sol/pdf365/issues) to let us know. 
