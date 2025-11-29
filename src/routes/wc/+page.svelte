<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';

  // Voi Wallet Chrome Extension ID (update this with the production ID)
  const EXTENSION_ID = 'cijcldniodackbkgpoklfkohjhbkpnpc';

  type Status = 'checking' | 'sending' | 'success' | 'no-extension' | 'error' | 'no-uri' | 'mobile';

  let status = $state<Status>('checking');
  let errorMessage = $state('');
  let wcUri = $state('');
  let isMobile = $state(false);

  onMount(() => {
    if (!browser) return;

    // Get URI from query params
    const uri = $page.url.searchParams.get('uri');
    if (uri) {
      wcUri = decodeURIComponent(uri);
    }

    // Check if mobile
    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      status = 'mobile';
      // On mobile, redirect to the app via deep link
      if (wcUri) {
        // Small delay to show the page before redirecting
        setTimeout(() => {
          window.location.href = wcUri;
        }, 1500);
      }
      return;
    }

    if (!wcUri) {
      status = 'no-uri';
      return;
    }

    // Try to send to extension
    tryConnectToExtension();
  });

  function tryConnectToExtension() {
    if (typeof chrome === 'undefined' || !chrome.runtime) {
      status = 'no-extension';
      return;
    }

    status = 'sending';

    try {
      chrome.runtime.sendMessage(
        EXTENSION_ID,
        {
          type: 'WALLETCONNECT_URI',
          uri: wcUri
        },
        (response: { received?: boolean } | undefined) => {
          if (chrome.runtime.lastError) {
            // Extension not installed or not responding
            status = 'no-extension';
            errorMessage = chrome.runtime.lastError.message || 'Extension not found';
          } else if (response && response.received) {
            status = 'success';
          } else {
            status = 'no-extension';
          }
        }
      );
    } catch (e) {
      status = 'error';
      errorMessage = e instanceof Error ? e.message : 'Unknown error';
    }
  }

  function copyToClipboard() {
    if (browser && wcUri) {
      navigator.clipboard.writeText(wcUri);
    }
  }

  function openMobileApp() {
    if (wcUri) {
      window.location.href = wcUri;
    }
  }
</script>

<svelte:head>
  <title>Connect to Voi Wallet</title>
  <meta name="description" content="Connect your dApp to Voi Wallet via WalletConnect" />
</svelte:head>

<section class="min-h-[80vh] flex items-center justify-center bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-md mx-auto text-center">
      <!-- Logo -->
      <div class="mb-8">
        <img src="/android-chrome-192x192.png" alt="Voi Wallet" class="h-20 w-20 mx-auto" />
      </div>

      {#if status === 'checking'}
        <div class="space-y-4">
          <div class="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto"></div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Connecting...</h1>
          <p class="text-gray-500 dark:text-gray-400">Looking for Voi Wallet extension</p>
        </div>

      {:else if status === 'sending'}
        <div class="space-y-4">
          <div class="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto"></div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Connecting...</h1>
          <p class="text-gray-500 dark:text-gray-400">Opening Voi Wallet</p>
        </div>

      {:else if status === 'success'}
        <div class="space-y-4">
          <div class="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
            <svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Connection Sent!</h1>
          <p class="text-gray-500 dark:text-gray-400">
            Voi Wallet should open automatically. Please check the wallet to approve the connection.
          </p>
        </div>

      {:else if status === 'mobile'}
        <div class="space-y-6">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Opening Voi Wallet...</h1>
          <p class="text-gray-500 dark:text-gray-400">
            Redirecting to the Voi Wallet app
          </p>
          <div class="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto"></div>

          <div class="pt-4 space-y-3">
            <p class="text-sm text-gray-500 dark:text-gray-400">App didn't open?</p>
            <button
              onclick={openMobileApp}
              class="btn btn-primary dark:text-white w-full py-3 px-6 rounded-lg font-medium"
            >
              Open Voi Wallet
            </button>
            <div class="flex gap-3 justify-center pt-2">
              <a
                href="https://apps.apple.com/us/app/voi-wallet/id6752960399"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Get on App Store
              </a>
              <span class="text-gray-300 dark:text-gray-600">|</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.voinetwork.wallet"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Get on Google Play
              </a>
            </div>
          </div>
        </div>

      {:else if status === 'no-extension'}
        <div class="space-y-6">
          <div class="h-16 w-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto">
            <svg class="h-8 w-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Extension Not Found</h1>
          <p class="text-gray-500 dark:text-gray-400">
            The Voi Wallet browser extension doesn't appear to be installed, or it's not responding.
          </p>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Options:</p>

            <a
              href="/#download"
              class="btn btn-primary dark:text-white w-full py-3 px-6 rounded-lg font-medium block text-center"
            >
              Download Voi Wallet
            </a>

            {#if wcUri}
              <div class="relative">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Or copy the connection URI:</p>
                <div class="flex gap-2">
                  <input
                    type="text"
                    value={wcUri}
                    readonly
                    class="flex-1 text-xs p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white truncate"
                  />
                  <button
                    onclick={copyToClipboard}
                    class="px-3 py-2 bg-gray-200 dark:bg-gray-600 rounded text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500"
                  >
                    Copy
                  </button>
                </div>
              </div>
            {/if}
          </div>
        </div>

      {:else if status === 'no-uri'}
        <div class="space-y-4">
          <div class="h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto">
            <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">No Connection URI</h1>
          <p class="text-gray-500 dark:text-gray-400">
            This page is used to connect dApps to Voi Wallet. No connection URI was provided.
          </p>
          <a href="/" class="btn btn-primary dark:text-white inline-block py-3 px-6 rounded-lg font-medium mt-4">
            Go to Homepage
          </a>
        </div>

      {:else if status === 'error'}
        <div class="space-y-4">
          <div class="h-16 w-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
            <svg class="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Connection Error</h1>
          <p class="text-gray-500 dark:text-gray-400">
            {errorMessage || 'An error occurred while trying to connect to Voi Wallet.'}
          </p>
          <button
            onclick={tryConnectToExtension}
            class="btn btn-primary dark:text-white py-3 px-6 rounded-lg font-medium mt-4"
          >
            Try Again
          </button>
        </div>
      {/if}
    </div>
  </div>
</section>
