<script>
	import { onMount } from 'svelte';
	const fonts = [
		'Arial',
		'Verdana',
		'Helvetica',
		'Tahoma',
		'Trebuchet MS',
		'Times New Roman',
		'Georgia',
		'Garamond',
		'Courier New',
		'Brush Script MT',
		'Lucida Sans',
		'Lucida Console',
		'Palatino Linotype',
		'Book Antiqua',
		'Comic Sans MS',
		'Impact',
		'Charcoal',
		'Geneva',
		'Candara',
		'Calibri',
		'Optima',
		'Cambria',
		'Perpetua',
		'Monaco',
		'Consolas',
		'Copperplate',
		'Papyrus',
		'Futura',
		'Gill Sans',
		'Century Gothic',
		'Franklin Gothic Medium',
		'Baskerville',
		'Big Caslon',
		'Didot',
		'Hoefler Text',
		'Rockwell',
		'Bodoni MT',
		'American Typewriter',
		'Andale Mono',
		'Avant Garde',
		'Bookman',
		'Goudy Old Style',
		'Herculanum',
		'Marker Felt',
		'Noteworthy',
		'Zapfino',
		'Chalkduster',
		'Menlo',
		'Avenir',
		'DIN Alternate',
		'Gill Sans MT'
	];
	let elements;
	export let name = 'IEEE';
	export let logoStyle = '';
	onMount( async () => {
		elements = document.querySelectorAll('.common');
		startFontChange();
	});
	function startFontChange() {
		changeFont();
		const intervalId = setInterval(changeFont, 100);
		
		setTimeout(() => {
			clearInterval(intervalId);
			setTimeout(startFontChange, Math.random() * 10000 + 10000);
		}, 5000);
	}
	
	// top function randomly starts randomizer for 5 seconds and then stops for a random time of 10-20 seconds randomly
	function changeFont() {
		elements.forEach((element) => {
			const newFont = fonts[Math.floor(Math.random() * fonts.length)];
			element.style.fontFamily = newFont;
		});
	}
	let finalString =  name.split('');
</script>

<div class={"logo " + logoStyle}>
	{#each finalString as items,i}
	<span class={'common '+'unique'+i} >{items}</span>		
	{/each}

</div>
<style>
</style>