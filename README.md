# Vera Wallet Website

This repository contains the source code for the Vera Wallet website, built with SvelteKit.

## About Vera Wallet

Vera Wallet is a non-custodial cryptocurrency wallet for the Voi Network, forked from Pera Wallet for Algorand. As a non-custodial solution, users maintain complete control over their private keys and assets.

## Features

- Modern, responsive design
- Informational pages (Privacy Policy, Terms of Service, Contact)
- Contact form for user support and inquiries
- Integration with community platforms

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/vera-web.git
   cd vera-web
   ```

2. Install dependencies
   ```
   npm install
   # or with pnpm
   pnpm install
   ```

3. Start the development server
   ```
   npm run dev
   # or with pnpm
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

1. Create a production build
   ```
   npm run build
   # or with pnpm
   pnpm build
   ```

2. Preview the production build locally
   ```
   npm run preview
   # or with pnpm
   pnpm preview
   ```

## Folder Structure

```
vera-web/
├── src/                   # Source files
│   ├── routes/            # SvelteKit routes & pages
│   ├── lib/               # Shared libraries and utilities
│   └── components/        # Reusable Svelte components
├── static/                # Static assets
├── tests/                 # Test files
└── package.json           # Project dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: support@getvera.app
- Discord: [https://discord.gg/vnFbrJrHeW](https://discord.gg/vnFbrJrHeW)
- Twitter: [@Voi_Net](https://twitter.com/Voi_Net)
