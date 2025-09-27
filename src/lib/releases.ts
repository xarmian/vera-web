export interface ReleaseInfo {
  version: string;
  date: string; // Using string for simplicity, could use Date object
  notes?: string[]; // Optional release notes
  url: string;
  isBeta: boolean;
}

export const releases: ReleaseInfo[] = [
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