<script>
    import { handleCreateOtp, handleVerifyEmail } from "../../hook"
    import { handleAuthToken, otp} from "$lib/store/routes";
    import { user } from "$lib/store/profile";
    import { loading } from "$lib/store/activities";
    import { url } from "$lib/store/routes";
    import { goto } from "$app/navigation"
    let code = ""
    $: track = !code || $loading
  

  const createOtp = (async()=>{
    await handleCreateOtp($handleAuthToken)
  })

  const handleEmail = (async()=>{
    const response = handleVerifyEmail(code, $otp.token, $handleAuthToken)
    if(response){
        goto($url)
    }
  })


</script>

<div class="css-pd9vm2">
    <div class="css-1dxqvt0">Verify your email </div>
    {#if !$user.emailIsVerified && $user?.kyc1}
        <div>
            <label for="rollbit-field-5728" class="css-1vec8iw"></label>
            <div>
                <div class="css-1f51ttt">
                    <input type="number" name="name" placeholder="Enter OTP code" id="rollbit-field-5728" bind:value={code}>
                    <button disabled={$otp} on:click={createOtp} class="css-vmbe4r button" type="submit" style="margin-right: 4px;">{$otp ? "Paste" : "Get"} code</button>
                </div>
            </div>
        </div>
        <label for="rollbit-field-5728" class="css-1vec8iw"></label>
        <button disabled={track} on:click={handleEmail} class="css-1psueex button" style="margin: 16px 0px; width:100%">{$loading ? "Loading..." : "Submit"}</button>
    {/if}

</div>


<style>
   
</style>