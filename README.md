# Resume Website

A dynamic resume website built with vanilla HTML, CSS, and JavaScript. Content loads from JSON, making it easy to update your resume and track career progression over time.

Feel free to fork and customize for your own resume!

## ✨ Features

- **Dynamic JSON Content** - Resume data loaded from `resumeData.json` with sessionStorage caching
- **SEO Optimized** - Meta tags, Open Graph, Schema.org structured data (JSON-LD)
- **Responsive Design** - Print-optimized layout with mobile support
- **Security-Hardened** - Strict Content Security Policy (CSP) with no inline code
- **Accessible** - WCAG 2.1 compliant with semantic HTML and ARIA labels
- **Custom 404 Page** - Branded error page with navigation
- **Print-Friendly** - Optimized for PDF export

## 🛠 Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: CSS Custom Properties (Variables) for maintainable theming
- **Icons**: Font Awesome 6.0
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

2. **Open `index.html` with Live Server** in VS Code (or your preferred local server)

3. **Edit your resume:**
   Update [resumeData.json](resumeData.json) with your content

### Styling

CSS uses a variable-based system for easy theming. Customizable variables in [css/style.css](css/style.css):

```css
:root {
  --accent: #2b6cb0; /* Primary brand color */
  --text-main: #1a202c; /* Main text color */
  --sidebar-bg: #f5fbff; /* Sidebar background */
  /* ...more variables */
}
```

## 🔒 Security

Content Security Policy (CSP) enforced via meta tag:

- No inline scripts or styles
- External scripts: `cdnjs.cloudflare.com`
- External styles: Google Fonts, Font Awesome CDN
- Form submissions and frame embedding disabled

## 📊 Performance & Quality

This resume is optimized for:

- ✅ Performance (lazy loading, WebP images, deferred scripts)
- ✅ Accessibility (WCAG 2.1 compliant, semantic HTML, ARIA labels)
- ✅ Security (Strict CSP, no inline code, secure headers)
- ✅ SEO (structured data, meta tags, responsive design)

### Key Optimizations

- Deferred script loading (`defer` attribute on schema.js)
- Lazy loading on 404 image
- WebP image format for faster loading
- CSS variables for maintainable theming
- Gzip compression (GitHub Pages)
- External CSS & JS (no inline code for CSP compliance)
- Font preconnection for reduced TTFB
- sessionStorage caching for resume data

## 📱 Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## 🔄 Caching

Resume data is cached in `sessionStorage` after first load for better performance.
