<script>
	import { onMount } from 'svelte';
	
	let elemCarousel;

	import Glitchcontrol from './Glitchers/glitchcontrol.svelte';
	import Fontglitch from './Glitchers/fontglitch.svelte';
	import TechopediaText from '$lib/images/TECHOPEDIAtext.webp'
	import Themereveal from '$lib/images/MiniBanner.webp'
	import Headerimage from '$lib/images/techopediabanner.webp';
	
	
</script>
	<!-- Detailed -->
	<div class="card card-hover w-[70vw] h-[70vh] md:w-[80vw] md:h-[80vh] text-base md:h-4/5 shadow-xl shadow-cyan-500/50 hover:shadow-primary-500/50">
		<header class="bg-gradient-to-r from-primary-500 via-tertiary-500 to-secondary-500 text-center md:pt-5 md:px-3 rounded-t-xl">
			<!-- <img src={Headerimage} class="w-full md:h-[150px] hidden md:my-3" alt="main-img" /> -->
			<img src={TechopediaText} alt="" class="p-5 rounded-t-md " >
		</header>
		<hr class="opacity-50" />
		<div class="p-4 space-y-4 text-sm md:text-lg md:p-6">
			<article  >
				<!-- <Glitchcontrol> -->
				 <!-- mobile -->
					<p class=" md:hidden leading-[6vw]" >IEEE SIESGST engages students through impactful events, workshops, and activities, inspiring and empowering budding engineers with knowledge of the latest technological advancements and fostering innovation.</p>
					<hr class="opacity-50 my-2" />
					<p class="md:hidden leading-[6vw] ">Techopedia 13, our annual technical festival, is back! This prestigious platform allows students to showcase talents, learn new skills, and dive into technology. Join us for exciting competitions, sessions, and activities celebrating innovation and excellence.</p>
					<!-- big screen -->
					<p class="hidden  md:block md:text-[1.5vw] xl:text-[1vw]" >
						IEEE SIESGST, one of the most established student organizations at SIESGST, has consistently
						upheld a tradition of excellence, engaging students through a variety of impactful events,
						workshops, and activities. Our primary mission is to inspire and empower budding engineers
						by imparting knowledge of the latest technological advancements and fostering innovation through
						well-curated workshops and events accessible to all students.
					</p>
					<hr class="hidden md:opacity-100 md:my-5 md:block" /> 
					<p class="hidden md:block md:text-[1.5vw] xl:text-[1vw]">
						This year, we are proud to present the 13th edition of Techopedia, our flagship
						annual technical festival. Over the years, Techopedia has grown into a prestigious
						platform for undergraduate students and aspiring tech enthusiasts to showcase their
						talents, acquire new skills, and immerse themselves in the world of technology. The 13th
						edition promises to be even more exhilarating, offering a perfect blend of excitement,
						learning and intellectual engagement. Through an array of competitions, sessions and
						interactive activities, Techopedia 13 aims to continue its legacy of inspiring innovation
						and celebrating technological excellence.
					</p>
					<!-- </Glitchcontrol> -->
				</article>
		</div>
		<!-- <hr class="opacity-50" /> -->
		<!-- <footer class="p-4 flex justify-start items-center space-x-4">
			<div class="flex-auto flex justify-between items-center">
				<h6 class="font-bold" data-toc-ignore>By Alex</h6>
				<small>On</small>
			</div>
		</footer> -->
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