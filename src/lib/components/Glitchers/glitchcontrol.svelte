<script>
  import { onMount } from "svelte";
  import { PowerGlitch } from "powerglitch";

  onMount(() => {
    PowerGlitch.glitch(".rift", {
      playMode: "hover",
      optimizeSeo: true,
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 5000,
      },
      glitchTimeSpan: {
        start: 0.5,
        end: 0.7,
      },
      slice: {
        count: 6,
        velocity: 15,
        minHeight: 0.02,
        maxHeight: 0.15,
        hueRotate: true,
      },
      pulse: false,
    });
  });
</script>

<div class="rift">
  <slot></slot>
</div>
