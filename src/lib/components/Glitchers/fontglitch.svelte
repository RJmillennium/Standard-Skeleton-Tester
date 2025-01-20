<script>
    import { onMount } from 'svelte';

    let fonts = [
        'Arial, sans-serif',
        'Courier New, monospace',
        'Georgia, serif',
        'Times New Roman, serif',
        'Verdana, sans-serif'
    ];

    function getRandomFont() {
        return fonts[Math.floor(Math.random() * fonts.length)];
    }
    function applyFontGlitch() {
        const elements = document.querySelectorAll('.nexus');
        elements.forEach(element => {
            const span = element.querySelector('span');
            if (span) {
                span.style.fontFamily = getRandomFont();
            }
        });
    }

    setInterval(applyFontGlitch, 1000);
    onMount(() => {
        const elements = document.querySelectorAll('.nexus');
        elements.forEach(element => {
            const span = document.createElement('span');
            span.style.fontFamily = getRandomFont();
            span.innerHTML = element.innerHTML;
            element.innerHTML = '';
            element.appendChild(span);
        });
    });
</script>


<div class="nexus">This is a test text for font glitcher.</div>
<style>
    .nexus span {
        display: inline-block;
    }
</style>