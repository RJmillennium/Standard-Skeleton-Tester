<!-- <script>
    // import lottie from 'lottie-web';
	import BulbAnim from '$lib/icons/Bulb_custom_icon.json';
    animelement = elements = document.querySelectorAll('.icons');
		lottie.loadAnimation({
	  container: animelement, // the dom element that will contain the animation
	  renderer: 'svg',
	  loop: true,
	  autoplay: true,
	  path: BulbAnim // the path to the animation json
	});
	export let options = {
		path: '94729-not-found',
		loop: true
	};
    const imports = {
		lottieAnimation: () => import('$lib/components/animicon.svelte')
	};
	
	
</script>
{#await imports['lottieAnimation']() then module}
<svelte:component this={module.default} {options} />
{/await} -->
