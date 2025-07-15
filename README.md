# Taranjyot Singh - Portfolio Website

A modern, responsive portfolio website showcasing my professional journey, skills, and projects, a Software Development Engineer with 4+ years of experience.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Interactive Animations** - Engaging hover effects, typing animations, and smooth scrolling
- **Modern UI/UX** - Built with Tailwind CSS and Shadcn UI components
- **Performance Optimized** - Fast loading with optimized animations and components

## 🚀 Live Demo

Visit the live portfolio: [Portfolio Website](https://69147dac-f1ab-4d0e-8720-e73a0614f84e.lovableproject.com)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Theme Management**: next-themes
- **Icons**: Lucide React
- **Animations**: Custom CSS animations with Tailwind

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1920px and above)
- **Laptop** (1024px - 1919px)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

All components adapt fluidly to different screen sizes with:
- Responsive typography scaling
- Flexible grid layouts
- Touch-friendly interactive elements
- Optimized navigation for mobile devices

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. **Open your browser**
   
   Navigate to `http://localhost:8080` to view the website in development mode.

3. **Hot Reload**
   
   The development server supports hot reload - any changes you make to the code will automatically refresh the browser.

### Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```
   or
   ```bash
   yarn preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── portfolio/           # Portfolio-specific components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Navigation.tsx
│   └── ui/                  # Reusable UI components (Shadcn)
├── pages/
│   ├── Index.tsx           # Main portfolio page
│   └── NotFound.tsx        # 404 page
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── index.css              # Global styles and design system
└── main.tsx               # Application entry point
```

## 🎨 Customization

### Design System

The portfolio uses a comprehensive design system defined in `src/index.css`:

- **Colors**: HSL-based color palette with dark/light mode support
- **Typography**: Responsive font scaling with custom gradients
- **Animations**: Custom keyframes for smooth interactions
- **Spacing**: Consistent spacing scale using Tailwind

### Modifying Content

1. **Personal Information**: Update contact details in `HeroSection.tsx` and `ContactSection.tsx`
2. **Experience**: Modify the experience array in `ExperienceSection.tsx`
3. **Skills**: Update skill categories in `SkillsSection.tsx`
4. **Projects**: Add/edit projects in `ProjectsSection.tsx`
5. **Education**: Update education details in `EducationSection.tsx`

### Adding New Sections

1. Create a new component in `src/components/portfolio/`
2. Import and add it to `src/pages/Index.tsx`
3. Add navigation link in `Navigation.tsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📊 Performance Features

- **Optimized Images**: Responsive image loading
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are minified
- **Caching**: Efficient browser caching strategies

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Using Vercel
- Go to vercel.com and sign in with GitHub
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect it's a Vite project
- Click "Deploy"

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
