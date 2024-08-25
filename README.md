# React + TypeScript + Vite


# UI-Lib: Custom React Component Library

UI-Lib is a modern, customizable React component library designed to streamline your development process. Built with TypeScript and bundled with Vite, this library offers a set of reusable UI components that are easy to integrate into any React project.

## Features
- **TypeScript Support**: Fully typed components for better development experience.
- **Modular Architecture**: Import only the components you need.
- **Customizable**: Easy to theme and adapt to your project's design system.
- **Storybook Integration**: Interactive component documentation and testing.
- **Optimized Build**: ESM and CommonJS formats available.
- **Accessibility**: Components are built with a11y in mind.

## Installation
To install UI-Lib in your project, run:
```bash
npm i @photo-fiesta/ui-lib
# or
yarn add  @photo-fiesta/ui-lib
# or
pnpm add  @photo-fiesta/ui-lib
```

[ui-lib на npm](https://www.npmjs.com/package/@photo-fiesta/ui-lib)

## Usage

Here's example how add styles in next project
```jsx
//_app.tsx
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@photo-fiesta/ui-lib/style.css"
```


Here's a quick example of how to use a component from UI-Kit:
```jsx
import React from 'react';
import { Checkbox } from '@photo-fiesta/ui-lib';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Checkbox label="Accept terms and conditions" onChange={(checked) => console.log(checked)} />
    </div>
  );
}

export default App;
```

## Available Components
- Checkbox
- Button
- Cards
- Controlled :
  - FormCheckbox
  - FormInput
- Header
- Input
- ReCaptcha
- Scroll
- Select
- Sidebars
- Radiogroup
- DatePicker
- Pagination
- Modal
- Menu
- Alert

## Documentation
For detailed documentation and interactive examples, run Storybook locally:
```bash
pnpm storybook
```

## Development
To set up the development environment:
1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm dev`

### Scripts
- `pnpm dev`: Start development server
- `pnpm build`: Build the library
- `pnpm lint`: Lint the code
- `pnpm format`: Format the code
- `pnpm storybook`: Run Storybook
- `pnpm generate-svg-components`: Generate React components from SVG files

## Project Structure
```
ui-lib/
├── src/
│   ├── assets/
│   │   └── icons/
│   ├── components/
|   |   └── ui
│   │       └── Checkbox/
│   │           ├── Checkbox.tsx
│   │           ├── Checkbox.module.scss
│   │           └── Checkbox.stories.tsx
│   └── index.ts
├── .eslintrc.cjs
├── .prettierrc.cjs
├── .stylelintrc.cjs
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Configuration
The project uses Vite for building. Key configurations include React SWC plugin, DTS plugin for generating type declarations, ESM and CJS output formats, and external dependencies. TypeScript is configured for optimal React development with strict type checking. The project uses ESLint for linting and Prettier for code formatting, with custom configurations.

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License
This project is licensed under the MIT License.

## Support
If you encounter any issues or have questions, please file an issue on our [GitHub repository](https://github.com/your-username/ui-lib/issues).
```

This version of the README.md is formatted as a single continuous document without section breaks, providing a comprehensive overview of your UI-Kit library. You can customize it further by adding more components or specific details as needed.