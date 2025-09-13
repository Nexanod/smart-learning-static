# Smart Learning App

A modern, internationalized Next.js application built with TypeScript, Tailwind CSS, and Shadcn UI
components. Features comprehensive testing, Storybook documentation, and multi-language support.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack
- **Internationalization** with next-intl (English, Urdu support)
- **UI Components** with Shadcn UI and Radix UI
- **Styling** with Tailwind CSS v4
- **Testing** with Jest and React Testing Library
- **Storybook** for component documentation
- **Code Quality** with ESLint, Prettier, and TypeScript
- **Accessibility** testing with Storybook a11y addon

## 📋 Prerequisites

- Node.js 22+ (see `.nvmrc` for exact version)
- npm, yarn, pnpm, or bun
- Docker (optional, for containerized development)

## Development Setup

### Using Docker (Recommended)

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nexanod/smart-learning-app.git
   cd smart-learning-app
   ```

2. **Build and start services**
   ```bash
   docker-compose up --build
   ```

### Manual Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   ```bash
   cp example.env .env
   ```

   Edit `.env` and configure your environment variables:

   ```env
   BACKEND_URL=lvh.me:3001
   # Add other environment variables as needed
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Storybook Setup

Storybook is already configured for component documentation and testing.

1. **Run Storybook**

   ```bash
   npm run storybook
   ```

   Open [http://localhost:6006](http://localhost:6006) to view the component library.

2. **Build Storybook for production**

   ```bash
   npm run build-storybook
   ```

3. **Add new stories** Create `.stories.tsx` files in the same directory as your components:

   ```typescript
   // Example: components/MyComponent.stories.tsx
   import type { Meta, StoryObj } from '@storybook/react';
   import { MyComponent } from './MyComponent';

   const meta: Meta<typeof MyComponent> = {
     title: 'Components/MyComponent',
     component: MyComponent,
   };

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       // component props
     },
   };
   ```

## 🌍 Environment Variables

Copy `example.env` to `.env` and configure:

```env
# API Configuration
BACKEND_URL=lvh.me:3001
```

## Icon Library

- **[Gradienty](https://gradienty.codes/animated-icons)**: For animated icon components
- **[AnimatedIcons](https://animatedicons.co/icons/minimalistic?type=free)**: For animated svg icons

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Jest with React Testing Library
- **Coverage Reports**: Automatic coverage generation
- **Component Testing**: Integrated with Storybook

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run type checking
npm run typecheck
```

## 📏 Code Quality

### ESLint

```bash
# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint:fix
```

### Prettier

```bash
# Check code formatting
npm run prettier:check

# Format code automatically
npm run prettier:write
```

## Pre-Push Checklist

Before pushing changes, run:

```bash
# Run linting
npm run lint

# Check code formatting
npm run prettier:check

# Run type checking
npm run typecheck

# Run tests
npm run test
```

## 🌐 Internationalization

The app supports multiple languages using next-intl:

- **English** (`en`)
- **Urdu** (`ur`)

### Adding New Languages

1. Create a new message file: `messages/{locale}.json`
2. Update `src/i18n/request.ts` and `src/middleware.ts` with the new locale
3. Add the locale to the LanguageSwitcher component

### Adding New Translation Keys

Add keys to all message files in the `messages/` directory:

```json
{
  "common": {
    "newKey": "Translation text"
  }
}
```

## 📁 Project Structure

```
smart-learning-app/
├── .github/workflows/     # CI/CD workflows
├── .storybook/           # Storybook configuration
├── messages/             # Internationalization files
├── public/               # Static assets
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   └── __tests__/       # Test files
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🚀 Available Scripts

| Script                    | Description                             |
| ------------------------- | --------------------------------------- |
| `npm run dev`             | Start development server with Turbopack |
| `npm run build`           | Build for production                    |
| `npm run start`           | Start production server                 |
| `npm run lint`            | Run ESLint                              |
| `npm run lint:fix`        | Fix ESLint errors                       |
| `npm run prettier:check`  | Check code formatting                   |
| `npm run prettier:write`  | Format code                             |
| `npm run test`            | Run tests with coverage                 |
| `npm run test:watch`      | Run tests in watch mode                 |
| `npm run typecheck`       | Run TypeScript type checking            |
| `npm run storybook`       | Start Storybook dev server              |
| `npm run build-storybook` | Build Storybook for production          |

## 🔧 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI + Radix UI
- **Icons**: Lucide React, Tabler Icons
- **Internationalization**: next-intl
- **Testing**: Jest, React Testing Library
- **Documentation**: Storybook
- **Code Quality**: ESLint, Prettier
- **Animation**: Framer Motion
- **Charts**: Recharts

## Contributing

### Branch Naming Convention

Branch names must start with the Jira task ID:

```bash
# Format: SL-{jira-id}-{brief-description}
# Examples:
SL-123-add-user-authentication
SL-456-fix-rate-limiting-bug
SL-789-update-api-documentation
```

### Pull Request Guidelines

1. **PR Title**: Must start with `[SL-{jira-id}]`

   ```
   [SL-123] Add user authentication system
   [SL-456] Fix rate limiting bug in auth controller
   [SL-789] Update API documentation
   ```

2. **Workflow**:
   - Create feature branch from `main` with proper naming
   - Make changes with comprehensive tests
   - Run pre-push checklist (brakeman, rubocop, rspec)
   - Submit pull request with proper title format

### Example Workflow

```bash
# Create branch
git checkout -b SL-123-add-user-auth

# Make changes and commit
git add .
git commit -m "Add user authentication endpoints"

# Run checks before pushing
bundle exec brakeman
bundle exec rubocop
bundle exec rspec

# Push and create PR
git push origin SL-123-add-user-auth
# Create PR with title: [SL-123] Add user authentication system
```
