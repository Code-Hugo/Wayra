# Wayra

Wayra is an AI-powered travel assistant designed to help users find the perfect hotel with ease and efficiency. Leveraging cutting-edge technology, Wayra provides a seamless and intuitive user experience for travelers.

## Key Features

- **Hotel Search UI**: A user-friendly interface to search for hotels based on various criteria.
- **Result Cards**: Detailed cards displaying hotel information, ratings, and prices.
- **Filters**: Advanced filtering options to narrow down search results.
- **Responsive Design**: Optimized for all devices, ensuring a smooth experience on mobile, tablet, and desktop.

## Quick Start

To get started with local development, follow these steps. Ensure you have a
recent version of **Node.js** installed (v18 or later is recommended) and that
you can access the npm registry.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/wayra.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd wayra
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Troubleshooting

### `npm install` fails or hangs

If dependency installation fails, your environment may not have internet access to reach the npm registry. Ensure your development environment can access `registry.npmjs.org` or configure an offline mirror with all required packages. Without network access or preinstalled dependencies, the project won't build or run locally.

### Search form loads but never returns results

If the search page begins loading but the list of hotels never appears,
dependencies may be missing. Run `npm install` in the project root to ensure the
`next` and `vitest` binaries are available. Without these packages the
development server and tests will fail to start.

## Deployment

Wayra is live on Vercel. Check it out at our [demo site](https://your-vercel-url.vercel.app).

## Tech Stack

- **Next.js 15**
- **Tailwind CSS**
- **shadcn/ui**
- **TypeScript**

## Screenshots

![Screenshot Placeholder](https://via.placeholder.com/800x400)

## Roadmap

- Integration with more travel APIs
- Enhanced filtering options
- User accounts and personalized recommendations

## License

This project is licensed under the MIT License.
