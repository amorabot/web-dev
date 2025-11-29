# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Vue 3, Vite, and p5.js. The portfolio is structured as a single-page application with multiple sections including hero, about, projects, and an interactive playground featuring shader demos.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Application Structure

The app uses a **section-based single-page layout** rather than traditional multi-page routing:
- `App.vue` directly renders `Portfolio.vue` (not using router-view)
- `Portfolio.vue` is the main container that composes all sections in order:
  - WelcomeTransition (entry animation)
  - Navbar
  - HeroSection
  - AboutSection
  - ProjectsSection
  - PlaygroundSection
- Router exists at `src/router/index.js` but is not currently integrated into App.vue

### Component Organization

Components are organized by feature:
- `src/components/about/` - About section components (AboutSection, TechComponent)
- `src/components/projects/` - Project showcase (ProjectsSection, ProjectCard, ProjectsGrid, TerminalMock)
- `src/components/playground/` - Interactive playground section
- `src/components/navbar/` - Navigation components (Navbar, NavButton)
- `src/components/icons/` - Social media icons (IconGithub, IconLinkedIn, IconItch)
- `src/components/transtitions/` - Animation components (WelcomeTransition)

### Styling System

- **Global styles**: `main.css` (imported in `src/main.js`)
- **CSS variables**: Defined in `/public/assets/css/base.css`
  - Color scheme uses custom properties (--darker, --secondary, etc.)
- **Typography classes**:
  - `.league-spartan-header` and `.league-spartan-body` (League Spartan font)
  - `.inter-body` (Inter font)
- Most components use **scoped styles** within their `.vue` files

### External Scripts and p5.js Integration

The project uses **p5.js for interactive graphics**:
- p5.js is loaded via CDN in `index.html`
- Custom sketches in `/public/scripts/`:
  - `sketch.js` - Main p5.js sketch
  - `shaderDemo/shaderDemo.js` - WebGL shader demo (bouncing DVD logo with ASCII shader)
  - `shaderDemo/shader.vert` and `ascii.frag` - GLSL shader files
- p5.js instances are mounted to DOM elements (e.g., `#shader-demo-container` in PlaygroundSection)

### Path Aliases

Vite is configured with `@` alias pointing to `src/`:
```javascript
import Component from '@/components/Component.vue'
```

### Asset Organization

Static assets live in `/public/`:
- `/public/assets/images/` - Project images and profile pictures
- `/public/assets/gifs/` - Animated GIFs
- `/public/assets/fonts/` - Custom fonts (Thunder, WILD WORLD, Projekt Blackbird)
- `/public/assets/svgs/` - SVG icons and tech stack icons
- `/public/assets/css/` - Shared CSS and SCSS files
- `/public/scripts/` - p5.js sketches and shaders

## Key Architectural Notes

1. **Router Setup vs Usage**: Vue Router is configured but not currently used in `App.vue`. The app renders `Portfolio.vue` directly instead of `<RouterView>`.

2. **p5.js Lifecycle**: p5.js sketches are loaded globally via script tags in `index.html` and create instances that attach to specific DOM containers after Vue components mount.

3. **Scoped vs Global Styles**: Most styling is scoped to components, but shared typography classes and CSS variables are global.

4. **Motion Library**: The project includes the `motion` package (v12.0.1) for animations, imported where needed.
