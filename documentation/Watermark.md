---
title: "Howto: Tables"
---

# Watermark

Adding watermark to your documents is easy. Just follow these easy steps: 

#### 1. First, get your document ready.

In our example, we assume it is a local file named `lorem.pdf`. Of course, you can as well use file stored in the cloud, in which case you have to replace the value of `originalDocument` to the url of the file. 

#### 2. Second, prepare the JSON document that tells pdf365 to put watermark.
Example:
```json
{
    "styleConfiguration": {
        "h1Style": {
            "color":"LIGHT_GRAY",
            "fontTypeFace": "NORMAL_BOLD",
            "fontSize": 90,
            "alignment": "LEFT",
            "requiredSpaceBefore": 0
        }
    },
    "mdFragment": [
        {
            "pageNumber": "1",
            "position": {
                "ownAnchor": "CENTER_LEFT",
                "x": "25%",
                "y": "25%",
                "width": "80%",
                "height": 90,
                "rotationDegrees": 60
            },
            "printToBackground": true,
            "mdTemplate": "# Draft v0.1"
        }
    ],
    "originalDocument": "file://document.pdf"
}
```
What happens here: We start by defining the MD template. In our example, we print string "Draft v0.1" in header 1 style (`# `).

Then, since default h1 style is probably too small for a watermark through the whole page, we adjust the style by defining font as light-gray, 90pts high bold, and since it is one-liner, we remove the vertical padding with `requiredSpaceBefore`. 

As the third step, we define where we want to print the watermark. We define a printing window. We choose an anchor point on the window - it will be the centre of its left side. This point will be placed at position (25%, 25%) of the page from the bottom left corner. The window size is 1000x100pts - enough to fill the watermark text (remember, font height is 90pts). We also rotate the window by 60 degrees. 

Last, we tell the pdf365 engine to print into the background with `"printToBackground": true,`, and the pages to print to with `pageNumber` or `pageNumbers` respectively. 
*Note: You can specify ranges (e.g. `"2-5"`), `all`, `even`, `odd` or list of individual pages (e.g. `[1,2,5]`)*

#### 3. Put it all together as a rest request.

Store the control document in `controlDocument.json` file, and send it.
Example: 
```
curl -X POST https://<service_address>:7000/api/v1/md/append \
    -F 'controlDocument=@controlDocument.json;type=application/json' \
    -F 'document.pdf=@lorem.pdf;type=application/pdf'
    -o output.pdf
```

