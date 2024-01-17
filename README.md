# EternalFrame Next.js Theme Documentation

## Introduction

EternalFrame is an elegantly designed Next.js theme tailored for wedding photographers who want to showcase their portfolio with a modern and intuitive website. The theme's architecture leverages Next.js's routing capabilities to segregate components and logic according to their respective routes, ensuring a clean and organized codebase.

## Features
- Route-Based Organization: Each page's components are organized within their specific route in the (routes) folder, promoting modularity and ease of maintenance.
- Responsive Layout: Crafted for an optimal viewing experience on a variety of devices and screen sizes.
- Performance Optimized: Implements best practices for fast loading times and smooth interactions.
- SEO Ready: Built with Next.js's server-side rendering for improved search engine visibility.
- TypeScript Support: Offers type safety and predictable code.
- Tailwind CSS Framework: Provides the utility for custom and responsive design with minimal effort.
- Premium UI Components: Incorporates a collection of Shadcn UI components for an aesthetic user interface.

## Installation

- Download and extract the EternalFrame theme package.
- Navigate to the project directory and run pnpm install to install dependencies.
- Start the local development server with pnpm run dev.

## Project Structure

- src/: Main directory containing the source files.
   - (routes)/: Each route of the application corresponds to a unique directory.
     - about/, films/, contact/, etc.: Directories containing page-specific components within a _components subfolder.
   - components/: Reusable components used across various parts of the application.
   - lib/: Shared utilities and helper functions.

## Customization

### Styling with Tailwind CSS

Tailwind CSS can be customized in the tailwind.config.js file to match your brand's colors, fonts, and other styling preferences.

#### Modifying Route-Specific Components

To alter the layout or functionality of a specific page:

1- Navigate to the (routes)/[route-name]/_components/ directory.
2- Find the component you wish to customize and make the desired changes.

### Deployment
Deploying the theme to production involves:

- Running pnpm build to generate a production build of the project.
- Following the deployment guidelines of your chosen hosting provider to deploy the out/ directory.

### Support

- Extensive Documentation: Detailed documentation is provided to guide you through using and customizing the theme.
- Dedicated Support: Direct access to the theme's development team for assistance and troubleshooting.