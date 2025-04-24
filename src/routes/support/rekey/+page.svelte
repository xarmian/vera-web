<script>
  // Any component-specific logic would go here
</script>

<svelte:head>
  <title>How to Rekey an Account - Vera Wallet Support</title>
  <meta name="description" content="Learn how to rekey an account in Vera Wallet to enhance the security of your assets on the Voi Network." />
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
        How to Rekey an Account with Vera Wallet
      </h1>
      
      <div class="mt-8 prose prose-lg text-gray-500 mx-auto">
        <h2>Understanding Rekeying</h2>
        
        <p>
          Rekeying is a unique feature of AVM (Algorand Virtual Machine) Networks, such as Voi, which allows you to assign a new private key to an account without transferring or removing your assets. This powerful security feature lets you change the authorization for an account while maintaining its address and contents.
        </p>
        
        <div class="bg-primary-50 border-l-4 border-primary-400 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-primary-700 mb-1">
                <strong>Key Points:</strong>
              </p>
              <ul class="text-sm text-primary-700 mt-0 mb-0">
                <li>Rekeying enhances the security of your assets on the Voi Network</li>
                <li>You can use rekeying to assign a new private key to an account that you believe has been compromised</li>
                <li>To use the rekeying feature, you must have both the account you want to rekey and the new account added to your wallet</li>
                <li>After rekeying, make sure to keep both the rekeyed (from) account and the rekey (to) account in your wallet</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-amber-700">
                <strong>Note:</strong> You can also move your assets directly to a new, secure account if you don't want to rekey. Rekeying is especially recommended if you have a large number of assets or if you have locked assets (for example, in staking).
              </p>
            </div>
          </div>
        </div>
        
        <h2>How to Rekey to a Standard Account</h2>
        
        <p>
          Follow these steps to rekey your account to another standard account:
        </p>
        
        <ol>
          <li>
            <p><strong>Ensure you have the account you want to rekey to in your wallet</strong></p>
            <p>You can:</p>
            <ul>
              <li>Choose another account already in your wallet</li>
              <li>Import an existing account with its recovery passphrase</li>
              <li>Create a brand new secure account</li>
            </ul>
          </li>
          <li>
            <p><strong>Find the account you want to rekey</strong> in your accounts list and tap on it</p>
          </li>
          <li>
            <p><strong>Tap the three-dot icon "More"</strong> in the account details screen</p>
          </li>
          <li>
            <p><strong>Select "Rekey to a Standard Account"</strong> from the menu options</p>
          </li>
          <li>
            <p><strong>Select the account to rekey to</strong> (the one you identified in Step 1)</p>
          </li>
          <li>
            <p><strong>Review the summary</strong> and tap "Finalize Rekeying"</p>
          </li>
        </ol>
        
        <p>
          Your account is now rekeyed, and all transactions will be signed by the rekeyed-to account (the "authorized account").
        </p>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700">
                <strong>Important Warning:</strong> After rekeying, you must keep the "authorized account" (the one you rekeyed to) in your wallet. If you delete this account from your wallet, you will not be able to sign transactions for the rekeyed account, even if the rekeyed account is still in your wallet.
              </p>
            </div>
          </div>
        </div>
        
        <h2>How to Rekey to a Ledger Account</h2>
        
        <p>
          Follow these steps to rekey your account to a Ledger hardware wallet:
        </p>
        
        <ol>
          <li>
            <p><strong>Ensure you have the Ledger Account you want to rekey to in your wallet</strong></p>
            <p>You can import it from your Ledger using the "I already have an account" > "Pair Ledger device" option</p>
          </li>
          <li>
            <p><strong>Find the account you want to rekey</strong> in your accounts list and tap on it</p>
          </li>
          <li>
            <p><strong>Tap the three-dot icon "More"</strong> in the account details screen</p>
          </li>
          <li>
            <p><strong>Select "Rekey to Ledger Account"</strong> from the menu options</p>
          </li>
          <li>
            <p><strong>Read the information and tap "Start Process"</strong></p>
            <div class="bg-primary-50 border-l-4 border-primary-400 p-4 my-3">
              <p class="text-sm text-primary-700">
                <strong>Tip:</strong> Ensure your Ledger is turned on, the Voi Network app is open, and Bluetooth is enabled (for Nano X, Stax, or Flex).
              </p>
            </div>
          </li>
          <li>
            <p><strong>Select your Ledger device</strong> from the list of available devices</p>
          </li>
          <li>
            <p><strong>Select the account inside the Ledger</strong> you want to rekey to</p>
          </li>
          <li>
            <p><strong>Review the summary</strong> and tap "Confirm Rekeying"</p>
          </li>
          <li>
            <p><strong>Authorize the transaction on your Ledger device</strong> by following the prompts</p>
          </li>
        </ol>
        
        <p>
          Your account is now rekeyed, and all transactions will be signed by the rekeyed-to Ledger account (the "authorized account").
        </p>
        
        <div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-amber-700">
                <strong>Security Benefit:</strong> Rekeying to a Ledger device adds an extra layer of security, as your private keys remain on the hardware wallet and all transactions must be physically approved.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Undoing a Rekey</h2>
        
        <p>
          Currently, there is no direct "undo rekey" feature in Vera Wallet. However, you can effectively reverse a rekey by rekeying the account again to a new or different account.
        </p>
        
        <p>
          To return control to the original account, you would need to:
        </p>
        
        <ol>
          <li>Import the original account using its recovery passphrase (if you don't have it in your wallet)</li>
          <li>Rekey the account to the original account following the standard rekeying process</li>
        </ol>
        
        <h2>Common Questions</h2>
        
        <div class="space-y-6 mt-8">
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">What happens to my assets when I rekey?</h3>
            <p class="mt-2 text-gray-600">
              Nothing happens to your assets during the rekeying process. Your assets remain in the same account with the same address. Only the authorization method (which private key can sign transactions) changes.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Can I rekey multiple accounts to the same target account?</h3>
            <p class="mt-2 text-gray-600">
              Yes, you can rekey multiple different accounts to the same target account. This allows you to manage several accounts using a single private key, which can be particularly useful for consolidating authorization to a Ledger device.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Why would I use rekeying instead of just transferring assets?</h3>
            <p class="mt-2 text-gray-600">
              Rekeying is beneficial when you want to maintain the same public address but change the authorization method. This is particularly useful if your account is already linked to various services, has locked assets, or contains many different assets that would be cumbersome to transfer individually.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Is there a fee for rekeying?</h3>
            <p class="mt-2 text-gray-600">
              Yes, rekeying requires a transaction on the Voi Network, so the standard transaction fee applies. This fee is typically minimal.
            </p>
          </div>
        </div>
        
        <h2>Need More Help?</h2>
        <p>
          If you have additional questions about rekeying or need further assistance, please visit our <a href="/support" class="text-primary-600 hover:text-primary-700">Support Center</a> or join our <a href="https://discord.gg/voiapp" class="text-primary-600 hover:text-primary-700">Discord community</a>.
        </p>
      </div>
    </div>
  </div>
</div> 