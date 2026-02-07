# DNA Planner

A Vue 3 + TypeScript application for planning character and weapon upgrades in a game. Track materials, manage inventory, and optimize your upgrade paths.

## Features

- **Character Management** - Plan character level and skill upgrades
- **Weapon Planning** - Track weapon ascension and forging materials
- **Daemon Wedges** - Manage daemon wedge resources
- **Inventory System** - Keep track of available materials with persistent storage
- **Material Calculator** - Calculate required materials for upgrades

## Tech Stack

- **Vue 3** - Composition API with `<script setup>`
- **TypeScript** - Full type safety
- **Pinia** - State management with localStorage persistence
- **Vue Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Project Structure

```
src/
├── components/     # Reusable Vue components
├── composables/    # Composition API utilities
├── definitions/    # Game data definitions
├── router/         # Vue Router configuration
├── stores/         # Pinia stores (with persistence)
├── types/          # TypeScript type definitions
└── views/          # Page components
```

## State Persistence

User data (inventory and configurations) is automatically saved to localStorage and restored on app load.

## Contributing

1. Follow camelCase for component filenames
2. Use TypeScript strict mode
3. Run linting before commits
4. Maintain type safety (no `any` types)
