<script>
	import Glitchcontrol from './Glitchers/glitchcontrol.svelte';
	import Fontglitch from './Glitchers/fontglitch.svelte';
	import TechopediaText from '$lib/images/TECHOPEDIAtext.webp'
	import Themereveal from '$lib/images/MiniBanner.webp'
</script>
	<!-- Theme -->
	 <div class="card card-hover hover:shadow-primary-500/50 flex items-center justify-center flex-col shadow-xl shadow-cyan-500/50 pb relative p-2">
		<header class="rounded-container-token ">
			<!-- <h1 class="h1 my-5 gradient-heading text-6xl">Multiverse Nexus</h1> -->
			<h1 class="h1 md:text-7xl font-mono absolute md:left-[41%] left-[34%] origin-center">Theme</h1>
		</header>
		<img
										class="snap-center rounded-container-token border md:w-1/2 md:h-1/2 border-secondary-500 "
										src="{Themereveal}"
										alt="Unsplash"
										loading="lazy"
										
									/>
	 </div>
	<style>
		.gradient-heading {
	@apply bg-clip-text text-transparent box-decoration-clone;
	/* Direction */
	@apply bg-gradient-to-br;
	/* Color Stops */
	@apply from-primary-900 to-secondary-300;
}
</style>






<!-- <header class="text-center m-5">
	<a href="/events" class="a">
		<u>
			<h1 class="h1">Events</h1>
		</u>
	</a>
</header>
<hr class="opacity-100">	
<h4 class="h4 text-center">Check out our events for this year</h4> -->