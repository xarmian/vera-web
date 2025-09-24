<script>
  // Any component-specific logic would go here
</script>

<svelte:head>
  <title>Watch Accounts - Voi Wallet Support</title>
  <meta name="description" content="Learn how to set up and use watch accounts to monitor Voi accounts without spending permissions in Voi Wallet." />
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
        Using Watch Accounts in Voi Wallet
      </h1>
      
      <div class="mt-8 prose prose-lg text-gray-500 dark:text-gray-400 prose-headings:dark:text-white mx-auto">
        <h2>What are Watch Accounts?</h2>
        
        <p>
          Watch accounts allow you to monitor the balance and activity of any Voi account without having the ability to sign transactions. This feature is useful for tracking accounts you don't control or for monitoring addresses without importing the private keys.
        </p>
        
        <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-6">
          <p class="text-sm text-primary-700 dark:text-primary-300">
            <strong class="dark:text-primary-300">Key Benefit:</strong> Watch accounts provide a convenient way to keep an eye on multiple accounts without having to manage multiple private keys or repeatedly check block explorers.
          </p>
        </div>
        
        <h2>Common Use Cases for Watch Accounts</h2>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 my-6">
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Hardware wallet monitoring:</strong> Track your hardware wallet accounts without needing to connect your hardware device each time.
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Family account monitoring:</strong> Keep track of accounts you've set up for family members without access to their private keys.
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Organization treasury monitoring:</strong> Track treasury or team fund accounts without control authorization.
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Tracking project wallets:</strong> Monitor official wallets of projects you're interested in.
              </span>
            </li>
          </ul>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 dark:border-amber-700 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-600 dark:text-amber-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-amber-700 dark:text-amber-300">
                <strong class="dark:text-amber-300">Note:</strong> Watch accounts cannot be used to sign transactions, send assets, or make any changes to the blockchain. They are for viewing purposes only.
              </p>
            </div>
          </div>
        </div>
        
        <h2>How to Add a Watch Account</h2>
        
        <p>
          Follow these steps to add a watch account to your Voi Wallet:
        </p>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">Open Voi Wallet</strong> and make sure you're logged in</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Navigate to the main accounts screen</strong> by clicking on the accounts icon in the navigation menu</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Click on the "Add Account" button</strong> (usually a "+" icon near your existing accounts)</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select "Watch Account"</strong> from the account options</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Enter the Voi address</strong> you want to monitor</p>
            <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded my-3">
              <code class="text-sm dark:text-gray-300">Example: VOI1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ</code>
            </div>
          </li>
          <li>
            <p><strong class="dark:text-white">Choose a name for the watch account</strong> (optional but recommended)</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Click "Add Watch Account"</strong> to finish</p>
          </li>
        </ol>
        
        <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-6">
          <p class="text-sm text-primary-700 dark:text-primary-300">
            <strong class="dark:text-primary-300">Tip:</strong> You can add multiple watch accounts to keep track of various addresses. For better organization, use descriptive names that help you remember what each address is for.
          </p>
        </div>
        
        <h2>What You Can Do With Watch Accounts</h2>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 my-6">
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">View account balance</strong> and asset holdings
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Monitor transaction history</strong> and activity
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Track NFTs and other assets</strong> in the account
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Copy the account address</strong> to share with others
              </span>
            </li>
          </ul>
        </div>
        
        <h2>What You Cannot Do With Watch Accounts</h2>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 my-6">
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Send tokens or assets</strong> from the watch account
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Sign transactions</strong> of any kind
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Participate in governance</strong> or voting
              </span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500 mr-2 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="dark:text-gray-300">
                <strong class="dark:text-white">Access or recover the private key</strong> of the account
              </span>
            </li>
          </ul>
        </div>
        
        <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-700 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400 dark:text-red-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700 dark:text-red-300">
                <strong class="dark:text-red-300">Important:</strong> Adding an account as a watch account does not give you any control over the funds in that account. To control an account, you need to have the private key, mnemonic phrase, or hardware device that owns it.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Managing Your Watch Accounts</h2>
        
        <h3>Renaming a Watch Account</h3>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">Open the watch account</strong> you want to rename</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Click on the settings icon</strong> (usually a gear or three dots)</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select "Rename Account"</strong> from the options</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Enter the new name</strong> for the account</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Save the changes</strong></p>
          </li>
        </ol>
        
        <h3>Removing a Watch Account</h3>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">Open the watch account</strong> you want to remove</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Click on the settings icon</strong> (usually a gear or three dots)</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select "Remove Account"</strong> from the options</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Confirm the removal</strong> when prompted</p>
          </li>
        </ol>
        
        <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-6">
          <p class="text-sm text-primary-700 dark:text-primary-300">
            <strong class="dark:text-primary-300">Note:</strong> Removing a watch account from your wallet only removes it from your view. It does not affect the actual account on the blockchain in any way.
          </p>
        </div>
        
        <h2>Common Questions About Watch Accounts</h2>
        
        <div class="space-y-6 mt-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I convert a watch account to a fully controlled account?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              You cannot convert a watch account directly to a controlled account. However, if you have the private key or recovery phrase for the account, you can remove the watch account and then import it as a regular account using the appropriate import method.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Is there a limit to how many watch accounts I can add?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              While there's no strict limit, adding a very large number of watch accounts may impact the performance of the wallet. We recommend keeping the number reasonable for optimal experience.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I receive notifications for watch account activity?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Voi Wallet currently allows you to monitor watch accounts manually. For automatic notifications about account activity, you may want to use a blockchain explorer or notification service that supports the Voi Network.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Is it safe to add someone else's account as a watch account?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Yes, it's completely safe. Adding a watch account only lets you view public information that's already available on the blockchain. You cannot access any private keys or control the account in any way.
            </p>
          </div>
        </div>
        
        <h2>Need More Help?</h2>
        <p>
          If you have additional questions about watch accounts or need further assistance, please visit our <a href="/support" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Support Center</a> or join our <a href="https://discord.gg/voiapp" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Discord community</a>.
        </p>
      </div>
    </div>
  </div>
</div> 