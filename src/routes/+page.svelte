<script>
    // We can define any reactive state or imports here
    import { latestRelease, formatDate } from '$lib/releases';
  </script>
  
  <svelte:head>
    <title>Voi Wallet - Mobile Wallet for Voi Network</title>
    <meta name="description" content="Voi Wallet is a secure mobile wallet built from scratch for Voi Network, an AVM (Algorand Virtual Machine) Layer 1 blockchain network." />
  </svelte:head>
  
  <!-- Hero Section -->
  <section class="relative bg-white dark:bg-gray-900 overflow-hidden">
    <div class="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span class="block">Voi Wallet</span>
            <span class="block text-primary-600 dark:text-primary-400">your AVM Wallet</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Voi Wallet is a secure, user-friendly mobile wallet built from scratch with React Native for the Voi Network. Purpose-built for Voi while maintaining AVM compatibility with Algorand support.
          </p>
          <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a href="#download" class="btn btn-primary dark:text-white rounded-lg py-3 px-6 text-base font-medium shadow-md">
                Download Now
              </a>
              <a href="/support" class="btn btn-outline dark:text-white rounded-lg py-3 px-6 text-base font-medium">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="hidden mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <div class="relative block w-full bg-white dark:bg-gray-800 overflow-hidden rounded-lg">
              <img src="/android-chrome-512x512.png" alt="Voi Wallet App" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Features Section -->
  <section class="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Why Choose Voi Wallet?
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
          Voi Wallet offers a seamless experience for interacting with the Voi Network.
        </p>
      </div>
      
      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Feature 1 -->
        <div class="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <div class="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Secure by Design</h3>
          <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
            Your private keys never leave your device. Industry-standard security practices keep your assets safe.
          </p>
        </div>
        
        <!-- Feature 2 -->
        <div class="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <div class="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Fast & Efficient</h3>
          <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
            Built on the Voi Network, enjoy quick transaction confirmations and low fees for all your transactions.
          </p>
        </div>
        
        <!-- Feature 3 -->
        <div class="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <div class="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">dApp Integration</h3>
          <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
            Connect to your favorite decentralized applications with WalletConnect support.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Download Section -->
  <section id="download" class="py-16 sm:py-24 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Download Voi Wallet
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
          Get Voi Wallet on your mobile device and start exploring the Voi Network.
        </p>
      </div>
      
      <div class="mt-12 max-w-lg mx-auto flex flex-col items-center">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full max-w-md mx-auto">
          <!-- Android Download -->
          <a href="https://play.google.com/store/apps/details?id=com.voinetwork.wallet" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="mr-2">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </a>
          
          <!-- iOS Download -->
          <a href="https://apps.apple.com/us/app/voi-wallet/id6752960399" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center bg-black hover:bg-gray-800 text-white dark:bg-black dark:hover:bg-gray-800 py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="mr-2">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            App Store
          </a>
        </div>
        
        <!-- Direct APK Download -->
        <div class="mt-8 w-full max-w-md">
          <a href="{latestRelease.url}" class="btn btn-primary dark:text-white w-full flex items-center justify-center py-3 px-4 rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Android APK ({latestRelease.isBeta ? 'Beta ' : ''}v{latestRelease.version} - {formatDate(latestRelease.date)})
          </a>
          {#if latestRelease.notes && latestRelease.notes.length > 0}
            <div class="mt-4 text-sm text-gray-600 dark:text-gray-400 text-left">
              <p class="font-medium text-gray-700 dark:text-gray-300 mb-1">What's new:</p>
              <ul class="list-disc list-inside space-y-1">
                {#each latestRelease.notes.slice(0, 3) as note}
                  <li>{note}</li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
  
  <!-- Community Section -->
  <section class="bg-gradient-to-b from-secondary-500 to-secondary-700 dark:from-secondary-800 dark:to-secondary-900 py-16 sm:py-24 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold sm:text-4xl">
          Join the Voi Network Community
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-secondary-100 dark:text-secondary-200 mx-auto">
          Connect with developers and users to learn more about Voi Wallet and the Voi ecosystem.
        </p>
      </div>
      
      <div class="mt-10 flex justify-center space-x-6">
        <a href="https://github.com/xarmian/voi_wallet" class="text-secondary-200 hover:text-white">
          <span class="sr-only">GitHub</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="https://discord.gg/vnFbrJrHeW" class="text-secondary-200 hover:text-white">
          <span class="sr-only">Discord</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
          </svg>
        </a>
        <a href="https://twitter.com/Voi_Wallet" class="text-secondary-200 hover:text-white">
          <span class="sr-only">X</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 300 271" aria-hidden="true">
            <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
          </svg>
        </a>
      </div>
    </div>
  </section>