# shy-ui

A professional Angular 21 UI component library and design system.

## Packages

| Package | Path | Description |
|---------|------|-------------|
| `@shy/ui` | `projects/shy-ui` | Reusable UI component library |
| `showcase` | `projects/showcase` | Interactive component showcase app |

## Getting Started

```bash
npm install
npm run build:lib   # Build the library first
npm start           # Serve the showcase app at http://localhost:4200
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Serve the showcase app (dev mode) |
| `npm run build` | Build library + showcase (production) |
| `npm run build:lib` | Build the `@shy/ui` library |
| `npm run build:app` | Build the showcase app |
| `npm run serve` | Serve showcase and open browser |
| `npm run watch:lib` | Build library in watch mode |

## Using the library

In development (within this monorepo), the library is resolved via `tsconfig.json` path aliases — no pre-build required when serving the showcase.

To consume the library after publishing:

```bash
npm install @shy/ui
```

Then import components:

```typescript
import { ButtonComponent, CardComponent } from '@shy/ui';
```

And include the design tokens in your global `styles.scss`:

```scss
@use '@shy/ui/src/lib/styles/tokens';
@use '@shy/ui/src/lib/styles/base';
```

## Components

| Component | Selector | Description |
|-----------|----------|-------------|
| **Button** | `<shy-button>` | 5 variants, 3 sizes, loading/disabled states |
| **Card** | `<shy-card>` | Container with elevation and padding variants |
| **Badge** | `<shy-badge>` | 7 color variants for status labels |
| **Input** | `<shy-input>` | Form input with label, hint, error, CVA support |
| **Modal** | `<shy-modal>` | Overlay dialog with header, body and footer slots |
| **Spinner** | `<shy-spinner>` | Loading indicator in 3 sizes |
| **Icon** | `<shy-icon>` | SVG icon set with 30+ icons |
| **EmptyState** | `<shy-empty-state>` | Empty content placeholder |

## Design Tokens

CSS custom properties defined in `projects/shy-ui/src/lib/styles/_tokens.scss`:

- **Colors** — Primary, secondary, semantic (success/warning/danger/info), neutral grays
- **Spacing** — `--space-1` through `--space-16`
- **Typography** — Font sizes, weights, line heights, font families
- **Borders** — Border radius scale, border width, border color
- **Shadows** — `--shadow-sm` through `--shadow-xl`
- **Z-index** — Dropdown, modal, tooltip, toast layers
- **Transitions** — Fast, normal, slow easing presets

## Project Structure

```
shy-ui/
├── projects/
│   ├── shy-ui/               # Component library
│   │   └── src/
│   │       ├── lib/
│   │       │   ├── components/   # Button, Card, Badge, Input, Modal, Spinner, Icon, EmptyState
│   │       │   └── styles/       # SCSS tokens, variables, mixins, base reset
│   │       └── public-api.ts     # Public exports
│   └── showcase/             # Showcase app
│       └── src/app/
│           └── pages/        # Colors, Typography, Spacing, Icons, Components, Examples
├── .nvmrc                    # Node.js version
└── angular.json              # Workspace configuration
```
