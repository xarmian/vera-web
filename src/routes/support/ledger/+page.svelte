<script>
  // Any component-specific logic would go here
</script>

<svelte:head>
  <title>Using Ledger with Vera Wallet - Support</title>
  <meta name="description" content="Learn how to pair and use your Ledger hardware wallet with Vera Wallet for enhanced security." />
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
        Pairing Your Ledger Device with Vera Wallet
      </h1>
      
      <div class="mt-8 prose prose-lg text-gray-500 dark:text-gray-400 prose-headings:dark:text-white mx-auto">
        <h2>What is Ledger Integration?</h2>
        
        <p>
          Vera Wallet allows you to create accounts that are backed by a Ledger hardware wallet. This means your private keys never leave the Ledger device, providing an additional layer of security. Transactions from your Ledger-backed account will require physical authorization on your Ledger device.
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
                <strong class="dark:text-amber-300">Disclaimer:</strong> While we're excited to offer the security-enhancing integration with Ledger, please be aware that Ledger is a third-party tool. We will always offer support where we can, but these are advanced workflows and should be undertaken at your own risk. There might be times when you'll need to work with Ledger support for specific questions. We encourage you to read more about Ledger on <a href="https://www.ledger.com" class="text-amber-700 dark:text-amber-300 underline">their website</a>.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Initial Ledger Device Setup</h2>
        
        <p>
          Before integrating with Vera Wallet, you'll need to:
        </p>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">Set up your Ledger device</strong> following the instructions provided by Ledger</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Install Ledger Live</strong> on your computer</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Download and install the Algorand app</strong> on your Ledger device through Ledger Live</p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Tip:</strong> Vera Wallet utilizes Ledger's Algorand app for signing transactions, which is available in the Ledger App Catalog. Make sure your Ledger Live and firmware are updated to the latest versions.
              </p>
            </div>
          </li>
        </ol>
        
        <p>
          Once you have the Algorand app installed on your Ledger device, you're ready to begin pairing with Vera Wallet.
        </p>
        
        <h2>How to Pair Your Ledger Device</h2>
        
        <p>
          Follow these steps to pair your Ledger device with Vera Wallet:
        </p>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">Open Vera Wallet</strong> and tap the <strong class="dark:text-white">+</strong> (plus) icon at the top of your accounts list on the Home Screen</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select "Import an account"</strong> and then <strong class="dark:text-white">"Pair Ledger Device"</strong></p>
          </li>
          <li>
            <p><strong class="dark:text-white">Prepare your Ledger device</strong> by turning it on and opening the Algorand app</p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Important:</strong> Your Ledger must be unlocked and have the Algorand app open before proceeding to the next step.
              </p>
            </div>
          </li>
          <li>
            <p><strong class="dark:text-white">Tap "How does it work"</strong> to view detailed instructions about the pairing process</p>
            <p>Once you've read the instructions, return to the previous screen</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Tap "Search for Ledger"</strong> to begin the device discovery process</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select your Ledger device</strong> from the list of discovered devices and tap <strong class="dark:text-white">"Connect"</strong></p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select the account(s)</strong> you want to add to Vera Wallet</p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Note:</strong> If this is a new Ledger device, you'll likely only have one account to choose from. If you've created multiple accounts on your Ledger, you may see several accounts available.
              </p>
            </div>
          </li>
          <li>
            <p><strong class="dark:text-white">Name your Ledger-backed account</strong> for easy identification in your wallet</p>
          </li>
        </ol>
        
        <p>
          That's it! Your Ledger-backed account is now added to Vera Wallet. You'll now be able to view your balance and receive funds, but any outgoing transactions will require approval on your physical Ledger device.
        </p>
        
        <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-700 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400 dark:text-red-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700 dark:text-red-300">
                <strong class="dark:text-red-300">Important Warning:</strong> Treat your Ledger device's recovery phrase with the same care as your Vera Wallet recovery passphrase. If you lose your Ledger device, the only way to recover your accounts will be using the recovery phrase you received during setup. Keep it secure and never share it with anyone.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Using Your Ledger-Backed Account</h2>
        
        <p>
          When using a Ledger-backed account with Vera Wallet:
        </p>
        
        <ul>
          <li>You can view your account balance and transaction history directly in Vera Wallet</li>
          <li>You can receive funds just like any other account</li>
          <li>To send transactions, add assets, or interact with the blockchain, you'll need to have your Ledger device connected and the Algorand app open</li>
          <li>All transactions must be physically verified and approved on your Ledger device before they are submitted to the blockchain</li>
        </ul>
        
        <h2>Common Questions</h2>
        
        <div class="space-y-6 mt-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Which Ledger devices are supported?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Vera Wallet supports Ledger Nano X, Ledger Stax, and Ledger Flex devices. Older models may have limited compatibility.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">What if my Ledger isn't connecting?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Ensure your Ledger is charged, unlocked, and has the Algorand app open. Check that Bluetooth is enabled on your mobile device if using a Nano X, Stax or Flex. If problems persist, try restarting both your Ledger and mobile device.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I use the same Ledger with multiple wallets?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Yes, you can use the same Ledger device across multiple wallet applications. The private keys remain secured on your Ledger hardware and are never exposed to any of the connected applications.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">What happens if I lose my Ledger device?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              If you lose your Ledger device, you'll need to use your Ledger recovery phrase to restore access to your accounts on a new Ledger device. Without your recovery phrase, you cannot access the funds in your Ledger-backed accounts. This is why keeping your recovery phrase secure is critical.
            </p>
          </div>
        </div>
        
        <h2>Need More Help?</h2>
        <p>
          If you have additional questions about using a Ledger device with Vera Wallet, please visit our <a href="/support" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Support Center</a> or join our <a href="https://discord.gg/voiapp" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Discord community</a>. For Ledger-specific issues, consider consulting the <a href="https://support.ledger.com" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Ledger Support website</a>.
        </p>
      </div>
    </div>
  </div>
</div> 