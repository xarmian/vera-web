<script>
  // Any component-specific logic would go here
</script>

<svelte:head>
  <title>Air-Gapped Signing - Voi Wallet Support</title>
  <meta name="description" content="Learn how to use air-gapped signing with Voi Wallet for maximum security using a dedicated offline device." />
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
        Air-Gapped Signing
      </h1>

      <div class="mt-8 prose prose-lg text-gray-500 dark:text-gray-400 prose-headings:dark:text-white mx-auto">
        <h2>What is Air-Gapped Signing?</h2>

        <p>
          Air-gapped signing lets you use a completely offline device as your dedicated transaction signer. Your private keys live on a device that never connects to the internet, while your everyday wallet handles everything else—checking balances, building transactions, and broadcasting to the network.
        </p>

        <p>
          Communication between devices happens exclusively through QR codes. No Bluetooth, no WiFi, no network connection at all. This provides hardware wallet-level security using devices you already own.
        </p>

        <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-600 dark:text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Think of it like this:</strong> Your online device is like a bank teller who can see your balance and prepare transactions—but only you (the offline signer) have the key to the vault.
              </p>
            </div>
          </div>
        </div>

        <h2>Why Use Air-Gapped Signing?</h2>

        <ul>
          <li><strong class="dark:text-white">Maximum key isolation:</strong> Your private keys exist only on the offline device. Even if your online device is compromised, your keys remain safe.</li>
          <li><strong class="dark:text-white">Transaction verification:</strong> Every transaction is reviewed on your secure offline device before signing—not on a potentially compromised device.</li>
          <li><strong class="dark:text-white">No extra hardware needed:</strong> Turn any spare phone or tablet into a dedicated signing device.</li>
          <li><strong class="dark:text-white">Protection from phishing:</strong> Since your signer never connects to the internet, it can't be tricked into visiting malicious sites or downloading malware.</li>
        </ul>

        <h2>What You'll Need</h2>

        <p>
          To use air-gapped signing, you'll need two devices:
        </p>

        <ol>
          <li>
            <p><strong class="dark:text-white">Online device:</strong> Your everyday phone or tablet with Voi Wallet installed and internet access</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Offline signer:</strong> A second device (phone or tablet) that will stay permanently offline</p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Tip:</strong> An old phone you no longer use makes an excellent signer device. It doesn't need a SIM card or active service.
              </p>
            </div>
          </li>
        </ol>

        <h2>Setting Up Your Air-Gap Signer</h2>

        <p>
          Follow these steps to configure your offline device as an air-gap signer:
        </p>

        <ol>
          <li>
            <p><strong class="dark:text-white">Install Voi Wallet</strong> on the device you want to use as your signer</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Put the device in airplane mode</strong> and keep it there permanently</p>
            <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 dark:border-amber-700 p-4 my-3">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-600 dark:text-amber-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-amber-700 dark:text-amber-300">
                    <strong class="dark:text-amber-300">Important:</strong> For maximum security, your signer device should never connect to the internet. Consider disabling WiFi and Bluetooth in the device settings as well.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <p><strong class="dark:text-white">Open Voi Wallet</strong> and go to <strong class="dark:text-white">Settings → Air-Gapped Signing</strong></p>
          </li>
          <li>
            <p><strong class="dark:text-white">Tap "Enable Signer Mode"</strong> to configure this device as your offline signer</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Give your signer a name</strong> (e.g., "My Offline Signer") so you can identify it later</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Create or import accounts</strong> on the signer device</p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Note:</strong> These are the accounts whose keys will be protected by the air gap. You can create new accounts or import existing ones using your recovery passphrase.
              </p>
            </div>
          </li>
        </ol>

        <h2>Pairing Accounts with Your Online Wallet</h2>

        <p>
          Once your signer is set up, you need to pair its accounts with your everyday wallet so you can view balances and initiate transactions:
        </p>

        <ol>
          <li>
            <p><strong class="dark:text-white">On your signer device:</strong> Go to <strong class="dark:text-white">Settings → Air-Gapped Signing</strong> and tap "Export Accounts" to display a QR code</p>
          </li>
          <li>
            <p><strong class="dark:text-white">On your online device:</strong> Go to <strong class="dark:text-white">Settings → Air-Gapped Signing</strong> and tap "Import from Signer"</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Scan the QR code</strong> displayed on your signer with your online device's camera</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select which accounts</strong> you want to import to your online wallet</p>
          </li>
        </ol>

        <p>
          Your accounts will now appear in your online wallet as "Air-Gap Signer" accounts. You can view balances and receive funds, but any outgoing transaction will require signing on your offline device.
        </p>

        <h2>Signing Transactions</h2>

        <p>
          When you need to send funds or interact with a dApp, here's how the signing flow works:
        </p>

        <ol>
          <li>
            <p><strong class="dark:text-white">Initiate the transaction</strong> on your online device as normal (send VOI, interact with a dApp, etc.)</p>
          </li>
          <li>
            <p><strong class="dark:text-white">A QR code appears</strong> on your online device containing the unsigned transaction</p>
            <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Note:</strong> For large transactions, you may see an animated QR code. Just keep the camera pointed at it—your signer will automatically capture all the frames.
              </p>
            </div>
          </li>
          <li>
            <p><strong class="dark:text-white">Open your signer device</strong> and tap "Scan Signing Request"</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Scan the QR code</strong> from your online device</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Review the transaction details</strong> carefully on your signer. This is your chance to verify what you're actually signing.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Enter your PIN</strong> or use biometric authentication to approve</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Your signer displays a QR code</strong> containing the signed transaction</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Scan this QR code</strong> with your online device</p>
          </li>
          <li>
            <p><strong class="dark:text-white">The transaction is broadcast</strong> to the network automatically</p>
          </li>
        </ol>

        <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-700 p-4 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400 dark:text-red-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700 dark:text-red-300">
                <strong class="dark:text-red-300">Critical:</strong> Always verify transaction details on your signer device before approving. Check the recipient address, amount, and any other details. Your signer shows you exactly what you're signing—take the time to review it.
              </p>
            </div>
          </div>
        </div>

        <h2>Security Best Practices</h2>

        <div class="grid gap-4 my-8 sm:grid-cols-2">
          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
            <h3 class="flex items-center text-lg font-medium text-green-700 dark:text-green-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Do
            </h3>
            <ul class="mt-4 space-y-2 text-green-700 dark:text-green-300">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-0.5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Keep your signer permanently offline</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-0.5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Store your signer in a safe place</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-0.5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Review every transaction on the signer</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-0.5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Back up your recovery passphrase</span>
              </li>
            </ul>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-700">
            <h3 class="flex items-center text-lg font-medium text-red-700 dark:text-red-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Don't
            </h3>
            <ul class="mt-4 space-y-2 text-red-700 dark:text-red-300">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-0.5 text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Connect your signer to WiFi "just once"</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-0.5 text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Install other apps on your signer</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-0.5 text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Sign without reviewing the details</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 mt-0.5 text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Share your passphrase with anyone</span>
              </li>
            </ul>
          </div>
        </div>

        <h2>Common Questions</h2>

        <div class="space-y-6 mt-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">What devices can I use as a signer?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Any iOS or Android phone or tablet can work as a signer. Older devices work great—they just need to run Voi Wallet and have a working camera. The device doesn't need a SIM card or active phone service.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Can I use the same signer with multiple online wallets?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Yes! You can pair your signer's accounts with Voi Wallet on multiple devices. Each online wallet will be able to request signatures, and you can approve or reject each request on your signer.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">What if my signer device breaks or is lost?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              As long as you have your recovery passphrase backed up, you can set up a new signer on a different device. Import your accounts using the passphrase and re-pair with your online wallet. This is why keeping your passphrase backup secure is critical.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Do I need to keep my signer charged all the time?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              No. Since your signer doesn't need to receive notifications or stay connected, you only need to turn it on when you want to sign a transaction. Keep it charged enough to use when needed.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Why do some QR codes animate?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Complex transactions or transaction groups contain more data than fits in a single QR code. The animated QR cycles through multiple frames to transmit all the data. Just keep your camera pointed at it—the app handles the rest automatically.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Is this as secure as a hardware wallet?</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Air-gapped signing provides similar security benefits to hardware wallets: your keys are isolated from the internet and transactions must be physically approved on the secure device. The main difference is that hardware wallets have specialized secure elements, while your phone relies on its standard security. For most users, air-gapped signing offers excellent protection.
            </p>
          </div>
        </div>

        <h2>Need More Help?</h2>
        <p>
          If you have additional questions about air-gapped signing, please visit our <a href="/support" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Support Center</a> or join our <a href="https://discord.gg/vnFbrJrHeW" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Discord community</a>.
        </p>
      </div>
    </div>
  </div>
</div>
