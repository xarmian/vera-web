export interface ReleaseInfo {
  version: string;
  date: string; // Using string for simplicity, could use Date object
  notes?: string[]; // Optional release notes
  url: string;
  isBeta: boolean;
}

export const releases: ReleaseInfo[] = [
  {
    version: "0.1.8",
    date: "2025-05-07", // Using ISO 8601 format
    url: "https://api.voirewards.com/vera-wallet-beta-0.1.8.apk",
    isBeta: true,
    notes: [
        "Account balances now update in real time",
        "Fix display of Standard Asset tokens (i.e. aUSDC)",
        "Mutliple currency support and assets/portfolio shown in selected currency",
        "QR code scanner icon added to Account Detail screen",
    ],
  },
  {
    version: "0.1.7",
    date: "2025-04-29", // Using ISO 8601 format
    url: "https://api.voirewards.com/vera-wallet-beta-0.1.7.apk",
    isBeta: true,
    notes: [
        "ARC-200 Token Support - See ARC-200 tokens in your wallet",
        "ARC-72 Token Support - See ARC-72 NFTs in your wallet",
        "NOTE: Token support is currently view-only. Transfer of tokens is not yet available.",
    ],
  },
  {
    version: "0.1.6",
    date: "2025-04-25", // Using ISO 8601 format
    url: "https://api.voirewards.com/vera-wallet-beta-0.1.6.apk",
    isBeta: true,
    notes: [
        "Add enVoi name support for accounts, transactions, and transfer recipient lookup",
        "Hide add asset button until feature is implemented",
    ],
  },
  {
    version: "0.1.5",
    date: "2025-04-24", // Using ISO 8601 format
    url: "https://api.voirewards.com/vera-wallet-beta-0.1.5.apk",
    isBeta: true,
    notes: [
        "WalletConnect support improvements", // Add actual notes later
    ],
  },
  {
    version: "0.1.4",
    date: "2025-04-23", // Using ISO 8601 format
    url: "https://api.voirewards.com/vera-wallet-beta-0.1.4.apk",
    isBeta: true,
    notes: [
        "Initial beta release.", // Add actual notes later
    ],
  },
];

// Helper to get the latest release (assuming the array is sorted newest first)
export const latestRelease = releases[0];

// Helper to format date nicely (optional)
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    // Add timeZone: 'UTC' to ensure the date isn't shifted by local timezone
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
} 