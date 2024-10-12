# Blog Platform - Next.js, Sanity, Tailwind CSS, Shadcn-UI, and TypeScript

A modern, fully responsive blog platform built with **Next.js**, **Sanity CMS**, **Tailwind CSS**, **Shadcn-UI**, and **TypeScript**. The platform allows you to manage and publish content dynamically, with a sleek UI and optimized performance for all devices.

## DEMO

[Demo](https://nextjs-sanity-blog-five.vercel.app/)

## Features

- **Next.js**: Server-side rendering (SSR) and static site generation (SSG) for fast and SEO-friendly pages.
- **Sanity CMS**: Fully customizable and user-friendly content management system.
- **Tailwind CSS**: A utility-first CSS framework for rapid styling.
- **Shadcn-UI**: Modular and flexible components for a consistent UI experience.
- **TypeScript**: Provides static typing, enhancing code reliability and developer experience.
- **Responsive Design**: Works seamlessly across all devices.
- **Dark Mode**: Built-in support for light and dark modes.
- **SEO Optimized**: Follow best practices for search engine optimization.
- **Fast & Secure**: High-performance with scalability and security in mind.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Sanity CMS](https://www.sanity.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn-UI](https://shadcn.dev/)
- **TypeScript** for improved code quality and maintainability

## Demo

You can see a live demo of this blog platform [here](#).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14+)
- PNPM (preferred package manager for this project)
- Sanity CLI
- Vercel CLI (for deployment)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-blog-repo.git
   cd your-blog-repo
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up the **Sanity CMS** backend:

   - Install Sanity CLI if you don’t have it:

     ```bash
     npm install -g @sanity/cli
     ```

   - Initialize Sanity:

     ```bash
     sanity init
     ```

   - Follow the prompts to set up the project with your preferred settings.

4. Configure environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-dataset-name
   SANITY_API_TOKEN=your-sanity-token
   ```

5. Run the development server:

   ```bash
   pnpm dev
   ```

   Your blog should now be running at [http://localhost:3000](http://localhost:3000).

### Folder Structure

```bash
.
├── sanity            # Sanity CMS configuration
├── src
│   ├── components    # UI components built with Shadcn-UI
│   ├── pages         # Next.js pages (Home, Blog, Post, etc.)
│   ├── styles        # Global and Tailwind CSS styles
│   ├── types         # TypeScript types and interfaces
│   └── utils         # Utility functions (API fetch, helpers)
├── public            # Static assets (images, fonts)
├── .env.local        # Environment variables (not tracked)
└── package.json      # Project dependencies and scripts
```

## Deployment

This project is set up to deploy on **Vercel**. Follow these steps to deploy:

1. Install the Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Link your project to Vercel:

   ```bash
   vercel
   ```

   Follow the prompts to link your Vercel account and project.

3. Deploy:

   ```bash
   vercel --prod
   ```

## Customization

### Styling with Tailwind CSS

You can modify the design and layout easily using **Tailwind CSS**. The `tailwind.config.js` file allows you to extend or customize the default settings.

### Managing Content with Sanity

To add or update blog content, use the Sanity Studio UI. You can customize the schemas in the `sanity/schemas` folder to add more content types or fields.

### Shadcn-UI Components

The UI components are built using **Shadcn-UI**. You can modify the design by editing the component files in the `src/components` folder.

### TypeScript

The project is built with **TypeScript**, ensuring better code reliability, improved developer experience, and fewer runtime errors. You can add or modify types and interfaces in the `src/types` folder.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repo.
2. Create a new feature branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin my-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This `README.md` now reflects the use of TypeScript. Feel free to adjust it as needed!
