# 🌟 HopeForward NGO Website

A modern, responsive website for NGOs built with React and Tailwind CSS. This project showcases a complete NGO website with home page, about section, and volunteer registration form.

![NGO Website Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=NGO+Website+Preview)

## 🚀 Live Demo

- **Live Website:** [View Demo](https://hope-forward-ngo-tau.vercel.app/)
- **GitHub Repository:** [Source Code](https://github.com/Meenakamlesh/HopeForwardNGO)

## ✨ Features

### 🏠 **Homepage**
- Hero section with compelling call-to-action
- Impact statistics showcase (50,000+ lives impacted)
- Program highlights (Education, Healthcare, Development)
- Responsive design for all devices

### 👥 **About Us Section**
- Mission and vision statements
- Organization story and background
- Core values display with icons
- Leadership team profiles

### 📝 **Volunteer Form**
- Complete volunteer application form
- Form validation and success states
- Skills and availability selection
- Volunteer opportunity listings

### 📱 **Responsive Design**
- Mobile-first approach
- Hamburger menu for mobile navigation
- Touch-friendly interface
- Optimized for all screen sizes

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 📁 Project Structure

```
ngo-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navigation.js      # Responsive navbar
│   │   ├── HomePage.js        # Main landing page
│   │   ├── AboutSection.js    # About us content
│   │   ├── VolunteerForm.js   # Volunteer registration
│   │   └── Footer.js          # Site footer
│   ├── App.js                 # Main app component
│   ├── index.js               # App entry point
│   └── index.css              # Custom styles
├── .gitignore
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── vercel.json                # Deployment config
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ngo-website.git
   cd ngo-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npx serve -s build
```

## 🎨 Customization

### Colors & Branding
Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',    // Main blue
      secondary: '#10b981',  // Green
      accent: '#8b5cf6',     // Purple
    }
  }
}
```

### Content Updates
- **Organization Name:** Update in `Navigation.js` and `Footer.js`
- **Mission/Vision:** Edit in `AboutSection.js`
- **Programs:** Modify in `HomePage.js`
- **Contact Info:** Update in `Footer.js`

### Adding New Sections
1. Create new component in `src/components/`
2. Import in `App.js`
3. Add navigation link in `Navigation.js`

## 📦 Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

3. **Custom Domain (Optional)**
   - Add your domain in Vercel dashboard
   - Update DNS settings

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag `build` folder to Netlify
   - Or connect GitHub repository

## 🔧 Configuration Files

### vercel.json
Handles SPA routing for Vercel deployment:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### tailwind.config.js
Tailwind CSS configuration with custom theme extensions.

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎯 Key Components

### Navigation Component
- Sticky header with smooth scrolling
- Mobile hamburger menu
- Active section highlighting

### Form Handling
- Controlled components with React hooks
- Form validation
- Success/error states
- Local state management

### Responsive Grid System
- CSS Grid and Flexbox
- Tailwind responsive utilities
- Mobile-first approach

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration:** Modern NGO websites
- **Icons:** [Lucide React](https://lucide.dev)
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com)
- **Deployment:** [Vercel](https://vercel.com)

## 📞 Support

- **Documentation:** Check this README
- **Issues:** [GitHub Issues](https://github.com/Meenakamlesh/ngo-website/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Meenakamlesh/ngo-website/discussions)

## 🗺️ Roadmap

- [ ] Add donation integration
- [ ] Multi-language support
- [ ] Blog section
- [ ] Event management
- [ ] Newsletter subscription
- [ ] Social media integration
- [ ] Admin dashboard
- [ ] Database integration

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Meenakamlesh/ngo-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/Meenakamlesh/ngo-website?style=social)
![GitHub issues](https://img.shields.io/github/issues/Meenakamlesh/ngo-website)
![GitHub license](https://img.shields.io/github/license/Meenakamlesh/ngo-website)

---

## 🌟 Show Your Support

If this project helped you, please give it a ⭐️ on GitHub!

**Made with ❤️ for NGOs worldwide**

---

### 📧 Contact

**Developer:** Kamlesh Meena
**Email:** km990316@gmail.com  