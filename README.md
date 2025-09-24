# Voi Wallet Website

This repository contains the source code for the Voi Wallet website, built with SvelteKit.

## About Voi Wallet

Vera Wallet is now **Voi Wallet**, a non-custodial cryptocurrency wallet built from scratch with React Native for the Voi Network. While purpose-built for Voi, it maintains AVM (Algorand Virtual Machine) compatibility with support for Algorand. As a non-custodial solution, users maintain complete control over their private keys and assets.

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
   git clone https://github.com/yourusername/voi-wallet-web.git
   cd voi-wallet-web
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
voi-wallet-web/
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

- Email: support@voiwallet.io
- Discord: [https://discord.gg/vnFbrJrHeW](https://discord.gg/vnFbrJrHeW)
- Twitter: [@Voi_Net](https://twitter.com/Voi_Net)
