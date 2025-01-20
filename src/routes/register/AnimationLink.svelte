<!-- <script>
    import { onMount } from "svelte";
    import lottie from "lottie-web";
  
    import animationData from "./Link_custom_icon.json";
  
    let container;
  
    onMount(() => {
      const animation = lottie.loadAnimation({
        container,
        animationData,
        loop: false,
      });
  
      return () => {
        animation.destroy();
      };
    });
  </script>
  
  <div class="max-h-20 max-w-20 animate-fade-in-once self-center" bind:this={container} />
   -->