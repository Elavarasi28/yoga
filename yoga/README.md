# Yoga Wealth Connection - Interactive Presentation App

A complete interactive presentation web app built with Vite, React, TypeScript, and Tailwind CSS. This app presents "Yoga Wealth Connection" - a comprehensive guide to how yoga creates multiple forms of wealth beyond just physical exercise.

## 🚀 Features

- **25 Interactive Slides** - Complete presentation covering yoga benefits, types, and wealth connections
- **Slide Navigation** - Click anywhere or use arrow keys to advance, number keys (1-9) to jump
- **Presentation Modes** - Toggle between edit mode (with notes) and present mode (clean view)
- **Auto-play** - Automatic slide advancement with customizable timing
- **Accessibility** - ARIA labels, keyboard navigation, and focus management
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Card, Button, Tabs, Accordion, etc.)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context + Hooks

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd yoga
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Navigation Controls

- **Mouse**: Click anywhere on a slide to advance
- **Keyboard**:
  - `→` or `Space` - Next slide
  - `←` - Previous slide
  - `1-9` - Jump to specific slide
  - `Home` - First slide
  - `End` - Last slide
  - `ESC` - Exit present mode / Stop auto-play

### Presentation Modes

- **Edit Mode**: Shows navigation, presenter notes, and controls
- **Present Mode**: Clean view with only slide content and progress dots
- **Auto-play**: Automatic slide advancement every 5 seconds

### Copy Presenter Notes

Click the "Notes" button in the top bar to copy the current slide's presenter script to your clipboard.

## 🎨 Customization

### Adding/Editing Slides

1. **Edit slide content** in `src/data/slidesData.ts`
2. **Modify slide components** in `src/slides/`
3. **Update types** in `src/types/index.ts`

### Slide Data Structure

Each slide in `slidesData.ts` contains:

```typescript
{
  id: number,                    // Slide index (0-24)
  title: string,                 // Main slide title
  subtitle?: string,             // Optional subtitle
  bullets: string[],             // On-screen bullet points
  presenterScript: string,       // Full presenter narration
  memeFilename?: string,         // Optional meme image filename
  component: 'Title' | 'Types' | 'Myths' | 'Stress' | 
            'Productivity' | 'Quiz' | 'Breathing' | 'Generic'
}
```

### Adding Memes/Images

1. **Place images** in `public/memes/` folder
2. **Update `memeFilename`** in `slidesData.ts`
3. **Suggested filenames**:
   - `yoga_wealth_connection.jpg`
   - `stress_relief_meme.jpg`
   - `productivity_energy.jpg`
   - `breathing_technique.jpg`
   - `types_of_yoga.jpg`

### Creating New Slide Types

1. **Create component** in `src/slides/`
2. **Add to component mapping** in `App.tsx`
3. **Update types** in `src/types/index.ts`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── SlideContainer.tsx
│   ├── SlideNav.tsx
│   ├── ProgressDots.tsx
│   ├── MemeCard.tsx
│   └── BreathingDemo.tsx
├── contexts/           # React Context providers
│   └── SlideContext.tsx
├── data/              # Presentation data
│   └── slidesData.ts
├── hooks/             # Custom React hooks
│   └── useSlideNavigation.ts
├── slides/            # Individual slide components
│   ├── TitleSlide.tsx
│   ├── TypesOfYogaSlide.tsx
│   ├── MythsFactsSlide.tsx
│   ├── StressReliefSlide.tsx
│   ├── ProductivitySlide.tsx
│   ├── QuizSlide.tsx
│   ├── BreathingSlide.tsx
│   └── GenericTextSlide.tsx
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🚀 Build & Deploy

### Development
```bash
npm run dev          # Start development server
```

### Production Build
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Linting
```bash
npm run lint         # Run ESLint
```

## 🎭 Slide Components

### Existing Specialized Slides

- **TitleSlide**: Welcome slide with start button
- **TypesOfYogaSlide**: Interactive tabs showing different yoga types
- **MythsFactsSlide**: Flip cards for myths vs facts
- **StressReliefSlide**: Stress management techniques
- **ProductivitySlide**: Productivity benefits of yoga
- **QuizSlide**: Interactive knowledge test
- **BreathingSlide**: Breathing practice with animated demo

### Generic Slides

- **GenericTextSlide**: Standard slide layout for text content
- Automatically renders title, bullets, and presenter notes
- Supports optional meme images
- Consistent styling and animations

## 🔧 Configuration

### Auto-play Timing

Modify the auto-play interval in `src/contexts/SlideContext.tsx`:

```typescript
const interval = setInterval(() => {
  // ... slide advancement logic
}, 5000); // Change 5000ms (5 seconds) to your preferred timing
```

### Breathing Demo Settings

Customize breathing patterns in `src/components/BreathingDemo.tsx`:

```typescript
<BreathingDemo
  duration={{ inhale: 4, hold: 2, exhale: 6 }}  // Customize timing
  loop={true}                                    // Enable/disable looping
  autoStart={false}                              // Auto-start on load
/>
```

## 🎨 Styling

### Color Schemes

The app uses consistent color gradients:
- **Blue theme**: `from-blue-50 via-indigo-50 to-purple-50`
- **Warm theme**: `from-amber-50 via-orange-50 to-red-50`
- **Cool theme**: `from-teal-50 via-blue-50 to-indigo-50`

### Animations

All animations use Framer Motion with consistent timing:
- **Slide transitions**: 0.5s easeInOut
- **Content animations**: 0.8s with staggered delays
- **Micro-interactions**: 0.3s for hover/tap effects

## 🚀 Performance

- **Lazy loading**: Components load only when needed
- **Optimized animations**: Hardware-accelerated transforms
- **Minimal bundle**: No heavy external dependencies
- **Efficient re-renders**: React.memo and useCallback optimizations

## 🐛 Troubleshooting

### Common Issues

1. **Slides not advancing**
   - Check browser console for errors
   - Ensure all slide components are properly imported
   - Verify `slidesData.ts` has correct component mappings

2. **Images not loading**
   - Verify meme files exist in `public/memes/`
   - Check file paths and extensions
   - Use browser dev tools to inspect network requests

3. **Keyboard navigation not working**
   - Ensure focus is on the slide container
   - Check for conflicting keyboard shortcuts
   - Verify event listeners are properly attached

### Debug Mode

Enable debug logging by adding to browser console:
```javascript
localStorage.setItem('debug', 'true')
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful, accessible components
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide** for consistent iconography

---

**Namaste** 🙏 - May your yoga practice bring you wealth in all aspects of life!
