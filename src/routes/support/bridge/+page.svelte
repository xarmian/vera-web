<script>
</script>

<svelte:head>
  <title>Using the Voi Wallet Bridge (Voi &lt;-&gt; Algorand) - Support</title>
  <meta name="description" content="Learn how to use the Voi Wallet bridge to transfer assets between the Voi and Algorand networks." />
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
        How to Use the Voi Wallet Bridge (Voi &lt;-&gt; Algorand)
      </h1>
      
      <div class="mt-8 prose prose-lg text-gray-500 dark:text-gray-400 prose-headings:dark:text-white mx-auto">
        <p>
          The Voi Wallet Bridge allows you to easily transfer assets between the Voi network and the Algorand network using the Aramid bridging service. You can bridge native <strong class="dark:text-white">VOI</strong> from the Voi network to get <strong class="dark:text-white">aVOI</strong> (Algorand Standard Asset) on the Algorand network, and vice-versa.
        </p>
        
        <h2>Accessing the Bridge</h2>
        
        <ol>
          <li>
            <p>Open the Voi Wallet app.</p>
          </li>
          <li>
            <p>Tap the "<strong class="dark:text-white">Bridge</strong>" icon in the bottom navigation bar.</p>
          </li>
        </ol>
        
        <h2>Understanding the Bridge Modes</h2>
        
        <p>You'll see two tabs at the top:</p>
        
        <ul>
          <li>
            <p><strong class="dark:text-white">Voi to Algo:</strong> Use this mode to send <strong class="dark:text-white">VOI</strong> from your Voi account in Voi Wallet and receive <strong class="dark:text-white">aVOI</strong> in an Algorand account.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Algo to Voi:</strong> Use this mode to send <strong class="dark:text-white">aVOI</strong> from an Algorand account (using Pera Wallet or similar) and receive native <strong class="dark:text-white">VOI</strong> in your Voi account in Voi Wallet.</p>
          </li>
        </ul>
        
        <hr class="my-8 border-gray-200 dark:border-gray-700" />
        
        <h2>Bridging Voi to Algorand (Getting aVOI)</h2>
        
        <p>
          Use this when you have VOI in your Voi Wallet and want to convert it to aVOI on the Algorand network.
        </p>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">Select Mode:</strong> Ensure the "<strong class="dark:text-white">Voi to Algo</strong>" tab is selected.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Select Source Voi Account:</strong></p>
            <ul>
              <li>Tap the "<strong class="dark:text-white">Select Account</strong>" button under the "From Voi Network" section.</li>
              <li>Choose the Voi account within your Voi Wallet that holds the VOI you want to send.</li>
              <li>Your available VOI balance for the selected account will be displayed.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Enter Destination Algorand Address:</strong></p>
            <ul>
              <li>Under the "To Algorand Network" section, paste or type the <strong class="dark:text-white">Algorand</strong> address where you want to receive the aVOI.</li>
              <li>You can also tap "<strong class="dark:text-white">Select from Local Accounts</strong>" to conveniently populate the field with one of your Voi Wallet addresses (which also function as Algorand addresses), but the aVOI will be sent to that address on the <em class="italic">Algorand network</em>.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Check aVOI Opt-In Status:</strong></p>
            <ul>
              <li>Once you enter a valid Algorand address, the wallet will check if that account is "Opted-In" to the aVOI asset (Asset ID <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">2320775407</code>) on the Algorand network.</li>
              <li><strong class="dark:text-white">Status:</strong>
                <ul class="list-disc list-inside">
                    <li><code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">aVOI Opted-In</code>: You're ready to proceed.</li>
                    <li><code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">aVOI Not Opted-In</code>: The destination account cannot receive aVOI yet.</li>
                    <li><code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">Enter valid Algo address</code>: The address entered is not a valid Algorand address format.</li>
                    <li><code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">Checking opt-in...</code> or <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">Error checking opt-in</code>: Wait for the check to complete or try again.</li>
                </ul>
              </li>
              <li><strong class="dark:text-white">How to Opt-In (if needed):</strong> If the status is <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">aVOI Not Opted-In</code>, tap the "<strong class="dark:text-white">Help?</strong>" button. This will generate a Pera Wallet deep link. Open this link in Pera Wallet (or a compatible Algorand wallet) and sign the 0-amount transaction using the <em class="italic">destination Algorand account</em>. This adds the aVOI asset to the account, allowing it to receive aVOI. Return to Voi Wallet after confirming the opt-in transaction in Pera. The status should update automatically after a short delay (you might need to re-enter the address to trigger a re-check).</li>
            </ul>
            <div class="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 dark:border-primary-700 p-4 my-3">
              <p class="text-sm text-primary-700 dark:text-primary-300">
                <strong class="dark:text-primary-300">Note:</strong> Algorand accounts <strong class="dark:text-primary-300">must</strong> opt-in to the aVOI asset (ID <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">2320775407</code>) before they can receive it.
              </p>
            </div>
          </li>
          <li>
            <p><strong class="dark:text-white">Enter Amount:</strong></p>
            <ul>
              <li>In the "Amount" section, enter the amount of <strong class="dark:text-white">VOI</strong> you wish to bridge. The suffix will show "VOI".</li>
              <li>Ensure you have enough VOI in your selected source account to cover this amount.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Review Fees and Net Amount:</strong></p>
            <ul>
              <li>The estimated <strong class="dark:text-white">Bridge Fee</strong> (currently 0.1%, deducted from your VOI amount) will be displayed.</li>
              <li>The <strong class="dark:text-white">Net Amount</strong> of <strong class="dark:text-white">aVOI</strong> you are expected to receive on the Algorand network will be calculated and shown.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Initiate Bridge:</strong></p>
            <ul>
              <li>Tap the "<strong class="dark:text-white">Bridge Voi to aVOI</strong>" button (the button text might adapt).</li>
              <li>Review the transaction details.</li>
              <li>You will be prompted to sign the transaction using your selected Voi account's credentials (password, Ledger, etc.) directly within Voi Wallet.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Confirmation:</strong> Once signed and sent, the transaction is submitted to the Voi network. Aramid monitors this transaction and will send the net aVOI amount to your specified destination Algorand address, usually in under 3 minutes. After a few minutes, check the destination Algorand account for the aVOI.</p>
          </li>
        </ol>
        
        <hr class="my-8 border-gray-200 dark:border-gray-700" />
        
        <h2>Bridging Algorand (aVOI) to Voi</h2>
        
        <p>
          Use this when you have aVOI in an Algorand account (likely managed via Pera Wallet or similar) and want to convert it to native VOI in your Voi Wallet.
        </p>
        
        <ol>
          <li>
            <p><strong class="dark:text-white">Select Mode:</strong> Select the "<strong class="dark:text-white">Algo to Voi</strong>" tab.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Enter Source Algorand Address (Optional but Recommended):</strong></p>
            <ul>
              <li>Under the "From Algorand Network" section, you can paste the <strong class="dark:text-white">Algorand</strong> address that holds the <strong class="dark:text-white">aVOI</strong> you intend to send.</li>
              <li><strong class="dark:text-white">Important:</strong> Voi Wallet <em class="italic">does not</em> control this account or sign transactions for it. Entering the address here is primarily used to check its <strong class="dark:text-white">aVOI balance</strong>, which will be displayed below the input field.</li>
              <li>You can also tap "<strong class="dark:text-white">Select from Local Accounts</strong>" to conveniently populate the field with one of your Voi Wallet addresses if you happen to hold aVOI in the corresponding Algorand account on the Algorand network.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Select Destination Voi Account:</strong></p>
            <ul>
              <li>Under the "To Voi Network" section, tap the "<strong class="dark:text-white">Select from Local Accounts</strong>" button.</li>
              <li>Choose the Voi account within your Voi Wallet where you want to receive the native <strong class="dark:text-white">VOI</strong>.</li>
              <li>You can also manually enter a Voi address in the text field, but selecting ensures it's one of your managed accounts. The selected account address will appear below the button.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Enter Amount:</strong></p>
            <ul>
              <li>In the "Amount" section, enter the amount of <strong class="dark:text-white">aVOI</strong> you wish to bridge. The suffix will show "aVOI".</li>
              <li>Ensure the source Algorand account (which you'll use in Pera Wallet later) has enough aVOI balance.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Review Fees and Net Amount:</strong></p>
            <ul>
              <li>The estimated <strong class="dark:text-white">Bridge Fee</strong> (currently 0.1%, deducted from your aVOI amount) will be displayed.</li>
              <li>The <strong class="dark:text-white">Net Amount</strong> of native <strong class="dark:text-white">VOI</strong> you are expected to receive in your selected Voi Wallet Voi account will be calculated and shown.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Initiate Bridge & Prepare Pera Transaction:</strong></p>
            <ul>
              <li>Tap the "<strong class="dark:text-white">Bridge aVOI to Voi</strong>" button (the button text might adapt).</li>
              <li>A confirmation screen will appear showing the details and three options: "Sent Tx to Pera Wallet", "Send Tx to Defly Wallet", or "View QR Code".</li>
              <ul>
                <li>Tap "Sent Tx to Pera Wallet" to open the transaction in Pera Wallet.</li>
                <li>Tap "Send Tx to Defly Wallet" to open the transaction in Defly Wallet.</li>
                <li>Tap "View QR Code" to view the transaction as a QR code, and scan it with your Wallet of choice.</li>
              </ul>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Complete in Wallet of Choice:</strong></p>
            <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 dark:border-amber-700 p-4 my-3">
              <div class="flex">
                 <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-600 dark:text-amber-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                 </div>
                 <div class="ml-3">
                    <p class="text-sm text-amber-700 dark:text-amber-300">
                      <strong class="dark:text-amber-300">Important:</strong> This step requires you to use an external Algorand wallet like Pera Wallet.
                    </p>
                 </div>
              </div>
            </div>
            <ul>
              <li>Tap the button/link provided by Voi Wallet to open the transaction in <strong class="dark:text-white">Pera Wallet</strong> (or another compatible Algorand wallet).</li>
              <li><strong class="dark:text-white">Crucially:</strong> In your Algorand wallet, make sure you select the correct <strong class="dark:text-white">source Algorand account</strong> (the one holding the aVOI you entered in step 2) to sign and send the transaction.</li>
              <li>Review the transaction details in your Algorand wallet – it will be an Asset Transfer of the specified <strong class="dark:text-white">gross aVOI amount</strong> to the <strong class="dark:text-white">Aramid Bridge address</strong> (<code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">ARAMIDFJY...BTXQQ</code>), with a special note containing your destination Voi address.</li>
              <li>Confirm and send the transaction from your Algorand wallet.</li>
            </ul>
          </li>
          <li>
            <p><strong class="dark:text-white">Confirmation:</strong> The transaction is submitted to the Algorand network via your Algorand wallet. Aramid monitors this transaction and will send the net native VOI amount to your specified destination Voi address, usually within 3 minutes. You can check your destination Voi account balance in Voi Wallet.</p>
          </li>
        </ol>
        
        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <h2>Important Notes</h2>
        
        <ul>
          <li>
            <p><strong class="dark:text-white">Fees:</strong> A bridge fee (currently 0.1%) is deducted from the amount you send. Standard network transaction fees on Voi or Algorand also apply. These fees are charged by Aramid and the corresponding networks. Voi Wallet does not charge any fees for the bridge service.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Aramid Bridge:</strong> The bridge relies on the Aramid service (<code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">ARAMIDFJY...BTXQQ</code>) on both networks. Transactions are sent <em class="italic">to</em> this address, and Aramid processes them to send funds out on the destination network.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Transaction Time:</strong> Bridging is not instant. It involves transactions on one network, processing by Aramid, and then transactions on the destination network. This can take several minutes.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Addresses:</strong> Double-check all addresses before confirming transactions. Sending to the wrong address may result in lost funds.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">aVOI Opt-In:</strong> Remember that Algorand accounts <em class="italic">must</em> opt-in to the aVOI asset (<code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">2320775407</code>) before they can receive it.</p>
          </li>
          <li>
            <p><strong class="dark:text-white">Algo-&gt;Voi Requires External Wallet:</strong> The Algo-&gt;Voi bridge direction requires you to use Pera Wallet (or similar) to sign the actual aVOI transfer because Voi Wallet primarily manages Voi accounts.</p>
          </li>
        </ul>

        <h2>Need More Help?</h2>
        <p>
          If you have additional questions about using the Voi Wallet Bridge, please visit our <a href="/support" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Support Center</a> or join our <a href="https://discord.gg/vnFbrJrHeW" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Discord community</a>.
        </p>
      </div>
    </div>
  </div>
</div>
