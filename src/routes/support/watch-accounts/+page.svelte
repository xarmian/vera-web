<script>
  // Any component-specific logic would go here
</script>

<svelte:head>
  <title>Watch Accounts - Vera Wallet Support</title>
  <meta name="description" content="Learn how to set up and use watch accounts to monitor Voi accounts without spending permissions in Vera Wallet." />
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
        Adding a Watch Account
      </h1>
      
      <div class="mt-8 prose prose-lg text-gray-500 mx-auto">
        <h2>What is a Watch Account?</h2>
        
        <p>
          As the name suggests, using a Watch Account allows you to "watch" what is happening in an account—but you cannot make any transactions with them. They are read-only accounts that allow you to monitor activity without the ability to spend assets.
        </p>
        
        <h2>What is the purpose of a Watch Account?</h2>
        
        <p>
          Watch Accounts are useful in several scenarios:
        </p>
        
        <ul>
          <li>Monitoring accounts that you prefer to keep offline (also known as Cold Storage)</li>
          <li>Keeping track of Multi-signature accounts that you'd like to monitor</li>
        </ul>
        
        <p>
          Since accounts on the Voi blockchain are public and anonymous (like any blockchain), anyone can watch any account, regardless of whether you own it or not. All you need is an account address.
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
                <strong>Important Warning:</strong> Watching an account does not mean you control the account. NEVER send assets to a Watch Account's address unless you own the corresponding recovery passphrase. This is a read-only view of an account. If the Watch account is not yours, all assets you send to this account will be lost forever.
              </p>
            </div>
          </div>
        </div>
        
        <h2>How to Add a Watch Account</h2>
        
        <p>
          Follow these steps to add a Watch Account to your Vera Wallet:
        </p>
        
        <ol>
          <li>
            <p><strong>From the Home Screen</strong>, tap the <strong>+</strong> (plus) icon at the top of your accounts list</p>
          </li>
          <li>
            <p><strong>Select "Add Account"</strong> from the menu options</p>
          </li>
          <li>
            <p><strong>Tap "Add Watch Account"</strong> from the account options</p>
          </li>
          <li>
            <p><strong>Review the account type information</strong> carefully to understand what a Watch Account is</p>
            <div class="bg-primary-50 border-l-4 border-primary-400 p-4 my-3">
              <p class="text-sm text-primary-700">
                <strong>Tip:</strong> Make sure you understand that this is a read-only account before proceeding.
              </p>
            </div>
          </li>
          <li>
            <p><strong>Enter a Voi account address</strong> by pasting it into the field or scanning a QR code</p>
          </li>
          <li>
            <p><strong>Tap "Create a Watch Account"</strong> to add the account</p>
          </li>
          <li>
            <p><strong>Name your Watch Account</strong> - choose a descriptive name that helps you identify the purpose of this Watch Account</p>
          </li>
        </ol>
        
        <p>
          That's it! Your Watch Account has been created and will now appear in your accounts list. You can view its balance, transaction history, and asset holdings, but you cannot perform any actions that require signing transactions.
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
                <strong>Remember:</strong> Since this is a read-only account, many options that are available for your standard accounts will not be available for Watch Accounts. You cannot send transactions, add assets, rekey the account, or perform other actions that require signing permissions.
              </p>
            </div>
          </div>
        </div>
        
        <h2>Common Questions</h2>
        
        <div class="space-y-6 mt-8">
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Can I convert a Watch Account to a standard account?</h3>
            <p class="mt-2 text-gray-600">
              If you would like to change a watch account to a standard account, you need to remove the Watch account and import it using its recovery passphrase.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Why would I use a Watch Account instead of a standard account?</h3>
            <p class="mt-2 text-gray-600">
              Watch Accounts are ideal for monitoring without exposing your private keys. For high-value accounts, you might keep the private keys offline for security while using a Watch Account for day-to-day monitoring. They're also useful for tracking accounts you don't own but want to monitor.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Is there a limit to how many Watch Accounts I can add?</h3>
            <p class="mt-2 text-gray-600">
              There is no specific limit to the number of Watch Accounts you can add to your Vera Wallet. However, having too many accounts may affect the app's performance.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">How do I delete a Watch Account?</h3>
            <p class="mt-2 text-gray-600">
              You can remove a Watch Account by going to the account details, opening the settings menu, and selecting the remove or delete option. This only removes the account from your wallet interface and doesn't affect the actual blockchain account.
            </p>
          </div>
        </div>
        
        <h2>Need More Help?</h2>
        <p>
          If you have additional questions about Watch Accounts or need further assistance, please visit our <a href="/support" class="text-primary-600 hover:text-primary-700">Support Center</a> or join our <a href="https://discord.gg/voiapp" class="text-primary-600 hover:text-primary-700">Discord community</a>.
        </p>
      </div>
    </div>
  </div>
</div> 