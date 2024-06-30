<script>
   import { user } from "$lib/store/profile";
</script>

<div class="css-pd9vm2">
    <div class="css-1dxqvt0">Upload a picture of your ID document</div>
    {#if $user?.emailIsVerified}
        <button class="css-1psueex" style="margin: 16px 0px;">Submit Documentation</button>
    {/if}
</div>

<style>
   
</style>