<script>
  import { handleGoogleAuth } from "../hook";
  import { url } from "$lib/store/routes";
  import { goto } from "$app/navigation";

  const handleGoogleAuthenticator = (async()=>{
      const response = await handleGoogleAuth()
       if(response){
          goto($url)
        } 
  })

</script>

<div class="css-ef9k39">Or continue with</div>
<div class="css-123khrs">
<button on:click={handleGoogleAuthenticator} class="css-1sjzfwj" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" size="18" class="css-oluyn3" style="margin-right: 12px;">
        <path fill="#fa455e" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path>
        <path fill="#fff" d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"></path>
      </svg>
    <span>
    Google
    </span>
</button>
</div>

<style>
   
</style>