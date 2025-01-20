<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import { ProgressBar } from "@skeletonlabs/skeleton";
	// import LoadingScreen from "$lib/components/loadingScreen.svelte";
	import AboutUs from "$lib/components/aboutus.svelte";
	import Timelinefake from "$lib/components/Timelinefake.svelte";
	import MainBg from "$lib/images/bg.webp";
	import Carousel from "$lib/components/carousel.svelte";
	import Theme from "$lib/components/theme.svelte";
	import { fade } from "svelte/transition";
  </script>
  
  <section class="section main-section main-divider">
	<AboutUs ></AboutUs>
  </section>
  
  <hr class="opacity-100" />
  
  <section class="section main-section main-divider">
	<Theme></Theme>
  </section>
  
  <hr class="opacity-100" />
  
  <!-- <section class="section main-section main-divider">
	  
  </section>
  
  <hr class="opacity-100" /> -->
  
  <section class="section main-section main-divider h-[50vh]">
	<Timelinefake></Timelinefake>
  </section>
  
  <hr class="opacity-100" />
  
  <style>
	.section {
	  @apply w-4/5 p-5 m-auto self-center flex items-center justify-center h-[100vh];
	}
  </style>
  