# SHAANSAHIN - Premium Freelancing Website

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-ff0055.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A premium, interactive freelancing website for SHAANSAHIN by the SWM Team, featuring stunning animated backgrounds, smooth transitions, and modern UI/UX design.

[Live Demo](#) | [Documentation](#features) | [Contact](#contact)

# BlueOrbit Studio - Premium Freelancing Website
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
A premium, interactive freelancing website for BlueOrbit Studio by the SWM Team, featuring stunning animated backgrounds, smooth transitions, and modern UI/UX design.
- [Design System](#design-system)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Performance](#performance)
- [Browser Support](#browser-support)
**BlueOrbit Studio** is a modern, premium freelancing website built for the SWM team. It showcases services, portfolio, team members, and provides an intuitive contact system—all wrapped in a stunning interactive background with particle effects and animated gradients.
- [Deployment](#deployment)

---
### Key Highlights


---
- Canvas-based particle animation (60+ particles)
- Mouse-position tracking with radial gradient glow
- Dynamic gradient text animation
- Floating service cards with independent animations
- Company story and approach timeline
- Three-column value proposition cards
- Icon animations on hover
- Feature lists with checkmarks
- Hover overlay with project details
- Tech stack badges
- Animated avatar glows
- Role and responsibility descriptions
- "Why Work With Us" value section

### 7. **Contact Section**
- Functional contact form
- Form validation
- Success message animation

### 8. **Navigation & Footer**
- Fixed navbar with blur backdrop
- Mobile hamburger menu
- Smooth scroll to sections
- Comprehensive footer with links
- Back-to-top button

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Framer Motion 10.16.4** - Animation library
- **JavaScript ES6+** - Modern JavaScript

### Styling
- **CSS3** - Custom styling with CSS variables
- **Flexbox & Grid** - Modern layout systems
- **CSS Animations** - Keyframe animations

### Fonts
- **Sora** - Heading font (Google Fonts)
- **Inter** - Body font (Google Fonts)

### Development Tools
- **React Scripts 5.0.1** - Build tooling
- **Create React App** - Project scaffolding

---


### Color Palette

```css

--color-bg-dark: #0a0a0f     /* Main background */
--color-bg-darker: #050508   /* Alternate sections */
--color-bg-card: rgba(20, 20, 30, 0.6)  /* Card background */
--color-text-secondary: #a1a1aa
```

### Typography

```css
/* Headings */
Font Family: 'Sora', sans-serif
H1: 2.5rem - 4.5rem (responsive)
H2: 2rem - 3.5rem (responsive)
H3: 1.5rem - 2rem (responsive)

/* Body */
Font Family: 'Inter', sans-serif
Body: 1rem - 1.125rem
Line Height: 1.6
```

### Spacing Scale

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
--spacing-3xl: 6rem     /* 96px */
```

### Border Radius

```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
```

---

## 📦 Installation

### Prerequisites

- Node.js 14+ and npm/yarn installed
- Basic knowledge of React

### Step 1: Clone or Download

```bash
# If using git
git clone https://github.com/yourusername/shaansahin.git
cd shaansahin

# Or simply use the existing folder
cd d:\PROJECTS\Shaansahin
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm start
```

The website will open at `http://localhost:3000`

### Step 4: Build for Production

```bash
npm run build
```

Production files will be in the `build/` folder.

---

## 📁 Project Structure

```
d:\PROJECTS\Shaansahin\
│
├── public/
│   └── index.html                 # HTML template
│
├── src/
│   ├── components/
│   │   ├── InteractiveBackground.jsx  # Particle background
│   │   ├── InteractiveBackground.css
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx                  # Hero section
│   │   ├── Hero.css
│   │   ├── About.jsx                 # About section
│   │   ├── About.css
│   │   ├── Services.jsx              # Services section
│   │   ├── Services.css
│   │   ├── Portfolio.jsx             # Portfolio section
│   │   ├── Portfolio.css
│   │   ├── Team.jsx                  # Team section
│   │   ├── Team.css
│   │   ├── Contact.jsx               # Contact section
│   │   ├── Contact.css
│   │   ├── Footer.jsx                # Footer
│   │   └── Footer.css
│   │
│   ├── App.jsx                    # Main App component
│   ├── App.css                    # App styles
│   ├── index.js                   # Entry point
│   └── index.css                  # Global styles
│
├── package.json                   # Dependencies
└── README.md                      # Documentation
```

---

## ⚙️ Customization

### Changing Colors

Edit `src/index.css`:

```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-accent: #YOUR_COLOR;
  /* ... */
}
```

### Updating Content

#### Team Members (src/components/Team.jsx)

```javascript
const teamMembers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    responsibility: 'Your responsibility',
    image: '👤',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  }
];
```

#### Services (src/components/Services.jsx)

```javascript
const services = [
  {
    icon: '🎨',
    title: 'Service Name',
    description: 'Service description',
    features: ['Feature 1', 'Feature 2']
  }
];
```

#### Portfolio Projects (src/components/Portfolio.jsx)

```javascript
const projects = [
  {
    title: 'Project Name',
    category: 'web', // 'web', 'mobile', or 'design'
    description: 'Project description',
    tech: ['React', 'Node.js'],
    image: '🎯'
  }
];
```

### Modifying Background Effects

#### Particle Count (src/components/InteractiveBackground.jsx)

```javascript
// Line 64
const particleCount = window.innerWidth < 768 ? 50 : 100;
// Increase numbers for more particles
```

#### Gradient Orb Animation Speed

Edit `src/components/InteractiveBackground.css`:

```css
.orb-1 {
  animation: float-1 15s infinite; /* Decrease for faster */
}
```

---

## ⚡ Performance

### Optimization Features

- **Lazy Loading** - Components load only when visible
- **Requestanimationframe** - Smooth 60fps animations
- **Mobile Optimization** - Reduced particle count on mobile
- **CSS Transforms** - Hardware-accelerated animations
- **Backdrop Filter** - GPU-accelerated blur effects

### Performance Metrics

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Animation FPS**: 60fps

### Tips for Production

1. **Optimize Images**: Use WebP format
2. **Enable Gzip**: Compress assets
3. **CDN**: Use a CDN for fonts and assets
4. **Code Splitting**: Implement React.lazy()
5. **Minimize Dependencies**: Remove unused packages

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

### Mobile Support

- ✅ iOS Safari 14+
- ✅ Chrome Mobile 90+
- ✅ Samsung Internet 14+

---

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag build/ folder to Netlify dashboard
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://yourusername.github.io/shaansahin"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## 📞 Contact

**SHAANSAHIN by SWM Team**

- **Email**: hello@shaansahin.com
- **WhatsApp**: +1 (234) 567-8900
- **Website**: [shaansahin.com](#)

---

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

## 🙏 Acknowledgments

- **Framer Motion** - Animation library
- **Google Fonts** - Typography
- **React Community** - Framework and ecosystem

---

<div align="center">

**Built with ❤️ by SWM Team**

[⬆ Back to Top](#shaansahin---premium-freelancing-website)

</div>
