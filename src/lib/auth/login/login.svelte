<script>
    import { loading } from "$lib/store/activities";
    import { url } from "$lib/store/routes";
    import { goto } from "$app/navigation";
    import { handleLoginUser } from "../hook"
    import Google from "../google/google.svelte";

    let password = ""
    let email = ""
    $: track = !password || !email || $loading

    const handleSubmit = (async()=>{
        const response = await handleLoginUser({password, email})
        if(response){
            goto($url)
        }
    })

</script>


<form method="post" on:submit|preventDefault={handleSubmit}>
    <div class="css-exhu38">
        <label for="rollbit-field-112" class="css-1vec8iw">
            Email<span class="css-1vr6qde"> *</span>
        </label>
    <div>
        <div class="css-14hgewr">
            <input type="email" name="email" placeholder="youremail@domain.com" id="rollbit-field-112" bind:value={email}></div>
        </div>
    </div>
    <div class="css-exhu38">
        <label for="rollbit-field-113" class="css-1vec8iw">
            Password
            <span class="css-1vr6qde"> *</span>
        </label>
        <div>
            <div class="css-14hgewr">
                <input type="password" name="password" placeholder="********" id="rollbit-field-113" bind:value={password}>
            </div>
        </div>
        <div class="css-g5wbxx">
            <button class="css-19mv5jr">Forgot password?</button>
        </div>
    </div>
    <div class="css-1vec8iw">
        <div style="padding-bottom: 14px; cursor: pointer;">2FA Code <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" size="8" left="4" top="-1" class="css-toy4yr">
            <path d="M0.934258 -6.17707e-07L7.06574 -8.16755e-08C7.46509 -4.67634e-08 7.70329 0.445072 7.48177 0.77735L4.41602 5.37596C4.21811 5.67283 3.78189 5.67283 3.58397 5.37596L0.518233 0.777349C0.296715 0.445072 0.534911 -6.52619e-07 0.934258 -6.17707e-07Z" fill="currentColor"></path>
        </svg>
    </div>
</div>
<div id="recaptcha114">
    <div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; position: fixed; visibility: hidden; display: block; transition: right 0.3s ease 0s; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;">
        <div class="grecaptcha-logo">
            <iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-54vx4yz0xolf" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcLy4QaAAAAAJTsyzu-3Vy0vM7N1rs71trH38oG&amp;co=aHR0cHM6Ly9yb2xsYml0LmNvbTo0NDM.&amp;hl=en&amp;v=KXX4ARWFlYTftefkdODAYWZh&amp;size=invisible&amp;cb=qfphbztlm7xb"></iframe>
        </div>
        <div class="grecaptcha-error"></div>
        <textarea id="g-recaptcha-response-100000" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
    </div>
    <iframe title="" style="display: none;"></iframe>
</div>
<div class="css-1nsxilh">This site is protected by reCAPTCHA and the Google 
    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> 
    and
     <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
</div>
<button class="css-u44gss button" disabled={track} on:click={handleSubmit} type="submit"> {$loading ? "Loading..." : "Login"}</button>
</form>

    <Google />

<style>
   
</style>