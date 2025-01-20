// import { writable, Writable } from 'svelte/store';
// import { localStorageStore } from '@skeletonlabs/skeleton';
// import { browser } from '$app/environment';

// // Svelte Writable Stores ---

// // Set within the root layout, set TRUE if served in Vercel production mode
// export const storeVercelProductionMode= writable(false);
// // Session based theme store. Grabs the current theme from the current body.
// export const storeTheme = writable(browser ? document.body.getAttribute('data-theme') ?? '' : 'skeleton');

// // Local Storage Stores ---

// // Persists the tab selection for the user's preferred onboarding method
// export const storeOnboardMethod = localStorageStore('storeOnboardMethod', 'cli');
