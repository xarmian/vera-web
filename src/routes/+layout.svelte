<script lang="ts">
	import '../app.css';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';

	let isMenuOpen = $state(false);
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let { children } = $props();
</script>

<header class="bg-white dark:bg-gray-800 shadow-sm">
	<div class="container mx-auto">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="flex items-center">
					<img src="/android-chrome-192x192.png" alt="Voi Wallet" class="h-8 w-auto" />
					<span class="ml-2 text-xl font-bold text-primary-600 dark:text-primary-400">Voi Wallet</span>
				</a>
			</div>
			
			<div class="hidden md:flex md:items-center">
				<div class="flex space-x-4 mr-2">
					<a href="/" class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Home</a>
					<a href="/about" class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">About</a>
					<a href="/support" class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Support</a>
					<a href="/#download" class="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Download</a>
				</div>
				<DarkModeToggle />
			</div>
			
			<div class="md:hidden flex items-center">
				<DarkModeToggle />
				<button 
					onclick={toggleMenu} 
					type="button" 
					class="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-300"
					aria-expanded={isMenuOpen}
				>
					<span class="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
					
					{#if !isMenuOpen}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					{:else}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>
	
	{#if isMenuOpen}
		<div class="md:hidden">
			<div class="space-y-1 px-2 py-3">
				<a href="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400">Home</a>
				<a href="/about" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400">About</a>
				<a href="/support" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400">Support</a>
				<a href="/#download" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400">Download</a>
			</div>
		</div>
	{/if}
</header>

<main>
	{@render children()}
</main>

<footer class="bg-gray-50 dark:bg-gray-900">
	<div class="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8 xl:col-span-1">
				<img src="/android-chrome-192x192.png" alt="Voi Wallet" class="h-10" />
				<p class="text-base text-gray-500 dark:text-gray-400">
					Voi Wallet - A secure mobile wallet built from scratch for the Voi Network.
				</p>
				<div class="flex space-x-6">
					<a href="https://github.com/xarmian/pera-android" class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
						<span class="sr-only">GitHub</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
						</svg>
					</a>
					<a href="https://discord.gg/vnFbrJrHeW" class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
						<span class="sr-only">Discord</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
						</svg>
					</a>
				</div>
			</div>
			<div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-base font-medium text-gray-900 dark:text-white">Support</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a href="/support/passphrase" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Passphrase</a>
							</li>
							<li>
								<a href="/support/recover-account" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Recover Account</a>
							</li>
							<li>
								<a href="/support/watch-accounts" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Watch Accounts</a>
							</li>
							<li>
								<a href="/support/ledger" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Ledger</a>
							</li>
						</ul>
					</div>
					<div class="mt-12 md:mt-0">
						<h3 class="text-base font-medium text-gray-900 dark:text-white">More Support</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a href="/support/rekey" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Rekey</a>
							</li>
							<li>
								<a href="/support/create-new-account" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Create Account</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-base font-medium text-gray-900 dark:text-white">Legal</h3>
						<ul role="list" class="mt-4 space-y-4">
							<li>
								<a href="/privacy-policy" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
							</li>
							<li>
								<a href="/terms-of-service" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
							</li>
							<li>
								<a href="/about" class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About Us</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
			<p class="text-base text-gray-400 xl:text-center">
				&copy; {new Date().getFullYear()} Voi Wallet. Built from scratch with React Native for the Voi Network.
			</p>
		</div>
	</div>
</footer>
