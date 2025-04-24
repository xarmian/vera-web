<script>
  // Any component-specific logic would go here
</script>

<svelte:head>
  <title>Passphrase Information - Vera Wallet Support</title>
  <meta name="description" content="Learn how to secure and manage your recovery passphrase in Vera Wallet." />
</svelte:head>

<div class="bg-white py-16 sm:py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <a href="/support" class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Support
      </a>
      
      <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Understanding Your Recovery Passphrase
      </h1>
      
      <div class="mt-8 prose prose-lg text-gray-500 mx-auto">
        <div class="bg-primary-50 border-l-4 border-primary-400 p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-primary-700">
                <strong>Important:</strong> Your recovery passphrase is the only way to restore access to your wallet if you lose your device or need to reinstall the app. Keep it safe and secure.
              </p>
            </div>
          </div>
        </div>
        
        <h2>What is a Recovery Passphrase?</h2>
        <p>
          A recovery passphrase (sometimes called a seed phrase or mnemonic) is a series of 25 words that serves as a backup to your Vera Wallet. These words, generated when you first create your wallet, are derived from your private key and follow a specific standard.
        </p>
        
        <h2>Why is Your Passphrase Important?</h2>
        <p>
          Your recovery passphrase is the <strong>only way</strong> to restore access to your funds if:
        </p>
        <ul>
          <li>You lose your mobile device</li>
          <li>Your device gets damaged</li>
          <li>You need to reinstall the Vera Wallet app</li>
          <li>You want to access your wallet on another device</li>
        </ul>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700">
                <strong>Warning:</strong> If you lose your recovery passphrase and your device, you will permanently lose access to your wallet and all funds within it. There is no way to recover your passphrase if lost.
              </p>
            </div>
          </div>
        </div>
        
        <h2>How to Secure Your Passphrase</h2>
        <p>
          Follow these best practices to keep your recovery passphrase secure:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-500 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-lg font-medium text-gray-900 m-0">Do</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Write down your passphrase on paper and store it in a secure location
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Consider using a metal backup for fire and water resistance
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Store multiple copies in different secure locations
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                Double-check each word when writing it down
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div class="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-lg font-medium text-gray-900 m-0">Don't</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">✗</span>
                Take a screenshot or photo of your passphrase
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">✗</span>
                Store your passphrase in a digital document or cloud storage
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">✗</span>
                Share your passphrase with anyone, including Vera support
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">✗</span>
                Enter your passphrase on any website or untrusted application
              </li>
            </ul>
          </div>
        </div>
        
        <h2>Viewing Your Passphrase in Vera Wallet</h2>
        <p>
          If you need to view your recovery passphrase within the Vera Wallet app:
        </p>
        <ol>
          <li>Open the Vera Wallet app</li>
          <li>Tap on the <strong>Settings</strong> icon in the bottom navigation</li>
          <li>Select <strong>Security</strong> from the settings menu</li>
          <li>Tap on <strong>View Recovery Passphrase</strong></li>
          <li>Verify your identity using your device's authentication method (PIN, fingerprint, or face recognition)</li>
          <li>Your recovery passphrase will be displayed</li>
        </ol>
        
        <div class="bg-primary-50 border-l-4 border-primary-400 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-primary-700">
                <strong>Tip:</strong> Only view your recovery passphrase in a private location where no one can see your screen, and ensure no cameras or recording devices are present.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Further Questions</h2>
        <p>
          If you have additional questions about your recovery passphrase or need further assistance, please visit our <a href="/support" class="text-primary-600 hover:text-primary-700">Support Center</a> or join our <a href="https://discord.gg/voiapp" class="text-primary-600 hover:text-primary-700">Discord community</a>.
        </p>
      </div>
    </div>
  </div>
</div> 