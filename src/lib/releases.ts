export interface ReleaseInfo {
  version: string;
  date: string; // Using string for simplicity, could use Date object
  notes?: string[]; // Optional release notes
  url: string;
  isBeta: boolean;
}

export const releases: ReleaseInfo[] = [
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