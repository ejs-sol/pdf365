---
title: PDF Processing API
---

# PDF Processing API

## Overview
The PDF Processing API provides various endpoints to inspect, modify, and manipulate PDF documents. The available operations include inspecting metadata, extracting pages, splitting, merging, and adding attachments to PDFs.

For more up-to-date documentation and usage examples, please refer to the OpenAPI and our [Postman collection](/postman).


## Endpoints

### 1. Inspect PDF Metadata
**Endpoint:** `POST /api/v1/pdf/inspect`

**Description:**
Extracts metadata and structural information from a given PDF file.

**Request:**
- **Content-Type:** `application/pdf`
- **Body:** Binary PDF file

**Response:**
- **Content-Type:** `application/json`
- JSON object containing metadata information

---

### 2. Extract Pages from PDF
**Endpoint:** `POST /api/v1/pdf/pages`

**Description:**
Splits a PDF into individual pages and returns them as separate files.

**Request:**
- **Content-Type:** `application/pdf`
- **Body:** Binary PDF file

**Response:**
- **Content-Type:** `multipart/mixed`
- Multiple PDF files, each representing a page

---

### 3. Split PDF into Multiple Documents
**Endpoint:** `POST /api/v1/pdf/split`

**Description:**
Splits a PDF document into multiple smaller PDFs at specified page numbers.

**Request:**
- **Content-Type:** `application/pdf`
- **Body:** Binary PDF file
- **Query Parameter:** `splitAfter` - List of page numbers where the split should occur

**Response:**
- **Content-Type:** `multipart/mixed`
- Multiple PDF files, each representing a split document

---

### 4. Merge Multiple PDFs into One
**Endpoint:** `POST /api/v1/pdf/merge`

**Description:**
Merges multiple PDF files into a single document.

**Request:**
- **Content-Type:** `multipart/form-data`
- **Parameters:**
  - `fileList` - List of filenames to be merged
  - `files` - Actual PDF files

**Response:**
- **Content-Type:** `application/pdf`
- Merged PDF document

---

### 5. Add Attachments to a PDF
**Endpoint:** `POST /api/v1/pdf/attachment`

**Description:**
Adds attachments (e.g., images, additional PDFs) to an existing PDF file.

**Request:**
- **Content-Type:** `multipart/form-data`
- **Parameters:**
  - `file` - The base PDF file
  - `attachment` - List of files to be attached

**Response:**
- **Content-Type:** `application/pdf`
- PDF with attachments added

## Error Handling
The API returns standard HTTP status codes:
- `200 OK` - Successful operation
- `400 Bad Request` - Invalid input or parameters
- `500 Internal Server Error` - Unexpected server error

## Usage Notes
- All PDF-related endpoints require valid PDF files as input.
- When using multipart responses, ensure the client can properly handle `multipart/mixed` content types.
- For large PDFs, processing times may vary depending on complexity.

---

## Contact & Support
For any issues or support requests, please contact the API maintainers or refer to the documentation for further details.

