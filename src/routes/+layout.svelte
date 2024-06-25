<script>
   /** @type {import('./$types').PageLoad} */
   import Navbar from "$lib/navbar.svelte";
   import "../styles/global.css"
   import { browser} from '$app/environment';
   import { screen } from "$lib/store/screen";
   import { onMount } from "svelte";
   import { url } from "$lib/store/routes";
   import Password from "$lib/password/index.svelte";
   import Loader from "$lib/controller/loader.svelte";
   import RightSideBar from "$lib/right-sideBar.svelte";
   import LeftSidebar from "$lib/left-sidebar.svelte";
   import Footer from "$lib/footer.svelte"
   import { page } from '$app/stores';
   import Auth from "$lib/auth/layout.svelte";
   export let data 

   $: isPassword = data?.password ? false : true
   $:url.set($page.url.pathname)
   $: url.set($page.url.pathname)
   $: urlString = ($page.url.href);
   $: paramString = urlString.split('?')[1];
   $: queryString = new URLSearchParams(paramString);
   $: seaser = []
   $: tab = ""

   $: {
    seaser = []
    if (paramString) {
        for (let pair of queryString.entries()) {
            seaser.push(pair[1])
        }
    }
    tab = seaser[0]
}

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
  
   $: sideHasExpand = 248
   $: menu = false
   $: chat = false

   const handleChatSection = (()=>{
      if(menu){
         menu = false
         chat = true
      }
      
      else {
         chat =! chat
      }
   })

   const handleMenuSection = (()=>{
      if(chat){
         chat = false
         menu = true
      }else {
         menu =! menu
      }
   })


</script>

{#if $screen }
   <div id="root">
      {#if isPassword}
         <Password on:close={()=> isPassword = false}/>
      {/if}
      <Navbar sideHasExpand={sideHasExpand} chat={chat} menu={menu} on:return={()=> sideHasExpand = 248} on:chat={handleChatSection} on:menu={handleMenuSection}/>
         {#if $screen < 750}
            <div style="min-height: 112px;"></div>
         {:else}
            <div style="min-height: 64px;"></div>
         {/if}
      
      {#if $screen > 750 || menu}
         <RightSideBar />
      {/if}
      <div class="{sideHasExpand === 340 ? "css-yl3y1i" : sideHasExpand === 8 ? "css-qk763z" : "css-1polf3r"}">
         <div class="css-1gcbewu">
            <slot></slot>
         </div>
         <Footer />
      </div>
      {#if $screen > 750 || chat}
         <LeftSidebar sideHasExpand={sideHasExpand} on:close={()=> sideHasExpand = 8}  on:ellapse={()=> sideHasExpand = 248} on:expand={()=> sideHasExpand = 340}/>  
      {/if}
   </div>
   {:else}
   <div style="height: 70vh;">
      <Loader />
   </div>
{/if}

{#if tab === "auth"}
   <Auth tab={seaser}/>
{/if}


<style>
   
</style>