# Builder Notes - Figma to Code Guidelines

## Overview
This document contains essential guidelines for converting Figma designs into React components with consistent styling and responsive behavior.

## Core Layout Principles

### 1. Main Container Setup
- **Always** set the main container to:
  ```css
  .component-name-page {
    width: 100vw;
    height: 100vh;
  }
  ```
- This ensures the page fills the entire viewport
- Use descriptive, unique class names for each component

### 2. Viewport Scaling
- Scale all elements proportionally to fit within the 100vw x 100vh container
- Use viewport units (vw, vh) for responsive scaling:
  - `vw` for widths, horizontal spacing, and horizontal positioning
  - `vh` for heights, vertical spacing, and vertical positioning
- Calculate proportional sizes based on design dimensions:
  ```css
  /* Example: If design is 1280px wide and element is 400px */
  width: 31.25vw; /* 400px / 1280px * 100 */
  
  /* Example: If design is 720px tall and element is 200px */
  height: 27.78vh; /* 200px / 720px * 100 */
  ```

### 3. Form and Card Centering
- Center form containers and cards using flexbox:
  ```css
  .component-form-section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```
- Alternative centering method:
  ```css
  .component-form-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```

## CSS Class Naming Convention

### 1. Unique Component Prefixes
- Use the component name as a prefix for all CSS classes
- Examples:
  - Login page: `.login-page`, `.login-header`, `.login-form`
  - Dashboard: `.dashboard-page`, `.dashboard-sidebar`, `.dashboard-content`
  - Profile: `.profile-page`, `.profile-card`, `.profile-settings`

### 2. BEM-like Structure
- Follow a hierarchical naming pattern:
  ```css
  .component-name-page          /* Main container */
  .component-name-header        /* Header section */
  .component-name-main          /* Main content area */
  .component-name-form          /* Form container */
  .component-name-form-field    /* Form field */
  .component-name-form-input    /* Form input */
  .component-name-button        /* Buttons */
  .component-name-footer        /* Footer section */
  ```

### 3. Avoid Generic Class Names
- ❌ Avoid: `.container`, `.form`, `.button`, `.header`
- ✅ Use: `.login-container`, `.login-form`, `.login-button`, `.login-header`

## Responsive Design Guidelines

### 1. Viewport-Based Scaling
- Primary approach: Use vw/vh units for proportional scaling
- Fallback approach: Use media queries for specific breakpoints

### 2. Media Query Breakpoints
```css
/* Large screens (1280px and above) - Base design */
@media (min-width: 1280px) { /* Base styles */ }

/* Medium screens (768px to 1279px) */
@media (max-width: 1279px) and (min-width: 768px) { /* Tablet styles */ }

/* Small screens (below 768px) */
@media (max-width: 767px) { /* Mobile styles */ }

/* Extra small screens (below 480px) */
@media (max-width: 479px) { /* Small mobile styles */ }
```

### 3. Responsive Adjustments
- Convert fixed padding/margins to viewport units
- Adjust font sizes proportionally
- Ensure form elements remain usable on smaller screens

## Layout Structure Template

### 1. Full-Screen Page Layout
```css
.component-name-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
}

.component-name-header {
  width: 100%;
  height: [calculated vh];
  flex-shrink: 0;
}

.component-name-main {
  flex: 1;
  position: relative;
}

.component-name-footer {
  width: 100%;
  height: [calculated vh];
  flex-shrink: 0;
}
```

### 2. Centered Form Layout
```css
.component-name-form-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.component-name-form-container {
  width: [calculated vw];
  height: [calculated vh];
  background: #f0f3f5;
  border-radius: [calculated vw];
  padding: [calculated vh] [calculated vw];
  box-sizing: border-box;
}
```

## Typography Guidelines

### 1. Font Size Scaling
- Convert px font sizes to vw units for consistent scaling
- Example: `font-size: 0.94vw; /* 12px / 1280px * 100 */`

### 2. Font Stack
- Use consistent font stack:
  ```css
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  ```

## Color and Styling Guidelines

### 1. Color Consistency
- Extract colors from Figma design
- Use CSS custom properties for consistent theming:
  ```css
  :root {
    --primary-blue: #0b74bb;
    --background-gray: #f0f3f5;
    --text-dark: #000;
    --text-light: #666;
    --text-muted: #b1b1b1;
  }
  ```

### 2. Interactive States
- Always include hover and active states for interactive elements
- Use consistent transition timing: `transition: all 0.2s ease;`

## Form Element Guidelines

### 1. Input Fields
```css
.component-name-form-input {
  width: [calculated vw];
  height: [calculated vh];
  background: #fff;
  border: none;
  border-radius: [calculated vw];
  padding: [calculated vh] [calculated vw];
  box-sizing: border-box;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: [calculated vw];
}

.component-name-form-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(11, 116, 187, 0.2);
}
```

### 2. Buttons
```css
.component-name-button {
  width: [calculated vw];
  height: [calculated vh];
  background: var(--primary-blue);
  border: none;
  border-radius: [calculated vw];
  color: #fff;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: [calculated vw];
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.component-name-button:hover {
  background: [darker shade];
}
```

## Implementation Checklist

### Before Starting
- [ ] Analyze Figma design dimensions (width x height)
- [ ] Identify main sections (header, main, footer)
- [ ] Note form/card elements that need centering
- [ ] Extract color palette and typography

### During Development
- [ ] Create unique class names with component prefix
- [ ] Set main container to 100vw x 100vh
- [ ] Convert all px values to vw/vh proportionally
- [ ] Center form containers and cards
- [ ] Test responsive behavior across screen sizes

### After Development
- [ ] Verify no class name conflicts
- [ ] Test on different viewport sizes
- [ ] Ensure proper scaling on all devices
- [ ] Validate form usability on mobile
- [ ] Check accessibility (focus states, contrast)

## Common Pitfalls to Avoid

1. **Generic Class Names**: Always use component-specific prefixes
2. **Fixed Pixel Values**: Use viewport units for responsive scaling
3. **Absolute Positioning Without Centering**: Always center important elements
4. **Missing Hover States**: Include interactive feedback
5. **Overflow Issues**: Set `overflow: hidden` on main containers when needed
6. **Z-Index Conflicts**: Use consistent z-index values (10, 20, 30, etc.)

## Example Implementation

See `Login.css` for a complete example following these guidelines:
- Uses `login-` prefix for all classes
- Implements 100vw x 100vh layout
- Scales all elements proportionally
- Centers form container
- Includes responsive breakpoints
- Maintains consistent styling patterns
