# Nuxt 3 Basic Site Template

## Used Packages

- Nuxt Image
- Nuxt UI:
  - Nuxt Icon
  - TailwindCSS
  - Nuxt Color Mode
- AutoAnimate
- Vue Transitions

## Setup

**_This project was made using ==Node v18.20.1==_**

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Known Bugs

- The navbar dropdown navigates to the id anchor, however since
  the header is sticky, it obstructs the destination.
