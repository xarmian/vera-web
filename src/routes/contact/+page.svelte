<script>
  import { enhance } from '$app/forms';
  import { invalidate } from '$app/navigation';
  
  let success = false;
  let error = false;
  let errorMessage = '';
  
  const handleSubmit = () => {
    return async ({ form, result }) => {
      if (result.type === 'success') {
        form.reset();
        success = true;
        error = false;
        setTimeout(() => {
          success = false;
        }, 5000);
      } else {
        error = true;
        errorMessage = result.data?.message || 'Something went wrong. Please try again.';
      }
    };
  };
</script>

<svelte:head>
  <title>Contact Us - Voi Wallet</title>
  <meta name="description" content="Contact the Voi Wallet team for support, feedback, or questions about our non-custodial cryptocurrency wallet." />
</svelte:head>

<div class="bg-white py-16 sm:py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
        Contact Us
      </h1>
      
      <div class="prose prose-lg text-gray-500 mx-auto">
        <p>
          Have questions, feedback, or need support with Voi Wallet? We're here to help. Choose the way you'd like to reach us.
        </p>
        
        <div class="grid sm:grid-cols-2 gap-6 mt-10 mb-12">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-gray-900">Community Support</h3>
            <p class="mt-2">Join our active community for the fastest support and updates.</p>
            <div class="mt-4 space-y-2">
              <a href="https://discord.gg/voiapp" class="flex items-center text-primary-600 hover:text-primary-700">
                <span class="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 127.14 96.36">
                    <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                  </svg>
                </span>
                Discord
              </a>
              <a href="https://twitter.com/voiapp" class="flex items-center text-primary-600 hover:text-primary-700">
                <span class="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </span>
                Twitter
              </a>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-gray-900">Email Support</h3>
            <p class="mt-2">Send us an email and we'll get back to you as soon as possible.</p>
            <a href="mailto:support@getvoi.app" class="mt-4 inline-block text-primary-600 hover:text-primary-700">
              support@getvoi.app
            </a>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Send us a message</h2>
        
        <form method="POST" action="?/contact" use:enhance={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" id="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" name="subject" id="subject" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" id="message" rows="5" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"></textarea>
          </div>
          
          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Send Message
            </button>
          </div>
          
          {#if success}
            <div class="bg-green-50 border-l-4 border-green-400 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-green-700">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          {/if}
          
          {#if error}
            <div class="bg-red-50 border-l-4 border-red-400 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700">
                    {errorMessage}
                  </p>
                </div>
              </div>
            </div>
          {/if}
        </form>
        
        <div class="mt-12 border-t border-gray-200 pt-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-gray-900">Is Voi Wallet custodial?</h3>
              <p class="mt-2">No, Voi Wallet is a non-custodial wallet. This means we never have access to your funds or private keys. You maintain complete control over your assets at all times.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-medium text-gray-900">What blockchain networks does Voi Wallet support?</h3>
              <p class="mt-2">Voi Wallet currently supports the Voi Network. We plan to add support for additional networks in the future.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-medium text-gray-900">How do I recover my wallet if I lose my device?</h3>
              <p class="mt-2">Your wallet can be recovered using your recovery phrase (also known as a seed phrase). It's crucial that you back up this phrase securely when you first create your wallet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 