# Freelancer Team Portfolio

A professional, modern portfolio website built with React and Vite, designed to showcase a freelancer team's skills, services, and past work.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful UI with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Conversion-optimized sections
- 📊 Case studies showcase
- 💬 Client testimonials
- 👥 Team member profiles
- 📧 Contact form
- 🔍 Smooth scroll navigation

## Sections

1. **Hero Section** - Compelling value proposition with CTAs
2. **Team Overview** - Statistics and mission statement
3. **Services** - Comprehensive service offerings
4. **Case Studies** - Portfolio with filtering
5. **Testimonials** - Client feedback carousel
6. **Process** - Step-by-step methodology
7. **Team Members** - Individual team profiles
8. **Contact** - Contact form and information
9. **Footer** - Links and additional information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── TeamOverview.jsx
│   │   ├── Services.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Process.jsx
│   │   ├── TeamMembers.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-accent: #10b981;
  /* ... */
}
```

### Content

- Update team information in `TeamOverview.jsx` and `TeamMembers.jsx`
- Add your case studies in `CaseStudies.jsx`
- Update services in `Services.jsx`
- Add testimonials in `Testimonials.jsx`
- Customize contact information in `Contact.jsx` and `Footer.jsx`

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom Properties, Grid, Flexbox)
- Modern JavaScript (ES6+)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Support

For questions or support, please contact: hello@teamportfolio.com

