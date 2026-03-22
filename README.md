# Resume Website

A dynamic resume website built with vanilla HTML, CSS, and JavaScript. Content loads from JSON, making it easy to update your resume and track career progression over time.

Feel free to fork and customize for your own resume!

## ✨ Features

- **Dynamic JSON Content** - Resume data loaded from `resumeData.json` with sessionStorage caching
- **SEO Optimized** - Meta tags, Open Graph, Schema.org structured data (JSON-LD)
- **Responsive Design** - Print-optimized layout with mobile support
- **Security-Hardened** - Strict Content Security Policy (CSP) with no inline code
- **Accessible** - Leverages semantic HTML and strategic ARIA patterns
- **Custom 404 Page** - Branded error page with navigation
- **Print-Friendly** - Optimized for PDF export

## 🛠 Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: CSS Custom Properties (Variables) for maintainable theming
- **Icons**: Font Awesome (CDN)
- **Fonts**: Google Fonts (Inter)
- **Hosting**: GitHub Pages (static)
- **Data Format**: JSON

## 📁 Project Structure

```
├── index.html              # Main resume page
├── 404.html                # Custom 404 page
├── resumeData.json         # Your resume content
├── css/
│   ├── style.css          # Main stylesheet
│   └── 404.css            # 404 page styles
├── js/
│   ├── app.js             # Content loading & rendering
│   └── schema.js          # SEO schema injection
└── images/                # Images and assets
```

## 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/brentscripts/brent-crystal-resume.git
   cd brent-crystal-resume
   ```

2. **Open `index.html` with Live Server** in VS Code

3. **Edit your resume:**
   - Update [resumeData.json](resumeData.json) with your content
   - Modify [js/app.js](js/app.js) to refactor rendering functions that inject your JSON content into the HTML

4. **Customize styling** (optional):
   Edit CSS variables in [css/style.css](css/style.css):
   ```css
   :root {
     --accent: #2b6cb0; /* Primary brand color */
     --text-main: #1a202c; /* Main text color */
     --sidebar-bg: #f5fbff; /* Sidebar background */
   }
   ```

## 🔒 Security

Content Security Policy (CSP) enforced via meta tag:

- No inline scripts or styles
- External scripts: `cdnjs.cloudflare.com`
- External styles: Google Fonts, Font Awesome CDN
- Form submissions and frame embedding disabled

## 📊 Optimizations

Built with performance, accessibility, and security in mind:

- Lazy loading on images
- Deferred script loading
- WebP image format
- External CSS & JS (no inline code for CSP compliance)
- sessionStorage caching for resume data
- Gzip compression (GitHub Pages)

## 📱 Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)
