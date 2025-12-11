export interface ReleaseInfo {
  version: string;
  date: string; // Using string for simplicity, could use Date object
  notes?: string[]; // Optional release notes
  url: string;
  isBeta: boolean;
}

export const releases: ReleaseInfo[] = [
  {
    version: "0.1.9",
    date: "2025-12-11", // Using ISO 8601 format
    url: "https://api.voirewards.com/voiwallet/voiwallet-0.1.9-preview.apk",
    isBeta: true,
    notes: [
      "Added new Experimental Features option under Settings menu",
      "Added new Encrypted on-chain messaging as an Experimental Feature",
      "Added Claimable asset detection and claim feature"
    ],
  },
  {
    version: "0.1.8",
    date: "2025-12-07", // Using ISO 8601 format
    url: "https://api.voirewards.com/voiwallet/voiwallet-0.1.8-preview.apk",
    isBeta: true,
    notes: [
      "Added new Experimental Features option under Settings menu",
      "Added new Encrypted on-chain messaging as an Experimental Feature",
      "Added Claimable asset detection and claim feature"
    ],
  },
  {
    version: "0.1.7",
    date: "2025-11-28", // Using ISO 8601 format
    url: "https://api.voirewards.com/voiwallet/voiwallet-0.1.7-preview.apk",
    isBeta: true,
    notes: [
      "Add integrated DEX Swap functionality on both Voi and Algorand networks",
      "Overhaul UI/UX of the wallet and improve NFT Theme system",
    ],
  },
  {
    version: "0.1.6",
    date: "2025-10-30", // Using ISO 8601 format
    url: "https://api.voirewards.com/voiwallet/voiwallet-0.1.6-preview.apk",
    isBeta: true,
    notes: [
      "Combined AVM account balances into one view",
      "NFT-based theme system",
      "Search and save friends via enVoi"
    ],
  },
  {
    version: "0.1.5",
    date: "2025-10-10", // Using ISO 8601 format
    url: "https://api.voirewards.com/voiwallet/voiwallet-0.1.5-preview.apk",
    isBeta: true,
    notes: [
      "General bug fixed and  UI Improvements",
      "Support for legacy WalletConnect v1 dApp connectors",
      "Fixes scanning of account address and account import QR codes",
    ],
  },
  {
    version: "0.1.4",
    date: "2025-09-26", // Using ISO 8601 format
    url: "https://api.voirewards.com/voiwallet/voiwallet-0.1.4-preview.apk",
    isBeta: true,
    notes: [
        "UX improvements and bug fixes.",
        "Improve reliability of Ledger support.",
        "Add ARC-72 transfer functionality.",
        "Add Account Information screen.",
    ],
  },
  {
    version: "0.1.3",
    date: "2025-09-24", // Using ISO 8601 format
    url: "https://api.voirewards.com/voiwallet/voiwallet-0.1.3-preview.apk",
    isBeta: true,
    notes: [
        "Initial beta release of the new Voi Wallet.",
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