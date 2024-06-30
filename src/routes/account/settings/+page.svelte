<script>
     import { user } from "$lib/store/profile";
    let email = ""
     const handleEmailAddress = (()=>{
        console.log(email)
     })

</script>

<div class="css-t60dms">
    <div class="css-1d7om45">
        <h3 class="css-qgoclk" style="margin: 0px;">Email Address </h3>
        <div class="css-1w9eatj" style="margin-right: auto;"></div>
        <div class="css-1cb76gi">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" color="currentColor" xml:space="preserve" size="16" class="css-1hu26ay" style="color: {$user?.emailIsVerified ? "rgb(114, 242, 56)" : "rgb(94, 98, 111)"} ; margin-right: 8px;">
                <path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path>
            </svg>
            <div>{$user?.emailIsVerified ? "Verified" : "Unverified"}</div>
        </div>
    </div>
    <form on:submit|preventDefault={handleEmailAddress}>
        <div>
            <label for="rollbit-field-9923" class="css-1vec8iw">Change Email</label>
            <div>
                <div class="css-1f51ttt">
                    <input type="text" name="email" placeholder="Enter new email address" id="rollbit-field-9923" bind:value={email}>
                    <button disabled={!email} class="css-vmbe4r button" type="submit" style="margin-right: 4px;">Change</button>
                </div>
            </div>
        </div>
        <div id="recaptcha9924">
            <div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; position: fixed; visibility: hidden; display: block; transition: right 0.3s ease 0s; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;">
                <div class="grecaptcha-logo">
                    <iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-8awm1q5d8wq5" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcLy4QaAAAAAJTsyzu-3Vy0vM7N1rs71trH38oG&amp;co=aHR0cHM6Ly9yb2xsYml0LmNvbTo0NDM.&amp;hl=en&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=invisible&amp;cb=mwryiid7718f"></iframe>
                </div>
                <div class="grecaptcha-error"></div>
                <textarea id="g-recaptcha-response-100001" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
            </div>
        </div>
    </form>
</div>

<div class="css-t60dms">
    <h3 class="css-qgoclk">Change password</h3>
    <form>
        <div>
            <label for="rollbit-field-9925" class="css-1vec8iw">Old Password<span class="css-1vr6qde"> *</span></label>
            <div>
                <div class="css-1f51ttt">
                    <input type="password" name="oldpass" id="rollbit-field-9925" value="">
                </div>
            </div>
        </div>
        <br>
        <div>
            <label for="rollbit-field-9926" class="css-1vec8iw">New Password<span class="css-1vr6qde"> *</span></label>
            <div>
                <div class="css-1f51ttt">
                    <input type="password" name="newpass" id="rollbit-field-9926" value="">
                </div>
            </div>
        </div>
        <button class="css-1psueex" disabled="" type="submit" style="margin-top: 24px;">Change Password</button>
        <div id="recaptcha9927">
            <div class="grecaptcha-badge" data-style="none" style="width: 256px; height: 60px; position: fixed; visibility: hidden; display: block; transition: right 0.3s ease 0s; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;">
                <div class="grecaptcha-logo">
                    <iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-6wgneggreb8n" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcLy4QaAAAAAJTsyzu-3Vy0vM7N1rs71trH38oG&amp;co=aHR0cHM6Ly9yb2xsYml0LmNvbTo0NDM.&amp;hl=en&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=invisible&amp;cb=6eykdhxdtnda"></iframe>
                </div>
                <div class="grecaptcha-error"></div>
                <textarea id="g-recaptcha-response-100002" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
            </div>
            <iframe title="" style="display: none;"></iframe>
        </div>
    </form>
</div>

<div class="css-t60dms">
    <div class="css-zjw3b0">
        <h3 class="css-qgoclk" style="margin: 0px auto 0px 0px;">Two-factor Authentication</h3>
        <svg enable-background="new 0 0 229.5 229.5" viewBox="0 0 229.5 229.5" xmlns="http://www.w3.org/2000/svg" size="15" color="#5E626F" class="css-1h2lco0" style="margin-right: 8px;">
            <path d="m214.419 32.12c-.412-2.959-2.541-5.393-5.419-6.193l-92.24-25.652c-1.315-.366-2.704-.366-4.02 0l-92.24 25.652c-2.878.8-5.007 3.233-5.419 6.193-.535 3.847-12.74 94.743 18.565 139.961 31.268 45.164 77.395 56.738 79.343 57.209.579.14 1.169.209 1.761.209s1.182-.07 1.761-.209c1.949-.471 48.076-12.045 79.343-57.209 31.305-45.217 19.1-136.113 18.565-139.961zm-40.186 53.066-62.917 62.917c-1.464 1.464-3.384 2.197-5.303 2.197s-3.839-.732-5.303-2.197l-38.901-38.901c-1.407-1.406-2.197-3.314-2.197-5.303s.791-3.897 2.197-5.303l7.724-7.724c2.929-2.928 7.678-2.929 10.606 0l25.874 25.874 49.89-49.891c1.406-1.407 3.314-2.197 5.303-2.197s3.897.79 5.303 2.197l7.724 7.724c2.929 2.929 2.929 7.678 0 10.607z"></path>
        </svg>
        <span>Disabled</span>
    </div>
    <p class="css-145ks4p">Using two-factor authentication is highly recommended because it protects your account with both your password and your phone.</p>
    <p class="css-145ks4p" style="margin-bottom: 24px;"> While 2FA is enabled, you will not be able to login via Steam.</p>
    <button class="css-1psueex">Enable 2FA</button>
</div>

<div class="css-t60dms">
    <div class="css-1sg2lsz">
        <h3 class="css-qgoclk" style="margin: 0px auto 0px 0px;">Login History</h3>
        <button class="css-vmbe4r">Show</button>
    </div>
</div>


<div class="css-t60dms">
    <div class="css-1sg2lsz">
        <h3 class="css-qgoclk" style="margin: 0px auto 0px 0px;">Tips</h3>
        <button class="css-vmbe4r">Show</button>
    </div>
</div>

<style>
   
</style>