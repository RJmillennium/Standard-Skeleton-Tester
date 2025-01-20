<script>
	import { onMount } from 'svelte';
	
	let elemCarousel;
	import image1 from '$lib/images/prevTecho/image-1.webp';
	import image2 from '$lib/images/prevTecho/image-2.webp';
	import image3 from '$lib/images/prevTecho/image-3.webp';
	import image4 from '$lib/images/prevTecho/image-4.webp';
	import image5 from '$lib/images/prevTecho/image-5.webp';
	import image6 from '$lib/images/prevTecho/image-6.webp';
	import image7 from '$lib/images/prevTecho/image-7.webp';
	const eventsList = [image1, image2, image3, image4, image5, image6, image7];
	import Glitchcontrol from './Glitchers/glitchcontrol.svelte';
	import Fontglitch from './Glitchers/fontglitch.svelte';
	import TechopediaText from '$lib/images/TECHOPEDIAtext.webp';
	import Themereveal from '$lib/images/MiniBanner.webp';
	const events = [
		{	
			name: "Squabble",
			imgdata: image1,
			description: "Squabble is a debate competition where participants are given a topic and they have to debate on it. The participants are judged on the basis of their content, presentation, and rebuttal. The event is judged by a panel of judges and the best debater is awarded a prize.",
			descriptionShort: "National Level Debate Competition",
			link:'https://squabble13.netlify.app/',
			animIcon: './AnimationBulb.svelte',
			
		},
		{
			name: "Inquisitive",
			imgdata: image2,
			description: "Hackathon is a coding competition where participants are given a problem statement and they have to come up with a solution within a limited time. The participants are judged on the basis of their code quality, innovation, and presentation. The best team is awarded a prize.",
			descriptionShort: "24-hour Coding Competition",
			link:'https://squabble13.netlify.app/',
			animIcon: './AnimationBulb.svelte',
		},
		{
			name: "Eureka",
			imgdata: image3,
			description: "A national level ideation competition where participants are given a problem statement and they have to come up with a solution. The participants are judged on the basis of their idea, presentation, and feasibility. The best idea is awarded a prize.",
			descriptionShort: "National Level Ideation Competition",
			link:'https://eureka13.netlify.app/',
			animIcon: './AnimationBulb.svelte'
		},
		{
			name: "Gear-Strike",
			imgdata: image4,
			description: "A fun and competitive gaming event where participants work in a team to defeat the other team;",
			descriptionShort: "An IRL TDM shootfest",
			link:'https://gearstrike13.netlify.app/',
			animIcon: './AnimationBulb.svelte',
		}
	];
	function carouselLeft() {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight() {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	onMount(() => {
		const interval = setInterval(carouselRight, 5000);
		return () => clearInterval(interval);
	});
	let currentVariant = 'bg-initial';
	import Headerimage from '$lib/images/techopediabanner.webp';
</script>
	<!-- Carousel -->
	<div class="card {currentVariant} p-3 grid gap-1 md:grid-cols-1 items-center self-center !w-[100%]">
	<header class="text-center m-5">
		<a href="/events" class="a">
			<u>
				<h1 class="h1">Events</h1>
			</u>
		</a>
	</header>
	<hr class="opacity-100">
		<!-- carousel -->
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
			<i class="fa-solid fa-arrow-left" />
			</button>
				<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto hide-scrollbar gap-4">
						{#each eventsList as eventId}
									<img
										class="snap-center rounded-container-token border"
										src="{eventId}"
										alt="Unsplash"
										loading="lazy"
									/>
					{/each}
				</div>
				<h4 class="h4 text-center">Check out our events for this year</h4>
			<!-- Button: Right -->
			<!-- <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
					<i class="fa-solid fa-arrow-right" />
				</button> -->
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