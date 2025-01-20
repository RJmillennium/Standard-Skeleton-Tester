<script>
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	// import { Timeline, TimelineItem, Activity, ActivityItem, Group, GroupItem } from 'flowbite-svelte';

// 	onMount(() => {
// 		let interval = setInterval(() => {
// 			const goForwardButton = document.querySelector('.goforward');

// 			if (goForwardButton) {
// 				goForwardButton.click();
// 			}
// 		}, 5000);
// });

	function onNextHandler(e) {
		console.log('event:next', e.detail);
	}
	function onBackHandler(e) {
		console.log('event:prev', e.detail);
	}
	function onStepHandler(e) {
		console.log('event:step', e.detail);
	}
	function onCompleteHandler(e) {
		console.log('event:complete', e.detail);
	}
</script>

<div class="w-full">
	<h1 class="h1 text-center self-center pb-24 text-primary-400-500-token ">Techopedia Timeline</h1>
	<Stepper
		stepTerm="Day"
		buttonBack="display-none content-none goback variant-ghost-primary md:btn btn-sm"
		buttonNext="goforward btn variant-ghost-secondary md:btn btn-sm" 	
		buttonNextLabel="→ Next Day"
		buttonBackLabel="← Previous Day"
		buttonCompleteLabel="Event Complete !"
		buttonComplete="md:btn btn-sm variant-filled-success"


		on:next={onNextHandler}
		on:back={onBackHandler}
		on:step={onStepHandler}
		on:complete={onCompleteHandler}
	>
		<Step regionContent="text-sm" regionHeader="text-sm" > 
			<svelte:fragment slot="header"><span></span></svelte:fragment>
			<h1 class="h1">Techopedia Inauguration Ceremony</h1>
			<h2 class="h2">23<sup>rd</sup> January</h2>
		</Step>
		<Step>
			<svelte:fragment slot="header"><span></span></svelte:fragment>
			<h1 class="h1">Techopedia Starts</h1>
			<h2 class="h2">24<sup>th</sup> January</h2>
		</Step>
		<Step>
			<svelte:fragment slot="header"><span></span></svelte:fragment>
			<h1 class="h1">Techopedia Day 2</h1>
			<h2 class="h2">25<sup>th</sup> January</h2>
		</Step>
		<Step>
			<svelte:fragment slot="header"><span></span></svelte:fragment>
			<h1 class="h1">Techopedia Closing Ceremony</h1>
			<h2 class="h2">25<sup>th</sup> January</h2>
		</Step>
	</Stepper>
</div>
