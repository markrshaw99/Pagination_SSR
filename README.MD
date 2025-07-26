## Pagination_SSR

Live Example page: https://markrshaw99.github.io/Pagination_SSR/

A simple server-side rendered pagination tool that works with complete responsiveness without any JavaScript requirement in the browser. Each page is generated dynamically on the server using `build.js`, providing fast, SEO-friendly HTML for any page request. Great for projects needing real-time, on-demand pagination.

### Features
- Server-side rendering: HTML is generated on demand for each page request
- Easy to use: Just run `node build.js <currentPage> <totalPages>`
- Customizable HTML and CSS

### Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/markrshaw99/Pagination_SSR.git
   cd Pagination_SSR
   ```
2. Run the build script for the desired page:
   ```bash
   node build.js <currentPage> <totalPages>
   ```
   Replace `<currentPage>` and `<totalPages>` with your desired values.

### Example
```bash
node build.js 2 10
```

### Files
- `build.js` - Main script for generating paginated HTML
- `index.template.html` - HTML template used by the build script
- `pagination.css` - Styles for pagination
---
Created by [markrshaw99](https://github.com/markrshaw99)
