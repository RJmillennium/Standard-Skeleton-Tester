<script>
	import {Avatar} from "@skeletonlabs/skeleton"
	import { onMount } from 'svelte';
	const fruits = [1,2,3,4];
	import image1 from '$lib/images/prevTecho/image-1.webp';
	import image2 from '$lib/images/prevTecho/image-2.webp';
	import image3 from '$lib/images/prevTecho/image-3.webp';
	import image4 from '$lib/images/prevTecho/image-4.webp';
	const links = []
	const assets = '%sveltekit.assets%'
	const events = [
		{	
			name: "Squabble",
			imgdata: image1,
			description: "Squabble is a debate competition where participants are given a topic and they have to debate on it. The participants are judged on the basis of their content, presentation, and rebuttal. The event is judged by a panel of judges and the best debater is awarded a prize.",
			descriptionShort: "National Level Debate Competition",
			link:'https://squabble13.netlify.app/',
			animIcon: './AnimationSquabble.svelte',
			
		},
		{
			name: "Inquisitive",
			imgdata: image2,
			description: "Inquisitive is a quiz competition where participants are tested on their knowledge across various domains. The participants are judged on the basis of their accuracy and speed. The team with the highest score is awarded a prize.",
			descriptionShort: "National Level Quiz Competition",
			link:'https://squabble13.netlify.app/',
			animIcon: './AnimationInquisitive.svelte',
		},
		{
			name: "Eureka",
			imgdata: image3,
			description: "A national level ideation competition where participants are given a problem statement and they have to come up with a solution. The participants are judged on the basis of their idea, presentation, and feasibility. The best idea is awarded a prize.",
			descriptionShort: "National Level Ideation Competition",
			link:'https://eureka13.netlify.app/',
			animIcon: './AnimationEureka.svelte'
		},
		{
			name: "Gear-Strike",
			imgdata: image4,
			description: "A fun and competitive gaming event where participants work in a team to defeat the other team;",
			descriptionShort: "An IRL TDM shootfest",
			link:'https://gearstrike13.netlify.app/',
			animIcon: './AnimationGearstrike.svelte',
		}
	];

</script>

<div class="grid md:grid-cols-2 md:grid-rows-2 gap-5 grid-cols-1 h-full px-6 py-6">
	{#each events as event}  	
    <div class="card overflow-hidden">
		<header class="p-4 flex items-center justify-between bg-tertiary-900">
			<div class="something flex-grow">
				<h3 class="h3 " data-toc-ignore>{event.name}</h3>
				<h6 class="h6 " data-toc-ignore>{event.descriptionShort}</h6>
			</div>
			<!-- {#await import(event.animIcon) then Module}
					<Module.default />
				{/await} -->
			
			</header>
			<hr class="opacity-50" />
			 <div class="p-4 space-y-4 bg-tertiary-700 min-h-[140px]">
				<article>
					<p>
						{event.description}
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
			<footer class=" w-full flex flex-col justify-between items-center bg-tertiary-500 ">
				<!-- <h3 class="h3 py-4">Contact</h3> -->
				<div class="btn-group-vertical md:btn-group variant-filled  w-full ">
				<!-- <div class="flex-auto flex justify-between items-center"> -->
					<!-- <button>
						<Avatar width="w-8" />
						<h6 class="font-bold" data-toc-ignore>Contact</h6>
					</button>
					<button>
						<Avatar width="w-8" />
						<h6 class="font-bold" data-toc-ignore>Janmanjay Verma</h6>
					</button>
					<button>
						<Avatar width="w-8" />
						<h6 class="font-bold" data-toc-ignore>Abish Mathew</h6>
					</button> -->
					<!-- <small>On {new Date().toLocaleDateString()}</small> -->
					<button class="variant-ghost-priamry flex-grow bg-tertiary-500" on:click={() => window.location.href = event.link}>Register</button>
				</div>
			</footer>
		</div>
	{/each}
</div>
