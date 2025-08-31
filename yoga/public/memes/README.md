# Meme Images Directory

This directory contains meme images used in the Yoga Wealth Connection presentation.

## How to Add Memes

1. **Place your image files** in this directory
2. **Supported formats**: JPG, PNG, GIF, WebP
3. **Update the slidesData.ts** file to reference your meme filename

## Suggested Meme Filenames

- `yoga_wealth_connection.jpg` - Main title slide meme
- `stress_relief_meme.jpg` - Stress management slide
- `productivity_energy.jpg` - Productivity benefits slide
- `breathing_technique.jpg` - Breathing practice slide
- `types_of_yoga.jpg` - Types of yoga slide
- `myths_facts.jpg` - Myths and facts slide
- `quiz_interactive.jpg` - Quiz slide meme

## Example Usage

In `src/data/slidesData.ts`:

```typescript
{
  id: 1,
  title: "The Wealth Connection",
  // ... other properties
  memeFilename: "yoga_wealth_connection.jpg"
}
```

## Image Guidelines

- **Recommended size**: 400x300 pixels or larger
- **File size**: Keep under 500KB for optimal performance
- **Content**: Should be relevant to the slide topic
- **Accessibility**: Include descriptive alt text in the slide data

## Fallback Behavior

If a meme image is not found or fails to load, the app will automatically show a placeholder with:
- The slide title as fallback caption
- Instructions for adding the image
- Suggested filename based on the content

## Current Placeholders

The app currently shows placeholder content for slides without meme images. Replace these with actual relevant memes to enhance the presentation experience.

