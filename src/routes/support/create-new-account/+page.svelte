<script>
  // Any component-specific logic would go here
</script>

<svelte:head>
  <title>Create a New Account - Vera Wallet Support</title>
  <meta name="description" content="Learn how to create a new account in Vera Wallet for the Voi Network." />
</svelte:head>

<div class="bg-white dark:bg-gray-900 py-16 sm:py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <a href="/support" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Support
      </a>
      
      <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
        Create a New Account in Vera Wallet
      </h1>
      
      <div class="mt-8 prose prose-lg text-gray-500 dark:text-gray-400 prose-headings:dark:text-white mx-auto">
        <h2>Before You Begin</h2>
        
        <p>
          Make sure you understand these key points about Vera Wallet and accounts on the Voi Network:
        </p>
        
        <ul>
          <li>Vera Wallet is a container for your Voi Network accounts</li>
          <li>Vera Wallet allows you to create and manage accounts, but these accounts exist on the blockchain, not "on Vera"</li>
          <li>Vera Wallet is non-custodial, meaning you have full control of your accounts, but also full responsibility for their security</li>
        </ul>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 dark:border-amber-700 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-600 dark:text-amber-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-amber-700 dark:text-amber-300">
                <strong class="dark:text-amber-300">Note:</strong> If you already have an account on the Voi Network that you'd like to use, follow our <a href="/support/recover-account" class="text-amber-700 dark:text-amber-300 underline">Recover an Account</a> guide instead.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Types of Wallets</h2>
        
        <p>
          There are two types of wallets available:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Universal Wallets (BIP-39)</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Universal wallets follow the BIP-39 HD Wallets standard for managing cryptocurrency private keys using a single, secure 24-word seed phrase. They organize keys hierarchically, allowing one seed phrase to generate multiple addresses across different blockchains. This simplifies backups (just one phrase to store) and enhances security.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">25-Word Wallets</h3>
            <p class="text-gray-600 dark:text-gray-300">
              This is the original wallet type that uses a 25-word mnemonic phrase. Each account has its own unique recovery phrase that must be backed up separately. These accounts are compatible with all Voi Network tools and services.
            </p>
          </div>
        </div>
        
        <h2>Creating Your First Wallet</h2>
        
        <p>
          If you're new to Vera Wallet and don't have any accounts yet, follow these steps:
        </p>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">Open the Vera Wallet app</strong> and select "I want to create a wallet"</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select "Create a new wallet"</strong> from the options</p>
          </li>
          <li>
            <p><strong class="dark:text-white">View and securely store your recovery passphrase</strong></p>
            <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-700 p-4 my-3">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400 dark:text-red-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700 dark:text-red-300">
                    <strong class="dark:text-red-300">Critical Step:</strong> Write down your recovery passphrase and store it in a secure location. This is the only way to recover your account if you lose access to your device. For more guidance, see our <a href="/support/passphrase" class="text-red-700 dark:text-red-300 underline">Recovery Passphrase</a> guide.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <p><strong class="dark:text-white">Verify your recovery passphrase</strong> by entering specific words when prompted</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Name your account</strong> - this name is only visible to you and is not stored on the blockchain</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Set up security features</strong> such as a PIN Code or Biometric Authentication</p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Tip:</strong> We recommend enabling all security features available for your device. Note that your PIN code only protects access to the app on your current device and cannot be used to recover your accounts.
              </p>
            </div>
          </li>
        </ol>
        
        <p>
          Your new account is now ready to use in Vera Wallet. You can find it on your Home Screen, where you can fund it or explore the Voi ecosystem.
        </p>
        
        <h2>Adding a New Account to Your Existing Wallet</h2>
        
        <p>
          If you already have accounts in Vera Wallet and want to add another one:
        </p>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">From the Home Screen</strong>, tap the <strong class="dark:text-white">+</strong> (plus) icon at the top of your accounts list</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select "Add a New Account"</strong> from the menu options</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Name your new account</strong> - choose a descriptive name that helps you identify this account's purpose</p>
          </li>
        </ol>
        
        <p>
          Your new account will be created instantly and will appear in your accounts list. Each account has its own unique address for receiving funds.
        </p>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 dark:border-amber-700 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-600 dark:text-amber-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-amber-700 dark:text-amber-300">
                <strong class="dark:text-amber-300">Important:</strong> If you're using a Universal Wallet (24-word), all your accounts can be recovered with the same recovery phrase. If you're using 25-word wallets, each account has its own unique recovery phrase that must be backed up separately.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Important Reminders</h2>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 my-6">
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Your wallet is only as secure as your recovery phrase.</strong> Store it safely offline, preferably in multiple secure locations.
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Vera Wallet is non-custodial.</strong> This means you have full control of your accounts, but also that Vera cannot help you recover your accounts if you lose your recovery phrase.
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Account names are local to your device.</strong> They are not stored on the blockchain and will not appear when viewing your account in other wallets or explorers.
              </span>
            </li>
          </ul>
        </div>
        
        <h2>Common Questions</h2>
        
        <div class="space-y-6 mt-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Is there a limit to how many accounts I can create?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              There is no specific limit to the number of accounts you can create in Vera Wallet. However, having many accounts may affect the app's performance on some devices.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Do I need to fund each new account?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Yes, each account on the Voi Network requires a minimum balance to exist on the blockchain. Make sure to transfer some VOI to your new accounts after creating them.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">What's the difference between creating a new account and recovering an account?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Creating a new account generates a fresh account that has never existed before. Recovering an account allows you to access an account you already own using its recovery passphrase.
            </p>
          </div>
        </div>
        
        <h2>Need More Help?</h2>
        <p>
          If you have additional questions about creating accounts or need further assistance, please visit our <a href="/support" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Support Center</a> or join our <a href="https://discord.gg/voiapp" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Discord community</a>.
        </p>
      </div>
    </div>
  </div>
</div> 