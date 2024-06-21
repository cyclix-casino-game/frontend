<script>
   import Navbar from "$lib/navbar.svelte";
   import "../styles/global.css"
   import { browser} from '$app/environment';
   import { screen } from "$lib/store/screen";
   import { onMount } from "svelte";

let ens = browser && window.innerWidth
browser && window.addEventListener("resize", () => {
    ens = (window.innerWidth)
    screen.set(ens)
    let el = document.documentElement
    el.style.fontSize = `${$screen > 650 ? 16 : $screen > 560 ?  23 : $screen > 500 ? 21.34 : $screen > 440 ? 17.54 : $screen > 300 ?  13.5 : 11.5}px`;
})

onMount(() => {
    ens = browser && window.innerWidth
    screen.set(ens)
    let el = document.documentElement
    el.style.fontSize = `${$screen > 650 ? 16 : $screen > 560 ?  23 : $screen > 500 ? 21.34 : $screen > 440 ? 17.54 : $screen >  300 ?  13.5 : 11.5}px`;
})
  
</script>

<div>
   <Navbar />
   <slot></slot>
</div>

<style>
   
</style>