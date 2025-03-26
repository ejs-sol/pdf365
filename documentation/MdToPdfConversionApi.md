---
title: "Markdown to PDF Conversion API"
---

# Markdown to PDF Conversion API

## Overview
This API allows converting Markdown-formatted input into a PDF document, either as a standalone document or by appending content to an existing PDF.

For more up-to-date documentation and usage examples, please refer to the OpenAPI and our [Postman collection](/postman).

## Endpoints

### Convert Markdown to a New PDF

#### `POST /api/v1/md/convert`

**Description:**
Converts Markdown input into a standalone PDF document.

**Request Body:**
- Multipart/form-data containing:
  1. `controlDocument` - Object containing style & font configurations, output configuration, and the reference to the Markdown document.
  2. The referenced files (e.g., fonts, Markdown document), which can be referenced in the control document using `file://<filename>` URLs.

**Example Request:**
```json
{
    "styleConfiguration": {
        "h1Style": {
            "color":"BLACK",
            "fontTypeFace": "BOLD",
            "fontSize": 24,
            "alignment": "CENTER"
        }
    },
    "mdDocument": "file://document.md"
}
```

### Append Markdown to an Existing PDF

#### `POST /api/v1/md/convert/toExisting`

**Description:**
Adds Markdown-formatted input into an existing PDF document, useful for adding headers, watermarks, or filling forms.

**Request Body Options:**
1. **Multipart/form-data**
   - `controlDocument`: Contains optional style & font configurations, output configuration, and reference to the Markdown fragments.
   - Referenced files (e.g., fonts, Markdown document, the file to print into) can be included and referenced using `file://<filename>` URLs.
2. **JSON Payload**
   - Contains instructions for printing along with the link to the existing PDF document.

**Example Request:**
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
            "pageNumbers": "1-70",
            "x": 240,
            "y": 200,
            "width": 10000,
            "height": 100,
            "rotationDegrees": 60,
            "dpi": 150,
            "printToBackground": true,
            "mdTemplate": "# Draft v0.1"
        }
    ],
    "originalDocument": "file://document.pdf"
}
```

*Please note: the content of the `mdTemplate` will be printed into the window defined in `mdFragment` with `x`, `y`, `width` and `height` variables.
The x and y coordinates define the lower left corner of the window, which expands to the right and to the top by width and height. The content is then printed from the top of the window using the styling rules.*


## Constraints & Limitations
- Maximum request body size: **50MB**.
- Supported font format: **TTF** only.
- `mdFragments` is required, while other fields have default values if omitted.

## Error Handling

The API returns appropriate HTTP error codes in case of issues:
- **400 Bad Request**: Invalid input, such as a malformed URL.
- **500 Internal Server Error**: Unhandled exceptions during processing.

### Global Exception Handler

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleInvalidInput(IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGenericException(Exception ex) {
        logger.warn("Exception while processing: ", ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + ex.getMessage());
    }
}
```

