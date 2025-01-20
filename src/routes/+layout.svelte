<script>
	import { config } from '@fortawesome/fontawesome-svg-core'
	import { enhance } from '$app/forms';
	import '@fortawesome/fontawesome-free/css/all.css'; 
	import '@fortawesome/fontawesome-free/js/all.js';
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	initializeStores();
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import MovingLogo from '$lib/components/MovingLogo.svelte';
	// import { storeTheme, storeVercelProductionMode } from '$lib/stores/stores';
	
	// storePreview.subscribe(setBodyThemeAttribute);
	// storeTheme.subscribe(setBodyThemeAttribute);
	// function setBodyThemeAttribute() {
	// 	if (!browser) return;
	// 	document.body.setAttribute('data-theme', $storeTheme);
	// }
	
	// // Highlight JS
	// import hljs from 'highlight.js/lib/core';
	// import 'highlight.js/styles/github-dark.css';
	// import { storeHighlightJs } from '@skeletonlabs/skeleton';
	// import xml from 'highlight.js/lib/languages/xml'; // for HTML
	// import css from 'highlight.js/lib/languages/css';
	// import javascript from 'highlight.js/lib/languages/javascript';
	// import typescript from 'highlight.js/lib/languages/typescript';

	// hljs.registerLanguage('xml', xml); // for HTML
	// hljs.registerLanguage('css', css);
	// hljs.registerLanguage('javascript', javascript);
	// hljs.registerLanguage('typescript', typescript);
	// storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import Footerfinal from '$lib/components/Footerfinal.svelte';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>
<svelte:head>
	<title>Techopedia 13</title>
</svelte:head>

<!-- <form action="/?/setTheme" method="POST" use:enhance={setTheme}>
	<ul>
		{#each themes as { icon, name, type }}
			<li>
				<button
					class="option w-full h-full"
					type="submit"
					name="theme"
					value={type}
					class:bg-primary-active-token={$storeTheme === type}
				>
					<span>{icon}</span>
					<span class="flex-auto text-left">{name}</span>
				</button>
			</li>
		{/each}
	</ul>
</form> -->
<Modal />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar regionRowMain="h-10" background='bg-surface-100-800-token'>
			<svelte:fragment slot="lead">
				<a href="/"><MovingLogo name="IEEE" logoStyle=" md:text-5xl absolute text-3xl left-[9px] top-[20px]  md:top-3 md:left-8"></MovingLogo></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/" class=""><button type="button" class="btn-sm text-sm md:text-lg variant-ghost-success md:variant-outline-tertiary md:rounded-sm">Home</button></a>
				<a href="/events"><button type="button" class="btn-sm text-sm md:text-lg variant-ghost-warning md:variant-outline-tertiary md:rounded-sm">Register</button></a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<!-- Footer -->
		<Footerfinal />
	</svelte:fragment>
</AppShell>

