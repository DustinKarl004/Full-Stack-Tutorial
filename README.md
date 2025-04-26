# Full Stack Tutorial Website

A comprehensive web application for learning full stack development with tutorials, tech stack information, and more.

## Features

- Modern responsive design with animations and effects
- Comprehensive tutorials covering different tech stacks
- Learn about various technologies used in web development
- Mobile-friendly interface
- Tutorials on various web development topics
- Information about different tech stacks
- Contact form for user inquiries

## Technologies Used

- Next.js 14
- React 18
- SCSS for styling
- Framer Motion for animations
- TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Setup

The contact form is configured to send emails using Gmail. To enable this feature:

1. Create a `.env.local` file in the root of the project with the following content:

```
EMAIL_PASSWORD=your_app_password_here
```

2. Replace `your_app_password_here` with an app password from your Google account:
   - Enable 2-step verification on your Google account
   - Create an app password at https://myaccount.google.com/apppasswords
   - Use that password in the `.env.local` file

Note: If the `EMAIL_PASSWORD` environment variable is not set, the contact form will still appear to work in development mode, but no actual emails will be sent.

## Images

The site uses placeholder images for tech stacks and tutorials. You can generate these by running:

```bash
npm run generate-images
```

This will create SVG images in the `public/images` directory:
- Tech stack icons (e.g., `react.png`, `vue.png`, etc.)
- Tutorial images (e.g., `mern-stack-tutorial.png`, `mern-stack-thumbnail.png`)
- Hero image (`hero-image.png`)

You can replace these with your own images if desired, keeping the same filenames.

## Project Structure

- `src/app`: Next.js app directory containing pages
- `src/components`: Reusable React components
- `src/styles`: Global styles and component-specific styles
- `src/data`: Data for tutorials and tech stacks
- `src/hooks`: Custom React hooks
- `src/lib`: Utility functions and helpers
- `public`: Static assets like images

## Tutorial Content

The website features tutorials on various tech stacks including:

- MERN Stack (MongoDB, Express, React, Node.js)
- Python Django
- JAMstack
- Vue.js and Node.js
- AWS Amplify
- Web Scraping with Python

## Customizing

You can add new tutorials by updating the `src/data/tutorials.ts` file and add new tech stacks in the `src/data/techStacks.ts` file.

## Developer

Developed by Dustin Karl D. Abalos - A Full Stack Web Developer.

## License

This project is open source and available under the [MIT License](LICENSE).